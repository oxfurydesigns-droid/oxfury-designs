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
    <Link href={`/theme/${theme.slug}`} className="group flex flex-col overflow-hidden rounded-[20px] bg-white shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 ease-out hover:shadow-md hover:ring-gray-300 active:scale-[0.98] dark:bg-[#111113] dark:ring-[#1a1b1e] dark:hover:ring-[#2a2b30]">
      <div className="relative aspect-[6000/4171] w-full overflow-hidden bg-gray-50 dark:bg-[#0a0a0b]">
        <Image
          src={theme.thumbnail}
          alt={theme.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-col p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{theme.name}</h3>
        <p className="mt-1.5 text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
          {formattedCompatibility}
        </p>
      </div>
    </Link>
  );
}
