import type { ParsedTRPCBatch, TRPCBatchItem } from "@/types/trpc";

export const parseTRPCBatchURL = (url: string): ParsedTRPCBatch | null => {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    // Check if it's a tRPC endpoint
    if (!pathname.includes("/trpc/")) {
      return null;
    }

    // Extract procedures from pathname
    const trpcPath = pathname.split("/trpc/")[1];
    if (!trpcPath) return null;

    const procedures = trpcPath.split(",");

    // Extract batch parameter
    const batchParam = urlObj.searchParams.get("batch");
    if (batchParam !== "1") {
      return null;
    }

    // Extract and parse input parameter
    const inputParam = urlObj.searchParams.get("input");
    if (!inputParam) return null;

    const inputs = JSON.parse(inputParam);

    // Create batch items by matching procedures with inputs
    const batchItems: TRPCBatchItem[] = procedures.map((procedure, index) => ({
      procedure,
      input: inputs[index.toString()]?.json || inputs[index.toString()] || null,
      index,
    }));

    return {
      baseUrl: `${urlObj.protocol}//${urlObj.host}${
        pathname.split("/trpc/")[0]
      }/trpc/`,
      procedures,
      inputs,
      batchItems,
    };
  } catch {
    return null;
  }
};
