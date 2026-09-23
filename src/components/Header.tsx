import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md dark:border-[#1a1b1e] dark:bg-[#0a0a0b]/90">
      <div className="container mx-auto flex h-14 items-center px-4">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-md bg-black dark:bg-white ring-1 ring-gray-200 dark:ring-gray-800">
            <Image 
              src="/logo.jpg" 
              alt="OX×MS DESIGNS Logo" 
              fill
              className="object-cover"
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
