'use client';

import { useEffect, useRef } from 'react';

export default function AdBanner({ zoneId }: { zoneId?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((zoneId === '7454221' || zoneId === 'bottom' || zoneId === 'center') && containerRef.current) {
      // Clear container to prevent duplicate injections on re-mounts (React Strict Mode)
      containerRef.current.innerHTML = '';
      
      const script = document.createElement('script');
      
      const optionsScript = document.createElement('script');
      optionsScript.type = 'text/javascript';
      optionsScript.innerHTML = `
        atOptions = {
          'key' : '549031fcae7f15239868de0ae455f91c',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;
      containerRef.current.appendChild(optionsScript);

      script.type = 'text/javascript';
      script.src = "https://www.highrevenueformat.com/549031fcae7f15239868de0ae455f91c/invoke.js";

      // Temporarily mock document.currentScript so the ad network accurately finds this container
      // This is necessary because dynamic client-side insertions usually result in currentScript being null
      Object.defineProperty(document, 'currentScript', {
        value: script,
        configurable: true,
      });

      // Synchronously appends and executes the inline script
      containerRef.current.appendChild(script);

      // Clean up the mock immediately after execution
      delete (document as any).currentScript;
    }
  }, [zoneId]);

  const isActiveZone = zoneId === '7454221' || zoneId === 'bottom' || zoneId === 'center';

  return (
    <div className={`my-8 flex w-full flex-col items-center justify-center rounded-xl bg-gray-50 p-4 ring-1 ring-inset ring-gray-200 dark:bg-gray-800/50 dark:ring-gray-700 overflow-hidden ${isActiveZone ? 'min-h-[282px] w-full max-w-[332px] mx-auto' : 'min-h-[120px]'}`}>
      {isActiveZone ? (
        <div ref={containerRef} className="w-full flex justify-center relative z-10"></div>
      ) : (
        <>
          <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Advertisement Placeholder</p>
          <div className="mt-2 h-[90px] w-full max-w-[728px] border-2 border-dashed border-gray-300 dark:border-gray-600 rounded"></div>
        </>
      )}
    </div>
  );
}
