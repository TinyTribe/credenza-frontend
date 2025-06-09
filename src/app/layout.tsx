import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

import WalletProvider from '@/components/wallet-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const satoshi = localFont({
  src: '../fonts/Satoshi-Variable.ttf',
});

export const metadata: Metadata = {
  title: 'Credenza',
  description: 'Connect your Starknet wallet',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.className}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
