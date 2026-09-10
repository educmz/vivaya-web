"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronUp } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { socialLinks } from "./socialLinks";

const legalLinks = [
  {
    label: "Política de privacidad",
    href: "/politica-de-privacidad",
  },
  {
    label: "Política de cookies",
    href: "/politica-de-cookies",
  },
  {
    label: "Libro de reclamaciones",
    href: "/libro-de-reclamaciones",
  },
];

export function Footer() {
  const pathname = usePathname();
  const footerLinks = [
    { label: "Inicio", href: "/" },
    { label: "Carta", href: "/carta" },
    { label: "Eventos", href: "/eventos" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Locales", href: "/locales" },
  ];

  return (
    <footer className="relative bg-[#124C40] text-[#FFF8F3]">
      <Container className="pb-5 pt-7 sm:pt-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-5 sm:grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto]">
          <div className="justify-self-start">
            <Link href="/" aria-label="Vivaya, inicio" className="inline-flex rounded-lg bg-[#FFF8F3] px-4 py-2.5">
              <Image src="/images/brand/logo_negro.png" alt="Vivaya" width={2172} height={724} className="h-auto w-28 object-contain" />
            </Link>

          </div>
          <nav aria-label="Navegación del pie de página" className="flex flex-wrap items-center gap-x-6 gap-y-1 sm:order-3 sm:col-span-2 lg:order-none lg:col-span-1 lg:justify-center">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-11 items-center text-sm font-medium text-[#D0E0D7] underline-offset-8 transition-colors hover:text-[#FFB45C] hover:underline">{item.label}</Link>
            ))}
          </nav>
          <div className="sm:col-start-2 sm:row-start-1 sm:justify-self-end lg:col-start-3">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em]">Síguenos</p>
            <div className="flex gap-2 md:justify-end" aria-label="Redes sociales">
              {socialLinks.map((social) => (
                <Link key={social.label} href={pathname} scroll={false} aria-label={social.label} className="grid size-11 place-items-center rounded-full border border-white/25 text-[#FFF8F3] transition-colors hover:border-[#FF8A00] hover:bg-[#FF8A00] hover:text-[#302E2A]">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-2 border-t border-white/15 pt-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <nav aria-label="Información legal" className="flex flex-wrap items-center gap-x-5 gap-y-0">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-11 items-center text-xs text-[#D0E0D7] transition-colors hover:text-[#FFB45C]">{item.label}</Link>
            ))}
          </nav>
          <p className="text-xs leading-5 text-[#D0E0D7]">© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
        </div>
      </Container>
      <BackToTop />
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 10,
          }}
          transition={{
            duration: 0.2,
          }}
          whileHover={{
            y: -2,
          }}
          aria-label="Volver arriba"
          className="fixed bottom-5 right-5 z-40 grid size-10 place-items-center rounded-full bg-[#302E2A] text-white shadow-[0_8px_24px_rgba(48,46,42,0.16)] transition duration-200 hover:bg-[#FF8A00] focus-visible:outline"
        >
          <ChevronUp
            className="size-4"
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
