"use client";

import { formatJSON } from "@/lib/trpc-parser";
import type { TRPCBatchItem as TRPCBatchItemType } from "@/types/trpc";

interface TRPCBatchItemProps {
  item: TRPCBatchItemType;
  index: number;
}

export default function TRPCBatchItem({ item, index }: TRPCBatchItemProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <code className="text-sm bg-white dark:bg-gray-800 px-3 py-1 rounded border text-blue-600 dark:text-blue-400 font-mono">
              {item.procedure}
            </code>
            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
              {index}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`space-y-4 ${
          item.input !== null && item.response
            ? "grid grid-cols-1 lg:grid-cols-2 gap-4"
            : ""
        }`}
      >
        {item.input !== null && (
          <div>
            <h5 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
              Request Input:
            </h5>
            <pre className="text-xs bg-white dark:bg-gray-800 p-3 rounded border overflow-x-auto text-gray-800 dark:text-gray-200 font-mono max-h-40 overflow-y-auto">
              {formatJSON(item.input)}
            </pre>
          </div>
        )}

        {item.response !== undefined && (
          <div>
            <h5 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              Response Data:
            </h5>
            <pre className="text-xs bg-white dark:bg-gray-800 p-3 rounded border overflow-x-auto text-gray-800 dark:text-gray-200 font-mono max-h-72 overflow-y-auto">
              {formatJSON(item.response)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
