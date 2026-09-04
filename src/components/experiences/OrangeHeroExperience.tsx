"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

export function OrangeHeroExperience() {
  const orangeRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#f4c783]
      "
    >
      {/* ========================================
          FONDO
      ======================================== */}

      <Image
        src="/images/hero/orchard-background.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      {/* Velo para que el texto tenga legibilidad */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#f5bd75]/90
          via-[#f5c884]/40
          to-transparent
        "
        aria-hidden="true"
      />

      {/* Pequeño tratamiento cálido general */}
      <div
        className="
          absolute inset-0
          bg-[#ff9b34]/5
        "
        aria-hidden="true"
      />

      {/* ========================================
          ÁRBOL DERECHO
      ======================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 130,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          -right-[4vw]
          -top-[8vh]
          z-10
          hidden
          h-[108vh]
          w-[58vw]
          lg:block
        "
      >
        <Image
          src="/images/hero/orange-tree.png"
          alt=""
          fill
          priority
          className="object-contain object-right-top"
        />
      </motion.div>

      {/* ========================================
          NARANJA PROTAGONISTA
          IMPORTANTE: separada del árbol
      ======================================== */}

      <motion.div
        ref={orangeRef}
        initial={{
          opacity: 0,
          scale: 0.72,
          y: -30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.85,
          delay: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          right-[32%]
          top-[32%]
          z-20
          hidden
          w-[150px]
          xl:w-[180px]
          2xl:w-[205px]
          lg:block
        "
      >
        <Image
          src="/images/hero/falling-orange.png"
          alt="Naranja Vivaya"
          width={420}
          height={420}
          priority
          className="
            h-auto
            w-full
            object-contain
            drop-shadow-[0_18px_22px_rgba(111,58,4,0.22)]
          "
        />
      </motion.div>

      {/* ========================================
          HOJAS DECORATIVAS
      ======================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -35,
          rotate: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: -8,
        }}
        transition={{
          duration: 0.9,
          delay: 0.75,
        }}
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[16%]
          z-20
          hidden
          w-[75px]
          lg:block
        "
      >
        <Image
          src="/images/hero/leaf-left.png"
          alt=""
          width={200}
          height={200}
          className="h-auto w-full"
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -20,
          rotate: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: 8,
        }}
        transition={{
          duration: 0.9,
          delay: 0.9,
        }}
        className="
          pointer-events-none
          absolute
          bottom-[30%]
          left-[44%]
          z-20
          hidden
          w-[55px]
          lg:block
        "
      >
        <Image
          src="/images/hero/leaf-center.png"
          alt=""
          width={150}
          height={150}
          className="h-auto w-full"
        />
      </motion.div>

      {/* ========================================
          CONTENIDO
      ======================================== */}

      <div
        className="
          relative
          z-30
          flex
          min-h-[100svh]
          items-center
          px-8
          pb-20
          pt-32
          lg:px-14
          xl:px-20
          2xl:px-24
        "
      >
        <div className="w-full max-w-[680px]">
          {/* Título gráfico */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src="/images/hero/bienestar-title.png"
              alt="Bienestar"
              width={1100}
              height={450}
              priority
              className="
                h-auto
                w-full
                max-w-[630px]
                object-contain
                object-left
              "
            />

            <Image
              src="/images/hero/para-llevar-title.png"
              alt="Para llevar"
              width={1000}
              height={360}
              priority
              className="
                -mt-7
                ml-16
                h-auto
                w-[72%]
                max-w-[450px]
                object-contain
                object-left
              "
            />
          </motion.div>

          {/* Copy */}
          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="
              mt-2
              max-w-[440px]
              text-[clamp(1.2rem,1.6vw,1.7rem)]
              font-medium
              leading-[1.25]
              text-[#5f371b]
            "
          >
            El sabor natural que
            <br />
            te acompaña cada día.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="mt-7"
          >
            <Link
              href="/carta"
              className="
                group
                inline-flex
                min-h-14
                items-center
                gap-5
                rounded-full
                bg-[#ff5b21]
                px-8
                text-sm
                font-bold
                text-white
                shadow-[0_14px_30px_rgba(197,77,15,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ef4812]
              "
            >
              Conoce nuestra carta

              <ArrowRight
                size={19}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ========================================
          MENSAJE DERECHO
      ======================================== */}

      <motion.div
        initial={{
          opacity: 0,
          rotate: -6,
        }}
        animate={{
          opacity: 1,
          rotate: -4,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="
          absolute
          bottom-[22%]
          right-[8%]
          z-30
          hidden
          text-center
          text-2xl
          font-black
          italic
          leading-tight
          text-[#ff6a20]
          xl:block
        "
      >
        Naturalmente
        <br />
        contigo

        <div className="mx-auto mt-2 h-[3px] w-20 rotate-[-6deg] rounded-full bg-[#ff6a20]" />
      </motion.div>

      {/* ========================================
          SCROLL
      ======================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 1.25,
        }}
        className="
          absolute
          bottom-6
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          lg:flex
        "
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/80 p-1">
          <motion.span
            animate={{
              y: [0, 14, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="size-1.5 rounded-full bg-white"
          />
        </div>

        <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">
          Descubre más
        </span>
      </motion.div>
    </section>
  );
}
