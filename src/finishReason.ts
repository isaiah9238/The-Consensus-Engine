import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

// 1. Assign strict output caps per agent role
const AGENT_CONFIGS = {
  developer: {
    model: "gemini-2.5-pro",
    maxOutputTokens: 1024, // Enough for code, prevents 4,000-word philosophical essays
    sessionBudget: 15000,  // Hard cumulative token cap across turns
  },
  arbiter: {
    model: "gemini-2.5-flash",
    maxOutputTokens: 256,  // Forces concise adjudication
    sessionBudget: 5000,
  },
  verifier: {
    model: "gemini-2.5-flash",
    maxOutputTokens: 128,  // PASS/FAIL + one-line error code
    sessionBudget: 2000,
  },
};

interface AgentTracker {
  usedTokens: number;
}

const usageLedger: Record<string, AgentTracker> = {
  developer: { usedTokens: 0 },
  arbiter: { usedTokens: 0 },
  verifier: { usedTokens: 0 },
};

async function executeAgentTurn(
  agentName: keyof typeof AGENT_CONFIGS,
  prompt: string,
  history: any[] = []
) {
  const config = AGENT_CONFIGS[agentName];
  const tracker = usageLedger[agentName];

  // Circuit breaker: cumulative session check
  if (tracker.usedTokens >= config.sessionBudget) {
    throw new Error(
      `[BUDGET_BREAKER]: Agent '${agentName}' exceeded session quota (${tracker.usedTokens}/${config.sessionBudget} tokens). Terminating loop.`
    );
  }

  const response = await ai.models.generateContent({
    model: config.model,
    contents: [...history, prompt],
    config: {
      maxOutputTokens: config.maxOutputTokens, // Per-request token ceiling
      stopSequences: ["HUMAN_INTERRUPT", "STATIC_VERIFIER_FAIL"], // Custom stop phrases
    },
  });

  const candidate = response.candidates?.[0];
  const finishReason = candidate?.finishReason;

  // Track token usage from metadata
  const totalTokens = response.usageMetadata?.totalTokenCount ?? 0;
  tracker.usedTokens += totalTokens;

  // Inspect the stop reason code
  switch (finishReason) {
    case "MAX_TOKENS":
      console.warn(
        `[WARNING]: ${agentName} output truncated by maxOutputTokens limit (${config.maxOutputTokens}).`
      );
      break;

    case "SAFETY":
    case "RECITATION":
      throw new Error(`[GUARDRAIL_TRIPPED]: ${agentName} halted on ${finishReason}.`);

    case "STOP":
    default:
      // Normal completion
      break;
  }

  return {
    content: response.text,
    finishReason,
    tokensThisTurn: totalTokens,
  };
}