"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function OrangeHeroExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const productWrapRef = useRef<HTMLDivElement | null>(null);
  const productFloatRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([copyRef.current, productWrapRef.current], {
        autoAlpha: 1,
      });

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Texto entra suavemente desde la izquierda
      intro.from(copyRef.current, {
        x: -55,
        opacity: 0,
        duration: 0.9,
      });

      // El vaso llega desde la derecha hacia su posición final
      intro.from(
        productWrapRef.current,
        {
          x: 260,
          rotate: 8,
          scale: 0.94,
          opacity: 0,
          duration: 1.25,
        },
        "-=0.65",
      );

      // Movimiento suave permanente
      gsap.to(productFloatRef.current, {
        y: -10,
        rotation: -1.5,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
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
            className="
              font-accent
              text-[2.4rem]
              font-bold
              leading-none
              text-[#FF6422]
              xl:text-[3rem]
            "
          >
            Vivaya
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
            <span
              className="
                block
                text-[clamp(5.2rem,8vw,8.6rem)]
                text-[#174C2C]
              "
            >
              Sabor
            </span>

            <span
              className="
                mt-2
                block
                text-[clamp(3.8rem,6.4vw,7rem)]
                text-[#FFF3E5]
              "
            >
              que se vive
            </span>
          </h1>

          <p
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
            Fruta, frescura y mucho sabor preparados para acompañarte
            donde estés.
          </p>

          <div className="mt-7">
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
              "
            >
              <span
                className="
                  grid size-9
                  place-items-center
                  rounded-full
                  bg-[#FFF3E5]
                  text-[#174C2C]
                "
              >
                <ArrowUpRight className="size-4" />
              </span>

              Conoce nuestra carta
            </Link>
          </div>
        </div>

        {/* Producto */}
        <div
          ref={productWrapRef}
          className="
            invisible
            z-10
            h-[min(72svh,780px)]
            min-h-[520px]
            w-full
            max-w-[620px]
            justify-self-center
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
          Vivaya
        </p>

        <h1 className="mt-3 font-heading uppercase leading-[0.84] tracking-[-0.04em]">
          <span className="block text-[clamp(4.5rem,19vw,6.5rem)] text-[#174C2C]">
            Sabor
          </span>

          <span className="block text-[clamp(3rem,13vw,4.4rem)] text-[#FFF3E5]">
            que se vive
          </span>
        </h1>

        <p className="mt-5 max-w-sm text-base leading-7 text-[#174C2C]/75">
          Fruta, frescura y mucho sabor preparados para acompañarte
          donde estés.
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
          "
        >
          <span
            className="
              grid size-9
              place-items-center
              rounded-full
              bg-[#FFF3E5]
              text-[#174C2C]
            "
          >
            <ArrowUpRight className="size-4" />
          </span>

          Conoce nuestra carta
        </Link>
      </div>
    </section>
  );
}
