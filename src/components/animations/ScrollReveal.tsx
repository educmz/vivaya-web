"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeInVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function ScrollReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={cn(className)} variants={fadeInVariants} initial={reduced ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.15 }}>{children}</motion.div>;
}
