import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import MainLayout from "@/layout/main-layout";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import "@/styles/globals.css";
import "@/styles/work.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <MainLayout className={inter.variable}>
          <AnimatePresence mode="wait" initial={false}>
            <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </MainLayout>
      </ThemeProvider>
      <Analytics />
    </>
  );
}
