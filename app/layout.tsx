import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vinay Thakkar - Marriage Profile | Software Engineer & Tech Enthusiast',
  description: 'Explore Vinay Thakkar\'s comprehensive marriage profile. Software engineer with expertise in React, Node.js, and modern web technologies. Discover background, interests, and professional achievements.',
  keywords: 'Vinay Thakkar, marriage profile, software engineer, React developer, Node.js, web development, tech enthusiast, marriage biodata',
  authors: [{ name: 'Vinay Thakkar' }],
  creator: 'Vinay Thakkar',
  publisher: 'Vinay Thakkar',
  robots: 'index, follow',
  openGraph: {
    title: 'Vinay Thakkar - Marriage Profile | Software Engineer & Tech Enthusiast',
    description: 'Explore Vinay Thakkar\'s comprehensive marriage profile. Software engineer with expertise in React, Node.js, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Vinay Thakkar Marriage Profile',
    images: [
      {
        url: '/vinay_thakkar_profile.jpg', // Make sure this path matches your actual profile image
        width: 1200,
        height: 630,
        alt: 'Vinay Thakkar - Software Engineer and Tech Enthusiast',
        type: 'image/jpeg',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}, "antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}