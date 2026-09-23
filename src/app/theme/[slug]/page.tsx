import { notFound } from 'next/navigation';
import { getThemeBySlug, themes } from '@/data/themes';
import ThemeDetail from '@/components/ThemeDetail';
import AdBanner from '@/components/AdBanner';
import Link from 'next/link';

interface ThemePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return themes.map((theme) => ({
    slug: theme.slug,
  }));
}

export default async function ThemePage({ params }: ThemePageProps) {
  const { slug } = await params;
  const theme = getThemeBySlug(slug);

  if (!theme) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 transition-all duration-200 ease-out hover:text-gray-900 hover:-translate-x-1 active:scale-[0.95] dark:text-gray-400 dark:hover:text-gray-100 motion-reduce:transition-none motion-reduce:hover:transform-none">
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to themes
        </Link>
      </div>
      
      <AdBanner zoneId="7454221" />
      
      <div className="mt-8">
        <ThemeDetail theme={theme} />
      </div>

      <div className="mt-12">
        <AdBanner />
      </div>
    </div>
  );
}
