"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import gsap from "gsap";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function OrangeHeroExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const productWrapRef = useRef<HTMLDivElement | null>(null);
  const productFloatRef = useRef<HTMLDivElement | null>(null);

  const reducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const driftX = useSpring(mouseX, { stiffness: 70, damping: 18 });
  const driftY = useSpring(mouseY, { stiffness: 70, damping: 18 });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 22);
    mouseY.set(y * 16);
  }

  function resetPointer() {
    mouseX.set(0);
    mouseY.set(0);
  }

  useLayoutEffect(() => {
    const runIntro = () => {
      const ctx = gsap.context(() => {
      gsap.set([copyRef.current, productWrapRef.current], {
        autoAlpha: 1,
      });

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // El titular se revela línea por línea desde abajo
      intro.from("[data-hero-line]", {
        yPercent: 120,
        duration: 1.15,
        stagger: 0.12,
      });

      // El resto del copy (eyebrow, párrafo, CTA) entra con un fundido
      intro.from(
        "[data-hero-copy]",
        {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.08,
        },
        "-=0.65",
      );

      // El vaso cae desde arriba
      intro.from(
        productWrapRef.current,
        {
          y: -520,
          rotate: -10,
          scale: 0.92,
          opacity: 0,
          duration: 0.85,
          ease: "power2.in",
        },
        "-=0.9",
      );

      intro.addLabel("impact");

      // Aterrizaje: pequeño squash-and-stretch
      intro.to(
        productFloatRef.current,
        {
          scaleX: 1.08,
          scaleY: 0.9,
          duration: 0.12,
          ease: "power1.out",
        },
        "impact",
      );
      intro.to(
        productFloatRef.current,
        {
          scaleX: 1,
          scaleY: 1,
          duration: 0.45,
          ease: "elastic.out(1, 0.5)",
        },
        "impact+=0.12",
      );

      // Splash, ingredientes y hielo: salen disparados desde detrás del vaso
      // todos a la vez, desaceleran y se quedan flotando en su posición
      intro.fromTo(
        "[data-hero-orbit]",
        {
          x: (_i, target: HTMLElement) => parseFloat(target.dataset.burstX ?? "0"),
          y: (_i, target: HTMLElement) => parseFloat(target.dataset.burstY ?? "0"),
          rotate: (_i, target: HTMLElement) => parseFloat(target.dataset.burstRotate ?? "0"),
          opacity: 0,
          scale: 0.3,
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
          scale: 1,
          duration: 1.3,
          ease: "back.out(1.3)",
        },
        "impact",
      );

      // Movimiento suave permanente
      gsap.to(productFloatRef.current, {
        y: -10,
        rotation: -1.5,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.4,
      });
      }, sectionRef);
      return ctx;
    };

    if (document.documentElement.dataset.vivayaPreloader === "active") {
      let context: gsap.Context | undefined;
      const handleComplete = () => {
        context = runIntro();
      };
      window.addEventListener("vivaya:preloader-complete", handleComplete, { once: true });
      return () => {
        window.removeEventListener("vivaya:preloader-complete", handleComplete);
        context?.revert();
      };
    }

    const context = runIntro();

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="
        relative isolate
        min-h-[108svh]
        overflow-hidden
        bg-[#F7CFB2]
        text-[#174C2C]
      "
    >
      {/* Luz suave de fondo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 -z-20
          bg-[radial-gradient(circle_at_55%_45%,rgba(255,244,226,0.7),transparent_52%)]
        "
      />

      {/* Glow cálido detrás del producto, le da profundidad al fondo plano */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-[6%] top-1/3 -z-10
          h-[34rem] w-[34rem]
          -translate-y-1/2
          rounded-full
          bg-[#FF8A00]/25
          blur-[110px]
        "
      />

      {/* Textura de puntos */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 -z-10
          opacity-[0.15]
          [background-image:radial-gradient(rgba(23,76,44,0.38)_0.7px,transparent_0.7px)]
          [background-size:9px_9px]
        "
      />

      {/* Grano fino para quitarle planitud al degradado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Desktop */}
      <div className="relative mx-auto hidden min-h-[108svh] w-full max-w-[1600px] grid-cols-2 items-center gap-[clamp(2rem,5vw,6rem)] px-[clamp(4rem,7vw,7rem)] pb-20 pt-28 lg:grid">
        {/* Texto */}
        <div
          ref={copyRef}
          className="
            invisible
            z-20
            w-full
            max-w-[620px]
            justify-self-center
          "
        >
          <p
            data-hero-copy
            className="
              font-accent
              text-[2.4rem]
              font-bold
              leading-none
              text-[#FF6422]
              xl:text-[3rem]
            "
          >
            <motion.span
              className="inline-block"
              style={{ x: driftX, y: driftY }}
            >
              Vivaya
            </motion.span>
          </p>

          <h1
            className="
              mt-3
              font-heading
              uppercase
              leading-[0.82]
              tracking-[-0.045em]
            "
          >
            <span className="-mx-6 block overflow-hidden px-6">
              <span
                data-hero-line
                className="
                  block
                  text-[clamp(5.2rem,8vw,8.6rem)]
                  leading-[1.05]
                  text-[#174C2C]
                "
              >
                <motion.span
                  className="inline-block"
                  style={{ x: driftX }}
                >
                  Sabor
                </motion.span>
              </span>
            </span>

            <span className="relative -mt-6 block">
              <span className="-mx-6 block overflow-hidden px-6">
                <span
                  data-hero-line
                  className="
                    block
                    text-[clamp(3.8rem,6.4vw,7rem)]
                    leading-[1.05]
                    text-[#FFF3E5]
                  "
                >
                  <motion.span
                    className="inline-block"
                    style={{ x: driftX }}
                  >
                    que se vive
                  </motion.span>
                </span>
              </span>

              <motion.svg
                aria-hidden="true"
                viewBox="0 0 220 16"
                className="pointer-events-none absolute bottom-1 left-1 h-3 w-[85%] text-[#FF8A00]"
                style={{ x: driftX }}
              >
                <path
                  d="M2 10 C 40 -2 80 16 118 6 S 190 -2 218 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h1>

          <p
            data-hero-copy
            className="
              mt-7
              max-w-[470px]
              text-[1.05rem]
              leading-7
              text-[#174C2C]/75
              xl:text-lg
              xl:leading-8
            "
          >
            <motion.span
              className="block"
              style={{ x: driftX, y: driftY }}
            >
              Fruta, frescura y mucho sabor preparados para acompañarte
              donde estés.
            </motion.span>
          </p>

          <div data-hero-copy className="mt-7">
            <motion.div
              className="inline-block"
              style={{ x: driftX, y: driftY }}
            >
              <Link
                href="/carta"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#174C2C]
                  py-2
                  pl-2
                  pr-5
                  text-sm
                  font-bold
                  text-[#FFF3E5]
                  shadow-[0_14px_28px_rgba(23,76,44,0.14)]
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  active:scale-95
                "
              >
                <span
                  className="
                    grid size-9
                    shrink-0
                    place-items-center
                    rounded-full
                    bg-[#FF8A00]
                    text-[#174C2C]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight className="size-4" />
                </span>

                Conoce nuestra carta
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Producto */}
        <div className="relative w-full max-w-[620px] justify-self-center">
          <div
            ref={productWrapRef}
            className="
              invisible
              relative
              z-30
              h-[min(72svh,780px)]
              min-h-[520px]
              w-full
            "
          >
            <div
              ref={productFloatRef}
              className="relative h-full w-full"
            >
              <Image
                src="/images/hero/hero-product.png"
                alt="Vaso de jugo Vivaya"
                fill
                priority
                sizes="42vw"
                className="
                  object-contain
                  drop-shadow-[0_42px_32px_rgba(122,67,24,0.18)]
                "
              />
            </div>
          </div>

          {/* Splash, sale desde detrás del vaso y se queda */}
          {/* El centrado vive fuera de la capa que transforma GSAP. */}
          <div
            className="pointer-events-none absolute left-1/2 top-[50%] z-0 h-[92%] w-[120%] -translate-x-1/2 -translate-y-1/2"
          >
            <div data-hero-orbit className="relative h-full w-full">
              <Image
                src="/images/hero/splash.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Hielo, se queda flotando como los ingredientes */}
          <div
            data-hero-orbit
            data-burst-x="260"
            data-burst-y="100"
            data-burst-rotate="-30"
            className="pointer-events-none absolute left-[-10%] top-[45%] z-20 h-28 w-28 xl:h-36 xl:w-36"
          >
            <motion.div
              style={{ x: driftX, y: driftY, rotate: -8 }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/hero/ice-cube-1.png"
                alt=""
                fill
                sizes="144px"
                className="object-contain drop-shadow-[0_6px_8px_rgba(23,76,44,0.18)]"
              />
            </motion.div>
          </div>
          <div
            data-hero-orbit
            data-burst-x="-200"
            data-burst-y="-220"
            data-burst-rotate="30"
            className="pointer-events-none absolute right-[-6%] bottom-[26%] z-20 h-28 w-28 xl:h-36 xl:w-36"
          >
            <motion.div
              style={{ x: driftX, y: driftY, rotate: 10 }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/hero/ice-cube-2.png"
                alt=""
                fill
                sizes="144px"
                className="object-contain drop-shadow-[0_6px_8px_rgba(23,76,44,0.18)]"
              />
            </motion.div>
          </div>

          {/* Rodaja, apoyada sobre el borde del vaso */}
          <div
            data-hero-orbit
            data-burst-x="-220"
            data-burst-y="380"
            data-burst-rotate="-50"
            className="pointer-events-none absolute right-[6%] top-[-6%] z-20 h-40 w-40 xl:h-48 xl:w-48"
          >
            <motion.div
              style={{ x: driftX, y: driftY, rotate: -10 }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/ingredients/orange-slice.png"
                alt=""
                fill
                sizes="192px"
                className="object-contain drop-shadow-[0_16px_18px_rgba(122,67,24,0.18)]"
              />
            </motion.div>
          </div>

          {/* Hoja, apoyada junto a la base del vaso */}
          <div
            data-hero-orbit
            data-burst-x="230"
            data-burst-y="-320"
            data-burst-rotate="60"
            className="pointer-events-none absolute left-[-4%] bottom-[-2%] z-20 h-36 w-36 xl:h-44 xl:w-44"
          >
            <motion.div
              style={{ x: driftX, y: driftY, rotate: 14 }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/hero/leaf-3.png"
                alt=""
                fill
                sizes="176px"
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Segunda hoja, arriba a la izquierda */}
          <div
            data-hero-orbit
            data-burst-x="190"
            data-burst-y="250"
            data-burst-rotate="-40"
            className="pointer-events-none absolute left-[-8%] top-[-6%] z-20 h-28 w-28 xl:h-36 xl:w-36"
          >
            <motion.div
              style={{ x: driftX, y: driftY, rotate: -18 }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/hero/leaf-1.png"
                alt=""
                fill
                sizes="144px"
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Media naranja */}
          <div
            data-hero-orbit
            data-burst-x="-100"
            data-burst-y="-300"
            data-burst-rotate="-25"
            className="pointer-events-none absolute left-[-14%] top-[20%] z-20 h-36 w-36 xl:h-48 xl:w-48"
          >
            <motion.div
              style={{ x: driftX, y: driftY, rotate: -6 }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/hero/orange-half.png"
                alt=""
                fill
                sizes="192px"
                className="object-contain drop-shadow-[0_16px_18px_rgba(122,67,24,0.18)]"
              />
            </motion.div>
          </div>

          {/* Gajo de naranja */}
          <div
            data-hero-orbit
            data-burst-x="160"
            data-burst-y="-200"
            data-burst-rotate="40"
            className="pointer-events-none absolute left-[14%] bottom-[-12%] z-20 h-28 w-28 xl:h-36 xl:w-36"
          >
            <motion.div
              style={{ x: driftX, y: driftY, rotate: 20 }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/hero/orange-wedge.png"
                alt=""
                fill
                sizes="144px"
                className="object-contain drop-shadow-[0_16px_18px_rgba(122,67,24,0.18)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="
          mx-auto
          flex
          min-h-[108svh]
          w-full
          max-w-xl
          flex-col
          items-center
          px-6
          pb-14
          pt-32
          text-center
          lg:hidden
        "
      >
        <p className="font-accent text-3xl font-bold text-[#FF6422]">
          <motion.span
            className="inline-block"
            animate={
              reducedMotion
                ? undefined
                : { y: [0, -6, 0] }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Vivaya
          </motion.span>
        </p>

        <h1 className="mt-3 font-heading uppercase leading-[0.84] tracking-[-0.04em]">
          <span className="block text-[clamp(4.5rem,19vw,6.5rem)] text-[#174C2C]">
            <motion.span
              className="inline-block"
              animate={
                reducedMotion
                  ? undefined
                  : { x: [0, -4, 0, 4, 0] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Sabor
            </motion.span>
          </span>

          <span className="block text-[clamp(3rem,13vw,4.4rem)] text-[#FFF3E5]">
            <motion.span
              className="inline-block"
              animate={
                reducedMotion
                  ? undefined
                  : { x: [0, 4, 0, -4, 0] }
              }
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              que se vive
            </motion.span>
          </span>
        </h1>

        <p className="mt-5 max-w-sm text-base leading-7 text-[#174C2C]/75">
          <motion.span
            className="block"
            animate={
              reducedMotion
                ? undefined
                : { y: [0, 5, 0] }
            }
            transition={{
              duration: 5,
              delay: 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Fruta, frescura y mucho sabor preparados para acompañarte
            donde estés.
          </motion.span>
        </p>

        <div className="relative mt-2 h-[25rem] w-full max-w-[22rem]">
          <Image
            src="/images/hero/hero-product.png"
            alt="Vaso de jugo Vivaya"
            fill
            priority
            sizes="90vw"
            className="
              object-contain
              drop-shadow-[0_28px_26px_rgba(122,67,24,0.18)]
            "
          />
        </div>

        <motion.div
          animate={
            reducedMotion
              ? undefined
              : { y: [0, -5, 0] }
          }
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Link
            href="/carta"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#174C2C]
              py-2
              pl-2
              pr-5
              text-sm
              font-bold
              text-[#FFF3E5]
              transition-transform
              duration-300
              active:scale-95
            "
          >
            <span
              className="
                grid size-9
                place-items-center
                rounded-full
                bg-[#FF8A00]
                text-[#174C2C]
              "
            >
              <ArrowUpRight className="size-4" />
            </span>

            Conoce nuestra carta
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
