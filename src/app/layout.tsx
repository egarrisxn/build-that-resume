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
    "A simple resume built using Next.js, TailwindCSS, Material-Tailwind, & Typescript.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Resume , Builder , Next.js , TailwindCSS , Material-Tailwind , Typescript, React, Vercel, Ethan Garrison, Ethan, Garrison, Ethan Garrison Resume, Ethan-Garrison, Ethan-G, Ethan G Resume Builder, Build That Resume, build-that-resume, buildthatresume, build that resume, buildthatresume, build, that, resume, build that resume!, buildthatresume!",
  ],
  creator: "Ethan Garrrison",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    siteName: "Build That Resume!",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build That Resume!",
    description:
      "A simple resume builder using Next.js, TailwindCSS, Material-Tailwind, & Typescript.",
    creator: "Ethan Garrison",
    images: "/twitter-image.png",
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
