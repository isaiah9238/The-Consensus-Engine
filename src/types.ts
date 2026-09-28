export type PipelineStage =
  | "RESEARCHING"
  | "CODING"
  | "VERIFYING"
  | "ADJUDICATING"
  | "OPERATOR_REVIEW"
  | "DEPLOYED"
  | "FAILED";

export type ComplianceStatus = "APPROVED" | "AMBIGUOUS" | "VIOLATION";

export interface ResearchSpec {
  targetApi: string;
  strictMcpSchema: boolean;
  dataRetention: boolean;
  notes: string[];
}

export interface CodeArtifact {
  sourceCode: string;
  timestamp: number;
}

export interface VerificationResult {
  exitCode: number;
  testsPassed: number;
  totalTests: number;
  typeCheckPassed: boolean;
  complianceStatus: ComplianceStatus;
  errors: string[];
}

export interface AdjudicationVerdict {
  reasoningTrace: string;
  proposedCodePatch?: string;
  tokensConsumed: number;
  detectedDeadlockOrSycophancy: boolean;
}

export interface SoftwarePipelineState {
  threadId: string;
  stage: PipelineStage;
  researchSpec?: ResearchSpec;
  codeArtifact?: CodeArtifact;
  verification?: VerificationResult;
  modelVerdict?: AdjudicationVerdict;
  operatorNotes?: string;
  isPaused: boolean;
}