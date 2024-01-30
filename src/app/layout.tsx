import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import CustomThemeProvider from "@/components/(UI)/ThemeProvider";
import CustomTheme from "@/components/(UI)/Theme";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://build-that-resume.vercel.app/"),
  title: "Build That Resume!",
  description:
    "A simple resume builder using Next.js, TailwindCSS, Material-Tailwind, & Typescript.",
  referrer: "origin-when-cross-origin",
  keywords: ["Fill this in."],
  // creator: { name: "Ethan Garrison", url: "https://github.com/EGARRISXN" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Build That Resume!",
    description:
      "A simple resume builder using Next.js, TailwindCSS, Material-Tailwind, & Typescript.",
    url: "https://build-that-resume.vercel.app/",
    siteName: "egxworld.net",
  },
  twitter: {
    // cardType: "summary_large_image",
    // handle: "@e____g_______",
    site: "@e____g_______",
    title: "Build That Resume!",
    description:
      "A simple resume builder using Next.js, TailwindCSS, Material-Tailwind, & Typescript.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <CustomThemeProvider value={CustomTheme}>
          {children}
        </CustomThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
