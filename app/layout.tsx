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
  title: "MarNet | Life is the most valuable thing at sea",
  description:
    "Norwegian maritime safety technology. MarSurvive for scuba divers and crews at sea, MarConnect for children and pets. Light and position when it matters.",
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
