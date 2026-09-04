import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function PageHero({ title, description, eyebrow = "Contenido temporal" }: { title: string; description: string; eyebrow?: string }) {
  return (
    <section className="border-b border-black/10 bg-[var(--surface)] py-16 sm:py-24">
      <Container><Badge>{eyebrow}</Badge><h1 className="mt-6 max-w-4xl text-balance text-5xl font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">{description}</p></Container>
    </section>
  );
}
