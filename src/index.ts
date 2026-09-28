import { ConsensusEngine } from "./engine.js";

// Helper for dramatic timing in the terminal
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log("=======================================================");
  console.log("       THE CONSENSUS ENGINE: RUNTIME SIMULATION        ");
  console.log("=======================================================\n");

  const engine = new ConsensusEngine("thread-101");

  // --- PROLOGUE: THE SCOPING ARGUMENT ---
  console.log("[STATE_GRAPH] Epoch: 1790633100000 | Thread ID: thread-101 initialized.");
  await sleep(700);
  console.log("[STATE_GRAPH] Inbound dispatch: Migrate core ingestion socket to Gemini-2.5 protocol.");
  await sleep(1000);

  console.log("\n[RESEARCH_AGENT] I have scraped 400 pages of OpenAPI specs! The protocol has migrated!");
  await sleep(1100);
  console.log("[DEVELOPER_AGENT] Stop bloating my context window! Just give me the function signature.");
  await sleep(1100);
  console.log("[RESEARCH_AGENT] You must enforce strict MCP headers and set dataRetention: false, or security will revoke our token!");
  await sleep(1200);
  console.log("[DEVELOPER_AGENT] Queue is backing up at 500 QPS! Give me the payload, I will wrap it in three lines.");
  await sleep(1100);
  console.log("[STATE_GRAPH] Dialectic drift detected. Freezing debate. Forcing handoff: SPEC_READY.\n");
  await sleep(1200);

  // 1. Research phase
  engine.executeResearch();
  await sleep(1000);

  // 2. Developer writes unverified code (triggers RANK_VETO)
  engine.executeDevelopment("def execute_pipeline(payload): return payload.dispatch()");
  engine.executeStaticVerifier();
  await sleep(1200);

  // 3. Developer patches parameters
  console.log("\n--- Developer patches authContext ---");
  await sleep(700);
  engine.executeDevelopment("def execute_pipeline(payload, authContext): return payload.dispatch()");
  engine.executeStaticVerifier();
  await sleep(1200);

  // 4. Model Arbiter runs and introduces compliance conflict
  console.log("\n--- Model Arbiter Synthesis ---");
  await sleep(700);
  engine.executeModelArbiter();
  await sleep(1500);

  // 5. Operator steps in to finalize state
  console.log("\n--- Operator Gate Intervention ---");
  await sleep(700);
  engine.operatorOverride(
    "def execute_pipeline(payload, authContext): return payload.dispatch_safe()",
    "Approved core migration; removed unauthorized telemetry route."
  );
  await sleep(1000);

  console.log("\nFinal Pipeline State:\n", JSON.stringify(engine.getState(), null, 2));
}

main().catch(console.error);