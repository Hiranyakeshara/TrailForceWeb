import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Montserrat, Oswald } from 'next/font/google';

import theme from '@/theme';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: 'Trailforce | Adventure experiences, anywhere',
  description:
    'Camping, hikes, and cycle rides—curated, guided, and safe. Trailforce delivers unforgettable outdoor adventures at your preferred locations.',};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${oswald.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopNav />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
