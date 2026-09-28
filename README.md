# The Consensus Engine

> *"A One-Act Drama of State, Conflict, and Adjudication"*

An exploratory technical-creative project modeling multi-agent orchestration, rank-based deterministic verification, and human-in-the-loop state interrupts through theatrical narrative and typed state architectures.

---

## Overview

Modern multi-agent architectures often blur the boundary between deterministic software engineering and non-deterministic probabilistic reasoning. **The Consensus Engine** examines this friction by personifying runtime components as dramatic actors on a directed state graph.

### Core Themes
- **Rank-Based Determinism**: Why static verification (zero-token linters and test harnesses) must precede expensive model-based arbitration.
- **Epistemic Drift & Sycophancy**: The tendency of generative arbiters to over-synthesize and hallucinate security risks under broad prompts.
- **The Checkpointed Interruption**: Using durable state serialization (`MemorySaver`) to pause thread execution and defer to human judgment.

---

## Repository Structure

```text
the-consensus-engine/
├── script/                  # Theatrical scripts, character dossiers, and staging
│   ├── act-1-the-consensus-engine.md
│   ├── dramatis-personae.md
│   └── stage-directions.md
├── specs/                   # Typed contracts and state schemas
│   ├── state.ts             # TypeScript interfaces and Zod validation
│   ├── state-schema.json    # Exported JSON schema
│   └── failure-modes.md     # Architectural case studies
├── assets/                  # Diagrams, cues, and flowcharts
│   ├── diagrams/
│   └── cues/
├── prototypes/              # TypeScript terminal simulation runner
│   └── mock_engine.ts
├── package.json
├── tsconfig.json
└── README.md


Cast of Entities
Entity          Runtime Role            Execution Profile
STATE_GRAPH, Thread runtime & edge router, Deterministic, immutable state transitions
RESEARCH_AGENT, Upstream context scout, High context consumption, contract ingestion
DEVELOPER_AGENT, Patch implementer, Rapid iteration, prone to interface mismatches
STATIC_VERIFIER, Deterministic rank-0 gate
0.000 token cost, compiler/test veto authority
MODEL_ARBITER, LLM-as-a-Judge, High latency, multi-hop reasoning, trade-off analysis
THE HUMAN OPERATOR (The Architect), Human-in-the-loop, 
Final state reconciler and system custodian at durable breakpoints

State Pipeline Specification

The core engine state follows a strictly validated schema defining execution stages, verification statuses, and human-in-the-loop intervention payloads:
export type PipelineStage = 
  | 'RESEARCHING' 
  | 'CODING' 
  | 'VERIFYING' 
  | 'ADJUDICATING' 
  | 'HUMAN_INTERRUPT' 
  | 'END';

export interface SoftwarePipelineState {
  threadId: string;
  stage: PipelineStage;
  researchSpec?: Record<string, unknown>;
  implementationPatch?: string;
  staticValidationPassed: boolean;
  complianceStatus: 'APPROVED' | 'REJECTED' | 'AMBIGUOUS';
  modelJudgeVerdict?: string;
  architecturalReview?: {
    reviewedBy: 'THE_HUMAN_OPERATOR';
    verdict: 'APPROVED' | 'OVERRIDDEN';
    redactions: string[]; // e.g., ["unauthorized_telemetry_export"]
    notes?: string;
  };
  tokenCount: number;
}


Running the Terminal Simulation

Prerequisites
    Node.js (v20+)
    pnpm or npm
Installation
    pnpm install


Run Simulation
    pnpm start:simulation


---

Would you like to build out **`specs/state.ts`** with runtime Zod validation, or draft the character dossiers in **`script/dramatis-personae.md`** next?


