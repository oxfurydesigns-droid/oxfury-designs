import Image from 'next/image';
import { Theme } from '@/data/themes';
import ThemeDownloads from './ThemeDownloads';
import VersionHistory from './VersionHistory';
import ThemeGallery from './ThemeGallery';
import AdBanner from './AdBanner';

interface ThemeDetailProps {
  theme: Theme;
}

export default function ThemeDetail({ theme }: ThemeDetailProps) {
  // Format compatibility for detail page
  const osPrefix = "HyperOS";
  const versions = theme.compatibility
    .map(c => c.replace(osPrefix, "").trim())
    .filter(Boolean);
  const formattedCompatibility = versions.length > 0 
    ? `${osPrefix} ${versions.join(', ')}`
    : theme.compatibility.join(', ');

  const releaseDateFormatted = new Date(theme.releaseDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      {/* Left Column: Main Preview & Screenshots */}
      <div className="flex w-full flex-col gap-8 lg:w-5/12">
        {/* Main Theme Preview */}
        <div className="relative flex aspect-[6000/4171] w-full max-h-[500px] items-center justify-center overflow-hidden rounded-2xl bg-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-gray-200 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:ring-gray-300 dark:bg-gray-900 dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] dark:ring-gray-800 dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] dark:hover:ring-gray-700 motion-reduce:transition-none motion-reduce:hover:transform-none">
          <Image
            src={theme.mainPreview}
            alt={`${theme.name} main preview`}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Screenshot Gallery (Interactive) */}
        {theme.screenshots && theme.screenshots.length > 0 && (
          <ThemeGallery
            screenshots={theme.screenshots}
            themeName={theme.name}
          />
        )}
      </div>

      {/* Details Section - Right Side */}
      <div className="flex w-full flex-col lg:w-7/12 lg:py-2">
        <div>
          <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
            OXFURY DESIGNS
          </h2>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
            {theme.name}
          </h1>
          
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white dark:bg-white dark:text-black">
              {formattedCompatibility}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Released {releaseDateFormatted}
            </span>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {theme.description}
          </p>
        </div>

        {theme.features && theme.features.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Features
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {theme.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="mr-3 h-5 w-5 shrink-0 text-gray-900 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {theme.currentVersion.downloads && (
          <div className="mt-6">
            <ThemeDownloads downloads={theme.currentVersion.downloads} />
          </div>
        )}

        <div className="mt-12 lg:mt-20">
          <AdBanner zoneId="center" />
        </div>

        <div className="mt-12 lg:mt-16">
          <VersionHistory 
            currentVersion={theme.currentVersion} 
            previousVersions={theme.previousVersions} 
          />
        </div>
      </div>
    </div>
  );
}
