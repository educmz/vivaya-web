import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function OrangeHeroExperience() {
  return (
    <section className="relative isolate min-h-[75svh] overflow-hidden bg-[var(--hero)] py-20 sm:py-28">
      <div className="absolute -right-24 top-10 -z-10 size-80 rounded-full bg-[var(--accent)]/60 blur-3xl sm:size-[32rem]" aria-hidden="true" />
      <Container className="flex min-h-[55svh] flex-col justify-center">
        <FadeIn><p className="mb-5 text-sm font-black uppercase tracking-[0.25em]">Experiencia en construcción</p></FadeIn>
        <h1 className="max-w-5xl text-balance text-5xl font-black leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-8xl"><TextReveal text="Una portada lista para contar la historia de Vivaya" /></h1>
        <FadeIn className="mt-8 flex flex-col gap-3 sm:flex-row" delay={0.2}><Button href="/productos">Explorar productos</Button><Button href="/nosotros" variant="ghost">Conocer el proyecto</Button></FadeIn>
      </Container>
    </section>
  );
}
