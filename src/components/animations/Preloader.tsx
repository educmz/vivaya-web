"use client";

import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useLayoutEffect, useState } from "react";

const CURTAIN_COLOR = "#F4E8D2";

// La cortina se retira hacia arriba deformándose en ola: los bordes suben antes
// que el centro, como una tela que se levanta.
const curtainVariants: Variants = {
  visible: {
    d: "M0 0 H100 V100 Q50 100 0 100 Z",
  },
  exit: {
    d: [
      "M0 0 H100 V100 Q50 100 0 100 Z",
      "M0 0 H100 V45 Q50 100 0 45 Z",
      "M0 0 H100 V0 Q50 38 0 0 Z",
      "M0 0 H100 V0 Q50 0 0 0 Z",
    ],
    transition: {
      duration: 1.25,
      ease: [0.76, 0, 0.24, 1],
      times: [0, 0.35, 0.75, 1],
    },
  },
};

const logoVariants: Variants = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
  exit: {
    opacity: 0,
    y: -28,
    scale: 0.98,
    transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
  },
};

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.dataset.vivayaPreloader = "active";

    // Fallback para evitar dejar bloqueada la página si una animación se interrumpe.
    const fallbackTimer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
      delete document.documentElement.dataset.vivayaPreloader;
      window.dispatchEvent(new Event("vivaya:preloader-complete"));
    }, 6000);

    return () => {
      window.clearTimeout(fallbackTimer);
      document.body.style.overflow = "";
      delete document.documentElement.dataset.vivayaPreloader;
    };
  }, []);

  const handleRevealComplete = () => {
    window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
      delete document.documentElement.dataset.vivayaPreloader;
      window.dispatchEvent(new Event("vivaya:preloader-complete"));
    }, 450);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {/* Cortina con borde ondulado que se levanta al terminar la carga. */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              variants={curtainVariants}
              initial="visible"
              animate="visible"
              exit="exit"
              fill={CURTAIN_COLOR}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onAnimationComplete={(definition) => {
                if (definition === "visible") handleRevealComplete();
              }}
              className="w-64 sm:w-80 lg:w-[26rem]"
            >
              <Image
                src="/images/brand/logo_naranja.png"
                alt="Vivaya"
                width={1774}
                height={887}
                priority
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
