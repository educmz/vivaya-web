"use client";

import { Fragment } from "react";
import { motion, type Variants } from "motion/react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

type HeadingTag = "h1" | "h2" | "h3";

interface AnimatedTitleProps {
  /** Texto del título. Usa "\n" para forzar un salto de línea. */
  text: string;
  className?: string;
  id?: string;
  /** Etiqueta semántica a renderizar. Por defecto <h2>. */
  as?: HeadingTag;
  /** Porción del elemento visible que dispara la animación al hacer scroll. */
  amount?: number;
  /** Retraso extra (segundos) antes de que arranque el desglose de letras. */
  delay?: number;
}

const container: Variants = {
  hidden: {},
  visible: (delay = 0) => ({
    transition: { staggerChildren: 0.035, delayChildren: 0.04 + delay },
  }),
};

const letter: Variants = {
  hidden: { opacity: 0, y: "0.55em", rotateX: -55 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 320, damping: 22 },
  },
};

export function AnimatedTitle({
  text,
  className,
  id,
  as = "h2",
  amount = 0.6,
  delay = 0,
}: AnimatedTitleProps) {
  const reducedMotion = useReducedMotion();

  const lines = text.split("\n");
  const plainText = lines.join(" ");

  if (reducedMotion) {
    const Tag = as;
    return (
      <Tag id={id} className={className}>
        {lines.map((line, index) => (
          <Fragment key={index}>
            {index > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </Tag>
    );
  }

  const MotionTag = (
    as === "h1" ? motion.h1 : as === "h3" ? motion.h3 : motion.h2
  ) as typeof motion.h2;

  return (
    <MotionTag
      id={id}
      className={className}
      style={{ perspective: 700 }}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      aria-label={plainText}
    >
      {lines.map((line, lineIndex) => {
        const words = line.split(" ").map((word, wordIndex) => (
          <Fragment key={wordIndex}>
            {wordIndex > 0 && " "}
            <span className="inline-block" aria-hidden="true">
              {[...word].map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block will-change-transform"
                  variants={letter}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </Fragment>
        ));

        return lines.length > 1 ? (
          <span key={lineIndex} className="block">
            {words}
          </span>
        ) : (
          <Fragment key={lineIndex}>{words}</Fragment>
        );
      })}
    </MotionTag>
  );
}
