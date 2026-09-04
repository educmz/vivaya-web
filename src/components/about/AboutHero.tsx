"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getGsap } from "@/lib/gsap";

export function AboutHero() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const productX = useSpring(mouseX, {
    stiffness: 75,
    damping: 18,
  });

  const productY = useSpring(mouseY, {
    stiffness: 75,
    damping: 18,
  });

  useEffect(() => {
    if (reducedMotion || !rootRef.current) return;

    const { gsap } = getGsap();

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from("[data-hero-line]", {
          yPercent: 120,
          duration: 1.15,
          stagger: 0.12,
        })
        .from(
          "[data-hero-copy]",
          {
            opacity: 0,
            y: 24,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          "[data-hero-product]",
          {
            opacity: 0,
            y: 100,
            scale: 0.82,
            rotate: 5,
            duration: 1.25,
          },
          "-=1",
        )
        .from(
          "[data-hero-orbit]",
          {
            opacity: 0,
            scale: 0.7,
            duration: 1,
            stagger: 0.1,
          },
          "-=0.8",
        );
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 18);
    mouseY.set(y * 12);
  }

  function resetPointer() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      ref={rootRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative isolate min-h-[calc(100svh-6rem)] overflow-hidden bg-[#FFF7E8]"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[#FFB347]/20 blur-[90px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-36 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#0F6B6D]/10 blur-[100px]"
        aria-hidden="true"
      />

      <Container className="relative grid min-h-[calc(100svh-6rem)] items-center gap-12 py-14 lg:grid-cols-[1fr_.9fr] lg:py-16">
        <div className="relative z-20">
          <p
            data-hero-copy
            className="mb-6 text-xs font-black uppercase tracking-[0.26em] text-[#FF8A00]"
          >
            Nosotros · Vivaya
          </p>

          <h1 className="max-w-[15ch] text-[clamp(4rem,9vw,9.5rem)] font-black uppercase leading-[0.77] tracking-[-0.08em] text-[#073B3A]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span data-hero-line className="block">
                Activamos
              </span>
            </span>

            <span className="block overflow-hidden pb-[0.08em]">
              <span data-hero-line className="block text-[#FF8A00]">
                lo natural.
              </span>
            </span>
          </h1>

          <div
            data-hero-copy
            className="mt-8 grid max-w-xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end"
          >
            <p className="max-w-md text-base leading-7 text-[#073B3A]/68 sm:text-lg">
              Frescura, energía y bienestar pensados para acompañar el movimiento
              de todos los días.
            </p>

            <div className="hidden items-center gap-3 sm:flex">
              <span className="h-px w-10 bg-[#FF8A00]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#073B3A]/50">
                Explora
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[31rem] items-center justify-center lg:min-h-[44rem]">
          <div
            data-hero-orbit
            className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF8A00]"
            aria-hidden="true"
          />

          <div
            data-hero-orbit
            className="absolute left-1/2 top-1/2 aspect-square w-[97%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#073B3A]/10"
            aria-hidden="true"
          />

          <motion.div
            data-hero-product
            style={{
              x: productX,
              y: productY,
            }}
            className="relative z-10 h-[31rem] w-[18rem] sm:h-[37rem] sm:w-[22rem] lg:h-[44rem] lg:w-[26rem]"
          >
            <Image
              src="/images/about/vivaya-cup.png"
              alt="Producto Vivaya"
              fill
              priority
              sizes="(max-width: 768px) 18rem, 26rem"
              className="object-contain drop-shadow-[0_35px_35px_rgba(7,59,58,0.20)]"
            />
          </motion.div>

          <motion.div
            data-hero-orbit
            animate={
              reducedMotion
                ? undefined
                : {
                    y: [0, -12, 0],
                    rotate: [-7, -3, -7],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 5.5,
              ease: "easeInOut",
            }}
            className="absolute left-[3%] top-[13%] z-20 h-28 w-28 sm:h-36 sm:w-36"
          >
            <Image
              src="/images/ingredients/orange-slice.png"
              alt=""
              fill
              sizes="144px"
              className="object-contain"
            />
          </motion.div>

          <motion.div
            data-hero-orbit
            animate={
              reducedMotion
                ? undefined
                : {
                    y: [0, 10, 0],
                    rotate: [8, 13, 8],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 6.5,
              ease: "easeInOut",
            }}
            className="absolute bottom-[8%] right-[1%] z-20 h-32 w-32 sm:h-40 sm:w-40"
          >
            <Image
              src="/images/ingredients/orange-whole.png"
              alt=""
              fill
              sizes="160px"
              className="object-contain"
            />
          </motion.div>

          <div className="absolute right-[0%] top-[12%] z-30 hidden rotate-6 rounded-full bg-[#073B3A] px-5 py-3 text-xs font-black uppercase tracking-[0.17em] text-white xl:block">
            Fruta real
          </div>

          <div className="absolute bottom-[15%] left-[-3%] z-30 hidden -rotate-5 rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.17em] text-[#073B3A] shadow-lg shadow-[#073B3A]/5 xl:block">
            Bienestar para llevar
          </div>
        </div>
      </Container>

      <div
        className="absolute bottom-0 left-0 h-px w-full bg-[#073B3A]/10"
        aria-hidden="true"
      />
    </section>
  );
}