"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

export function CartaHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#FFF9F3]">
      <Container
        className="
          grid
          items-center
          gap-10
          pb-12
          pt-10
          sm:pb-16
          sm:pt-14
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-16
          lg:pb-20
          lg:pt-16
        "
      >
        {/* CONTENIDO */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
            ease,
          }}
          className="relative z-10"
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-[#FDE8D8]
              px-4
              py-2
              text-xs
              font-semibold
              tracking-[0.08em]
              text-[#C96532]
            "
          >
            VIVAYA
          </span>

          <h1
            className="
              mt-5
              max-w-xl
              text-5xl
              font-semibold
              leading-[0.95]
              tracking-[-0.045em]
              text-[#302E2A]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Nuestra carta
          </h1>

          <p
            className="
              mt-5
              max-w-md
              text-base
              leading-7
              text-[#77736D]
              sm:text-lg
            "
          >
            Encuentra algo rico para cada momento.
          </p>
        </motion.div>

        {/* VISUAL */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: reducedMotion ? 0 : 0.1,
            ease,
          }}
          className="
            relative
            min-h-[22rem]
            overflow-hidden
            rounded-[2rem]
            bg-[#F8C7AC]
            sm:min-h-[26rem]
            lg:min-h-[30rem]
          "
        >
          {/* fondo decorativo muy sutil */}
          <div
            aria-hidden="true"
            className="
              absolute
              -right-16
              -top-20
              h-64
              w-64
              rounded-full
              bg-[#F4DFA2]/70
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -bottom-24
              -left-20
              h-72
              w-72
              rounded-full
              bg-[#A8CFA3]/55
            "
          />

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              p-6
              sm:p-8
              lg:p-10
            "
          >
            <div
              className="
                relative
                h-full
                min-h-[20rem]
                w-full
                max-w-[28rem]
              "
            >
              <Image
                src="/images/about/vivaya-cup.png"
                alt="Producto Vivaya"
                fill
                priority
                sizes="
                  (max-width: 640px) 90vw,
                  (max-width: 1024px) 70vw,
                  480px
                "
                className="
                  object-contain
                  drop-shadow-[0_24px_35px_rgba(71,54,38,0.12)]
                "
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}