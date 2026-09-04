"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { Container } from "@/components/ui/Container";
import { aboutTimeline } from "@/data/about";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getGsap } from "@/lib/gsap";

export function AboutTimeline() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const firstStory = aboutTimeline[0];
  const remainingStories = aboutTimeline.slice(1);

  useLayoutEffect(() => {
    if (reducedMotion || !rootRef.current) return;

    const { gsap } = getGsap();
    const root = rootRef.current;

    const ctx = gsap.context(() => {
      /* -------------------------
         PORTADA / PRIMERA HISTORIA
      -------------------------- */

      gsap.set("[data-history-line]", {
        yPercent: 115,
      });

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "[data-history-intro]",
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      introTimeline
        .to("[data-history-line]", {
          yPercent: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        })
        .from(
          "[data-history-intro-copy]",
          {
            opacity: 0,
            y: 35,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          "[data-history-hero]",
          {
            opacity: 0,
            y: 150,
            scale: 0.9,
            rotate: -4,
            duration: 1.15,
            ease: "power4.out",
          },
          "-=0.8",
        )
        .from(
          "[data-history-first-copy]",
          {
            opacity: 0,
            y: 45,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55",
        );

      /* Parallax de la foto protagonista */
      gsap.fromTo(
        "[data-history-hero-image]",
        {
          scale: 1.08,
          yPercent: -4,
        },
        {
          scale: 1,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-history-intro]",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );

      /* -------------------------
         ESCENAS 02 - 04
      -------------------------- */

      const cards =
        root.querySelectorAll<HTMLElement>("[data-history-card]");

      cards.forEach((card) => {
        const image = card.querySelector<HTMLElement>(
          "[data-history-image]",
        );

        const copy = card.querySelector<HTMLElement>(
          "[data-history-copy]",
        );

        const number = card.querySelector<HTMLElement>(
          "[data-history-number]",
        );

        if (image) {
          gsap.fromTo(
            image,
            {
              scale: 1.12,
              rotate: -3,
            },
            {
              scale: 1,
              rotate: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        }

        if (copy) {
          gsap.fromTo(
            copy,
            {
              y: 80,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 72%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        if (number) {
          gsap.fromTo(
            number,
            {
              yPercent: 30,
            },
            {
              yPercent: -18,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={rootRef}
      className="relative overflow-clip bg-[#FFF7E8]"
    >
      {/* ==================================================
          INTRO + PRIMERA HISTORIA
      ================================================== */}

      <div
        data-history-intro
        className="relative min-h-[100svh] overflow-hidden"
      >
        <Container className="relative grid min-h-[100svh] grid-cols-12 items-start py-20 lg:py-24">
          {/* Título */}
          <div className="relative z-20 col-span-12 lg:col-span-7">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FF8A00]">
              Nuestra historia
            </p>

            <h2 className="mt-5 text-[clamp(4rem,8vw,8.8rem)] font-black uppercase leading-[0.76] tracking-[-0.085em] text-[#073B3A]">
              <span className="block overflow-hidden pb-[0.05em]">
                <span data-history-line className="block">
                  Todo tiene
                </span>
              </span>

              <span className="block overflow-hidden pb-[0.05em]">
                <span data-history-line className="block">
                  un comienzo.
                </span>
              </span>
            </h2>
          </div>

          {/* Texto introductorio */}
          <p
            data-history-intro-copy
            className="col-span-12 mt-8 max-w-lg text-base leading-7 text-[#073B3A]/62 lg:col-span-4 lg:col-start-9 lg:mt-24"
          >
            Vivaya sigue evolucionando con una misma intención: acercar
            bienestar y frescura a momentos cada vez más cotidianos.
          </p>

          {/* Foto protagonista */}
          <div
            data-history-hero
            className="relative z-10 col-span-11 col-start-2 mt-14 lg:col-span-8 lg:col-start-3 lg:mt-10"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-[3px] border-[#073B3A] bg-white p-3 shadow-[0_30px_70px_rgba(7,59,58,0.12)] sm:p-4">
              <div className="relative h-full overflow-hidden">
                <div
                  data-history-hero-image
                  className="absolute inset-0"
                >
                  <Image
                    src={firstStory.image}
                    alt={firstStory.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 95vw, 70vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Primer número */}
            <span className="pointer-events-none absolute -bottom-12 -left-5 z-20 select-none text-[8rem] font-black leading-none tracking-[-0.1em] text-[#FF8A00] sm:text-[11rem] lg:-bottom-20 lg:text-[15rem]">
              {firstStory.number}
            </span>
          </div>

          {/* Primer capítulo */}
          <div
            data-history-first-copy
            className="relative z-20 col-span-11 col-start-2 mt-20 border-t border-[#073B3A]/15 pt-8 lg:col-span-5 lg:col-start-7 lg:mt-24"
          >
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#FF8A00]">
              {firstStory.label}
            </span>

            <h3 className="mt-4 text-[clamp(2.8rem,5vw,5.4rem)] font-black uppercase leading-[0.84] tracking-[-0.065em] text-[#073B3A]">
              {firstStory.title}
            </h3>

            <p className="mt-6 max-w-lg leading-7 text-[#073B3A]/62">
              {firstStory.description}
            </p>
          </div>
        </Container>
      </div>

      {/* ==================================================
          RESTO DE LA HISTORIA
      ================================================== */}

      <div className="relative">
        {remainingStories.map((item, index) => {
          const reversed = index % 2 === 0;

          return (
            <div
              key={item.number}
              className="relative min-h-[88svh]"
            >
              <article
                data-history-card
                className="sticky top-20 flex min-h-[76svh] items-center overflow-hidden border-t border-[#073B3A]/10 bg-[#FFF7E8]"
              >
                <Container className="relative grid gap-12 py-14 lg:grid-cols-12 lg:items-center">
                  <div
                    className={`relative lg:col-span-6 ${
                      reversed
                        ? "lg:col-start-7"
                        : "lg:col-start-1"
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border-[3px] border-[#073B3A] bg-white p-3 shadow-[0_20px_50px_rgba(7,59,58,0.08)]">
                      <div className="relative h-full overflow-hidden">
                        <div
                          data-history-image
                          className="absolute inset-0"
                        >
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <span
                      data-history-number
                      className={`pointer-events-none absolute -bottom-12 select-none text-[9rem] font-black leading-none tracking-[-0.1em] text-[#FF8A00] sm:text-[12rem] lg:text-[15rem] ${
                        reversed ? "-left-6" : "-right-3"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  <div
                    data-history-copy
                    className={`relative z-10 lg:col-span-5 ${
                      reversed
                        ? "lg:col-start-1 lg:row-start-1"
                        : "lg:col-start-8"
                    }`}
                  >
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-[#FF8A00]">
                      {item.label}
                    </span>

                    <h3 className="mt-5 max-w-xl text-[clamp(3rem,5vw,5.6rem)] font-black uppercase leading-[0.84] tracking-[-0.065em] text-[#073B3A]">
                      {item.title}
                    </h3>

                    <p className="mt-7 max-w-lg text-base leading-7 text-[#073B3A]/62">
                      {item.description}
                    </p>
                  </div>
                </Container>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}