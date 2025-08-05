import { useState, useEffect } from "react";
import {
  parseTRPCBatchURL,
  parseTRPCBatchResponse,
  combineRequestsAndResponses,
} from "@/lib/trpc-parser";
import type { ParsedTRPCBatch, TRPCBatchResponse } from "@/types/trpc";

export function useTRPCParser(inputText: string, responseText: string) {
  const [parsedData, setParsedData] = useState<ParsedTRPCBatch | null>(null);
  const [error, setError] = useState<string>("");

  const parseInputs = () => {
    let parsedUrl: ParsedTRPCBatch | null = null;
    let parsedResponse: TRPCBatchResponse | null = null;
    let hasErrors = false;

    // Parse URL if provided
    if (inputText.trim()) {
      try {
        let decodedUrl = inputText.trim();
        try {
          decodedUrl = decodeURIComponent(inputText.trim());
        } catch {
          // If decoding fails, use original value
        }

        parsedUrl = parseTRPCBatchURL(decodedUrl);
        if (!parsedUrl) {
          setError("Invalid tRPC batch request URL");
          hasErrors = true;
        }
      } catch {
        setError("Invalid URL format");
        hasErrors = true;
      }
    }

    // Parse response if provided
    if (responseText.trim()) {
      try {
        parsedResponse = parseTRPCBatchResponse(responseText.trim());
        if (!parsedResponse) {
          setError("Invalid tRPC batch response format");
          hasErrors = true;
        }
      } catch {
        setError("Invalid JSON format in response");
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setParsedData(null);
      return;
    }

    const combined = combineRequestsAndResponses(parsedUrl, parsedResponse);
    setParsedData(combined);
    setError("");
  };

  // Parse inputs whenever either input changes
  useEffect(() => {
    if (!inputText.trim() && !responseText.trim()) {
      setParsedData(null);
      setError("");
      return;
    }
    parseInputs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText, responseText]);

  return { parsedData, error };
}
