import { Inter as InterFont } from 'next/font/google';
import '@/styles/globals.css';
import { siteMetadata } from '@/config/seo';
import { ReactNode, Suspense } from 'react';
import NavigationEvents from './navigation-events';
import Loading from './loading';
import GoogleAnalytics from '@/libs/googleanalytics';
import { Providers } from './providers';
import 'aos/dist/aos.css';
import { Viewport } from 'next';
import type { Metadata } from 'next';

export const metadata: Metadata = { ...siteMetadata };
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#DAD9FF',
};

const interFont = InterFont({
    subsets: ['latin'],
    display: 'swap',
    preload: false,
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="ko"
            className={`${
                interFont.className
            } ${'bg-gradient-to-r from-purple-300 to-orange-300'}`}
        >
            {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
                <GoogleAnalytics
                    GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
                />
            )}
            <body className="m-0 p-0">
                <Providers>
                    {/*<header></header>*/}
                    <main>{children}</main>
                    <Suspense fallback={<Loading />}>
                        <NavigationEvents />
                    </Suspense>
                </Providers>
            </body>
        </html>
    );
}
