import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white px-4 py-12 dark:border-[#1a1b1e] dark:bg-[#0a0a0b] md:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 md:items-center">
          
          <div className="flex flex-col md:items-center">
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
              OX×MS DESIGNS
            </span>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 md:text-center">
              Free HyperOS themes & custom designs
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-center">
            <span className="text-xs font-semibold tracking-wider text-gray-900 uppercase dark:text-gray-100">
              Contact
            </span>
            <a 
              href="https://t.me/englishthemesoxfury" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900 active:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 dark:active:text-gray-100"
            >
              Telegram Channel
            </a>
            <a 
              href="https://t.me/englishthemesoxfurychat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900 active:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 dark:active:text-gray-100"
            >
              Telegram Chat
            </a>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 dark:border-[#1a1b1e] sm:flex-row">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; 2026 OX×MS DESIGNS
          </p>
          <Link 
            href="/privacy-policy" 
            className="text-xs text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
