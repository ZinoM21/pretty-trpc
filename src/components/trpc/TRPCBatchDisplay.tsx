import TRPCBatchItem from "./TRPCBatchItem";
import type { ParsedTRPCBatch } from "@/types/trpc";

interface TRPCBatchDisplayProps {
  parsedData: ParsedTRPCBatch;
}

export default function TRPCBatchDisplay({
  parsedData,
}: TRPCBatchDisplayProps) {
  return (
    <div className="space-y-4">
      {parsedData.baseUrl && (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Base URL
          </h3>
          <code className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded block break-all">
            {parsedData.baseUrl}
          </code>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {parsedData.baseUrl
            ? `Batch Requests & Responses (${parsedData.batchItems.length} items)`
            : `Batch Responses (${parsedData.batchItems.length} items)`}
        </h3>

        <div className="space-y-4 overflow-y-auto">
          {parsedData.batchItems.map((item, index) => (
            <TRPCBatchItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
