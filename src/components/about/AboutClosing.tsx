"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getGsap } from "@/lib/gsap";

export function AboutClosing() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !rootRef.current) return;

    const { gsap } = getGsap();

    const root = rootRef.current;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .from("[data-closing-eyebrow]", {
          opacity: 0,
          y: 25,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          "[data-closing-line]",
          {
            yPercent: 115,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .from(
          "[data-closing-copy]",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          "[data-closing-button]",
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          "[data-closing-product]",
          {
            opacity: 0,
            y: 220,
            rotate: 9,
            scale: 0.88,
            duration: 1.25,
            ease: "power4.out",
          },
          "-=1",
        );

      gsap.fromTo(
        "[data-closing-v]",
        {
          xPercent: -8,
        },
        {
          xPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={rootRef}
      className="relative min-h-[88svh] overflow-hidden bg-[#FF8A00]"
    >
      <div
        data-closing-v
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="select-none text-[clamp(32rem,60vw,65rem)] font-black leading-none tracking-[-0.12em] text-white/[0.07]">
          V
        </span>
      </div>

      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full border-[5rem] border-white/[0.06]"
        aria-hidden="true"
      />

      <Container className="relative grid min-h-[88svh] items-center gap-14 py-20 lg:grid-cols-[1fr_.8fr]">
        <div className="relative z-20">
          <p
            data-closing-eyebrow
            className="text-xs font-black uppercase tracking-[0.26em] text-[#073B3A]/65"
          >
            Vivaya
          </p>

          <h2 className="mt-5 max-w-5xl text-[clamp(4.3rem,9vw,9.5rem)] font-black uppercase leading-[0.76] tracking-[-0.085em] text-white">
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-closing-line className="block">
                Lleva Vivaya
              </span>
            </span>

            <span className="block overflow-hidden pb-[0.06em]">
              <span data-closing-line className="block">
                contigo.
              </span>
            </span>
          </h2>

          <p
            data-closing-copy
            className="mt-8 max-w-md text-lg leading-8 text-white/78"
          >
            Descubre las opciones Vivaya y encuentra la que mejor acompaña tu
            día.
          </p>

          <div data-closing-button className="mt-10">
            <Button
              href="/productos"
              className="min-h-14 bg-[#073B3A] px-8 text-white hover:bg-[#0F6B6D]"
            >
              Conoce nuestros productos
            </Button>
          </div>
        </div>

        <div
          data-closing-product
          className="relative mx-auto h-[34rem] w-[20rem] sm:h-[42rem] sm:w-[25rem] lg:h-[50rem] lg:w-[30rem]"
        >
          <Image
            src="/images/about/vivaya-cup.png"
            alt="Producto Vivaya"
            fill
            sizes="30rem"
            className="object-contain drop-shadow-[0_40px_45px_rgba(7,59,58,0.24)]"
          />
        </div>
      </Container>
    </section>
  );
}