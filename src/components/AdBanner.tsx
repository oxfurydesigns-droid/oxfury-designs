'use client';

import { useEffect, useRef } from 'react';

export default function AdBanner({ zoneId }: { zoneId?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((zoneId === '7454221' || zoneId === 'bottom' || zoneId === 'center') && containerRef.current) {
      // Clear container to prevent duplicate injections on re-mounts (React Strict Mode)
      containerRef.current.innerHTML = '';
      
      const script = document.createElement('script');
      
      if (zoneId === '7454221') {
        // Assign the exact HilltopAds script without modification
        script.innerHTML = `(function(ddaf){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = ddaf || {};
s.src = "\\/\\/peacefulbicycle.com\\/biX.VqsBdgGJl_0WY\\/WWc-\\/TebmR9kunZXUOlYk\\/PcTPcw0tN_THQnyPMKj\\/EhtVN\\/zwQL1wNpD\\/IWyoNTQF";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})`;
      } else if (zoneId === 'bottom') {
        script.innerHTML = `(function(zmri){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = zmri || {};
s.src = "\\/\\/peacefulbicycle.com\\/bSX.VPsAdLG\\/lp0bYAW\\/cK\\/EeqmR9\\/u-ZiUnlJkqPgTdc\\/0TN\\/T\\/QGz\\/OiDwkDtYNEz\\/QJ1\\/NkDnMj5SMZwW";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})`;
      } else if (zoneId === 'center') {
        script.innerHTML = `(function(xualk){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = xualk || {};
s.src = "\\/\\/peacefulbicycle.com\\/b.XMVzsXd\\/GMll0RYaW\\/cz\\/yeemk9bukZEU\\/lekLPLTMcK0cNujLIHyQNQDpUStfNKztQT2\\/MojFIM0KO_QA";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})`;
      }

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

  return (
    <div className="my-8 flex w-full flex-col items-center justify-center rounded-xl bg-gray-50 p-4 ring-1 ring-inset ring-gray-200 dark:bg-gray-800/50 dark:ring-gray-700 overflow-hidden min-h-[120px]">
      {(zoneId === '7454221' || zoneId === 'bottom' || zoneId === 'center') ? (
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
