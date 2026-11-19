import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vignesh P Alva | Software Developer (C++, Python, Next.js)',
  description: 'Portfolio of Vignesh P Alva - Software developer skilled in C++, Python, Next.js, React, CSS, and Git. Focused on high-performance solutions and clear technical communication.',
  keywords: ['Vignesh P Alva', 'Software Developer', 'C++', 'Python', 'Next.js', 'React', 'Portfolio', 'Full Stack Developer', 'Vercel'],
  authors: [{ name: 'Vignesh P Alva' }],
  openGraph: {
    title: 'Vignesh P Alva | Portfolio',
    description: 'Explore projects and skills in C++, Python, Next.js, and modern software engineering.',
    url: 'https://github.com/VigneshPAlva10',
    siteName: 'Vignesh P Alva Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
