"use client";

import { useState } from "react";
import Image from "next/image";

interface ScreenshotGalleryProps {
  screenshots: string[];
  name: string;
}

export default function ScreenshotGallery({ screenshots, name }: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) return null;

  const nextScreenshot = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Main Image Container */}
      <div className="group relative aspect-[9/16] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
        <Image
          src={screenshots[activeIndex]}
          alt={`${name} screenshot ${activeIndex + 1}`}
          fill
          className="object-contain transition-opacity duration-300"
          priority
        />
        
        {/* Navigation Overlays */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={prevScreenshot}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-black/70 sm:left-4"
              aria-label="Previous screenshot"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextScreenshot}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-black/70 sm:right-4"
              aria-label="Next screenshot"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Strip */}
      {screenshots.length > 1 && (
        <div className="flex w-full space-x-3 overflow-x-auto pb-2 scrollbar-hide">
          {screenshots.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative aspect-[9/16] h-24 shrink-0 overflow-hidden rounded-xl transition-all ${
                activeIndex === idx
                  ? "ring-2 ring-black dark:ring-white"
                  : "opacity-60 hover:opacity-100 ring-1 ring-gray-200 dark:ring-gray-700"
              }`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
