stateDiagram-v2
    [*] --> RESEARCHING: thread-101 initialized
    RESEARCHING --> CODING: SPEC_READY (Target API Spec)
    
    CODING --> VERIFYING: PR Submitted
    
    state VERIFYING {
        [*] --> STATIC_GATE: Deterministic linter/tests (Rank 0)
        STATIC_GATE --> RANK_VETO: Exit Code != 0
        STATIC_GATE --> ADJUDICATING: Exit Code 0 (Semantic review needed)
    }

    RANK_VETO --> CODING: Revert to Developer (0 Tokens spent)
    
    state ADJUDICATING {
        [*] --> MODEL_ARBITER: Synthesis & Dialectic reasoning
        MODEL_ARBITER --> COMPLIANCE_CHECK: Telemetry audit
    }

    COMPLIANCE_CHECK --> HUMAN_INTERRUPT: compliance_status == 'AMBIGUOUS'
    
    state HUMAN_INTERRUPT {
        [*] --> CHECKPOINTER: MemorySaver.save_state()
        CHECKPOINTER --> OPERATOR_DESK: 2:00 AM Architect Review
        OPERATOR_DESK --> HUMAN_APPROVED: Strip telemetry & approve migration
    }

    HUMAN_APPROVED --> END: Resumed execution
    END --> [*]