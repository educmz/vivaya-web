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
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onAnimationComplete={handleRevealComplete}
              className="w-48 sm:w-60 lg:w-72"
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
