import TRPCDecoder from "@/components/trpc/TRPCDecoder";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            tRPC Batch Request & Response Decoder
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Paste tRPC batch request URLs and/or response JSON to visualize
            procedures, inputs, and responses
          </p>
        </div>

        <TRPCDecoder />
      </div>
    </div>
  );
}
