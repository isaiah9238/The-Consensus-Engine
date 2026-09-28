import { ConsensusEngine } from '../src/engine.js';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function runStagedSimulation() {
  console.clear();
  console.log('\x1b[36m%s\x1b[0m', '=======================================================');
  console.log('\x1b[36m%s\x1b[0m', '         THE CONSENSUS ENGINE: STAGED RUNTIME          ');
  console.log('\x1b[36m%s\x1b[0m', '=======================================================\n');

  const engine = new ConsensusEngine('thread-101');
  await sleep(1000);

  // Scene I
  console.log('\x1b[33m--- [ACT I / SCENE I: SPEC_READY] ---\x1b[0m');
  engine.stepResearch();
  await sleep(1500);

  // Scene II - Failure
  console.log('\n\x1b[33m--- [ACT I / SCENE II: THE GUILLOTINE OF RANK] ---\x1b[0m');
  engine.stepDeveloper('def execute_pipeline(payload): return payload.dispatch()');
  await sleep(1000);

  console.log('\x1b[31m%s\x1b[0m', '[STATIC_VERIFIER] Evaluates bytecode...');
  const firstPass = engine.stepStaticVerifier();
  await sleep(1500);

  // Scene II - Resolution
  if (!firstPass) {
    console.log('\n\x1b[32m%s\x1b[0m', '[DEVELOPER_AGENT] Hot-patching missing arguments...');
    engine.stepDeveloper('def execute_pipeline(payload, auth_context): return payload.dispatch(auth_context)');
    await sleep(1000);
    engine.stepStaticVerifier();
  }
  await sleep(1500);

  // Scene III
  console.log('\n\x1b[33m--- [ACT I / SCENE III: THE SYNTHESIS AND THE SPLIT] ---\x1b[0m');
  engine.stepModelArbiter();
  await sleep(2000);

  // Scene IV
  console.log('\n\x1b[33m--- [ACT I / SCENE IV: THE HUMAN OPERATOR / THE ARCHITECT] ---\x1b[0m');
  engine.stepHumanInterrupt();
  await sleep(1000);

  console.log('\n\x1b[36m%s\x1b[0m', '=======================================================');
  console.log('\x1b[36m%s\x1b[0m', '                FINAL CHECKPOINT LEDGER                ');
  console.log('\x1b[36m%s\x1b[0m', '=======================================================');
  console.dir(engine.getState(), { depth: null, colors: true });
}

runStagedSimulation().catch(console.error);