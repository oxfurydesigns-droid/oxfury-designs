import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "OXFURY DESIGNS",
  description: "Free HyperOS themes designed by OXFURY DESIGNS with a focus on clean visuals, unique details, and everyday usability.",
  other: {
    "735322ea620050b26b36a7ff87670ae04da040a3": "735322ea620050b26b36a7ff87670ae04da040a3",
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3988651704051199"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased dark:bg-[#0a0a0b] dark:text-gray-100">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
