"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, type Variants } from "motion/react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/** Curva expo-out: arranca rápido y aterriza muy suave. Da sensación premium. */
const ease = [0.16, 1, 0.3, 1] as const;

const group = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Texto / bloques: suben y aparecen despacio. */
export const aboutItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

/** Imágenes: entran desde un ligero zoom que se asienta (Ken Burns). */
export const aboutImageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease } },
};

/** Celda de un mosaico pegado (gap-0): solo opacidad, para no dejar huecos. */
export const aboutMosaicVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.65, ease } },
};

/** Zoom interno de la celda de mosaico (queda recortado por la celda). */
export const aboutMosaicZoomVariants: Variants = {
  hidden: { scale: 1.18 },
  visible: { scale: 1, transition: { duration: 1.3, ease } },
};

/** Tarjetas: suben con un leve escalado. */
export const aboutCardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease },
  },
};

/** Punto del timeline: aparece con un pequeño rebote. */
export const aboutDotVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 380, damping: 14, delay: 0.15 },
  },
};

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  stagger?: number;
  amount?: number;
}

/**
 * Contenedor que revela a sus hijos en cascada al entrar en pantalla.
 * Los hijos animados deben declarar `variants` (lo hacen <AboutItem/> y
 * <AboutImage/>). Es válido anidar contenedores.
 */
export function AboutReveal({
  children,
  className,
  style,
  delay = 0,
  stagger = 0.12,
  amount = 0.3,
}: ContainerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      style={style}
      variants={group(stagger, delay)}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

/** Elemento de texto / bloque dentro de una cascada. */
export function AboutItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={cn(className)}
      style={style}
      variants={aboutItemVariants}
    >
      {children}
    </motion.div>
  );
}

/** Imagen dentro de una cascada, con reveal de zoom + opción de hover. */
export function AboutImage({
  children,
  className,
  style,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hover?: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      style={style}
      variants={aboutImageVariants}
      whileHover={reduced || !hover ? undefined : { scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
    >
      {children}
    </motion.div>
  );
}

/** Línea que se "dibuja" al entrar en pantalla. `axis` define la dirección. */
export function AboutLine({
  className,
  axis = "x",
  duration = 1.1,
  delay = 0,
}: {
  className?: string;
  axis?: "x" | "y";
  duration?: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const horizontal = axis === "x";

  return (
    <motion.div
      aria-hidden="true"
      className={cn(className)}
      style={{ transformOrigin: horizontal ? "left center" : "center top" }}
      initial={reduced ? false : horizontal ? { scaleX: 0 } : { scaleY: 0 }}
      whileInView={horizontal ? { scaleX: 1 } : { scaleY: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration, ease, delay }}
    />
  );
}
