import { CurrentThemeDownloads } from "@/data/themes";

interface ThemeDownloadsProps {
  downloads: CurrentThemeDownloads;
}

export default function ThemeDownloads({ downloads }: ThemeDownloadsProps) {
  const hasThemeStoreLinks = downloads.themeStore && (downloads.themeStore.hyperOS3 || downloads.themeStore.hyperOS12);
  const hasFiles = (downloads.mtz && (downloads.mtz.hyperOS3 || downloads.mtz.hyperOS12)) || downloads.backup;

  if (!hasThemeStoreLinks && !hasFiles) {
    return null;
  }

  return (
    <div className="mt-8 rounded-2xl bg-gray-50 p-6 dark:bg-gray-900/50">
      <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Downloads & Links
      </h2>
      
      <div className="mt-6 flex flex-col gap-8">
        {/* Theme Store Links Section */}
        {hasThemeStoreLinks && (
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Theme Store Link
            </h3>
            <div className="flex flex-row flex-wrap gap-3">
              {downloads.themeStore!.hyperOS3 && (
                <a
                  href={downloads.themeStore!.hyperOS3}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  HyperOS 3
                </a>
              )}
              {downloads.themeStore!.hyperOS12 && (
                <a
                  href={downloads.themeStore!.hyperOS12}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  HyperOS 1 & 2
                </a>
              )}
            </div>
          </div>
        )}
        
        {/* Files Section */}
        {hasFiles && (
          <div className="flex flex-row flex-wrap gap-4 sm:gap-6 mt-4">
            {downloads.mtz && (downloads.mtz.hyperOS3 || downloads.mtz.hyperOS12) && (
              <div className="flex flex-col">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  MTZ File
                </h3>
                <div className="flex flex-row flex-wrap gap-3">
                  {downloads.mtz.hyperOS12 && (
                    <a
                      href={downloads.mtz.hyperOS12}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-xl bg-white px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                    >
                      HyperOS 1 & 2
                    </a>
                  )}
                  {downloads.mtz.hyperOS3 && (
                    <a
                      href={downloads.mtz.hyperOS3}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-xl bg-white px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                    >
                      HyperOS 3
                    </a>
                  )}
                </div>
              </div>
            )}
            
            {downloads.backup && (
              <div className="flex flex-col">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Backup File
                </h3>
                <div className="flex flex-row flex-wrap gap-3">
                  <a
                    href={downloads.backup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                  >
                    Download Backup File
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
