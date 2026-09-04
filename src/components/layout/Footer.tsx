import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-[var(--foreground)] py-12 text-white">
      <Container className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div><p className="text-2xl font-black">{siteConfig.name}</p><p className="mt-3 max-w-sm text-sm text-white/65">Arquitectura frontend inicial. Textos, recursos y enlaces son temporales hasta la fase de identidad final.</p></div>
        <nav aria-label="Navegación de pie de página" className="grid grid-cols-2 gap-3 text-sm">
          {navigationItems.map((item) => <Link className="hover:text-[var(--accent)] focus-visible:outline" href={item.href} key={item.href}>{item.label}</Link>)}
          <Link href="/preguntas-frecuentes" className="hover:text-[var(--accent)] focus-visible:outline">Preguntas frecuentes</Link>
        </nav>
        <p className="border-t border-white/15 pt-6 text-xs text-white/50 md:col-span-2">© {new Date().getFullYear()} {siteConfig.name}. Contenido temporal de desarrollo.</p>
      </Container>
    </footer>
  );
}
