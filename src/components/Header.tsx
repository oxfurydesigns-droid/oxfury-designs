import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-black dark:bg-white">
            <Image 
              src="/logo.jpg" 
              alt="OXFURY DESIGNS Logo" 
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            OXFURY DESIGNS
          </span>
        </Link>
      </div>
    </header>
  );
}
