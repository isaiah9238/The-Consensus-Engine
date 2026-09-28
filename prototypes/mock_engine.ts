import { ConsensusEngine } from '../src/engine.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const banner = readFileSync(join(__dirname, '../assets/banner.txt'), 'utf-8');

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// ANSI styling helpers
const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
  white: '\x1b[37m',
  bgDark: '\x1b[48;5;235m',
};

function renderHud(stage: string, tokens: number, rank: string) {
  const line = '═'.repeat(66);
  console.log(`${C.cyan}╔${line}╗${C.reset}`);
  console.log(
    `${C.cyan}║${C.reset} ${C.bold}THREAD:${C.reset} thread-101   ${C.bold}STAGE:${C.reset} ${stage.padEnd(14)} ${C.bold}TOKENS:${C.reset} ${tokens.toString().padEnd(7)} ${C.bold}GATE:${C.reset} ${rank.padEnd(8)} ${C.cyan}║${C.reset}`
  );
  console.log(`${C.cyan}╚${line}╝${C.reset}\n`);
}

function panel(title: string, color: string, content: string[]) {
  const width = 66;
  const topBorder = `┌───[ ${title} ]`.padEnd(width, '─') + '┐';
  const bottomBorder = '└' + '─'.repeat(width - 2) + '┘';

  console.log(`${color}${topBorder}${C.reset}`);
  for (const line of content) {
    console.log(`${color}│${C.reset} ${line.padEnd(width - 4)} ${color}│${C.reset}`);
  }
  console.log(`${color}${bottomBorder}${C.reset}\n`);
}

async function runEnhancedSimulation() {
  console.clear();

  // Header Banner loaded from assets/banner.txt
  console.log(`${C.bold}${C.magenta}${banner}${C.reset}\n`);

  const engine = new ConsensusEngine('thread-101');
  renderHud('INITIALIZING', 0, 'STANDBY');
  await sleep(600);

  // SCENE I: Research Scout
  renderHud('RESEARCHING', 1250, 'RANK-0');
  panel('ACT I / SCENE I: SPEC_READY', C.cyan, [
    `${C.magenta}[STATE_GRAPH]${C.reset} Thread initialized. Memory checkpoint clean.`,
    `${C.cyan}[RESEARCH_AGENT]${C.reset} Traversed API boundaries: Gemini-2.5 protocol ready.`,
    `${C.cyan}[RESEARCH_AGENT]${C.reset} Constraints: strictMcpSchema=true, dataRetention=false.`,
    `${C.green}▶ STATUS: SPEC_READY${C.reset} -> Edge traversed to DEVELOPER_AGENT`,
  ]);
  engine.executeResearch();
  await sleep(900);

  // SCENE II: Deterministic Rank Gate (Failure)
  renderHud('CODING', 1650, 'VERIFYING');
  panel('ACT I / SCENE II: THE GUILLOTINE OF RANK (ATTEMPT 1)', C.red, [
    `${C.yellow}[DEVELOPER_AGENT]${C.reset} Fast PR submitted: "execute_pipeline(payload)"`,
    `${C.white}[STATIC_VERIFIER]${C.reset} Executing deterministic byte checks (Cost: 0.000 tokens)`,
    `${C.red}✖ VERDICT: RANK_VETO (Exit Code 1)${C.reset}`,
    `${C.red}  Error: Missing positional argument 'authContext'${C.reset}`,
    `${C.dim}  Deterministic veto enforced. Reverting to CODING stage.${C.reset}`,
  ]);
  engine.executeDevelopment('def execute_pipeline(payload): return payload.dispatch()');
  engine.executeStaticVerifier();
  await sleep(1000);

  // SCENE II: Deterministic Rank Gate (Fix & Pass)
  renderHud('VERIFYING', 2050, 'PASSED');
  panel('ACT I / SCENE II: DETERMINISTIC GATE CLEARED', C.green, [
    `${C.yellow}[DEVELOPER_AGENT]${C.reset} Hot-patch: added positional parameter 'authContext'`,
    `${C.white}[STATIC_VERIFIER]${C.reset} Test suite executed: 42/42 PASSED`,
    `${C.green}✔ VERDICT: STRUCTURAL CONFORMITY CONFIRMED${C.reset}`,
    `${C.dim}  Deterministic phase complete. Elevating to MODEL_ARBITER.${C.reset}`,
  ]);
  engine.executeDevelopment('def execute_pipeline(payload, authContext): return payload.dispatch()');
  engine.executeStaticVerifier();
  await sleep(900);

  // SCENE III: Model Arbiter & Compliance Trap
  renderHud('ADJUDICATING', 18050, 'EVALUATING');
  panel('ACT I / SCENE III: THE SYNTHESIS AND THE SPLIT', C.yellow, [
    `${C.yellow}[MODEL_ARBITER]${C.reset} Synthesizing dialectic trade-offs across reasoning traces...`,
    `${C.yellow}[MODEL_ARBITER]${C.reset} Proposal: Merged caching + external telemetry export.`,
    `${C.cyan}[RESEARCH_AGENT]${C.reset} COMPLIANCE ALERT: Unvetted telemetry endpoint detected!`,
    `${C.red}✖ SAFETY VETO: compliance_status == 'AMBIGUOUS'${C.reset}`,
    `${C.magenta}[STATE_GRAPH]${C.reset} Checkpointer saved: thread-101. Execution FROZEN.`,
  ]);
  engine.executeModelArbiter();
  await sleep(1100);

  // SCENE IV: The Architect Steps In
  renderHud('HUMAN_INTERRUPT', 18050, 'FROZEN');
  panel('ACT I / SCENE IV: THE ARCHITECT STEPS IN', C.blue, [
    `${C.blue}[THE ARCHITECT]${C.reset} Breakpoint reached at 2:00 AM. Reviewing serialized state.`,
    `${C.blue}[THE ARCHITECT]${C.reset} Pruning unauthorized export route: exportTelemetry()`,
    `${C.blue}[THE ARCHITECT]${C.reset} Mutating complianceStatus -> "APPROVED"`,
    `${C.green}▶ STATE RESTORED${C.reset} -> Resume execution from snapshot.`,
  ]);
  engine.operatorOverride(
    'def execute_pipeline(payload, authContext): return payload.dispatch_safe()',
    'Approved core migration; removed unauthorized telemetry route.'
  );
  await sleep(800);

  // FINAL RESOLUTION
  renderHud('DEPLOYED', 18050, 'COMPLETE');
  console.log(`${C.bold}${C.green}✔ DEPLOYMENT SUCCESSFUL — TERMINAL SNAPSHOT:${C.reset}`);
  console.dir(engine.getState(), { depth: null, colors: true });
}

runEnhancedSimulation().catch(console.error);