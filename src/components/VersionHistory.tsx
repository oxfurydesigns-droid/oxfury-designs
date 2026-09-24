"use client";

import { useState } from "react";
import { ThemeVersion, PreviousThemeVersion } from "@/data/themes";
import ThemeGallery from "./ThemeGallery";

interface VersionHistoryProps {
  currentVersion: ThemeVersion;
  previousVersions: PreviousThemeVersion[];
}

export default function VersionHistory({ currentVersion, previousVersions }: VersionHistoryProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleVersion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Version History
      </h2>

      {/* Latest Version */}
      <div className="mt-6 rounded-2xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              Latest Version
              <span className="rounded bg-black px-2 py-0.5 text-xs font-semibold text-white dark:bg-white dark:text-black">
                v{currentVersion.version}
              </span>
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {new Date(currentVersion.releaseDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </p>
          </div>
        </div>

        {currentVersion.changelog && currentVersion.changelog.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">What's New</h4>
            <ul className="mt-2 space-y-1">
              {currentVersion.changelog.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                  <span className="mr-2 mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Previous Versions */}
      {previousVersions && previousVersions.length > 0 && (
        <div className="mt-6 space-y-4">
          <div className="flex flex-col gap-3">
            {previousVersions.map((ver, idx) => {
              const isExpanded = expandedIndex === idx;
              const hasMtz = ver.downloads?.mtz;
              const mtzUrl = typeof hasMtz === 'string' ? hasMtz : (hasMtz?.hyperOS3 || hasMtz?.hyperOS12);
              
              return (
                <div key={idx} className="rounded-xl bg-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.02)] ring-1 ring-gray-200 dark:bg-gray-900/50 dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] dark:ring-gray-800">
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">
                        Previous Version v{ver.version}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(ver.releaseDate).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </span>
                    </div>

                    <div className="flex flex-row flex-wrap gap-4 mb-6">
                      {ver.screenshots && ver.screenshots.length > 0 && (
                        <ThemeGallery 
                          screenshots={ver.screenshots} 
                          themeName={`Version ${ver.version}`} 
                          buttonOnly={true} 
                          buttonText="Show Screenshots" 
                        />
                      )}
                      {mtzUrl && (
                        <a
                          href={mtzUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-md active:translate-y-0 active:scale-[0.97] hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        >
                          Download MTZ
                        </a>
                      )}
                      {!mtzUrl && (
                        <button
                          disabled
                          className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-xl bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:text-gray-500"
                        >
                          Download MTZ (Coming Soon)
                        </button>
                      )}
                    </div>

                    {ver.features && ver.features.length > 0 && (
                      <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                        <button
                          onClick={() => toggleVersion(idx)}
                          className="flex w-full items-center justify-between text-left focus:outline-none group"
                        >
                          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                            Features
                          </span>
                          <span className="text-gray-400 text-sm">
                            {isExpanded ? "▴" : "▾"}
                          </span>
                        </button>
                        
                        <div
                          className={`grid transition-all duration-300 ease-out ${
                            isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                              {ver.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                  <svg className="mr-2 h-4 w-4 shrink-0 text-gray-900 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Fallback to Changelog if features are empty but changelog exists */}
                    {(!ver.features || ver.features.length === 0) && ver.changelog && ver.changelog.length > 0 && (
                      <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                        <button
                          onClick={() => toggleVersion(idx)}
                          className="flex w-full items-center justify-between text-left focus:outline-none group"
                        >
                          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                            Changelog
                          </span>
                          <span className="text-gray-400 text-sm">
                            {isExpanded ? "▴" : "▾"}
                          </span>
                        </button>
                        
                        <div
                          className={`grid transition-all duration-300 ease-out ${
                            isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <ul className="space-y-1">
                              {ver.changelog.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                  <span className="mr-2 mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
