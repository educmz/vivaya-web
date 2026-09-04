"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const reduced = useReducedMotion();
  const content = [...items, ...items];
  return (
    <div className={cn("overflow-hidden", className)} aria-label={items.join(", ")}>
      <motion.div aria-hidden="true" className="flex w-max gap-8" animate={reduced ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 20, ease: "linear", repeat: Infinity }}>
        {content.map((item, index) => <span className="whitespace-nowrap text-2xl font-black uppercase tracking-tight" key={`${item}-${index}`}>{item}</span>)}
      </motion.div>
    </div>
  );
}
