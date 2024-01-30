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
  title: "Build That Resume!",
  description:
    "A simple resume builder using Next.js, TailwindCSS, Material-Tailwind, & Typescript.",
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
