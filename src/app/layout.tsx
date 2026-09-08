import type { Metadata } from "next";
import { Anton, Caveat, Jost, Manrope } from "next/font/google";

import { Preloader } from "@/components/animations/Preloader";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";

import "./globals.css";

const interfaceFont = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

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

// Sustituto libre de "Novecento" (fuente de pago que usa Pickadeli).
// Jost es una grotesca geométrica estilo Art Déco, muy cercana a Novecento
// en mayúsculas. Se usa en la Carta.
const cartaFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-carta",
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
      className={`h-full antialiased ${interfaceFont.variable} ${headingFont.variable} ${accentFont.variable} ${cartaFont.variable}`}
    >
      <body className="flex min-h-full flex-col">
        <Preloader />
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
