import { Theme } from '@/data/themes';
import ThemeCard from './ThemeCard';

interface ThemeGridProps {
  themes: Theme[];
}

export default function ThemeGrid({ themes }: ThemeGridProps) {
  if (themes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-gray-500 dark:text-gray-400">No themes found in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {themes.map((theme) => (
        <ThemeCard key={theme.id} theme={theme} />
      ))}
    </div>
  );
}
