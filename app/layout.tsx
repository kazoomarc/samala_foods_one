import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

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
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f[]=switzer@400,500,600&display=swap"
        />
      </head>
      <body className="font-switzer flex flex-col justify-between h-full">
        {children}
      </body>
    </html>
  );
}
