import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from './ui/Header';
import Footer from './ui/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'samala one',
  description: 'Samala Foods one website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        <link rel="icon" href="/images/samala-ico-mini.png" sizes="any"></link>
        <meta property="og:image" content="/images/samala-logo.jpg" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f[]=switzer@400,500,600&display=swap"
        />
      </head>
      <body className="flex flex-col justify-between h-full font-switzer">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
