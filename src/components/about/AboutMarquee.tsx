"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const lineOne =
  "FRUTA REAL ✦ FRESCURA ✦ ENERGÍA NATURAL ✦ VITALIDAD ✦ ";
const lineTwo =
  "NUTRICIÓN ✦ BIENESTAR ✦ CONVENIENCIA ✦ ACTIVA LO NATURAL ✦ ";

export function AboutMarquee() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="overflow-hidden bg-[#FF8A00] py-5 text-[#073B3A] sm:py-7"
      aria-label="Principios Vivaya"
    >
      <div className="space-y-2 sm:space-y-3">
        <MarqueeLine
          text={lineOne}
          direction="left"
          reducedMotion={reducedMotion}
        />

        <MarqueeLine
          text={lineTwo}
          direction="right"
          reducedMotion={reducedMotion}
        />
      </div>
    </section>
  );
}

function MarqueeLine({
  text,
  direction,
  reducedMotion,
}: {
  text: string;
  direction: "left" | "right";
  reducedMotion: boolean;
}) {
  const content = `${text}${text}${text}${text}`;

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0 whitespace-nowrap text-[clamp(1.35rem,3vw,3rem)] font-black uppercase leading-none tracking-[-0.04em]"
        aria-hidden="true"
        animate={
          reducedMotion
            ? undefined
            : {
                x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {content}
      </motion.div>
    </div>
  );
}