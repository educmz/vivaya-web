"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  AtSign,
  Briefcase,
  ChevronUp,
  Globe,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const columns = [
  {
    title: "Explora",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Carta", href: "/carta" },
      { label: "Promociones", href: "/promociones" },
      { label: "Club", href: "/club" },
    ],
  },
  {
    title: "Marca",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Locales", href: "/locales" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      {
        label: "Preguntas frecuentes",
        href: "/preguntas-frecuentes",
      },
      {
        label: "Política de privacidad",
        href: "/politica-de-privacidad",
      },
      {
        label: "Libro de reclamaciones",
        href: "/libro-de-reclamaciones",
      },
    ],
  },
];

const socialLinks = [
  { icon: AtSign, label: "Instagram" },
  { icon: Briefcase, label: "LinkedIn" },
  { icon: Globe, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#073B3A] text-[#FFF7E8]">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/brand/vivaya-icon.png"
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full object-contain"
              />

              <span className="font-accent text-3xl text-[#F36B21]">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#E7EFE2]/80">
              Jugos y bebidas naturales pensadas para acompañar tu día, en cada
              local Vivanya.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E7EFE2]">
                {column.title}
              </p>

              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#FFF7E8]/75 transition hover:text-[#F36B21] focus-visible:outline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3">
          {socialLinks.map((social) => (
            <span
              key={social.label}
              className="grid size-10 place-items-center rounded-full border border-[#E7EFE2]/25 text-[#E7EFE2] transition hover:border-[#F36B21] hover:text-[#F36B21]"
              aria-label={social.label}
              role="img"
            >
              <social.icon className="size-4" aria-hidden="true" />
            </span>
          ))}
        </div>

        <div
          className="mt-10 h-px w-full bg-[#E7EFE2]/15"
          aria-hidden="true"
        />

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-[#FFF7E8]">
              Natural. Fresco. Vivanya.
            </p>

            <p className="mt-1 text-xs text-[#E7EFE2]/70">
              Activa lo natural en tu día a día.
            </p>
          </div>

          <p className="text-xs text-[#E7EFE2]/60">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>

      <BackToTop />
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          whileHover={{ y: -3 }}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full bg-[#F36B21] text-[#FFF7E8] shadow-lg transition hover:bg-[#e2601a] focus-visible:outline"
        >
          <ChevronUp className="size-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}