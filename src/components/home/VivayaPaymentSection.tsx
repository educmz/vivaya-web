"use client";

import { motion } from "motion/react";

import { WaveDivider } from "@/components/sections/WaveDivider";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const methods = [
  { name: "VISA", className: "text-[#1261A0] font-black italic" },
  { name: "Mastercard", className: "text-[#222] font-bold" },
  { name: "Apple Pay", className: "text-black font-semibold" },
  { name: "Google Pay", className: "text-[#5F6368] font-semibold" },
  { name: "Yape", className: "text-[#742284] font-black" },
  { name: "Plin", className: "text-[#00A7B5] font-black" },
];

export function VivayaPaymentSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate min-h-[105svh] overflow-hidden bg-[#E7EFE2] pb-44 pt-28 sm:pt-36">
      <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-white" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-110 702C170 520 344 821 630 682C840 580 876 358 1115 419C1284 462 1423 579 1540 456" fill="none" stroke="currentColor" strokeWidth="42" strokeLinecap="round" />
      </svg>

      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <motion.p initial={reduced ? false : { opacity: 0, rotate: -8 }} whileInView={{ opacity: 1, rotate: -5 }} viewport={{ once: true }} className="font-accent mr-auto w-fit text-3xl font-bold text-[#335C30] sm:text-4xl">Listo en pocos minutos</motion.p>
        <h2 className="font-heading mx-auto mt-3 max-w-5xl text-[clamp(4.2rem,9vw,9rem)] uppercase leading-[0.8] text-[#335C30]">No solo lo antojes.<br /><span className="text-[#86B96A]">Pruébalo.</span></h2>

        <div className="mt-16 flex w-full items-center justify-center gap-4 sm:mt-20 sm:gap-6 lg:gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={reduced ? false : { opacity: 0, y: index % 2 === 0 ? 70 : -50, scale: 0.7 }}
              whileInView={{ opacity: 1, y: index % 2 === 0 ? 20 : -20, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`grid aspect-square w-[22vw] max-w-48 min-w-24 shrink-0 place-items-center rounded-full bg-white p-4 text-center text-sm shadow-[0_18px_45px_rgba(51,92,48,0.08)] sm:text-lg ${index === 0 || index === methods.length - 1 ? "hidden lg:grid" : ""}`}
            >
              <span className={method.className}>{method.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div initial={reduced ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 flex justify-center">
          <Button href="/carta" className="min-h-14 bg-[#335C30] px-9 text-white hover:bg-[#467742]">Ver la carta</Button>
        </motion.div>
        <p className="font-accent ml-auto mt-10 w-fit rotate-[-5deg] text-3xl font-bold text-[#335C30] sm:text-4xl">Pide, recoge y disfruta</p>
      </div>

      <WaveDivider fill="#FFF7E8" variant="valley" className="absolute -bottom-px inset-x-0" />
    </section>
  );
}
