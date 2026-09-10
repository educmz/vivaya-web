"use client";

import { motion } from "motion/react";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import {
  AboutItem,
  AboutReveal,
  aboutCardVariants,
} from "@/components/about/AboutMotion";

const essenceItems = [
  {
    id: "purpose",
    label: "Propósito",
    title: "Crear momentos para disfrutar.",
    background: "#F8C7AC",
  },
  {
    id: "mission",
    label: "Misión",
    title: "Hacer especial lo cotidiano.",
    background: "#E2ECD4",
  },
  {
    id: "vision",
    label: "Visión",
    title: "Seguir creciendo contigo.",
    background: "#F4DFA2",
  },
];

export function EssenceSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-10">
        {/* CABECERA */}
        <AboutReveal className="mb-10 sm:mb-12 lg:mb-14" amount={0.6}>
          <AboutItem>
            <p
              className="text-2xl text-[#FF8A00] sm:text-3xl"
              style={{
                fontFamily: "var(--font-script), 'Pacifico', cursive",
              }}
            >
              Nuestra esencia
            </p>
          </AboutItem>

          <AnimatedTitle
            text="Lo que nos mueve."
            className="mt-4 text-4xl tracking-[0.01em] text-[#302E2A] sm:text-5xl lg:text-6xl font-extrabold uppercase"
          />
        </AboutReveal>

        {/* BLOQUES */}
        <AboutReveal
          className="grid gap-4 md:grid-cols-3 lg:gap-5"
          amount={0.2}
          stagger={0.14}
        >
          {essenceItems.map((item) => (
            <motion.article
              key={item.id}
              variants={aboutCardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="
                group
                flex
                min-h-[280px]
                flex-col
                justify-between
                overflow-hidden
                rounded-[1.6rem]
                p-6
                shadow-[0_10px_30px_-20px_rgba(48,46,42,0.25)]
                transition-shadow
                duration-500
                hover:shadow-[0_36px_60px_-28px_rgba(48,46,42,0.45)]
                sm:min-h-[310px]
                sm:p-8
                lg:min-h-[340px]
                lg:rounded-[2rem]
                lg:p-9
              "
              style={{
                backgroundColor: item.background,
              }}
            >
              {/* LABEL */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#302E2A]/60">
                  {item.label}
                </span>

                <span className="size-2 rounded-full bg-[#302E2A]/25 transition-transform duration-500 ease-out group-hover:scale-[3]" />
              </div>

              {/* FRASE */}
              <h3
                className="
                  max-w-[320px]
                  text-3xl

                  leading-[1.05]
                  tracking-[0.01em]
                  text-[#302E2A]
                  sm:text-4xl
                  lg:text-[2.5rem]
                 font-extrabold uppercase"
              >
                {item.title}
              </h3>
            </motion.article>
          ))}
        </AboutReveal>
      </div>
    </section>
  );
}
