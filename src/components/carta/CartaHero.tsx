"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

export function CartaHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#073B3A] text-[#FFF7E8]">
      <Container className="relative grid min-h-[68svh] items-center gap-8 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* TEXTO */}
        <div className="relative z-20">
          <motion.div
            animate={
              reducedMotion
                ? undefined
                : { y: [0, -8, 0] }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="mt-6 overflow-hidden pb-4">
              <motion.h1
                initial={reducedMotion ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease }}
                className="font-accent text-[clamp(8rem,18vw,17rem)] leading-[0.85] text-[#FFF7E8]"
              >
                Carta
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease,
            }}
            className="mt-7 flex flex-col gap-5"
          >
            <p className="max-w-sm text-base font-normal leading-7 text-[#FFF7E8]/65 sm:text-lg">
              Explora nuestra selección y encuentra tu próximo favorito.
            </p>
          </motion.div>
        </div>

        {/* PRODUCTO */}
        <div className="relative flex min-h-[28rem] items-center justify-center lg:min-h-[34rem]">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : { scale: [1, 1.05, 1] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-full rounded-full bg-[#FF8A00]"
            />
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease }}
            className="absolute left-1/2 top-1/2 aspect-square w-[97%] -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : { scale: [1, 1.035, 1], rotate: [0, 4, 0] }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-full rounded-full border border-[#FFF7E8]/10"
            />
          </motion.div>

          {/* vaso central */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 90,
                    rotate: -6,
                    scale: 0.85,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              rotate: -4,
              scale: 1,
            }}
            transition={{
              duration: 0.95,
              delay: 0.35,
              ease,
            }}
            className="relative z-10 h-[28rem] w-[17rem] lg:h-[34rem] lg:w-[20rem]"
          >
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : { y: [0, -18, 0], rotate: [-4, -1, -4] }
              }
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/about/vivaya-cup.png"
                alt="Vivaya"
                fill
                priority
                sizes="(max-width: 1024px) 17rem, 20rem"
                className="object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.25)]"
              />
            </motion.div>
          </motion.div>

          {/* rodaja arriba a la izquierda */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, scale: 0.5, rotate: -25 }
            }
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="absolute left-[3%] top-[13%] z-20 h-28 w-28 sm:h-36 sm:w-36"
          >
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : { y: [0, -12, 0], rotate: [-7, -3, -7] }
              }
              transition={{
                repeat: Infinity,
                duration: 5.5,
                ease: "easeInOut",
              }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/ingredients/orange-slice.png"
                alt=""
                fill
                sizes="144px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* naranja entera abajo a la derecha */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, scale: 0.5, rotate: 25 }
            }
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.68, ease }}
            className="absolute bottom-[8%] right-[1%] z-20 h-32 w-32 sm:h-40 sm:w-40"
          >
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : { y: [0, 10, 0], rotate: [8, 13, 8] }
              }
              transition={{
                repeat: Infinity,
                duration: 6.5,
                ease: "easeInOut",
              }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/ingredients/orange-whole.png"
                alt=""
                fill
                sizes="160px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: -16, scale: 0.85 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.85, ease }}
            className="absolute right-[0%] top-[12%] z-30 hidden rotate-6 rounded-full bg-[#FFF7E8] px-5 py-3 text-xs font-black uppercase tracking-[0.17em] text-[#073B3A] xl:block"
          >
            <motion.span
              className="inline-block"
              animate={
                reducedMotion
                  ? undefined
                  : { y: [0, -6, 0] }
              }
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Fruta real
            </motion.span>
          </motion.div>

          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 16, scale: 0.85 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.95, ease }}
            className="absolute bottom-[15%] left-[-3%] z-30 hidden -rotate-5 rounded-full bg-[#FF8A00] px-5 py-3 text-xs font-black uppercase tracking-[0.17em] text-[#073B3A] shadow-lg shadow-black/10 xl:block"
          >
            <motion.span
              className="inline-block"
              animate={
                reducedMotion
                  ? undefined
                  : { y: [0, 6, 0] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Bienestar para llevar
            </motion.span>
          </motion.div>
        </div>
      </Container>

      <CartaTicker />
    </section>
  );
}

function CartaTicker() {
  const labels = [
    "Jugos",
    "Cremoladas",
    "Healthy",
    "Vivaya",
    "Jugos",
    "Cremoladas",
    "Healthy",
    "Vivaya",
  ];

  return (
    <div className="overflow-hidden border-y border-[#FFF7E8]/15 bg-[#FF8A00] py-4 text-[#073B3A]">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: labels.length * 3,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex w-max whitespace-nowrap"
      >
        {[...labels, ...labels].map((label, index) => (
          <div
            key={`${label}-${index}`}
            className="flex items-center gap-7 pr-7 text-sm font-black uppercase tracking-[0.2em]"
          >
            <span>{label}</span>
            <span className="text-[#073B3A]/40">●</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}