import type { ParsedTRPCBatch, TRPCBatchResponse } from "@/types/trpc";

// Re-export parsers from dedicated modules
export { parseTRPCBatchURL } from "./trpc-url-parser";
export { parseTRPCBatchResponse } from "./trpc-response-parser";

export const combineRequestsAndResponses = (
  requests: ParsedTRPCBatch | null,
  responses: TRPCBatchResponse | null
): ParsedTRPCBatch | null => {
  if (!requests && !responses) return null;

  if (requests && responses) {
    // Combine both requests and responses
    const combinedBatchItems = requests.batchItems.map((item, index) => ({
      ...item,
      response: responses.responses[index] || null,
    }));

    return {
      ...requests,
      batchItems: combinedBatchItems,
    };
  }

  if (responses && !requests) {
    // Only responses - create items from responses
    const responseBatchItems = responses.responses.map((response, index) => ({
      procedure: `Response ${index}`,
      input: null,
      response,
      index,
    }));

    return {
      baseUrl: "",
      procedures: [],
      inputs: {},
      batchItems: responseBatchItems,
    };
  }

  // Only requests
  return requests;
};

export const formatJSON = (obj: unknown): string => {
  if (obj === null || obj === undefined) {
    return "null";
  }
  return JSON.stringify(obj, null, 2);
};
