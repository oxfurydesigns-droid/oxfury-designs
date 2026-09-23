import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md dark:border-[#1a1b1e] dark:bg-[#0a0a0b]/90">
      <div className="container mx-auto flex py-3 px-4 md:py-4">
        <Link href="/" className="flex items-center space-x-3 transition-opacity hover:opacity-80 active:opacity-70 duration-200">
          <div className="relative flex h-[52px] w-[52px] md:h-[48px] md:w-[48px] shrink-0 overflow-hidden rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            <Image 
              src="/logo.jpg" 
              alt="OX×MS DESIGNS Logo" 
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            OX×MS DESIGNS
          </span>
        </Link>
      </div>
    </header>
  );
}
