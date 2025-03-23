import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marriage Bio-data | Vinay Thakkar',
  description: 'Personal marriage bio-data website showcasing profile and details',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(playfair.className, "antialiased bg-background")}>
        {children}
      </body>
    </html>
  );
}