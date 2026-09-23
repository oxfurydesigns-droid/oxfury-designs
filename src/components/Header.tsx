import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md dark:border-[#1a1b1e] dark:bg-[#0a0a0b]/90">
      <div className="container mx-auto flex h-14 items-center px-4">
        <Link href="/" className="flex items-center space-x-3.5 transition-opacity hover:opacity-80 active:opacity-70 duration-200">
          <div className="relative flex h-[40px] w-[40px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-black/5 dark:bg-white dark:shadow-[0_2px_10px_rgba(0,0,0,0.4)] dark:ring-white/10">
            <Image 
              src="/logo.jpg" 
              alt="OX×MS DESIGNS Logo" 
              fill
              className="object-contain scale-[1.15]"
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            OX×MS DESIGNS
          </span>
        </Link>
      </div>
    </header>
  );
}
