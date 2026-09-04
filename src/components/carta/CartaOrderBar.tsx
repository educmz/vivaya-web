"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

export function CartaOrderBar() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#073B3A] text-[#FFF7E8]">
      <Container className="relative flex min-h-[22rem] flex-col justify-center py-14 pr-5 sm:min-h-[25rem] lg:pr-[24rem]">
        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  x: -35,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: false,
            amount: 0.45,
          }}
          transition={{
            duration: 0.75,
            ease,
          }}
          className="relative z-20"
        >
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#F36B21]">
            ¿Ya elegiste?
          </p>

          <h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
            Pide tu
            <br />
            Vivaya.
          </h2>

          <div className="mt-8">
            <Button
              href="/productos"
              className="min-h-14 bg-[#F36B21] px-8 text-[#FFF7E8] hover:bg-[#FFF7E8] hover:text-[#073B3A]"
            >
              Ver productos
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 70,
                  rotate: 6,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: -4,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="absolute bottom-[-6rem] right-[4%] hidden h-[27rem] w-[17rem] lg:block"
        >
          <Image
            src="/images/about/vivaya-cup.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  rotate: -30,
                  scale: 0.6,
                }
          }
          whileInView={{
            opacity: 1,
            rotate: 10,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease,
          }}
          className="absolute right-[18%] top-[8%] hidden h-28 w-28 lg:block"
        >
          <Image
            src="/images/ingredients/orange-slice.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </Container>
    </section>
  );
}