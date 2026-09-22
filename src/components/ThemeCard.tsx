import Link from 'next/link';
import Image from 'next/image';
import { Theme } from '@/data/themes';

interface ThemeCardProps {
  theme: Theme;
}

export default function ThemeCard({ theme }: ThemeCardProps) {
  // Format compatibility as requested: "HyperOS 1 • 2 • 3"
  // Assuming the array is ["HyperOS 1", "HyperOS 2", "HyperOS 3"]
  const osPrefix = "HyperOS";
  const versions = theme.compatibility
    .map(c => c.replace(osPrefix, "").trim())
    .filter(Boolean);
  const formattedCompatibility = versions.length > 0 
    ? `${osPrefix} ${versions.join(' • ')}`
    : theme.compatibility.join(' • ');

  return (
    <Link href={`/theme/${theme.slug}`} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md dark:bg-gray-900 dark:ring-gray-800">
      <div className="relative aspect-[2/1] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={theme.thumbnail}
          alt={theme.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{theme.name}</h3>
        <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
          {formattedCompatibility}
        </p>
      </div>
    </Link>
  );
}
