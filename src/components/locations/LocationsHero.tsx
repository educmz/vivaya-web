"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { locations } from "@/data/locations";

const ease = [0.22, 1, 0.36, 1] as const;

export function LocationsHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#FFF7E8] text-[#3E2A1B]">
      <motion.div
        animate={reducedMotion ? undefined : { scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[6%] top-1/3 -z-0 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-[#E8792E]/20 blur-[110px]"
        aria-hidden="true"
      />

      <Container className="relative grid min-h-[68svh] items-center gap-8 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* Texto */}
        <div className="relative z-20">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="flex items-center gap-4"
          >
            <motion.span
              animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-4"
            >
              <span className="h-px w-10 bg-[#3E2A1B]/25" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#3F7D4F]">Locales Vivaya</span>
            </motion.span>
          </motion.div>

          <div className="mt-6 overflow-hidden pb-4">
            <motion.h1
              initial={reducedMotion ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease }}
              className="font-accent text-[clamp(6rem,14vw,13rem)] leading-[0.95] text-[#E8792E]"
            >
              <motion.span
                className="inline-block"
                animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Locales
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-7 max-w-sm text-base font-normal leading-7 text-[#3E2A1B]/70 sm:text-lg"
          >
            <motion.span
              className="block"
              animate={reducedMotion ? undefined : { y: [0, 5, 0] }}
              transition={{ duration: 5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
            >
              Ven a probar el frescor de lo natural en el local más cercano a ti.
            </motion.span>
          </motion.p>
        </div>

        {/* Producto */}
        <div className="relative flex min-h-[28rem] items-center justify-center lg:min-h-[34rem]">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <motion.div
              animate={reducedMotion ? undefined : { scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full rounded-full bg-[#E8792E]"
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
              animate={reducedMotion ? undefined : { scale: [1, 1.035, 1], rotate: [0, 4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full rounded-full border border-[#3E2A1B]/15"
            />
          </motion.div>

          {/* Vaso */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 90, rotate: -6, scale: 0.85 }
            }
            animate={{ opacity: 1, y: 0, rotate: -4, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.35, ease }}
            className="relative z-10 h-[28rem] w-[17rem] lg:h-[34rem] lg:w-[20rem]"
          >
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, -16, 0], rotate: [-4, -1, -4] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/about/vivaya-cup.png"
                alt="Vivaya"
                fill
                priority
                sizes="(max-width: 1024px) 17rem, 20rem"
                className="object-contain drop-shadow-[0_30px_45px_rgba(62,42,27,0.25)]"
              />
            </motion.div>
          </motion.div>

          {/* Rodaja */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.5, rotate: -25 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="absolute left-[3%] top-[13%] z-20 h-24 w-24 sm:h-28 sm:w-28"
          >
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, -12, 0], rotate: [-7, -3, -7] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image src="/images/ingredients/orange-slice.png" alt="" fill sizes="112px" className="object-contain drop-shadow-[0_16px_18px_rgba(62,42,27,0.18)]" />
            </motion.div>
          </motion.div>

          {/* Hoja */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.5, rotate: 25 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.68, ease }}
            className="absolute bottom-[8%] right-[1%] z-20 h-20 w-20 sm:h-24 sm:w-24"
          >
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, 10, 0], rotate: [8, 13, 8] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image src="/images/products/Hojas/Hoja1.png" alt="" fill sizes="96px" className="object-contain" />
            </motion.div>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: -16, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.85, ease }}
            className="absolute right-[0%] top-[10%] z-30 hidden rotate-6 rounded-full bg-[#3E2A1B] px-5 py-3 text-xs font-black uppercase tracking-[0.17em] text-[#FFF7E8] xl:block"
          >
            <motion.span
              className="inline-block"
              animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            >
              Cerca de ti
            </motion.span>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.95, ease }}
            className="absolute bottom-[13%] left-[-3%] z-30 hidden -rotate-5 rounded-full bg-[#E8792E] px-5 py-3 text-xs font-black uppercase tracking-[0.17em] text-[#3E2A1B] shadow-lg shadow-[#3E2A1B]/10 xl:block"
          >
            <motion.span
              className="inline-block"
              animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Abierto todos los días
            </motion.span>
          </motion.div>
        </div>
      </Container>

      <LocationsTicker />
    </section>
  );
}

function LocationsTicker() {
  const labels = locations.filter((location) => location.active).map((location) => location.name);
  const repeated = [...labels, ...labels, ...labels, ...labels];

  return (
    <div className="relative overflow-hidden border-y border-[#3E2A1B]/15 bg-[#3F7D4F] py-4 text-[#FFF7E8]">
      <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 20, ease: "linear", repeat: Infinity }} className="flex w-max whitespace-nowrap">
        {[...repeated, ...repeated].map((label, index) => (
          <div key={`${label}-${index}`} className="flex items-center gap-7 pr-7 text-sm font-black uppercase tracking-[0.2em]">
            <span>{label}</span>
            <span className="text-[#FFF7E8]/40">●</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
