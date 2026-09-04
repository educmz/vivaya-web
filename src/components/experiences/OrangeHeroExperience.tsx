"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function OrangeHeroExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const productY = useTransform(scrollYProgress, [0, 1], [0, 105]);
  const productScale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);

  const backTitleY = useTransform(scrollYProgress, [0, 1], [0, 65]);
  const frontTitleY = useTransform(scrollYProgress, [0, 1], [0, 110]);

  const orangeLeftY = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const orangeRightY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#f7cd8e]"
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_70%_30%,rgba(255,177,61,0.45),transparent_38%),radial-gradient(circle_at_25%_70%,rgba(255,247,232,0.95),transparent_40%)]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 bottom-0 -z-20 h-[35%] bg-gradient-to-t from-[#fff4df]/85 to-transparent"
        aria-hidden="true"
      />

      {/* Naranja izquierda */}
      <motion.div
        style={{ y: orangeLeftY }}
        initial={{
          opacity: 0,
          x: -100,
          rotate: -18,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: -8,
        }}
        transition={{
          duration: 1.1,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          -left-20
          bottom-[9%]
          z-10
          hidden
          w-[300px]
          md:block
          xl:w-[390px]
        "
      >
        <Image
          src="/images/hero/orange-left.png"
          alt=""
          width={600}
          height={600}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* Naranja derecha */}
      <motion.div
        style={{ y: orangeRightY }}
        initial={{
          opacity: 0,
          x: 100,
          rotate: 15,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: 7,
        }}
        transition={{
          duration: 1.15,
          delay: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          -right-16
          top-[27%]
          z-10
          hidden
          w-[280px]
          md:block
          lg:w-[310px]
          xl:-right-20
          xl:w-[360px]
        "
      >
        <Image
          src="/images/hero/orange-right.png"
          alt=""
          width={600}
          height={600}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* Hoja izquierda */}
      <motion.div
        initial={{
          opacity: 0,
          rotate: -35,
          y: 25,
        }}
        animate={{
          opacity: 1,
          rotate: -14,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-[9%]
          top-[26%]
          z-10
          hidden
          w-32
          md:block
          xl:w-44
        "
      >
        <Image
          src="/images/hero/leaf-left.png"
          alt=""
          width={300}
          height={300}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* Hoja derecha */}
      <motion.div
        initial={{
          opacity: 0,
          rotate: 35,
          y: 25,
        }}
        animate={{
          opacity: 1,
          rotate: 10,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          bottom-[17%]
          right-[8%]
          z-10
          hidden
          w-32
          md:block
          xl:w-44
        "
      >
        <Image
          src="/images/hero/leaf-right.png"
          alt=""
          width={300}
          height={300}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* Titular principal */}
      <motion.div
        style={{ y: backTitleY }}
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[18%]
          z-[5]
          px-5
          text-center
        "
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            whitespace-nowrap
            text-[clamp(3.5rem,9vw,8.5rem)]
            font-black
            uppercase
            leading-[0.9]
            tracking-[-0.025em]
            text-[#ff4d00]
          "
          style={{
            fontFamily: '"Arial Black", Arial, sans-serif',
            WebkitTextStroke: "clamp(3px, 0.32vw, 6px) white",
            paintOrder: "stroke fill",
            textShadow: "0 8px 22px rgba(129, 52, 0, 0.13)",
          }}
        >
          Bienestar
        </motion.h1>
      </motion.div>

      {/* Producto principal */}
      <motion.div
        style={{
          y: productY,
          scale: productScale,
        }}
        initial={{
          opacity: 0,
          scale: 0.84,
          y: 90,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.15,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-1/2
          top-[47%]
          z-10
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <Image
          src="/images/hero/product-main.png"
          alt="Bebida Vivaya"
          width={900}
          height={1100}
          priority
          className="
            h-auto
            w-[clamp(340px,45vw,760px)]
            max-w-none
            object-contain
            drop-shadow-[0_40px_35px_rgba(67,43,8,0.20)]
          "
        />
      </motion.div>

      {/* Texto delantero */}
      <motion.div
        style={{ y: frontTitleY }}
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-[9%]
          z-20
          px-4
          text-center
        "
      >
        <motion.h2
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            whitespace-nowrap
            text-[clamp(3rem,7.5vw,7rem)]
            font-black
            uppercase
            leading-[0.9]
            tracking-[-0.02em]
            text-[#ff9f00]
          "
          style={{
            fontFamily: '"Arial Black", Arial, sans-serif',
            WebkitTextStroke: "clamp(3px, 0.3vw, 6px) white",
            paintOrder: "stroke fill",
            textShadow: "0 8px 22px rgba(129, 52, 0, 0.12)",
          }}
        >
          Para llevar
        </motion.h2>
      </motion.div>

    </section>
  );
}
