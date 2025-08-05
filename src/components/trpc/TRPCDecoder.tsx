"use client";

import { useState } from "react";
import TRPCInputSection from "./TRPCInputSection";
import TRPCBatchDisplay from "./TRPCBatchDisplay";
import { useTRPCParser } from "@/hooks/useTRPCParser";

export default function TRPCDecoder() {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");

  const { parsedData, error } = useTRPCParser(inputText, responseText);

  return (
    <div className="space-y-6">
      <TRPCInputSection
        inputText={inputText}
        responseText={responseText}
        onUrlChange={setInputText}
        onResponseChange={setResponseText}
      />

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-red-800 dark:text-red-200 text-sm">{error}</p>
        </div>
      )}

      {parsedData && <TRPCBatchDisplay parsedData={parsedData} />}

      {!parsedData && !error && (inputText || responseText) && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-8">
          Waiting for valid tRPC batch data...
        </div>
      )}

      {!inputText && !responseText && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-8">
          Paste a tRPC batch request URL and/or response JSON to get started
        </div>
      )}
    </div>
  );
}
