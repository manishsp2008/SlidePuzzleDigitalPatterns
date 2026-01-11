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

export const metadata: Metadata = {
  title: "Slide Puzzle Companion",
  description: "Infinite pattern generator for slide puzzles",
  appleWebApp: {
    statusBarStyle: "default",
  },
};

export const viewport = {
  themeColor: "#f8fafc", // bg-slate-50
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ colorScheme: 'light' }}
      >
        {children}
      </body>
    </html>
  );
}
