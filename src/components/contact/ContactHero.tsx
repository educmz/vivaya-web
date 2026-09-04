"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;
const channels = ["Teléfono", "Correo", "Redes sociales", "Escríbenos"];

export function ContactHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden text-[#FFF7E8]">
      <Image src="/images/about/about-team.webp" alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3E2A1B]/85 via-[#3E2A1B]/60 to-[#3E2A1B]/90" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8792E]/20 blur-[110px]" aria-hidden="true" />

      <Container className="relative flex min-h-[60svh] flex-col items-center justify-center py-20 text-center">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }} className="flex items-center gap-4">
          <span className="h-px w-10 bg-[#FFF7E8]/30" />
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#C88B4A]">Contacto Vivaya</span>
          <span className="h-px w-10 bg-[#FFF7E8]/30" />
        </motion.div>

        <div className="mt-6 overflow-hidden pb-4">
          <motion.h1 initial={reducedMotion ? false : { y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease }} className="font-accent text-[clamp(5rem,14vw,10rem)] leading-[0.85] text-[#E8792E]">
            Contacto
          </motion.h1>
        </div>

        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="mt-3 max-w-md text-base leading-7 text-[#FFF7E8]/80 sm:text-lg"
        >
          ¿Tienes una pregunta o quieres saber más? Escríbenos, nos encanta conversar.
        </motion.p>
      </Container>

      <ContactTicker />
    </section>
  );
}

function ContactTicker() {
  const repeated = [...channels, ...channels, ...channels, ...channels];

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
