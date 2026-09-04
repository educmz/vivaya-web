import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function LocationsHero() {
  return (
    <section className="relative isolate flex min-h-[50svh] items-end overflow-hidden">
      <Image src="/images/about/about-lifestyle.webp" alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" aria-hidden="true" />
      <Container className="relative py-14 text-white sm:py-20">
        <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] normal-case tracking-normal">¡Visita nuestros locales!</h1>
        <p className="font-accent mt-3 max-w-lg text-2xl normal-case tracking-normal text-[var(--accent)]">Ven a probar el frescor de lo natural.</p>
      </Container>
    </section>
  );
}
