import type { Metadata, Viewport } from 'next';
import {
  Inter as FontSans,
  La_Belle_Aurore as FontHandwriting,
} from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import SVGGradientBg from '@/components/Hero/SVGGradientBg';
import Menu from '@/components/Hero/Menu/Menu';
import { Providers } from '@/components/Providers/Providers';

const publicBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const isProd = process.env.NODE_ENV === 'production';

export const metadata: Metadata = {
  metadataBase: new URL(publicBaseUrl),
  title: 'Nikolay Todorov',
  description:
    'Personal website of Nikolay Todorov — Software Engineer, Lecturer, and Student. Explore projects, writing, and ways to get in touch.',
  applicationName: 'Nikolay Todorov',
  authors: [{ name: 'Nikolay Todorov', url: new URL(publicBaseUrl) }],
  creator: 'Nikolay Todorov',
  publisher: 'Nikolay Todorov',
  category: 'technology',
  keywords: [
    'Nikolay Todorov',
    'Software Engineer',
    'Lecturer',
    'Student',
    'Portfolio',
    'React',
    'Next.js',
    'TypeScript',
    'Web Development',
  ],
  icons: {
    icon: [
      { url: '/images/jpeg/logo-nt.png', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/images/jpeg/logo-nt.png', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Nikolay Todorov',
  },
  referrer: 'origin-when-cross-origin',
  robots: isProd
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
      }
    : { index: false, follow: false, nocache: true },
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    url: publicBaseUrl,
    locale: 'en_US',
    images: [
      { url: '/images/jpeg/logo-nt.png', width: 512, height: 512, alt: 'NT logo' },
      {
        url: '/images/png/portfolio-preview.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio preview image for Nikolay Todorov',
      },
    ],
    siteName: 'Nikolay Todorov',
    title: 'Nikolay Todorov',
    description:
      'Personal website of Nikolay Todorov — Software Engineer, Lecturer, and Student. Explore projects, writing, and ways to get in touch.',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/jpeg/logo-nt.png', '/images/png/portfolio-preview.png'],
    title: 'Nikolay Todorov',
    description:
      'Personal website of Nikolay Todorov — Software Engineer, Lecturer, and Student. Explore projects, writing, and ways to get in touch.',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  viewportFit: 'cover',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHandwriting = FontHandwriting({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-handwriting',
});

const MonaLisa = localFont({
  src: '../public/fonts/monolisa/MonoLisa-Regular.ttf',
  variable: '--font-monalisa',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-bg-default font-sans antialiased',
          fontSans.variable,
          fontHandwriting.variable,
          MonaLisa.variable,
        )}
      >
        <Providers>
          <div className="mx-auto max-w-[1440px] bg-transparent px-4 sm:px-6 lg:px-8">
            <SVGGradientBg />
            <Menu />
            {/* Scroll-to-target on initial load using sessionStorage flag */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(){
                    try {
                      var target = sessionStorage.getItem('scrollTarget');
                      if (target) {
                        sessionStorage.removeItem('scrollTarget');
                        window.addEventListener('load', function(){
                          var el = document.getElementById(target);
                          if (el) {
                            var headerOffset = 100;
                            var elementTop = el.getBoundingClientRect().top + window.scrollY;
                            var offsetTop = Math.max(elementTop - headerOffset, 0);
                            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                          }
                        });
                      }
                    } catch (e) {}
                  })();
                `,
              }}
            />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
