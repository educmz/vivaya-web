"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { WaveDivider } from "@/components/sections/WaveDivider";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getGsap } from "@/lib/gsap";

const scenes = [
  {
    number: "01",
    left: "De la fruta",
    right: "al vaso.",
    copy: "Una historia de sabor que comienza en lo más natural.",
  },
  {
    number: "02",
    left: "De la",
    right: "fruta.",
    copy: "Color, sabor y una esencia que reconocemos desde el origen.",
  },
  {
    number: "03",
    left: "A tu",
    right: "ritmo.",
    copy: "Una propuesta creada para acompañar el movimiento de cada día.",
  },
  {
    number: "04",
    left: "Esto es",
    right: "Vivaya.",
    copy: "Una forma práctica y fresca de llevar bienestar contigo.",
  },
];

export function OrangeJourney() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !rootRef.current) return;

    const { gsap, ScrollTrigger } = getGsap();

    const root = rootRef.current;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(min-width: 768px)", () => {
        const scenesEls =
          root.querySelectorAll<HTMLElement>("[data-scene]");

        gsap.set(scenesEls, {
          autoAlpha: 0,
        });

        gsap.set(scenesEls[0], {
          autoAlpha: 1,
        });

        gsap.set("[data-orange-whole]", {
          autoAlpha: 1,
          scale: 1,
        });

        gsap.set("[data-orange-slice]", {
          autoAlpha: 0,
          scale: 2.6,
        });

        gsap.set("[data-journey-product]", {
          autoAlpha: 0,
          yPercent: 35,
          scale: 0.72,
        });

        const timeline = gsap.timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
  trigger: root,
  start: "top top",
  end: "+=3600",
  scrub: 0.8,
  pin: true,
  anticipatePin: 1,
},
        });

        timeline.to("[data-orange-whole]", {
          rotate: 100,
          scale: 2.7,
          duration: 1,
        });

        timeline.to(
          scenesEls[0],
          {
            autoAlpha: 0,
            yPercent: -10,
            duration: 0.25,
          },
          0.78,
        );

        timeline.to(
          "[data-orange-whole]",
          {
            autoAlpha: 0,
            duration: 0.12,
          },
          0.92,
        );

        timeline.to(
          "[data-orange-slice]",
          {
            autoAlpha: 1,
            duration: 0.12,
          },
          0.92,
        );

        timeline.to(
          "[data-orange-slice]",
          {
            scale: 1,
            rotate: 75,
            duration: 1,
          },
          0.95,
        );

        timeline.to(
          root,
          {
            backgroundColor: "#E9F5EE",
            duration: 0.7,
          },
          0.95,
        );

        timeline.to(
          scenesEls[1],
          {
            autoAlpha: 1,
            duration: 0.25,
          },
          1.15,
        );

        timeline.to(
          scenesEls[1],
          {
            autoAlpha: 0,
            yPercent: -10,
            duration: 0.25,
          },
          1.85,
        );

        timeline.to(
          "[data-orange-slice]",
          {
            rotate: 160,
            scale: 0.74,
            yPercent: -18,
            duration: 0.85,
          },
          1.7,
        );

        timeline.to(
          root,
          {
            backgroundColor: "#0F6B6D",
            duration: 0.75,
          },
          1.75,
        );

        timeline.to(
          scenesEls[2],
          {
            autoAlpha: 1,
            duration: 0.25,
          },
          2.05,
        );

        timeline.to(
          "[data-scene-text]",
          {
            color: "#FFF7E8",
            duration: 0.45,
          },
          1.8,
        );

        timeline.to(
          "[data-scene-copy]",
          {
            color: "rgba(255,247,232,0.66)",
            duration: 0.45,
          },
          1.8,
        );

        timeline.to(
          scenesEls[2],
          {
            autoAlpha: 0,
            yPercent: -10,
            duration: 0.25,
          },
          2.75,
        );

        timeline.to(
          "[data-orange-slice]",
          {
            autoAlpha: 0,
            scale: 0.4,
            yPercent: -90,
            duration: 0.45,
          },
          2.55,
        );

        timeline.to(
          root,
          {
            backgroundColor: "#073B3A",
            duration: 0.85,
          },
          2.65,
        );

        timeline.to(
          "[data-journey-product]",
          {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          2.7,
        );

        timeline.to(
          scenesEls[3],
          {
            autoAlpha: 1,
            duration: 0.35,
          },
          2.95,
        );

        timeline.to(
          "[data-journey-product]",
          {
            rotate: -4,
            scale: 1.05,
            duration: 0.9,
          },
          3.45,
        );

        timeline.fromTo(
          "[data-final-glow]",
          {
            scale: 0.6,
            autoAlpha: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
          },
          3.15,
        );

        return () => {
          ScrollTrigger.refresh();
        };
      });
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <div className="relative isolate">
      <WaveDivider fill="#FFF7E8" flip variant="valley" className="pointer-events-none absolute inset-x-0 top-0 z-40 hidden -translate-y-[98%] md:block" />
      <WaveDivider fill="#E9F5EE" flip variant="valley" className="pointer-events-none absolute inset-x-0 top-0 z-40 -translate-y-[98%] md:hidden" />

      <section
        ref={rootRef}
        className="relative hidden h-screen overflow-hidden bg-[#FFF7E8] md:block"
      >
        <div
          data-final-glow
          className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF8A00]/18 blur-[80px]"
          aria-hidden="true"
        />

        <Container className="relative h-full">
          <div className="absolute left-1/2 top-1/2 aspect-square w-[min(40vw,34rem)] -translate-x-1/2 -translate-y-1/2">
            <div
              className="absolute inset-0 rounded-full border border-[#073B3A]/10"
              aria-hidden="true"
            />

            <div data-orange-whole className="absolute inset-[5%]">
              <Image
                src="/images/ingredients/orange-whole.png"
                alt=""
                fill
                sizes="34rem"
                className="object-contain"
              />
            </div>

            <div data-orange-slice className="absolute inset-[5%]">
              <Image
                src="/images/ingredients/orange-slice.png"
                alt=""
                fill
                sizes="34rem"
                className="object-contain"
              />
            </div>

            <div data-journey-product className="absolute -inset-[5%]">
              <Image
                src="/images/about/vivaya-cup.png"
                alt=""
                fill
                sizes="34rem"
                className="object-contain drop-shadow-[0_35px_40px_rgba(0,0,0,0.20)]"
              />
            </div>
          </div>

          {scenes.map((scene, index) => (
            <article
              key={scene.number}
              data-scene
              className="pointer-events-none absolute inset-0"
            >
              <span
                className={`absolute top-10 text-[10px] font-black tracking-[0.3em] ${
                  index < 2 ? "text-[#073B3A]/35" : "text-white/35"
                }`}
              >
                {scene.number} / 04
              </span>

              <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 items-center justify-between">
                <h2
                  data-scene-text
                  className="max-w-[42%] text-[clamp(4rem,8vw,9rem)] font-black uppercase leading-[0.76] tracking-[-0.08em] text-[#073B3A]"
                >
                  {scene.left}
                </h2>

                <h2
                  data-scene-text
                  className="max-w-[42%] text-right text-[clamp(4rem,8vw,9rem)] font-black uppercase leading-[0.76] tracking-[-0.08em] text-[#073B3A]"
                >
                  {scene.right}
                </h2>
              </div>

              <p
                data-scene-copy
                className={`absolute bottom-14 max-w-xs text-sm leading-6 ${
                  index < 2 ? "text-[#073B3A]/60" : "text-white/60"
                } ${
                  index % 2 === 0 ? "left-0" : "right-0 text-right"
                }`}
              >
                {scene.copy}
              </p>
            </article>
          ))}

          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-[0.32em] text-current opacity-30">
            Sigue explorando
          </p>
        </Container>
        <WaveDivider fill="#F6D98B" variant="soft" className="absolute -bottom-px inset-x-0 z-40" />
      </section>

      <MobileJourney />
    </div>
  );
}

function MobileJourney() {
  return (
    <section className="relative overflow-hidden bg-[#E9F5EE] pb-40 pt-24 md:hidden">
      <Container>
        <div className="relative mx-auto mb-20 aspect-square max-w-xs">
          <div className="absolute inset-[4%] rounded-full bg-[#FFF7E8]" />

          <Image
            src="/images/about/vivaya-cup.png"
            alt="Producto Vivaya"
            fill
            sizes="320px"
            className="relative z-10 object-contain p-8"
          />
        </div>

        <div className="space-y-16">
          {scenes.map((scene) => (
            <article
              key={scene.number}
              className="border-t border-[#073B3A]/15 pt-6"
            >
              <span className="text-[10px] font-black tracking-[0.25em] text-[#FF8A00]">
                {scene.number}
              </span>

              <div className="mt-3 flex flex-wrap gap-x-2 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#073B3A]">
                <span>{scene.left}</span>
                <span>{scene.right}</span>
              </div>

              <p className="mt-5 max-w-sm leading-7 text-[#073B3A]/65">
                {scene.copy}
              </p>
            </article>
          ))}
        </div>
      </Container>
      <WaveDivider fill="#F6D98B" variant="soft" className="absolute -bottom-px inset-x-0" />
    </section>
  );
}
