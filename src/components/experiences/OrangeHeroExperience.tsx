"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function OrangeHeroExperience() {
  return (
    <section
      className="relative isolate min-h-[108svh] overflow-hidden bg-[#f7cd8e] sm:min-h-[112svh]"
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
          -left-[4vw]
          bottom-[9%]
          z-10
          hidden
          w-[20vw]
          md:block
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
          -right-[3vw]
          top-[27%]
          z-10
          hidden
          w-[18vw]
          md:block
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
          w-[9vw]
          md:block
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
          w-[9vw]
          md:block
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
          className="mx-auto w-[82vw] sm:w-[62vw] md:w-[36vw]"
        >
          <Image
            src="/images/hero/bienestar-title.png"
            alt="Bienestar"
            width={2078}
            height={757}
            priority
            className="h-auto w-full object-contain"
          />
        </motion.h1>
      </motion.div>

      {/* Producto principal */}
      <motion.div
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
            w-[76vw]
            sm:w-[58vw]
            md:w-[45vw]
            max-w-none
            object-contain
            drop-shadow-[0_40px_35px_rgba(67,43,8,0.20)]
          "
        />
      </motion.div>

      {/* Texto delantero */}
      <motion.div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-[14%]
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
          className="mx-auto w-[86vw] sm:w-[64vw] md:w-[38vw]"
        >
          <Image
            src="/images/hero/para-llevar-title.png"
            alt="Para llevar"
            width={2172}
            height={724}
            className="h-auto w-full object-contain"
          />
        </motion.h2>
      </motion.div>

      {/* Transición orgánica hacia la siguiente sección */}
      <svg
        className="pointer-events-none absolute -bottom-px left-0 z-30 h-[88px] w-full sm:h-[120px] lg:h-[145px]"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 76C150 126 284 20 472 55C651 89 770 151 958 91C1143 32 1268 25 1440 78V160H0Z"
          fill="#fffdf8"
        />
      </svg>

    </section>
  );
}
