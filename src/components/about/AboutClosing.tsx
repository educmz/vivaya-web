"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function AboutClosing() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[85svh] overflow-hidden bg-[#FF8A00]">
      <div
        className="pointer-events-none absolute inset-0 flex select-none flex-col justify-center overflow-hidden text-[clamp(6rem,14vw,15rem)] font-black uppercase leading-[0.72] tracking-[-0.09em] text-white/[0.07]"
        aria-hidden="true"
      >
        <span className="whitespace-nowrap">Activa lo natural</span>
        <span className="-translate-x-[10%] whitespace-nowrap">
          Activa lo natural
        </span>
        <span className="whitespace-nowrap">Activa lo natural</span>
      </div>

      <Container className="relative grid min-h-[85svh] items-center gap-14 py-20 lg:grid-cols-[1fr_.8fr]">
        <div className="relative z-20">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#073B3A]/60">
            Vivaya
          </p>

          <motion.h2
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 80,
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
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 max-w-4xl text-[clamp(4.5rem,9vw,9.5rem)] font-black uppercase leading-[0.77] tracking-[-0.085em] text-white"
          >
            Activa
            <br />
            lo natural.
          </motion.h2>

          <p className="mt-8 max-w-md text-lg leading-8 text-white/75">
            Descubre una forma más fresca de acompañar tu día.
          </p>

          <div className="mt-10">
            <Button
              href="/productos"
              className="min-h-14 bg-[#073B3A] px-8 text-white hover:bg-[#0F6B6D]"
            >
              Conoce nuestros productos
            </Button>
          </div>
        </div>

        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 180,
                  rotate: 8,
                }
          }
          whileInView={{
            opacity: 1,
            y: 30,
            rotate: -4,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto h-[34rem] w-[20rem] sm:h-[42rem] sm:w-[25rem] lg:h-[50rem] lg:w-[30rem]"
        >
          <Image
            src="/images/about/vivaya-cup.png"
            alt="Producto Vivaya"
            fill
            sizes="30rem"
            className="object-contain drop-shadow-[0_40px_45px_rgba(7,59,58,0.24)]"
          />
        </motion.div>
      </Container>
    </section>
  );
}