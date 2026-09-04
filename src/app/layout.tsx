import type { Metadata } from "next";
import { Anton, Caveat } from "next/font/google";

import { CursorOrange } from "@/components/animations/CursorOrange";
import { Preloader } from "@/components/animations/Preloader";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";

import "./globals.css";

const headingFont = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const accentFont = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`h-full antialiased ${headingFont.variable} ${accentFont.variable}`}
    >
      <body className="flex min-h-full flex-col">
        <Preloader />
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        {/* Cursor decorativo Vivaya */}
        <CursorOrange />
      </body>
    </html>
  );
}
