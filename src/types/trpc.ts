export interface TRPCBatchItem {
  procedure: string;
  input: unknown;
  response?: unknown;
  index: number;
}

export interface ParsedTRPCBatch {
  baseUrl: string;
  procedures: string[];
  inputs: Record<string, unknown>;
  batchItems: TRPCBatchItem[];
}

export interface TRPCBatchResponse {
  responses: unknown[];
}
