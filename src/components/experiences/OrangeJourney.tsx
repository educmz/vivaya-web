"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getGsap } from "@/lib/gsap";

const steps = [
  {
    eyebrow: "01",
    title: "Fruta real",
    description:
      "Todo comienza con aquello que reconocemos: fruta, color y sabor.",
  },
  {
    eyebrow: "02",
    title: "Frescura",
    description:
      "Una experiencia ligera, vibrante y pensada para sentirse natural.",
  },
  {
    eyebrow: "03",
    title: "Nutrición",
    description:
      "Ingredientes y propuestas que buscan acompañar una rutina activa.",
  },
  {
    eyebrow: "04",
    title: "Bienestar para llevar",
    description:
      "Lo natural se transforma en una opción práctica para cualquier momento.",
  },
];

export function OrangeJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const { gsap } = getGsap();

    const root = sectionRef.current;
    const stepElements =
      root.querySelectorAll<HTMLElement>("[data-journey-step]");

    const orange = root.querySelector<HTMLElement>("[data-orange]");
    const slice = root.querySelector<HTMLElement>("[data-slice]");
    const product = root.querySelector<HTMLElement>("[data-product]");

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(min-width: 768px)", () => {
        gsap.set(stepElements, {
          autoAlpha: 0,
          y: 45,
        });

        gsap.set(slice, {
          autoAlpha: 0,
          scale: 0.65,
          rotate: -25,
        });

        gsap.set(product, {
          autoAlpha: 0,
          scale: 0.72,
          y: 100,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        stepElements.forEach((element, index) => {
          const position = index * 1.15;

          timeline.to(
            element,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.28,
            },
            position,
          );

          if (index < stepElements.length - 1) {
            timeline.to(
              element,
              {
                autoAlpha: 0,
                y: -35,
                duration: 0.2,
              },
              position + 0.78,
            );
          }
        });

        timeline.to(
          orange,
          {
            rotate: 14,
            scale: 1.08,
            duration: 0.75,
          },
          0,
        );

        timeline.to(
          orange,
          {
            autoAlpha: 0,
            scale: 0.68,
            duration: 0.4,
          },
          1.15,
        );

        timeline.to(
          slice,
          {
            autoAlpha: 1,
            scale: 1,
            rotate: 0,
            duration: 0.55,
          },
          1.15,
        );

        timeline.to(
          slice,
          {
            rotate: 18,
            y: -30,
            duration: 0.65,
          },
          1.7,
        );

        timeline.to(
          slice,
          {
            autoAlpha: 0,
            scale: 0.72,
            y: -90,
            duration: 0.4,
          },
          2.3,
        );

        timeline.to(
          product,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.75,
          },
          2.3,
        );

        timeline.to(
          product,
          {
            rotate: -3,
            scale: 1.05,
            duration: 0.7,
          },
          3.3,
        );
      });
    }, sectionRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <>
      {/* Desktop / Tablet */}
      <section
        ref={sectionRef}
        className="relative hidden h-screen overflow-hidden bg-[#E9F5EE] md:block"
      >
        <Container className="relative h-full">
          <div className="absolute left-1/2 top-1/2 h-[min(54vw,34rem)] w-[min(54vw,34rem)] -translate-x-1/2 -translate-y-1/2">
            <div
              className="absolute inset-0 rounded-full border border-[#073B3A]/10"
              aria-hidden="true"
            />

            <div
              className="absolute inset-[8%] rounded-full bg-[#FFF7E8]"
              aria-hidden="true"
            />

            <div
              data-orange
              className="absolute inset-[13%]"
            >
              <Image
                src="/images/ingredients/orange-whole.png"
                alt=""
                fill
                sizes="34rem"
                className="object-contain"
              />
            </div>

            <div
              data-slice
              className="absolute inset-[12%]"
            >
              <Image
                src="/images/ingredients/orange-slice.png"
                alt=""
                fill
                sizes="34rem"
                className="object-contain"
              />
            </div>

            <div
              data-product
              className="absolute inset-[3%]"
            >
              <Image
                src="/images/about/vivaya-cup.png"
                alt=""
                fill
                sizes="34rem"
                className="object-contain drop-shadow-[0_30px_30px_rgba(7,59,58,0.16)]"
              />
            </div>
          </div>

          {steps.map((step, index) => (
            <article
              key={step.title}
              data-journey-step
              className={`absolute top-1/2 max-w-sm -translate-y-1/2 ${
                index % 2 === 0
                  ? "left-10 lg:left-16"
                  : "right-10 text-right lg:right-16"
              }`}
            >
              <span className="text-xs font-black tracking-[0.25em] text-[#FF8A00]">
                {step.eyebrow}
              </span>

              <h2 className="mt-3 text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#073B3A] lg:text-7xl">
                {step.title}
              </h2>

              <p
                className={`mt-5 max-w-xs leading-7 text-[#073B3A]/65 ${
                  index % 2 !== 0 ? "ml-auto" : ""
                }`}
              >
                {step.description}
              </p>
            </article>
          ))}

          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.3em] text-[#073B3A]/40">
            Sigue bajando
          </p>
        </Container>
      </section>

      {/* Mobile / Reduced complexity */}
      <section className="bg-[#E9F5EE] py-24 md:hidden">
        <Container>
          <div className="relative mx-auto mb-16 aspect-square max-w-xs rounded-full bg-[#FFF7E8]">
            <Image
              src="/images/about/vivaya-cup.png"
              alt="Producto Vivaya"
              fill
              sizes="320px"
              className="object-contain p-8"
            />
          </div>

          <div className="space-y-14">
            {steps.map((step) => (
              <article
                key={step.title}
                className="border-t border-[#073B3A]/15 pt-6"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#FF8A00]">
                  {step.eyebrow}
                </span>

                <h2 className="mt-2 text-4xl font-black uppercase tracking-[-0.05em] text-[#073B3A]">
                  {step.title}
                </h2>

                <p className="mt-4 max-w-md leading-7 text-[#073B3A]/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}