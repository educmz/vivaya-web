"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { revealVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={cn(className)} variants={revealVariants} initial={reduced ? false : "hidden"} animate="visible">{children}</motion.div>;
}
