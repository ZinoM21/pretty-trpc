import type { TRPCBatchResponse } from "@/types/trpc";

export const parseTRPCBatchResponse = (
  responseText: string
): TRPCBatchResponse | null => {
  try {
    const responses = JSON.parse(responseText);
    if (!Array.isArray(responses)) {
      return null;
    }

    // Extract the actual response data from the tRPC response structure
    const extractedResponses = responses.map((response) => {
      if (response?.result?.data?.json !== undefined) {
        return response.result.data.json;
      }
      return response;
    });

    return {
      responses: extractedResponses,
    };
  } catch {
    return null;
  }
};
