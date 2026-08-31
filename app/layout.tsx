import type { Metadata } from "next";
import { Geist, Geist_Mono, Goldman } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import RouteBackground from "./components/route-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-goldman",
});

export const metadata: Metadata = {
  title: "Gtrac",
  description: "Fleet Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${goldman.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RouteBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
