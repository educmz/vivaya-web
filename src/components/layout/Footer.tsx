import Link from "next/link";
import { AtSign, Briefcase, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Carta", href: "/carta" },
  { label: "Locales", href: "/locales" },
];

const helpLinks = [
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
  { label: "Contacto", href: "/contacto" },
];

const socialLinks = [
  { icon: AtSign, label: "Instagram" },
  { icon: Briefcase, label: "LinkedIn" },
  { icon: Globe, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto bg-[#132A3A] text-[#F4EFE3]">
      <WaveDivider fill="#132A3A" variant="drift" className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 -translate-y-[85%] sm:h-14" />

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 bottom-0 -z-0 h-72 w-72 rounded-full bg-[#9FB49A]/10 blur-[110px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 top-10 -z-0 h-72 w-72 rounded-full bg-[#C9A64A]/12 blur-[110px]" aria-hidden="true" />

        <Container className="relative pb-14 pt-14">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <p className="font-accent text-4xl text-[#C9A64A]">{siteConfig.name}</p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-[#F4EFE3]/70">Jugos y bebidas naturales pensadas para acompañar tu día, en cada local Vivaya.</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4EFE3]">Navegación</p>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex items-center gap-2.5 text-[#F4EFE3]/75 transition hover:text-[#C9A64A] focus-visible:outline">
                    <span className="size-1 rounded-full bg-[#C9A64A]/70" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4EFE3]">Ayuda</p>
            <ul className="mt-5 space-y-3 text-sm">
              {helpLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex items-center gap-2.5 text-[#F4EFE3]/75 transition hover:text-[#C9A64A] focus-visible:outline">
                    <span className="size-1 rounded-full bg-[#C9A64A]/70" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <span key={social.label} className="grid size-9 place-items-center rounded-full border border-[#F4EFE3]/20 text-[#F4EFE3]/70 transition hover:border-[#C9A64A] hover:text-[#C9A64A]" aria-label={social.label} role="img">
                  <social.icon className="size-4" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-[#C9A64A]/40" aria-hidden="true" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="grid size-9 place-items-center rounded-full border border-[#C9A64A]/50 font-accent text-sm text-[#C9A64A]" aria-hidden="true">V</span>
          <p className="text-xs text-[#F4EFE3]/50 sm:text-right">© {new Date().getFullYear()} {siteConfig.name}. Activa lo natural.</p>
        </div>
        </Container>
      </div>
    </footer>
  );
}
