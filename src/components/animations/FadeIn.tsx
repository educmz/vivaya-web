"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeInVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function FadeIn({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={cn(className)} variants={fadeInVariants} initial={reduced ? false : "hidden"} animate="visible" transition={{ delay }}>{children}</motion.div>;
}
