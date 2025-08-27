import type { Metadata } from 'next';
import { inter } from './fonts';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'SuburbMates - Find Trusted Local Helpers in Your Suburb',
  description: 'Connect with verified professionals in your neighborhood. From plumbers to gardeners, find the right help when you need it.',
  keywords: 'local services, home services, plumber, electrician, gardener, handyman, Melbourne, suburbs',
  authors: [{ name: 'SuburbMates' }],
  creator: 'SuburbMates',
  publisher: 'SuburbMates',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.svg'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://suburbmates.com'),
  openGraph: {
    title: 'SuburbMates - Find Trusted Local Helpers',
    description: 'Connect with verified professionals in your neighborhood.',
    url: 'https://suburbmates.com',
    siteName: 'SuburbMates',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SuburbMates - Find Trusted Local Helpers',
    description: 'Connect with verified professionals in your neighborhood.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-background text-text antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        
        <div className="min-h-screen flex flex-col">
          <Nav />
          
          <main id="main" className="flex-1">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}

