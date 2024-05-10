import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
// import CustomThemeProvider from "@/components/UI/ThemeProvider";
// import CustomTheme from "@/components/UI/Theme";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://build-that-resume.vercel.app"),
  title: "Build That Resume!",
  description:
    "Build That Resume is a web app that helps you build a resume in minutes.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Resume, Builder, Next.js, TailwindCSS, Material-Tailwind, Typescript, React, Vercel, Ethan, Garrison, build-that-resume, buildthatresume",
  ],
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
    title: "Build That Resume!",
    description:
      "Build That Resume is a web app that helps you build a resume in minutes.",
    url: "https://build-that-resume.vercel.app/",
    siteName: "Build That Resume!",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://build-that-resume.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Build That Resume!",
      },
    ],
  },
  twitter: {
    title: "Build That Resume!",
    description:
      "Build That Resume is a web app that helps you build a resume in minutes.",
    siteId: "2784984260",
    creator: "@eg_xo_",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "https://build-that-resume.vercel.app/favicon.ico",
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
        {/* <CustomThemeProvider value={CustomTheme}> */}
        {children}
        {/* </CustomThemeProvider> */}
        <Analytics />
      </body>
    </html>
  );
}
