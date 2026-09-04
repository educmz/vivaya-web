"use client";

import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { aboutValues } from "@/data/about";

export function AboutValues() {
  return (
    <section className="bg-[#073B3A] py-28 text-white sm:py-36 lg:py-44">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FFB347]">
              Nuestra esencia
            </p>

            <h2 className="mt-5 max-w-3xl text-[clamp(3.6rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
              Lo natural
              <br />
              se siente.
            </h2>
          </div>

          <p className="max-w-lg self-end text-base leading-7 text-white/55 lg:justify-self-end">
            Seis ideas que representan la experiencia que buscamos construir
            alrededor de Vivaya.
          </p>
        </div>

        <div className="mt-20 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {aboutValues.map((value) => (
            <motion.article
              key={value.number}
              initial="idle"
              whileHover="hover"
              className="group relative min-h-[19rem] overflow-hidden border-b border-r border-white/15 p-7 sm:p-9"
            >
              <motion.div
                variants={{
                  idle: {
                    opacity: 0,
                    scale: 0.6,
                    rotate: -15,
                  },
                  hover: {
                    opacity: 0.16,
                    scale: 1,
                    rotate: 4,
                  },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute -right-4 top-6 select-none text-[10rem] leading-none"
                aria-hidden="true"
              >
                {value.symbol}
              </motion.div>

              <motion.div
                variants={{
                  idle: {
                    backgroundColor: "rgba(255,138,0,0)",
                  },
                  hover: {
                    backgroundColor: "rgba(255,138,0,1)",
                  },
                }}
                transition={{
                  duration: 0.4,
                }}
                className="absolute inset-0 -z-10"
              />

              <span className="text-xs font-black tracking-[0.2em] text-[#FFB347] transition-colors duration-300 group-hover:text-white/70">
                {value.number}
              </span>

              <motion.h3
                variants={{
                  idle: {
                    y: 0,
                  },
                  hover: {
                    y: -8,
                  },
                }}
                className="mt-20 max-w-xs text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em]"
              >
                {value.title}
              </motion.h3>

              <motion.p
                variants={{
                  idle: {
                    y: 0,
                  },
                  hover: {
                    y: -4,
                  },
                }}
                className="mt-5 max-w-xs leading-7 text-white/52 transition-colors duration-300 group-hover:text-white/82"
              >
                {value.description}
              </motion.p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}