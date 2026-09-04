"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function TextReveal({ text, className }: { text: string; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <span className={cn("inline-flex flex-wrap", className)} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <motion.span aria-hidden="true" className="mr-[0.25em] inline-block" key={`${word}-${index}`} initial={reduced ? false : { opacity: 0, y: "0.5em" }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }} viewport={{ once: true }}>{word}</motion.span>
      ))}
    </span>
  );
}
