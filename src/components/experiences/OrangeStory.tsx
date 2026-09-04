"use client";

import { useLayoutEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { getGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function OrangeStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current) return;
    const { gsap } = getGsap();
    const context = gsap.context(() => {
      gsap.fromTo(accentRef.current, { yPercent: -12, rotate: -4 }, { yPercent: 12, rotate: 4, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 0.7 } });
    }, sectionRef);
    return () => context.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} className="overflow-hidden py-20 sm:py-28">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div><p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--primary)]">Storytelling preparado con GSAP</p><h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.05em] sm:text-5xl">Una historia temporal, lista para cobrar vida.</h2><p className="mt-6 leading-7 text-black/65">Este bloque demuestra ScrollTrigger con una animación sobria. El contenido y la dirección de arte se reemplazarán en la fase de diseño real.</p></div>
        <div ref={accentRef} className="aspect-square rounded-[40%_60%_55%_45%] bg-[var(--primary)]" role="img" aria-label="Marcador visual abstracto temporal" />
      </Container>
    </section>
  );
}
