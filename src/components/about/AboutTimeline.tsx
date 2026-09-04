"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { aboutTimeline } from "@/data/about";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function AboutTimeline() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#FFF7E8] py-28 sm:py-36 lg:py-44">
      <Container>
        <div className="grid items-end gap-8 border-b border-[#073B3A]/15 pb-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FF8A00]">
              Nuestra historia
            </p>

            <h2 className="mt-5 text-[clamp(3.5rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-[#073B3A]">
              Una idea
              <br />
              que crece.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-[#073B3A]/65 lg:justify-self-end">
            Una historia construida alrededor de una misma idea: hacer del
            bienestar algo más cercano al ritmo cotidiano.
          </p>
        </div>

        <div>
          {aboutTimeline.map((item, index) => {
            const reversed = index % 2 !== 0;

            return (
              <motion.article
                key={item.number}
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 55,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid gap-10 border-b border-[#073B3A]/15 py-16 lg:grid-cols-12 lg:items-center lg:py-24"
              >
                <div
                  className={`relative lg:col-span-5 ${
                    reversed
                      ? "lg:col-start-8"
                      : "lg:col-start-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#E9F5EE]">
                    <motion.div
                      initial={
                        reducedMotion
                          ? false
                          : {
                              scale: 1.12,
                              clipPath: "inset(100% 0 0 0)",
                            }
                      }
                      whileInView={{
                        scale: 1,
                        clipPath: "inset(0% 0 0 0)",
                      }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  <span className="absolute -bottom-7 -right-2 select-none text-[6rem] font-black leading-none tracking-[-0.08em] text-[#FF8A00] sm:text-[8rem] lg:text-[10rem]">
                    {item.number}
                  </span>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    reversed
                      ? "lg:col-start-1 lg:row-start-1"
                      : "lg:col-start-8"
                  }`}
                >
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-[#FF8A00]">
                    {item.label}
                  </span>

                  <h3 className="mt-4 max-w-xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#073B3A] sm:text-5xl lg:text-6xl">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-lg text-base leading-7 text-[#073B3A]/65">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}