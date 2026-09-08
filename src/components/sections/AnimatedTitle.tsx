"use client";

import { Fragment } from "react";
import { motion, type Variants } from "motion/react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  id?: string;
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035, delayChildren: 0.04 },
  },
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

export function AnimatedTitle({ text, className, id }: AnimatedTitleProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <h2 id={id} className={className}>
        {text}
      </h2>
    );
  }

  const words = text.split(" ");

  return (
    <motion.h2
      id={id}
      className={className}
      style={{ perspective: 700 }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
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
      ))}
    </motion.h2>
  );
}
