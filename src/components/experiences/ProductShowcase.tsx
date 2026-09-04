import { Parallax } from "@/components/animations/Parallax";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ProductShowcase() {
  return <section className="overflow-hidden bg-[var(--foreground)] py-20 text-white sm:py-28"><Container className="grid items-center gap-10 md:grid-cols-2"><Parallax className="mx-auto w-full max-w-md"><div className="aspect-[4/5] rounded-[2rem] bg-[var(--accent)]" role="img" aria-label="Presentación visual temporal de producto" /></Parallax><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent)]">Showcase temporal</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Un escenario flexible para cada producto.</h2><p className="mt-5 leading-7 text-white/65">Preparado para fotografía, video, parallax y narrativas más complejas sin comprometer la experiencia móvil.</p><Button href="/productos" variant="secondary" className="mt-7">Ver catálogo</Button></div></Container></section>;
}
