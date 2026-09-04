"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function Magnetic({ children, className, strength = 0.16 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 20 });
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };
  return <motion.div ref={ref} className={cn("inline-flex", className)} style={{ x, y }} onPointerMove={move} onPointerLeave={reset}>{children}</motion.div>;
}
