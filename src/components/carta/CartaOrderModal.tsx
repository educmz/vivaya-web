"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

export function CartaOrderBar() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-background px-6 pb-20 sm:px-8 sm:pb-24 lg:px-10">
      <Container>
        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
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
            duration: 0.5,
            ease,
          }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-[#FDE8D8]
            px-6
            py-12
            text-center
            sm:px-10
            sm:py-14
            lg:px-16
            lg:py-16
          "
        >
          {/* Decoración pastel muy sutil */}
          <div
            aria-hidden="true"
            className="
              absolute
              -left-20
              -top-24
              h-52
              w-52
              rounded-full
              bg-[#F4DFA2]/55
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -bottom-24
              -right-20
              h-56
              w-56
              rounded-full
              bg-[#A8CFA3]/45
            "
          />

          <div className="relative z-10 mx-auto max-w-xl">
            <p className="text-sm font-medium text-[#FF8A00]">
              ¿Ya elegiste?
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                leading-tight
                tracking-[-0.035em]
                text-[#302E2A]
                sm:text-4xl
              "
            >
              Encuentra tu próximo favorito.
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-md
                text-sm
                leading-6
                text-[#77736D]
                sm:text-base
              "
            >
              Revisa nuestra carta y pide el que más se te antoje.
            </p>

            <div className="mt-7 flex justify-center">
              <Button
                href="#carta-smoothies"
                className="
                  min-h-12
                  rounded-full
                  bg-[#FF8A00]
                  px-7
                  text-[#302E2A]
                  hover:bg-[#E67C00]
                "
              >
                Volver a la carta
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}