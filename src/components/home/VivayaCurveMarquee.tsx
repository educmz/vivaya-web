"use client";

import { motion, useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { useRef } from "react";

function RibbonGraphic({ className, curveId, preserveAspectRatio, textOffset }: {
  className: string;
  curveId: string;
  preserveAspectRatio: "none" | "xMidYMid slice";
  textOffset: MotionValue<string>;
}) {
  return (
    <svg className={className} viewBox="0 0 1600 340" preserveAspectRatio={preserveAspectRatio} aria-hidden="true">
      <path d="M-100 314C210 136 555 89 850 148C1137 208 1320 326 1700 169L1700 400H-100Z" fill="#073B3A" />
      <path d="M-80 270C230 92 565 45 850 104C1137 164 1320 282 1680 125" fill="none" stroke="#FF6A22" strokeWidth="88" />
      <path id={curveId} d="M-80 305C230 127 565 80 850 139C1137 199 1320 317 1680 160" fill="none" />
      <text className="font-heading fill-[#FFF7E8] text-[42px] uppercase tracking-[0.03em] sm:text-[46px]">
        <motion.textPath href={`#${curveId}`} startOffset={textOffset}>
          Fruta real · Frescura que se siente · Energía natural · Fruta real · Frescura que se siente · Energía natural · Fruta real ·
        </motion.textPath>
      </text>
    </svg>
  );
}

export function VivayaCurveMarquee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const textOffset = useTransform(scrollYProgress, [0, 1], ["8%", "-42%"]);

  return (
    <div ref={sectionRef} className="relative z-20 -mb-20 overflow-hidden bg-[#F7CFB2]" aria-label="Fruta real, frescura y energía natural">
      <RibbonGraphic className="h-[190px] w-[140%] -translate-x-[14%] sm:hidden" curveId="vivaya-marquee-mobile" preserveAspectRatio="xMidYMid slice" textOffset={textOffset} />
      <RibbonGraphic className="hidden h-[260px] w-[140%] -translate-x-[14%] sm:block" curveId="vivaya-marquee-desktop" preserveAspectRatio="none" textOffset={textOffset} />
    </div>
  );
}
