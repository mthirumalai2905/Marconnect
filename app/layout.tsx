import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font",
});

export const metadata: Metadata = {
  title: "MarConnect | Life is the most valuable thing at sea",
  description:
    "Norwegian maritime technology for wireless communication, health and safety. Marpersonnel finds the person. MarNet tells the ship.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050b16",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className={interTight.className}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
