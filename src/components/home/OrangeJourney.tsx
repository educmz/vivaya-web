"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { WaveDivider } from "@/components/sections/WaveDivider";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getGsap } from "@/lib/gsap";

/*
|--------------------------------------------------------------------------
| Escenas
|--------------------------------------------------------------------------
|
| Ya NO existen:
| - numeraciones 01/04
| - párrafos descriptivos
| - textos secundarios
|
| Solo frase + imagen.
|
*/

const scenes = [
  {
    left: "De la fruta",
    right: "a tu vaso.",
  },
  {
    left: "Frescura",
    right: "que se siente.",
  },
  {
    left: "Natural",
    right: "a tu ritmo.",
  },
  {
    left: "Activa lo",
    right: "natural.",
  },
];

/*
|--------------------------------------------------------------------------
| Assets mobile
|--------------------------------------------------------------------------
|
| Cada escena utiliza una imagen diferente.
|
*/

const mobileScenes = [
  {
    ...scenes[0],
    image: "/images/ingredients/orange-whole.png",
    imageClassName: "p-7",
    background: "#FFF7E8",
    foreground: "#073B3A",
  },
  {
    ...scenes[1],
    image: "/images/ingredients/orange-slice.png",
    imageClassName: "p-5",
    background: "#E9F5EE",
    foreground: "#073B3A",
  },
  {
    ...scenes[2],
    image: "/images/products/Jugos/11.png",
    imageClassName: "p-6",
    background: "#0F6B6D",
    foreground: "#FFF7E8",
  },
  {
    ...scenes[3],
    image: "/images/products/Jugos/3.png",
    imageClassName: "p-1",
    background: "#073B3A",
    foreground: "#FFF7E8",
  },
];

export function OrangeJourney() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !rootRef.current) return;

    const { gsap } = getGsap();
    const root = rootRef.current;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(min-width: 768px)", () => {
        /*
        |--------------------------------------------------------------------------
        | Elementos
        |--------------------------------------------------------------------------
        */

        const sceneElements =
          root.querySelectorAll<HTMLElement>("[data-scene]");

        /*
        |--------------------------------------------------------------------------
        | Estado inicial de escenas
        |--------------------------------------------------------------------------
        */

        gsap.set(sceneElements, {
          autoAlpha: 0,
          yPercent: 12,
          scale: 0.97,
          filter: "blur(12px)",
        });

        gsap.set(sceneElements[0], {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1,
          filter: "blur(0px)",
        });

        /*
        |--------------------------------------------------------------------------
        | Estado inicial de productos
        |--------------------------------------------------------------------------
        */

        gsap.set("[data-orange-whole]", {
          autoAlpha: 1,
          scale: 1,
          rotate: 0,
        });

        gsap.set("[data-orange-slice]", {
          autoAlpha: 0,
          scale: 2.4,
          rotate: -20,
        });

        gsap.set("[data-journey-product]", {
          autoAlpha: 0,
          scale: 0.72,
          yPercent: 30,
          rotate: 0,
        });

        gsap.set("[data-final-product]", {
          autoAlpha: 0,
          scale: 0.72,
          yPercent: 35,
          rotate: 0,
        });

        gsap.set("[data-final-glow]", {
          autoAlpha: 0,
          scale: 0.7,
        });

        /*
        |--------------------------------------------------------------------------
        | Timeline principal
        |--------------------------------------------------------------------------
        */

        const timeline = gsap.timeline({
          defaults: {
            ease: "none",
          },

          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=3600",
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
          },
        });

        /*
        |--------------------------------------------------------------------------
        | ESCENA 1
        |
        | DEL ORIGEN / AL VASO.
        |--------------------------------------------------------------------------
        */

        timeline.to(
          "[data-orange-whole]",
          {
            rotate: 85,
            scale: 2.55,
            duration: 1,
          },
          0,
        );

        timeline.to(
          sceneElements[0],
          {
            autoAlpha: 0,
            yPercent: -8,
            scale: 0.98,
            filter: "blur(8px)",
            duration: 0.22,
          },
          0.72,
        );

        /*
        |--------------------------------------------------------------------------
        | Transición naranja completa → rodaja
        |--------------------------------------------------------------------------
        */

        timeline.to(
          "[data-orange-whole]",
          {
            autoAlpha: 0,
            scale: 2.8,
            duration: 0.18,
          },
          0.86,
        );

        timeline.to(
          "[data-orange-slice]",
          {
            autoAlpha: 1,
            duration: 0.12,
          },
          0.88,
        );

        timeline.to(
          root,
          {
            backgroundColor: "#E9F5EE",
            duration: 0.55,
          },
          0.86,
        );

        /*
        |--------------------------------------------------------------------------
        | ESCENA 2
        |
        | FRESCURA / QUE SE VE.
        |--------------------------------------------------------------------------
        */

        timeline.to(
          "[data-orange-slice]",
          {
            scale: 1.05,
            rotate: 30,
            duration: 0.9,
          },
          0.9,
        );

        timeline.to(
          sceneElements[1],
          {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.3,
          },
          1.08,
        );

        /*
        |--------------------------------------------------------------------------
        | Movimiento sutil de la rodaja
        |--------------------------------------------------------------------------
        */

        timeline.to(
          "[data-orange-slice]",
          {
            rotate: 105,
            scale: 1.15,
            duration: 0.7,
          },
          1.38,
        );

        timeline.to(
          sceneElements[1],
          {
            autoAlpha: 0,
            yPercent: -8,
            scale: 0.98,
            filter: "blur(8px)",
            duration: 0.22,
          },
          1.72,
        );

        /*
        |--------------------------------------------------------------------------
        | Transición rodaja → vaso
        |--------------------------------------------------------------------------
        */

        timeline.to(
          "[data-orange-slice]",
          {
            autoAlpha: 0,
            scale: 0.55,
            yPercent: -25,
            duration: 0.42,
          },
          1.72,
        );

        timeline.to(
          root,
          {
            backgroundColor: "#0F6B6D",
            duration: 0.65,
          },
          1.75,
        );

        /*
        |--------------------------------------------------------------------------
        | Cambiamos la tipografía a crema
        |--------------------------------------------------------------------------
        */

        timeline.to(
          "[data-scene-text]",
          {
            color: "#FFF7E8",
            duration: 0.45,
          },
          1.78,
        );

        /*
        |--------------------------------------------------------------------------
        | ESCENA 3
        |
        | SABOR / A TU RITMO.
        |--------------------------------------------------------------------------
        */

        timeline.to(
          "[data-journey-product]",
          {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
          },
          1.85,
        );

        timeline.to(
          sceneElements[2],
          {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.25,
          },
          2.02,
        );

        /*
        |--------------------------------------------------------------------------
        | Movimiento del vaso
        |--------------------------------------------------------------------------
        */

        timeline.to(
          "[data-journey-product]",
          {
            rotate: -5,
            scale: 1.08,
            yPercent: -3,
            duration: 0.75,
            ease: "power2.inOut",
          },
          2.24,
        );

        timeline.to(
          sceneElements[2],
          {
            autoAlpha: 0,
            yPercent: -8,
            scale: 0.98,
            filter: "blur(8px)",
            duration: 0.22,
          },
          2.62,
        );

        /*
        |--------------------------------------------------------------------------
        | Transición vaso normal → vaso splash
        |--------------------------------------------------------------------------
        */

        timeline.to(
          "[data-journey-product]",
          {
            autoAlpha: 0,
            yPercent: -18,
            scale: 0.86,
            duration: 0.38,
          },
          2.58,
        );

        timeline.to(
          root,
          {
            backgroundColor: "#073B3A",
            duration: 0.65,
          },
          2.6,
        );

        /*
        |--------------------------------------------------------------------------
        | ESCENA 4
        |
        | ESTO ES / VIVAYA.
        |--------------------------------------------------------------------------
        */

        timeline.to(
          "[data-final-product]",
          {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          2.68,
        );

        timeline.to(
          "[data-final-glow]",
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.75,
          },
          2.7,
        );

        timeline.to(
          sceneElements[3],
          {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.34,
          },
          2.9,
        );

        /*
        |--------------------------------------------------------------------------
        | Final ligeramente vivo
        |--------------------------------------------------------------------------
        */

        timeline.to(
          "[data-final-product]",
          {
            yPercent: -4,
            scale: 1.08,
            rotate: 2,
            duration: 0.8,
            ease: "power2.out",
          },
          3.18,
        );
      });
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <div className="relative isolate bg-[#073B3A]">
      {/* =========================================================
          DESKTOP
      ========================================================== */}

      <section
        ref={rootRef}
        className="
          relative
          hidden
          h-screen
          overflow-hidden
          bg-[#FFF7E8]
          md:block
        "
      >
        {/* Glow de escena final */}

        <div
          data-final-glow
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[42rem]
            w-[42rem]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#FF8A00]/20
            blur-[90px]
          "
        />

        <Container className="relative h-full">
          {/* =====================================================
              CONTENEDOR CENTRAL DEL PRODUCTO
          ====================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-20
              aspect-square
              w-[min(40vw,35rem)]
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            {/* círculo editorial */}

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                rounded-full
                border
                border-[#073B3A]/10
              "
            />

            {/* ===================================================
                ESCENA 1 — naranja completa
            ==================================================== */}

            <div
              data-orange-whole
              className="absolute inset-[5%]"
            >
              <Image
                src="/images/ingredients/orange-whole.png"
                alt=""
                fill
                priority
                sizes="35rem"
                className="object-contain"
              />
            </div>

            {/* ===================================================
                ESCENA 2 — rodaja
            ==================================================== */}

            <div
              data-orange-slice
              className="absolute inset-[1%]"
            >
              <Image
                src="/images/ingredients/orange-slice.png"
                alt=""
                fill
                sizes="35rem"
                className="object-contain"
              />
            </div>

            {/* ===================================================
                ESCENA 3 — producto normal
            ==================================================== */}

            <div
              data-journey-product
              className="absolute -inset-[8%]"
            >
              <Image
                src="/images/products/Jugos/11.png"
                alt=""
                fill
                sizes="35rem"
                className="
                  object-contain
                  drop-shadow-[0_35px_40px_rgba(0,0,0,0.20)]
                "
              />
            </div>

            {/* ===================================================
                ESCENA 4 — producto final con splash
            ==================================================== */}

            <div
              data-final-product
              className="
                absolute
                -inset-[10%]
                z-20
              "
            >
              <Image
                src="/images/products/Jugos/3.png"
                alt=""
                fill
                sizes="40rem"
                className="
                  object-contain
                  drop-shadow-[0_40px_55px_rgba(0,0,0,0.24)]
                "
              />
            </div>
          </div>

          {/* =====================================================
              FRASES
          ====================================================== */}

          {scenes.map((scene, index) => (
            <article
              key={`${scene.left}-${scene.right}`}
              data-scene
              className="
                pointer-events-none
                absolute
                inset-0
                z-30
              "
            >
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-1/2
                  flex
                  -translate-y-1/2
                  items-center
                  justify-between
                  gap-10
                "
              >
                {/* lado izquierdo */}

                <h2
                  data-scene-text
                  className={`
                    max-w-[39%]
                    text-[clamp(3.5rem,6.6vw,7.5rem)]
                    font-black
                    uppercase
                    leading-[0.78]
                    tracking-[-0.075em]
                    drop-shadow-[0_2px_10px_rgba(7,59,58,0.28)]
                    ${
                      index < 2
                        ? "text-[#073B3A]"
                        : "text-[#FFF7E8]"
                    }
                  `}
                >
                  {scene.left}
                </h2>

                {/* lado derecho */}

                <h2
                  data-scene-text
                  className={`
                    max-w-[39%]
                    text-right
                    text-[clamp(3.5rem,6.6vw,7.5rem)]
                    font-black
                    uppercase
                    leading-[0.78]
                    tracking-[-0.075em]
                    drop-shadow-[0_2px_10px_rgba(7,59,58,0.28)]
                    ${
                      index < 2
                        ? "text-[#073B3A]"
                        : "text-[#FFF7E8]"
                    }
                  `}
                >
                  {scene.right}
                </h2>
              </div>
            </article>
          ))}
        </Container>

        {/* =====================================================
            DIVISOR INFERIOR
        ====================================================== */}

        <WaveDivider
          fill="#073B3A"
          variant="soft"
          className="
            absolute
            -bottom-px
            inset-x-0
            z-40
          "
        />
      </section>

      {/* =========================================================
          MOBILE
      ========================================================== */}

      <MobileJourney />
    </div>
  );
}

/* ========================================================================
   MOBILE
======================================================================== */

function MobileJourney() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFF7E8]
        md:hidden
      "
    >
      {mobileScenes.map((scene, index) => {
        const isDark = index >= 2;

        return (
          <article
            key={`${scene.left}-${scene.right}`}
            className="
              relative
              flex
              min-h-[85svh]
              flex-col
              items-center
              justify-center
              overflow-hidden
              px-5
              pb-36
              pt-20
              sm:pb-44
            "
            style={{
              backgroundColor: scene.background,
              color: scene.foreground,
            }}
          >
            {/* círculo de fondo */}

            <div
              aria-hidden="true"
              className={`
                absolute
                left-1/2
                top-[46%]
                aspect-square
                w-[85vw]
                max-w-[25rem]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                ${
                  isDark
                    ? "border-white/10"
                    : "border-[#073B3A]/10"
                }
              `}
            />

            {/* frase */}

            <div
              className="
                relative
                z-10
                flex
                w-full
                items-center
                justify-between
                gap-4
              "
            >
              <h2
                className="
                  max-w-[43%]
                  text-[clamp(2.9rem,13vw,4.8rem)]
                  font-black
                  uppercase
                  leading-[0.8]
                  tracking-[-0.075em]
                "
              >
                {scene.left}
              </h2>

              <h2
                className="
                  max-w-[43%]
                  text-right
                  text-[clamp(2.9rem,13vw,4.8rem)]
                  font-black
                  uppercase
                  leading-[0.8]
                  tracking-[-0.075em]
                "
              >
                {scene.right}
              </h2>
            </div>

            {/* producto */}

            <div
              className="
                relative
                z-20
                -mt-10
                aspect-square
                w-[82vw]
                max-w-[23rem]
              "
            >
              <Image
                src={scene.image}
                alt={
                  index >= 2
                    ? "Producto Vivaya"
                    : ""
                }
                fill
                sizes="(max-width: 768px) 82vw"
                className={`
                  object-contain
                  ${scene.imageClassName}
                  ${
                    index >= 2
                      ? "drop-shadow-[0_28px_32px_rgba(0,0,0,0.18)]"
                      : ""
                  }
                `}
              />
            </div>
            {index < mobileScenes.length - 1 && (
              <WaveDivider
                fill={mobileScenes[index + 1].background}
                variant="drift"
                className="absolute inset-x-0 -bottom-px z-30"
              />
            )}
          </article>
        );
      })}

      <WaveDivider
        fill="#073B3A"
        variant="soft"
        className="
          absolute
          -bottom-px
          inset-x-0
          z-30
        "
      />
    </section>
  );
}
