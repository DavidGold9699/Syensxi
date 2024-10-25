import type { Metadata } from 'next';
import './globals.css';

import SideBar from '@/components/sidebar';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Synesxi',
  description: 'Synesxi Client',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className='max-w-[1440px] mx-auto bg-custom-background flex'>
          <SideBar />
          <div className='w-full p-6 flex flex-col'>
            <TopBar />
            <div className='mt-9 mb-12'>
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
