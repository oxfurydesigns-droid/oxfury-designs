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

      let key = '';
      let format = 'iframe';
      let height = 0;
      let width = 0;

      if (zoneId === '7454221') {
        key = 'f1c43d20938c1a8513dd53d712fe46cd';
        height = 90;
        width = 728;
      } else if (zoneId === 'center') {
        key = '549031fcae7f15239868de0ae455f91c';
        height = 250;
        width = 300;
      } else if (zoneId === 'bottom') {
        key = '54ffeaa80d10c9ad9e3b3fa73336ceab';
        height = 50;
        width = 320;
      }

      optionsScript.innerHTML = `
        atOptions = {
          'key' : '${key}',
          'format' : '${format}',
          'height' : ${height},
          'width' : ${width},
          'params' : {}
        };
      `;
      containerRef.current.appendChild(optionsScript);

      script.type = 'text/javascript';
      script.src = `https://www.highrevenueformat.com/${key}/invoke.js`;

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

  let containerClasses = 'min-h-[120px]';
  if (zoneId === '7454221') {
    containerClasses = 'min-h-[122px] w-full max-w-[760px] mx-auto';
  } else if (zoneId === 'center') {
    containerClasses = 'min-h-[282px] w-full max-w-[332px] mx-auto';
  } else if (zoneId === 'bottom') {
    containerClasses = 'min-h-[82px] w-full max-w-[352px] mx-auto';
  }

  return (
    <div className={`my-8 flex w-full flex-col items-center justify-center rounded-xl bg-gray-50 p-4 ring-1 ring-inset ring-gray-200 dark:bg-gray-800/50 dark:ring-gray-700 overflow-hidden ${containerClasses}`}>
      {isActiveZone ? (
        <div ref={containerRef} className="w-full flex justify-center relative z-10 overflow-hidden"></div>
      ) : (
        <>
          <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Advertisement Placeholder</p>
          <div className="mt-2 h-[90px] w-full max-w-[728px] border-2 border-dashed border-gray-300 dark:border-gray-600 rounded"></div>
        </>
      )}
    </div>
  );
}
