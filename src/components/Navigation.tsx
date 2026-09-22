export const TABS = ["Latest Themes", "Popular Themes"] as const;
export type Tab = typeof TABS[number];

interface NavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            activeTab === tab
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
