"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Retraso antes de que arranque la cascada de hijos (segundos). */
  delay?: number;
  /** Separación entre la aparición de cada hijo (segundos). */
  stagger?: number;
  /** Fracción visible que dispara la animación al hacer scroll. */
  amount?: number;
}

const groupVariants = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Variantes de cada elemento que aparece en cascada (también para <motion.article>). */
export const eventItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

/**
 * Contenedor que revela a sus hijos <EventItem> en cascada cuando entra en
 * pantalla. Cada hijo animado debe declarar `variants={eventItemVariants}`
 * (lo hace <EventItem/> por dentro).
 */
export function EventReveal({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  amount = 0.2,
}: ContainerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={groupVariants(stagger, delay)}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Contenedor de cascada anidado: hereda el disparo del ancestro que ya está
 * animando (no observa el scroll por su cuenta). Útil para listas dentro de
 * un <EventReveal> (chips, filas de precios…).
 */
export function EventGroup({
  children,
  className,
  stagger = 0.05,
}: Pick<ContainerProps, "children" | "className" | "stagger">) {
  return (
    <motion.div className={cn(className)} variants={groupVariants(stagger, 0)}>
      {children}
    </motion.div>
  );
}

/** Elemento individual de una cascada. */
export function EventItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={cn(className)} variants={eventItemVariants}>
      {children}
    </motion.div>
  );
}

/**
 * Tarjeta (<article>) que se anima cuando ella misma entra en pantalla — así
 * también reacciona en móvil, cuando las tarjetas van apiladas. `index` +
 * `columns` dan un ligero escalonado por fila; `hover` activa la elevación.
 */
export function EventCard({
  children,
  className,
  index = 0,
  columns = 4,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  columns?: number;
  hover?: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease, delay: (index % columns) * 0.08 },
      }}
      whileHover={reduced || !hover ? undefined : { y: -4 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {children}
    </motion.article>
  );
}

/** Imagen destacada: entra con un ligero zoom al hacer scroll. */
export function EventRevealImage({
  children,
  className,
  delay = 0,
  amount = 0.2,
}: Pick<ContainerProps, "children" | "className" | "delay" | "amount">) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, scale: 0.93 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease, delay },
      }}
      whileHover={reduced ? undefined : { scale: 1.015 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.35, ease }}
    >
      {children}
    </motion.div>
  );
}
