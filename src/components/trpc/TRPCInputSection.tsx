"use client";

import TRPCHelpPopover from "./TRPCHelpPopover";

interface TRPCInputSectionProps {
  inputText: string;
  responseText: string;
  onUrlChange: (value: string) => void;
  onResponseChange: (value: string) => void;
}

export default function TRPCInputSection({
  inputText,
  responseText,
  onUrlChange,
  onResponseChange,
}: TRPCInputSectionProps) {
  const handleUrlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUrlChange(e.target.value);
  };

  const handleResponseChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onResponseChange(e.target.value);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <TRPCHelpPopover />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="url-input"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            tRPC Batch Request URL:
          </label>
          <textarea
            id="url-input"
            value={inputText}
            onChange={handleUrlChange}
            placeholder="Paste your tRPC batch request URL here..."
            className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white resize-none font-mono text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="response-input"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            tRPC Batch Response JSON:
          </label>
          <textarea
            id="response-input"
            value={responseText}
            onChange={handleResponseChange}
            placeholder="Paste your tRPC batch response JSON here..."
            className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white resize-none font-mono text-sm"
          />
        </div>
      </div>
    </div>
  );
}
