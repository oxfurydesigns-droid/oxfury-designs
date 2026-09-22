export default function AdBanner() {
  return (
    <div className="my-8 flex w-full flex-col items-center justify-center rounded-xl bg-gray-50 p-4 ring-1 ring-inset ring-gray-200 dark:bg-gray-800/50 dark:ring-gray-700">
      {/* 
        TODO: Insert Hilltop Ads script here in the future.
        For now, this serves as a placeholder to ensure the layout 
        is ready and space is allocated.
      */}
      <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Advertisement Placeholder</p>
      <div className="mt-2 h-[90px] w-full max-w-[728px] border-2 border-dashed border-gray-300 dark:border-gray-600 rounded"></div>
    </div>
  );
}
