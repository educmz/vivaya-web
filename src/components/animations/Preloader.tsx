"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLayoutEffect, useState } from "react";

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
    }, 250);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            overflow-hidden
            bg-[#F4E8D2]
          "
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="flex w-full flex-col items-center justify-center px-6">
            {/* Símbolo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
                rotate: -6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 w-[90px] sm:w-[110px] lg:w-[125px]"
            >
              <Image
                src="/images/vivaya-icon.svg"
                alt=""
                width={1071}
                height={917}
                priority
                className="h-auto w-full"
              />
            </motion.div>

            {/* Palabra VIVAYA */}
            <div className="relative w-[82vw] max-w-[900px] overflow-hidden">
              <motion.div
                initial={{
                  clipPath: "inset(0 100% 0 0)",
                }}
                animate={{
                  clipPath: "inset(0 0% 0 0)",
                }}
                transition={{
                  duration: 1.35,
                  delay: 0.45,
                  ease: [0.65, 0, 0.35, 1],
                }}
                onAnimationComplete={handleRevealComplete}
              >
                <Image
                  src="/images/vivaya-wordmark.svg"
                  alt="Vivaya"
                  width={1254}
                  height={294}
                  priority
                  className="h-auto w-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
