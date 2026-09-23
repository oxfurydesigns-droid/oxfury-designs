"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ThemeGalleryProps {
  screenshots: string[];
  themeName: string;
}

export default function ThemeGallery({ screenshots, themeName }: ThemeGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClosingFullscreen, setIsClosingFullscreen] = useState(false);
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);
  const [isClosingViewAll, setIsClosingViewAll] = useState(false);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for fullscreen and view all
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullscreen && !isClosingFullscreen) {
        if (e.key === "Escape") closeFullscreen();
        if (e.key === "ArrowRight") handleNextLightbox();
        if (e.key === "ArrowLeft") handlePrevLightbox();
      } else if (isViewAllOpen && !isClosingViewAll) {
        if (e.key === "Escape") closeViewAll();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, isClosingFullscreen, isViewAllOpen, isClosingViewAll, selectedIndex, screenshots.length]);

  // Handle browser back button (popstate)
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (isFullscreen && (!e.state || !e.state.lightbox)) {
        setIsClosingFullscreen(true);
        setTimeout(() => {
          setIsFullscreen(false);
          setIsClosingFullscreen(false);
        }, 200);
      }
      
      if (isViewAllOpen && (!e.state || !e.state.viewAll)) {
        setIsClosingViewAll(true);
        setTimeout(() => {
          setIsViewAllOpen(false);
          setIsClosingViewAll(false);
        }, 200);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isFullscreen, isViewAllOpen]);

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (isFullscreen || isViewAllOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen, isViewAllOpen]);

  const handleNextLightbox = () => {
    setSelectedIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrevLightbox = () => {
    setSelectedIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const openFullscreen = (index?: number) => {
    if (index !== undefined) setSelectedIndex(index);
    if (!isFullscreen) {
      window.history.pushState({ lightbox: true }, "");
      setIsFullscreen(true);
      setIsClosingFullscreen(false);
    }
  };

  const closeFullscreen = () => {
    if (!isFullscreen || isClosingFullscreen) return;
    if (window.history.state && window.history.state.lightbox) {
      window.history.back(); // Let popstate handle it
    } else {
      setIsClosingFullscreen(true);
      setTimeout(() => {
        setIsFullscreen(false);
        setIsClosingFullscreen(false);
      }, 200);
    }
  };

  const openViewAll = () => {
    if (!isViewAllOpen) {
      window.history.pushState({ viewAll: true }, "");
      setIsViewAllOpen(true);
      setIsClosingViewAll(false);
    }
  };

  const closeViewAll = () => {
    if (!isViewAllOpen || isClosingViewAll) return;
    if (window.history.state && window.history.state.viewAll) {
      window.history.back();
    } else {
      setIsClosingViewAll(true);
      setTimeout(() => {
        setIsViewAllOpen(false);
        setIsClosingViewAll(false);
      }, 200);
    }
  };

  // Keep thumbnail in view in the scrolling row/column
  useEffect(() => {
    if (thumbnailContainerRef.current && selectedIndex >= 0) {
      const container = thumbnailContainerRef.current;
      const activeThumb = container.children[selectedIndex] as HTMLElement;
      if (activeThumb) {
        // Vertical scrolling (desktop)
        const containerHeight = container.clientHeight;
        const thumbTop = activeThumb.offsetTop;
        const thumbHeight = activeThumb.clientHeight;

        // Horizontal scrolling (mobile)
        const containerWidth = container.clientWidth;
        const thumbLeft = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.clientWidth;
        
        container.scrollTo({
          top: Math.max(0, thumbTop - containerHeight / 2 + thumbHeight / 2),
          left: Math.max(0, thumbLeft - containerWidth / 2 + thumbWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [selectedIndex]);

  if (!screenshots || screenshots.length === 0) return null;

  const currentDisplayImage = screenshots[selectedIndex];

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
          Screenshots
        </h3>
        <button
          onClick={openViewAll}
          className="text-sm font-semibold text-blue-600 transition-all duration-200 ease-out hover:text-blue-700 hover:opacity-80 active:scale-[0.95] dark:text-blue-400 dark:hover:text-blue-300 motion-reduce:transition-none motion-reduce:active:transform-none"
        >
          View all
        </button>
      </div>

      <div className="flex flex-row gap-3 md:gap-4 h-[60vh] min-h-[400px] md:h-[450px]">
        {/* Main Viewport Container */}
        <div className="flex flex-1 flex-row gap-3 md:gap-4 justify-start">
          {/* First Screenshot */}
          <div className="group relative flex aspect-[1077/2048] h-full items-center justify-center overflow-hidden rounded-2xl bg-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-gray-200 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:ring-gray-300 dark:bg-gray-900 dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] dark:ring-gray-800 dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] dark:hover:ring-gray-700 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <button
              onClick={() => openFullscreen(selectedIndex)}
              className="absolute inset-0 z-0 h-full w-full outline-none transition-transform duration-200 active:scale-[0.98]"
              aria-label="Open full screen"
            >
              <Image
                key={currentDisplayImage}
                src={currentDisplayImage}
                alt={`${themeName} screenshot ${selectedIndex + 1}`}
                fill
                className="object-contain animate-fade-in"
                priority
              />
            </button>
            {/* Fullscreen indicator icon */}
            <div className="pointer-events-none absolute right-4 top-4 z-10 rounded-lg bg-black/50 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </div>

          {/* Second Screenshot (Desktop Only) */}
          {screenshots.length > 1 && (
            <div className="group relative hidden aspect-[1077/2048] h-full items-center justify-center overflow-hidden rounded-2xl bg-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-gray-200 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:ring-gray-300 dark:bg-gray-900 dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] dark:ring-gray-800 dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] dark:hover:ring-gray-700 motion-reduce:transition-none motion-reduce:hover:transform-none md:flex">
              <button
                onClick={() => openFullscreen((selectedIndex + 1) % screenshots.length)}
                className="absolute inset-0 z-0 h-full w-full outline-none transition-transform duration-200 active:scale-[0.98]"
                aria-label="Open full screen"
              >
                <Image
                  key={screenshots[(selectedIndex + 1) % screenshots.length]}
                  src={screenshots[(selectedIndex + 1) % screenshots.length]}
                  alt={`${themeName} screenshot ${((selectedIndex + 1) % screenshots.length) + 1}`}
                  fill
                  className="object-contain animate-fade-in"
                  priority
                />
              </button>
              {/* Fullscreen indicator icon */}
              <div className="pointer-events-none absolute right-4 top-4 z-10 rounded-lg bg-black/50 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnails Section */}
        <div 
          ref={thumbnailContainerRef}
          className="scrollbar-hide flex flex-col w-20 md:w-24 gap-3 overflow-y-auto overflow-x-hidden px-2 py-1"
        >
          {screenshots.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative flex-shrink-0 overflow-hidden rounded-xl bg-gray-200 transition-all duration-300 ease-out aspect-[1077/2048] w-full ${
                selectedIndex === idx
                  ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-50 opacity-100 dark:ring-blue-400 dark:ring-offset-gray-900 shadow-[0_4px_16px_rgba(59,130,246,0.3)] dark:shadow-[0_4px_16px_rgba(96,165,250,0.2)] -translate-y-[2px]"
                  : "ring-1 ring-gray-200 opacity-60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:ring-gray-700 dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)] hover:opacity-100 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:ring-gray-300 dark:hover:ring-gray-600 active:scale-[0.96]"
              } motion-reduce:transition-none motion-reduce:hover:transform-none`}
              aria-label={`Select screenshot ${idx + 1}`}
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
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && typeof document !== "undefined" && createPortal(
        <div className={`fixed inset-0 z-[100] flex h-[100dvh] w-screen flex-col items-center justify-center bg-black/95 backdrop-blur-md ${isClosingFullscreen ? "animate-fade-out" : "animate-fade-in"}`}>
          <div className="absolute left-0 right-0 top-0 z-[101] flex items-center justify-between p-4 text-white">
            <div className="text-sm font-medium tracking-widest text-gray-300">
              {selectedIndex + 1} / {screenshots.length}
            </div>
            <button
              onClick={closeFullscreen}
              className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close fullscreen"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {screenshots.length > 1 && (
            <>
              <button
                onClick={handlePrevLightbox}
                className="absolute left-2 top-1/2 z-[101] -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:left-6"
                aria-label="Previous image"
              >
                <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextLightbox}
                className="absolute right-2 top-1/2 z-[101] -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-6"
                aria-label="Next image"
              >
                <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div className="relative flex h-full w-full max-w-7xl items-center justify-center p-4 pt-20 pb-6 sm:p-16">
            <div className={`relative h-full w-full ${isClosingFullscreen ? "animate-zoom-out" : "animate-zoom-in"}`}>
              <Image
                key={screenshots[selectedIndex]}
                src={screenshots[selectedIndex]}
                alt={`Fullscreen view ${selectedIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* View All Modal */}
      {isViewAllOpen && typeof document !== "undefined" && createPortal(
        <div className={`fixed inset-0 z-[90] flex h-[100dvh] w-screen flex-col overflow-y-auto bg-gray-50/95 backdrop-blur-md dark:bg-gray-950/95 ${isClosingViewAll ? "animate-fade-out" : "animate-fade-slide-up"}`}>
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-gray-50/90 px-6 py-4 dark:border-gray-800 dark:bg-gray-950/90">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">All Screenshots ({screenshots.length})</h3>
            <button
              onClick={closeViewAll}
              className="rounded-full bg-gray-200 p-2 text-gray-900 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              aria-label="Close view all"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-6">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {screenshots.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => openFullscreen(idx)}
                  className="group relative aspect-[1077/2048] w-full overflow-hidden rounded-2xl bg-gray-200 shadow-sm ring-1 ring-gray-200 transition-all hover:ring-2 hover:ring-blue-500 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-blue-400"
                  aria-label={`Open image ${idx + 1} fullscreen`}
                >
                  <Image
                    src={src}
                    alt={`Grid Image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
                </button>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
