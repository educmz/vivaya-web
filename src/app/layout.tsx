import type { Metadata } from "next";
import { Anton, Caveat, Manrope, Montserrat } from "next/font/google";

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
// Montserrat: grotesca geométrica con pesos hasta 800 (bold real). Carta.
const cartaFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
