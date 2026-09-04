"use client";

import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { aboutTimeline } from "@/data/about";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function AboutTimeline() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-[#FFF7E8] py-24 sm:py-32 lg:py-40">
      <Container>
        <SectionTitle
          eyebrow="Nuestra historia"
          title="Una idea que sigue creciendo."
          description="Esta narrativa es temporal y será reemplazada cuando tengamos la historia oficial de Vivaya."
          className="text-[#073B3A]"
        />

        <div className="relative mt-20 lg:mt-28">
          <div
            className="absolute bottom-0 left-[7px] top-0 w-px bg-[#073B3A]/15 md:left-1/2"
            aria-hidden="true"
          />

          <div className="space-y-16 md:space-y-24">
            {aboutTimeline.map((item, index) => (
              <motion.article
                key={item.label}
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 45,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                }}
                className={`relative grid pl-12 md:grid-cols-2 md:pl-0 ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div
                  className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[4px] border-[#FFF7E8] bg-[#FF8A00] md:left-1/2 md:-translate-x-1/2"
                  aria-hidden="true"
                />

                <div
                  className={
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }
                >
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#FF8A00]">
                    {item.label}
                  </span>

                  <h3 className="mt-3 text-3xl font-black tracking-[-0.045em] text-[#073B3A] sm:text-4xl">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-4 max-w-lg leading-7 text-[#073B3A]/65 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}