export default function AdBanner({ zoneId }: { zoneId?: string }) {
  return (
    <div className="my-8 flex w-full flex-col items-center justify-center rounded-xl bg-gray-50 p-4 ring-1 ring-inset ring-gray-200 dark:bg-gray-800/50 dark:ring-gray-700 overflow-hidden min-h-[120px]">
      {zoneId === '7454221' ? (
        <script dangerouslySetInnerHTML={{ __html: `(function(ddaf){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = ddaf || {};
s.src = "\/\/peacefulbicycle.com\/biX.VqsBdgGJl_0WY\/WWc-\/TebmR9kunZXUOlYk\/PcTPcw0tN_THQnyPMKj\/EhtVN\/zwQL1wNpD\/IWyoNTQF";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})` }} />
      ) : (
        <>
          <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Advertisement Placeholder</p>
          <div className="mt-2 h-[90px] w-full max-w-[728px] border-2 border-dashed border-gray-300 dark:border-gray-600 rounded"></div>
        </>
      )}
    </div>
  );
}
