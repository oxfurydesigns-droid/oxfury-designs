'use client';

import { useEffect, useRef } from 'react';

export default function AdBanner({ zoneId }: { zoneId?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((zoneId === '7454221' || zoneId === 'bottom' || zoneId === 'center') && containerRef.current) {
      // Clear container to prevent duplicate injections on re-mounts (React Strict Mode)
      containerRef.current.innerHTML = '';
      
      let key = '';
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

      const iframe = document.createElement('iframe');
      iframe.width = width.toString();
      iframe.height = height.toString();
      iframe.frameBorder = "0";
      iframe.scrolling = "no";
      iframe.style.border = "none";
      iframe.style.overflow = "hidden";
      iframe.style.width = width + "px";
      iframe.style.height = height + "px";
      iframe.style.maxWidth = "100%";
      
      containerRef.current.appendChild(iframe);

      const iframeDoc = iframe.contentWindow?.document || iframe.contentDocument;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>body { margin: 0; padding: 0; overflow: hidden; background: transparent; text-align: center; }</style>
            </head>
            <body>
              <script>
                atOptions = {
                  'key' : '${key}',
                  'format' : 'iframe',
                  'height' : ${height},
                  'width' : ${width},
                  'params' : {}
                };
              </script>
              <script src="https://www.highrevenueformat.com/${key}/invoke.js"></script>
            </body>
          </html>
        `);
        iframeDoc.close();
      }
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
