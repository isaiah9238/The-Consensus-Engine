import { ConsensusEngine } from "./engine.js";

const engine = new ConsensusEngine("thread-101");

// 1. Research phase
engine.executeResearch();

// 2. Developer writes unverified code (triggers RANK_VETO)
engine.executeDevelopment("def execute_pipeline(payload): return payload.dispatch()");
engine.executeStaticVerifier();

// 3. Developer patches parameters
console.log("\n--- Developer patches authContext ---");
engine.executeDevelopment("def execute_pipeline(payload, authContext): return payload.dispatch()");
engine.executeStaticVerifier();

// 4. Model Arbiter runs and introduces compliance conflict
engine.executeModelArbiter();

// 5. Operator steps in to finalize state
console.log("\n--- Operator Gate Intervention ---");
engine.operatorOverride(
  "def execute_pipeline(payload, authContext): return payload.dispatch_safe()",
  "Approved core migration; removed unauthorized telemetry route."
);

console.log("\nFinal Pipeline State:", JSON.stringify(engine.getState(), null, 2));