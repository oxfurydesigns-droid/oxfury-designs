export const TABS = ["Latest Themes", "Popular Themes"] as const;
export type Tab = typeof TABS[number];

interface NavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="inline-flex rounded-lg bg-gray-100/50 p-1 dark:bg-[#111113] ring-1 ring-gray-200/50 dark:ring-[#1a1b1e]">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`whitespace-nowrap rounded-md px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 ease-out active:scale-[0.98] ${
            activeTab === tab
              ? 'bg-white text-gray-900 shadow-[0_2px_8px_rgba(0,0,0,0.06)] ring-1 ring-gray-200/50 dark:bg-[#1f2024] dark:text-gray-100 dark:ring-[#2a2b30] dark:shadow-[0_2px_12px_rgba(0,0,0,0.5)]'
              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-[#1a1b1e]/50'
          } motion-reduce:transition-none motion-reduce:active:transform-none`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
