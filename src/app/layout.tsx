import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Homelab & Server Guide | Build Your Perfect Setup',
  description: 'Comprehensive guide for building and managing home servers and labs, from Raspberry Pi to enterprise-grade solutions.',
  keywords: 'homelab, server, raspberry pi, proxmox, unraid, truenas, home server',
  openGraph: {
    title: 'Homelab & Server Guide | Build Your Perfect Setup',
    description: 'Comprehensive guide for building and managing home servers and labs.',
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
