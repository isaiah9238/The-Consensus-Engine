import { ConsensusEngine } from '../src/engine.js';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function runStagedSimulation() {
  console.clear();
  console.log('\x1b[36m%s\x1b[0m', '=======================================================');
  console.log('\x1b[36m%s\x1b[0m', '         THE CONSENSUS ENGINE: STAGED RUNTIME          ');
  console.log('\x1b[36m%s\x1b[0m', '=======================================================\n');

  const engine = new ConsensusEngine('thread-101');
  await sleep(600);

  // Scene I
  console.log('\x1b[33m--- [ACT I / SCENE I: SPEC_READY] ---\x1b[0m');
  engine.executeResearch();
  await sleep(800);

  // Scene II - Failure
  console.log('\n\x1b[33m--- [ACT I / SCENE II: THE GUILLOTINE OF RANK] ---\x1b[0m');
  engine.executeDevelopment('def execute_pipeline(payload): return payload.dispatch()');
  engine.executeStaticVerifier();
  await sleep(800);

  // Scene II - Fix & Pass
  console.log('\n\x1b[32m%s\x1b[0m', '[DEVELOPER_AGENT] Hot-patching missing arguments...');
  engine.executeDevelopment('def execute_pipeline(payload, authContext): return payload.dispatch()');
  engine.executeStaticVerifier();
  await sleep(800);

  // Scene III
  console.log('\n\x1b[33m--- [ACT I / SCENE III: THE SYNTHESIS AND THE SPLIT] ---\x1b[0m');
  engine.executeModelArbiter();
  await sleep(1000);

  // Scene IV
  console.log('\n\x1b[33m--- [ACT I / SCENE IV: THE HUMAN OPERATOR / THE ARCHITECT] ---\x1b[0m');
  engine.operatorOverride(
    'def execute_pipeline(payload, authContext): return payload.dispatch_safe()',
    'Approved core migration; removed unauthorized telemetry route.'
  );
  await sleep(600);

  console.log('\n\x1b[36m%s\x1b[0m', '=======================================================');
  console.log('\x1b[36m%s\x1b[0m', '                FINAL CHECKPOINT LEDGER                ');
  console.log('\x1b[36m%s\x1b[0m', '=======================================================');
  console.dir(engine.getState(), { depth: null, colors: true });
}

runStagedSimulation().catch(console.error);