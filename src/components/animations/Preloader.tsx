"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const timer = window.setTimeout(
      () => {
        setIsVisible(false);
        document.body.style.overflow = "";
      },
      prefersReducedMotion ? 600 : 2400,
    );

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

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