"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const scenes = [
  {
    title: "Fruta real",
    copy: "Sabor vivo, color natural y una experiencia que empieza en la fruta.",
    className: "left-[5%] top-[24%]",
  },
  {
    title: "Frescura al instante",
    copy: "Preparado para acompañarte sin detener el ritmo de tu día.",
    className: "right-[5%] top-[23%]",
  },
  {
    title: "Sabores que viajan",
    copy: "Naranja, frescura y energía natural en cada recorrido.",
    className: "left-[7%] bottom-[18%]",
  },
  {
    title: "Bienestar para llevar",
    copy: "Una experiencia fresca pensada para disfrutar donde quieras.",
    className: "left-[5%] top-[38%]",
  },
];

export function ProductScrollSequence() {
  const rootRef = useRef<HTMLElement>(null);

  const reducedPreference = useReducedMotion();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const reduced = mounted && Boolean(reducedPreference);

  /*
   * IMPORTANTE:
   *
   * La animación ahora comienza cuando la sección llega
   * al inicio del viewport y termina cuando termina la sección.
   *
   * Esto funciona mucho mejor para una sección sticky.
   */
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });

  /*
   * -------------------------------------------------------
   * MOVIMIENTO DEL VASO
   * -------------------------------------------------------
   *
   * No gira sobre un mismo punto.
   *
   * Trayectoria:
   *
   * arriba derecha
   *      ↓
   * centro
   *      ↓
   * centro izquierda
   *      ↓
   * diagonal derecha
   *      ↓
   * posición final inferior
   */

  const cupX = useTransform(
    scrollYProgress,
    [0, 0.22, 0.48, 0.72, 1],
    reduced
      ? ["0vw", "0vw", "0vw", "0vw", "0vw"]
      : ["8vw", "3vw", "-5vw", "18vw", "12vw"],
  );

  const cupY = useTransform(
    scrollYProgress,
    [0, 0.22, 0.48, 0.72, 1],
    reduced
      ? ["0vh", "0vh", "0vh", "0vh", "0vh"]
      : ["-22vh", "-8vh", "8vh", "22vh", "30vh"],
  );

  const cupScale = useTransform(
    scrollYProgress,
    [0, 0.22, 0.48, 0.72, 1],
    reduced
      ? [0.9, 0.9, 0.9, 0.9, 0.9]
      : [0.78, 1, 0.86, 1.05, 0.82],
  );

  const cupRotateZ = useTransform(
    scrollYProgress,
    [0, 0.22, 0.48, 0.72, 1],
    reduced ? [0, 0, 0, 0, 0] : [-6, 0, -8, 55, 10],
  );

  const cupRotateY = useTransform(
    scrollYProgress,
    [0, 0.22, 0.48, 0.72, 1],
    reduced ? [0, 0, 0, 0, 0] : [-10, 0, 8, 18, 4],
  );

  const cupRotateX = useTransform(
    scrollYProgress,
    [0, 0.22, 0.48, 0.72, 1],
    reduced ? [0, 0, 0, 0, 0] : [2, 0, -4, -8, 0],
  );

  /*
   * Pequeña modificación de profundidad.
   * Hace que el vaso no se vea como una imagen plana
   * que simplemente se traslada.
   */
  const cupPerspective = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduced ? [0, 0, 0] : [0, -18, 8],
  );

  /*
   * -------------------------------------------------------
   * PARALLAX DE LA LÍNEA
   * -------------------------------------------------------
   */

  const pathX = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [80, -120],
  );

  /*
   * -------------------------------------------------------
   * ESCENA 1
   * -------------------------------------------------------
   */

  const scene1Opacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.29],
    [1, 1, 0],
  );

  const scene1Y = useTransform(
    scrollYProgress,
    [0, 0.29],
    reduced ? [0, 0] : [0, -25],
  );

  /*
   * -------------------------------------------------------
   * ESCENA 2
   * -------------------------------------------------------
   */

  const scene2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.46, 0.57],
    [0, 1, 1, 0],
  );

  const scene2Y = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.57],
    reduced ? [0, 0, 0] : [25, 0, -25],
  );

  /*
   * -------------------------------------------------------
   * ESCENA 3
   * -------------------------------------------------------
   */

  const scene3Opacity = useTransform(
    scrollYProgress,
    [0.48, 0.58, 0.72, 0.82],
    [0, 1, 1, 0],
  );

  const scene3Y = useTransform(
    scrollYProgress,
    [0.48, 0.58, 0.82],
    reduced ? [0, 0, 0] : [25, 0, -25],
  );

  /*
   * -------------------------------------------------------
   * ESCENA 4
   * -------------------------------------------------------
   */

  const scene4Opacity = useTransform(
    scrollYProgress,
    [0.74, 0.84, 1],
    [0, 1, 1],
  );

  const scene4Y = useTransform(
    scrollYProgress,
    [0.74, 0.84, 1],
    reduced ? [0, 0, 0] : [30, 0, 0],
  );

  const sceneAnimations = [
    {
      opacity: scene1Opacity,
      y: scene1Y,
    },
    {
      opacity: scene2Opacity,
      y: scene2Y,
    },
    {
      opacity: scene3Opacity,
      y: scene3Y,
    },
    {
      opacity: scene4Opacity,
      y: scene4Y,
    },
  ];

  return (
    <section
      ref={rootRef}
      className="relative h-[420svh] bg-[#EEF4E9]"
    >
      {/* =================================================
          VIEWPORT STICKY
      ================================================= */}

      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* =================================================
            PATRÓN DEL FONDO
        ================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-30
            [background-image:radial-gradient(rgba(51,92,48,0.18)_0.7px,transparent_0.7px)]
            [background-size:9px_9px]
          "
        />

        {/* =================================================
            LÍNEA BLANCA CURVA
        ================================================= */}

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <motion.path
            style={{
              x: pathX,
            }}
            d="
              M-180 670
              C120 470 350 790 620 645
              C850 515 850 220 1090 290
              C1280 345 1380 585 1610 420
            "
            fill="none"
            stroke="white"
            strokeWidth="28"
            strokeLinecap="round"
          />
        </svg>

        {/* =================================================
            TÍTULO PRINCIPAL
        ================================================= */}

        <motion.div
          style={{
            opacity: scene1Opacity,
            y: scene1Y,
          }}
          className="
            absolute
            inset-x-5
            top-16
            z-20
            sm:inset-x-10
            sm:top-20
            lg:inset-x-16
            lg:top-20
          "
        >
          <p
            className="
              font-accent
              text-2xl
              font-bold
              text-[#6E9D58]
              sm:text-3xl
              lg:text-4xl
            "
          >
            Mira lo que hay dentro
          </p>

          <h2
            className="
              font-heading
              mt-2
              max-w-[52rem]
              text-[clamp(3.4rem,7vw,7.6rem)]
              uppercase
              leading-[0.82]
              tracking-[-0.04em]
              text-[#335C30]
            "
          >
            Más fruta.
            <br />
            Más frescura.
          </h2>
        </motion.div>

        {/* =================================================
            TARJETAS DE LAS ESCENAS
        ================================================= */}

        {scenes.map((scene, index) => (
          <motion.article
            key={scene.title}
            style={sceneAnimations[index]}
            className={`
              absolute
              z-20
              w-[min(78vw,27rem)]
              rounded-[2rem]
              bg-[#B9D2AD]
              p-6
              text-[#335C30]
              sm:p-8
              ${scene.className}
            `}
          >
            <span
              className="
                font-heading
                text-xs
                uppercase
                tracking-[0.15em]
                text-[#335C30]/50
              "
            >
              0{index + 1}
            </span>

            <h3
              className="
                font-heading
                mt-3
                text-3xl
                uppercase
                leading-[0.95]
                tracking-[-0.02em]
                sm:text-4xl
              "
            >
              {scene.title}
            </h3>

            <p
              className="
                mt-4
                max-w-sm
                text-sm
                leading-6
                text-[#335C30]/70
                sm:text-base
                sm:leading-7
              "
            >
              {scene.copy}
            </p>
          </motion.article>
        ))}

        {/* =================================================
            PRODUCTO PRINCIPAL

            Este contenedor permanece centrado.

            El motion.div INTERIOR es el que viaja físicamente
            por toda la pantalla mediante x + y + scale +
            rotateX + rotateY + rotateZ.
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-30
            aspect-[3/4]
            w-[min(52vw,30rem)]
            -translate-x-1/2
            -translate-y-1/2

            sm:w-[min(48vw,31rem)]

            lg:w-[min(34vw,32rem)]
          "
          style={{
            perspective: "1200px",
          }}
        >
          <motion.div
            style={{
              x: cupX,
              y: cupY,
              scale: cupScale,
              rotateZ: cupRotateZ,
              rotateY: cupRotateY,
              rotateX: cupRotateX,
              z: cupPerspective,
            }}
            className="
              relative
              h-full
              w-full
              transform-gpu
              will-change-transform
              [transform-style:preserve-3d]
            "
          >
            <Image
              src="/images/hero/hero-product.png"
              alt="Producto Vivaya"
              fill
              priority
              sizes="
                (max-width: 640px) 52vw,
                (max-width: 1024px) 48vw,
                32rem
              "
              className="
                object-contain
                drop-shadow-[0_30px_35px_rgba(51,92,48,0.18)]
              "
            />
          </motion.div>
        </div>

        {/* =================================================
            INDICADOR DE SCROLL
        ================================================= */}

        <p
          className="
            absolute
            bottom-7
            right-7
            z-20
            hidden
            max-w-48
            text-right
            text-xs
            font-black
            uppercase
            tracking-[0.16em]
            text-[#335C30]/45
            sm:block
          "
        >
          Desliza para descubrir Vivaya
        </p>
      </div>
    </section>
  );
}