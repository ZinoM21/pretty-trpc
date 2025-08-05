"use client";

import Image from "next/image";
import { HelpCircle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function TRPCHelpPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
          <HelpCircle className="w-4 h-4" />
          Where can I find the URL & response?
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-4" align="start">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Finding tRPC Requests in Network Tab
            </h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <p>1. Open your browser's Developer Tools (F12)</p>
              <p>
                2. Go to the <strong>Network</strong> tab
              </p>
              <p>
                3. Look for tRPC batch requests (usually contain "/trpc/" in the
                URL)
              </p>
              <p>4. Right-click on the request to see the context menu</p>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <Image
              src="/copy.png"
              alt="Browser context menu showing Copy URL and Copy response options"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>
              • <strong>Copy URL</strong> - Paste this in the left textarea
            </p>
            <p>
              • <strong>Copy response</strong> - Paste this in the right
              textarea
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
