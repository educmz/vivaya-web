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
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="flex items-center gap-4"
          >
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F36B21]">
              Carta Vivaya
            </span>

            <span className="h-px w-12 bg-[#FFF7E8]/30" />

            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#FFF7E8]/45">
              Temporada
            </span>
          </motion.div>

          <div className="mt-6 overflow-hidden pb-4">
            <motion.h1
              initial={reducedMotion ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease }}
              className="font-accent text-[clamp(6rem,14vw,13rem)] leading-[0.85] text-[#FFF7E8]"
            >
              Carta
            </motion.h1>
          </div>

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

            <div className="flex gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#FFF7E8]/55">
              <span>Jugos</span>
              <span className="text-[#F36B21]">●</span>
              <span>Cremoladas</span>
              <span className="text-[#F36B21]">●</span>
              <span>Healthy</span>
            </div>
          </motion.div>
        </div>

        {/* PRODUCTOS FLOTANTES */}
        <div className="relative min-h-[28rem] lg:min-h-[34rem]">
          {/* gran círculo */}
          <motion.div
            initial={reducedMotion ? false : { scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease,
            }}
            className="absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F36B21] sm:h-[29rem] sm:w-[29rem]"
          />

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
            whileHover={
              reducedMotion
                ? undefined
                : {
                    y: -14,
                    rotate: -1,
                    scale: 1.04,
                  }
            }
            className="absolute bottom-[-6%] left-[17%] z-20 h-[28rem] w-[17rem] lg:h-[34rem] lg:w-[20rem]"
          >
            <Image
              src="/images/about/vivaya-cup.png"
              alt="Vivaya"
              fill
              priority
              className="object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.25)]"
            />
          </motion.div>

          {/* producto secundario */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 70,
                    x: 45,
                    rotate: 10,
                    scale: 0.8,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              rotate: 7,
              scale: 1,
            }}
            transition={{
              duration: 0.95,
              delay: 0.48,
              ease,
            }}
            whileHover={
              reducedMotion
                ? undefined
                : {
                    y: -10,
                    rotate: 3,
                  }
            }
            className="absolute bottom-[4%] right-[2%] z-30 h-[15rem] w-[12rem] lg:h-[20rem] lg:w-[15rem]"
          >
            <Image
              src="/images/products/Jugos/3.png"
              alt=""
              fill
              className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
            />
          </motion.div>

          {/* rodaja */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.6,
                    rotate: -25,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -10,
            }}
            transition={{
              duration: 0.8,
              delay: 0.65,
              ease,
            }}
            className="absolute right-[8%] top-[4%] z-10 h-28 w-28 lg:h-36 lg:w-36"
          >
            <Image
              src="/images/ingredients/orange-slice.png"
              alt=""
              fill
              className="object-contain"
            />
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
    <div className="overflow-hidden border-y border-[#FFF7E8]/15 bg-[#F36B21] py-4 text-[#FFF7E8]">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 24,
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
            <span className="text-[#FFF7E8]/50">●</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}