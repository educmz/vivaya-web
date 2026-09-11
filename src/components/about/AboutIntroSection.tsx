"use client";

import { motion } from "motion/react";

import { AboutItem, AboutReveal } from "@/components/about/AboutMotion";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

export function AboutIntroSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* CABECERA */}
        <AboutReveal
          className="mb-10 text-center sm:mb-12 lg:mb-14"
          amount={0.5}
        >
          <AboutItem>
            <p
              className="text-2xl text-[#FF8A00] sm:text-3xl"
              style={{
                fontFamily: "var(--font-script), 'Pacifico', cursive",
              }}
            >
              Conoce Vivaya
            </p>
          </AboutItem>

          <AnimatedTitle
            text="Más que algo rico"
            className="mt-4 text-4xl font-extrabold uppercase tracking-[0.01em] text-[#302E2A] sm:text-5xl lg:text-6xl"
          />
        </AboutReveal>

        {/* CARD */}
        <AboutReveal amount={0.25}>
          <AboutItem>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="
                rounded-[1.5rem]
                bg-white
                px-7
                py-9
                shadow-[0_12px_35px_-22px_rgba(48,46,42,0.25)]
                transition-shadow
                duration-500
                hover:shadow-[0_32px_60px_-30px_rgba(48,46,42,0.4)]
                sm:px-10
                sm:py-11
                lg:px-16
                lg:py-14
              "
            >
              <p style={{ textAlign: "justify" }} className="text-base leading-8 text-[#4B4844] sm:text-lg sm:leading-9 lg:text-[1.2rem] lg:leading-10">
                Vivaya nace con la idea de crear un espacio donde disfrutar
                algo rico también signifique disfrutar el momento. Creemos en
                esas pequeñas pausas que hacen bien: compartir una comida,
                conversar sin apuro, celebrar algo especial o simplemente
                regalarse un momento para uno mismo. Por eso buscamos combinar
                sabor, cercanía y una experiencia agradable en cada detalle.
                Más que ofrecer productos, queremos formar parte de esos
                momentos cotidianos que terminan convirtiéndose en buenos
                recuerdos.
              </p>
            </motion.div>
          </AboutItem>
        </AboutReveal>
      </div>
    </section>
  );
}
