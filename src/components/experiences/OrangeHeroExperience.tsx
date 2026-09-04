"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export function OrangeHeroExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  /*
   * ÚNICAMENTE la naranja protagonista responde al scroll.
   * El resto del Hero mantiene siempre su composición.
   */

  const orangeX = useTransform(
    scrollYProgress,
    [0, 0.15, 0.45, 0.75, 1],
    reduceMotion
      ? ["0vw", "0vw", "0vw", "0vw", "0vw"]
      : ["0vw", "-2vw", "-10vw", "-24vw", "-35vw"],
  );

  const orangeY = useTransform(
    scrollYProgress,
    [0, 0.12, 0.35, 0.65, 0.9, 1],
    reduceMotion
      ? ["0vh", "0vh", "0vh", "0vh", "0vh", "0vh"]
      : ["0vh", "0vh", "10vh", "31vh", "58vh", "76vh"],
  );

  const orangeRotate = useTransform(
    scrollYProgress,
    [0, 0.18, 0.55, 1],
    reduceMotion
      ? [0, 0, 0, 0]
      : [-3, 18, 210, 540],
  );

  const orangeScale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.65, 1],
    reduceMotion
      ? [1, 1, 1, 1]
      : [1, 1.03, 0.9, 0.72],
  );

  /*
   * La hoja de la naranja desaparece visualmente cuando
   * empieza la caída para reforzar que se desprendió.
   */
  const orangeOpacity = useTransform(
    scrollYProgress,
    [0, 0.92, 1],
    [1, 1, 0],
  );

  /*
   * Pequeñas reacciones ambientales.
   * No son parallax: solo desaparecen suavemente al
   * terminar la escena.
   */
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.72, 0.95],
    [1, 1, 0.88],
  );

  return (
    <section
      ref={heroRef}
      className="relative h-[190svh] bg-[#f5c47e]"
    >
      {/* =====================================================
          ESCENA STICKY
      ====================================================== */}

      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* ===================================================
            FONDO DEL HUERTO
        ==================================================== */}

        <Image
          src="/images/hero/orchard-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Velo para legibilidad del lado izquierdo */}
        <div
          className="
            absolute inset-0 z-[1]
            bg-gradient-to-r
            from-[#ffd28c]/75
            via-[#ffc96f]/20
            to-transparent
          "
          aria-hidden="true"
        />

        {/* Glow cálido central */}
        <div
          className="
            absolute inset-0 z-[1]
            bg-[radial-gradient(circle_at_55%_45%,rgba(255,215,142,0.16),transparent_45%)]
          "
          aria-hidden="true"
        />

        {/* ===================================================
            ÁRBOL
        ==================================================== */}

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
            duration: 1.25,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            pointer-events-none
            absolute
            -right-[5%]
            -top-[10%]
            z-10
            hidden
            h-[78%]
            w-[55%]
            lg:block
            xl:w-[50%]
          "
        >
          <Image
            src="/images/hero/orange-tree.png"
            alt=""
            fill
            priority
            sizes="55vw"
            className="object-contain object-right-top"
          />
        </motion.div>

        {/* ===================================================
            NARANJA QUE CAE
        ==================================================== */}

        <motion.div
          style={{
            x: orangeX,
            y: orangeY,
            rotate: orangeRotate,
            scale: orangeScale,
            opacity: orangeOpacity,
          }}
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[21%]
            z-30
            hidden
            w-[105px]
            lg:block
            xl:w-[125px]
            2xl:w-[145px]
          "
        >
          {/* Movimiento suave antes de desprenderse */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -4, 0],
                    rotate: [-2, 2, -2],
                  }
            }
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/hero/falling-orange.png"
              alt=""
              width={420}
              height={420}
              priority
              className="
                h-auto
                w-full
                object-contain
                drop-shadow-[0_18px_20px_rgba(97,49,0,0.24)]
              "
            />
          </motion.div>
        </motion.div>

        {/* ===================================================
            CONTENIDO GENERAL
        ==================================================== */}

        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute inset-0 z-20"
        >
          {/* =================================================
              COPY IZQUIERDO
          ================================================== */}

          <div
            className="
              absolute
              left-[5%]
              top-1/2
              w-[44%]
              max-w-[700px]
              -translate-y-[44%]
            "
          >
            {/* Título VIVAYA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
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
                src="/images/hero/hero-vivaya-title.png"
                alt="Vivaya"
                width={1300}
                height={500}
                priority
                className="
                  h-auto
                  w-full
                  max-w-[650px]
                  object-contain
                  object-left
                "
              />
            </motion.div>

            {/* Claim gráfico */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="-mt-4 ml-[3%]"
            >
              <Image
                src="/images/hero/hero-claim.png"
                alt="Bienestar para llevar"
                width={1200}
                height={380}
                priority
                className="
                  h-auto
                  w-[88%]
                  max-w-[570px]
                  object-contain
                  object-left
                "
              />
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.75,
              }}
              className="ml-[8%] mt-4"
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
                  border-2
                  border-white
                  bg-[#f14a17]
                  px-7
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_14px_28px_rgba(145,61,8,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.02]
                  hover:bg-[#ff5b21]
                "
              >
                Conoce nuestra carta

                <ArrowRight
                  size={19}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1.5
                  "
                />
              </Link>
            </motion.div>
          </div>

          {/* =================================================
              COMPOSICIÓN DEL PRODUCTO
          ================================================== */}

          <div
            className="
              absolute
              bottom-[1%]
              right-[4%]
              h-[68%]
              w-[55%]
            "
          >
            {/* Tronco */}
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.05,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-[-3%]
                left-1/2
                z-10
                w-[92%]
                -translate-x-1/2
              "
            >
              <Image
                src="/images/hero/hero-stump.png"
                alt=""
                width={1500}
                height={700}
                className="h-auto w-full object-contain"
              />
            </motion.div>

            {/* Vaso */}
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.88,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-[12%]
                left-[47%]
                z-20
                w-[31%]
                -translate-x-1/2
              "
            >
              <Image
                src="/images/hero/hero-product.png"
                alt="Jugo de naranja Vivaya"
                width={800}
                height={1300}
                priority
                className="
                  h-auto
                  w-full
                  object-contain
                  drop-shadow-[0_25px_28px_rgba(82,42,3,0.22)]
                "
              />
            </motion.div>

            {/* Media naranja */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -20,
                x: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 4,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-[11%]
                right-[8%]
                z-30
                w-[27%]
              "
            >
              <Image
                src="/images/hero/hero-orange-half.png"
                alt=""
                width={700}
                height={700}
                className="h-auto w-full object-contain"
              />
            </motion.div>

            {/* Gajo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: 25,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -8,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.78,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-[8%]
                right-[26%]
                z-40
                w-[20%]
              "
            >
              <Image
                src="/images/hero/hero-orange-wedge.png"
                alt=""
                width={600}
                height={500}
                className="h-auto w-full object-contain"
              />
            </motion.div>

            {/* Hoja 1 */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -7, 0],
                      rotate: [-8, 2, -8],
                    }
              }
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                bottom-[8%]
                left-[24%]
                z-30
                w-[13%]
              "
            >
              <Image
                src="/images/hero/hero-leaf-01.png"
                alt=""
                width={500}
                height={350}
                className="h-auto w-full object-contain"
              />
            </motion.div>

            {/* Hoja 2 */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 6, 0],
                      rotate: [7, -4, 7],
                    }
              }
              transition={{
                duration: 5.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                bottom-[16%]
                right-[2%]
                z-20
                w-[11%]
              "
            >
              <Image
                src="/images/hero/hero-leaf-02.png"
                alt=""
                width={450}
                height={450}
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ===================================================
            INDICADOR DE SCROLL
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 1.2,
          }}
          className="
            absolute
            bottom-6
            left-1/2
            z-50
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            lg:flex
          "
        >
          <div
            className="
              flex
              h-10
              w-6
              items-start
              justify-center
              rounded-full
              border
              border-white/80
              p-1
            "
          >
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 14, 0],
                      opacity: [1, 0.15, 1],
                    }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="size-1.5 rounded-full bg-white"
            />
          </div>

          <span
            className="
              text-[9px]
              font-black
              uppercase
              tracking-[0.28em]
              text-white
            "
          >
            Descubre más
          </span>
        </motion.div>
      </div>
    </section>
  );
}