"use client";

import {
  CircleDot,
  Clock3,
  HeartPulse,
  Snowflake,
  Sparkles,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { useLayoutEffect, useRef } from "react";

import { Container } from "@/components/ui/Container";
import { aboutValues } from "@/data/about";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getGsap } from "@/lib/gsap";

const iconMap: LucideIcon[] = [
  CircleDot,
  Zap,
  Snowflake,
  HeartPulse,
  Sparkles,
  Clock3,
];

const palettes = [
  {
    card: "#FFF7E8",
    visual: "#FF8A00",
    text: "#073B3A",
    icon: "#FFF7E8",
    back: "#FFB347",
  },
  {
    card: "#FFF7E8",
    visual: "#073B3A",
    text: "#073B3A",
    icon: "#FFB347",
    back: "#E9F5EE",
  },
  {
    card: "#FFF7E8",
    visual: "#0F6B6D",
    text: "#073B3A",
    icon: "#FFF7E8",
    back: "#FF8A00",
  },
  {
    card: "#FFF7E8",
    visual: "#FFB347",
    text: "#073B3A",
    icon: "#073B3A",
    back: "#0F6B6D",
  },
  {
    card: "#FFF7E8",
    visual: "#FF8A00",
    text: "#073B3A",
    icon: "#073B3A",
    back: "#E9F5EE",
  },
  {
    card: "#FFF7E8",
    visual: "#073B3A",
    text: "#073B3A",
    icon: "#FFF7E8",
    back: "#FFB347",
  },
] as const;

const rotations = [-2.2, 1.8, -1.2, 2.1, -1.8, 1.4];

export function AboutValues() {
  const rootRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (
      reducedMotion ||
      !rootRef.current ||
      !trackRef.current ||
      !introRef.current
    ) {
      return;
    }

    const { gsap } = getGsap();

    const root = rootRef.current;
    const intro = introRef.current;
    const track = trackRef.current;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      /* -----------------------------
         ANIMACIÓN DE INTRO
      ------------------------------ */

      gsap.set("[data-values-line]", {
        yPercent: 115,
      });

      gsap.set("[data-vivaya-path]", {
        attr: {
          strokeDashoffset: 1,
        },
      });

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      introTimeline
        .to("[data-values-line]", {
          yPercent: 0,
          stagger: 0.1,
          duration: 0.95,
          ease: "power4.out",
        })
        .from(
          "[data-values-copy]",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          "[data-vivaya-fruit]",
          {
            opacity: 0,
            scale: 0.55,
            rotate: -14,
            transformOrigin: "50% 50%",
            duration: 1,
            ease: "back.out(1.4)",
          },
          "-=0.7",
        )
        .to(
          "[data-vivaya-path]",
          {
            attr: {
              strokeDashoffset: 0,
            },
            duration: 1,
            stagger: 0.12,
            ease: "power2.inOut",
          },
          "-=0.65",
        );

      /* -----------------------------
         SCROLL HORIZONTAL
      ------------------------------ */

      mm.add("(min-width: 768px)", () => {
        const getDistance = () =>
          Math.max(
            0,
            track.scrollWidth -
              window.innerWidth +
              window.innerWidth * 0.08,
          );

        gsap.set(track, {
  yPercent: 105,
});

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: () =>
  `+=${getDistance() + window.innerHeight * 2.4}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        /* Las cards suben desde abajo */
        // 1. Primero desaparece completamente la portada
// FASE 1 — dejamos respirar la portada.
// Este tween no cambia visualmente nada:
// solo reserva recorrido de scroll.
timeline.to(
  {},
  {
    duration: 1.15,
  },
);

// Durante ese tiempo la naranja tiene un movimiento mínimo.
timeline.to(
  "[data-vivaya-mark]",
  {
    rotate: 3,
    scale: 1.035,
    duration: 1.15,
    ease: "none",
  },
  0,
);

// FASE 2 — ahora sí retiramos la portada.
timeline.to(
  intro,
  {
    yPercent: -10,
    autoAlpha: 0,
    duration: 0.55,
    ease: "power2.inOut",
  },
);

// FASE 3 — recién cuando la portada ya salió,
// hacemos entrar las cards.
timeline.to(
  track,
  {
    yPercent: 0,
    duration: 0.8,
    ease: "power3.out",
  },
  ">-0.04",
);

// Breve momento para ver las cards ya colocadas.
timeline.to(
  {},
  {
    duration: 0.3,
  },
);

// FASE 4 — comienza el horizontal.
timeline.to(
  track,
  {
    x: () => -getDistance(),
    duration: 3,
    ease: "none",
  },
);
      });
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section className="overflow-hidden bg-[#FFF7E8]">
      {/* ==================================================
          DESKTOP EXPERIENCE
      ================================================== */}

      <div
        ref={rootRef}
        className="relative hidden h-screen overflow-hidden bg-[#FFF7E8] md:block"
      >
        {/* Intro */}
        <div
          ref={introRef}
          className="absolute inset-0 z-10"
        >
          <Container className="grid h-full grid-cols-12 items-center">
            {/* Texto */}
            <div className="relative z-20 col-span-7">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#FF8A00]">
                Nuestra esencia
              </p>

              <h2 className="mt-5 font-accent text-[clamp(4rem,7vw,8rem)] leading-[0.95] text-[#073B3A]">
                <span className="block overflow-hidden pb-[0.1em]">
                  <span data-values-line className="block leading-[0.95]">
                    Lo natural
                  </span>
                </span>

                <span className="block overflow-hidden pb-[0.1em]">
                  <span data-values-line className="block leading-[0.95]">
                    se siente.
                  </span>
                </span>
              </h2>

              <p
  data-values-copy
  className="mt-6 max-w-sm text-base leading-7 text-[#073B3A]/62"
>
                Seis ideas que definen la manera en que Vivaya entiende
                bienestar, movimiento y conveniencia.
              </p>
            </div>

            {/* Ilustración propia */}
            <div className="col-span-5 flex items-center justify-center">
              <div
                data-vivaya-mark
                className="relative aspect-square w-[min(38vw,34rem)]"
              >
                <VivayaEssenceMark />
              </div>
            </div>
          </Container>
        </div>

        {/* Cards que nacen desde abajo */}
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2">
          <div
            ref={trackRef}
            className="flex w-max items-center gap-7 px-[max(2rem,calc((100vw-76rem)/2))] pr-[12vw]"
          >
            {aboutValues.map((value, index) => {
              const Icon = iconMap[index];
              const palette = palettes[index];

              return (
                <div
                  key={value.number}
                  className="relative shrink-0"
                >
                  <div
                    style={{
                      backgroundColor: palette.back,
                      rotate: `${rotations[index] * -1.5}deg`,
                    }}
                    className="absolute inset-0 translate-x-3 translate-y-3 border border-[#073B3A]"
                    aria-hidden="true"
                  />

                  <motion.article
                    style={{
                      backgroundColor: palette.card,
                      color: palette.text,
                      rotate: `${rotations[index]}deg`,
                    }}
                    whileHover={{
                      y: -12,
                      rotate: "0deg",
                      scale: 1.01,
                    }}
                    transition={{
                      duration: 0.42,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex h-[35rem] w-[27rem] flex-col border border-[#073B3A] p-4 shadow-[0_16px_35px_rgba(7,59,58,0.07)] lg:h-[37rem] lg:w-[28rem]"
                  >
                    <div
                      style={{
                        backgroundColor: palette.visual,
                      }}
                      className="relative flex h-[57%] items-center justify-center overflow-hidden border border-[#073B3A]"
                    >
                      <div
                        className="absolute inset-[10%] rounded-full border border-current opacity-20"
                        aria-hidden="true"
                      />

                      <motion.div
                        animate={
                          reducedMotion
                            ? undefined
                            : {
                                rotate: [0, 7, 0],
                                y: [0, -7, 0],
                              }
                        }
                        transition={{
                          duration: 4.8 + index * 0.18,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon
                          size={150}
                          strokeWidth={1.35}
                          style={{
                            color: palette.icon,
                          }}
                        />
                      </motion.div>

                      <span
                        style={{
                          color: palette.icon,
                        }}
                        className="absolute left-5 top-5 text-xs font-black tracking-[0.24em]"
                      >
                        {value.number} / 06
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col px-3 pb-2 pt-6">
                      <h3 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em]">
                        {value.title}
                      </h3>

                      <p className="mt-4 max-w-sm leading-7 text-[#073B3A]/60">
                        {value.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t border-[#073B3A]/15 pt-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#073B3A]/45">
                          Vivaya
                        </span>

                        <span className="text-lg text-[#FF8A00]">
                          →
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2 text-[9px] font-black uppercase tracking-[0.3em] text-[#073B3A]/40">
          Sigue explorando →
        </div>
      </div>

      {/* ==================================================
          MOBILE
      ================================================== */}

      <div className="md:hidden">
        <div className="bg-[#FFF7E8] px-5 pb-16 pt-20">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FF8A00]">
            Nuestra esencia
          </p>

          <h2 className="mt-4 font-accent text-5xl leading-[0.95] text-[#073B3A]">
            Lo natural
            <br />
            se siente.
          </h2>

          <div className="mx-auto mt-10 aspect-square max-w-xs">
            <VivayaEssenceMark />
          </div>
        </div>

        <div className="space-y-5 bg-[#FFF7E8] px-5 pb-16">
          {aboutValues.map((value, index) => {
            const Icon = iconMap[index];
            const palette = palettes[index];

            return (
              <motion.article
                key={value.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundColor: palette.card,
                }}
                className="border border-[#073B3A] p-3"
              >
                <div
                  style={{
                    backgroundColor: palette.visual,
                  }}
                  className="relative flex aspect-[4/3] items-center justify-center border border-[#073B3A]"
                >
                  <Icon
                    size={120}
                    strokeWidth={1.4}
                    style={{
                      color: palette.icon,
                    }}
                  />

                  <span
                    style={{
                      color: palette.icon,
                    }}
                    className="absolute left-4 top-4 text-[10px] font-black tracking-[0.22em]"
                  >
                    {value.number} / 06
                  </span>
                </div>

                <div className="px-2 pb-4 pt-6">
                  <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#073B3A]">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#073B3A]/60">
                    {value.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   ILUSTRACIÓN VIVAYA
===================================================== */

function VivayaEssenceMark() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="h-full w-full overflow-visible"
      aria-hidden="true"
    >
      {/* anillo exterior */}
      <circle
        cx="300"
        cy="300"
        r="245"
        fill="none"
        stroke="#FF8A00"
        strokeWidth="2"
        opacity="0.25"
      />

      {/* fruta */}
      <circle
        data-vivaya-fruit
        cx="300"
        cy="320"
        r="155"
        fill="#FF8A00"
      />

      {/* highlight */}
      <circle
        cx="260"
        cy="270"
        r="95"
        fill="#FFB347"
        opacity="0.45"
      />

      {/* curva verde */}
      <path
        data-vivaya-path
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        d="M150 300 C195 175 270 170 300 320 C330 470 405 465 450 300"
        fill="none"
        stroke="#073B3A"
        strokeWidth="30"
        strokeLinecap="round"
      />

      {/* curva naranja / crema */}
      <path
        data-vivaya-path
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        d="M180 210 C240 140 365 155 420 220"
        fill="none"
        stroke="#FFF7E8"
        strokeWidth="24"
        strokeLinecap="round"
      />

      {/* hoja */}
      <path
        data-vivaya-path
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        d="M300 160 C330 100 395 90 425 125 C390 175 345 190 300 160Z"
        fill="#0F6B6D"
        stroke="#0F6B6D"
        strokeWidth="5"
      />
    </svg>
  );
}