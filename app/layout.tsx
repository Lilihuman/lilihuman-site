import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Lili Human — Family, Fitness & Printable Art',
  description:
    'Family stories, fitness programs for real life, and printables to make your home feel like you.',
  metadataBase: new URL('https://lilihuman.com'),
  openGraph: {
    title: 'Lili Human',
    description: 'Family stories, fitness programs for real life, and printables to make your home feel like you.',
    url: 'https://lilihuman.com',
    siteName: 'Lili Human',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-cream">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
