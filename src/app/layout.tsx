import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devbuild-resume.vercel.app"),
  title: "DevBuild Resume!",
  description:
    "DevBuild Resume is a web app that helps you build a resume in minutes.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Resume, Builder, Next.js, TailwindCSS, Material-Tailwind, Typescript, React, Vercel, Ethan, Garrison, devbuild-resume, buildthatresume",
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
    title: "DevBuild Resume!",
    description:
      "DevBuild Resume is a web app that helps you build a resume in minutes.",
    url: "https://devbuild-resume.vercel.app/",
    siteName: "DevBuild Resume!",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
