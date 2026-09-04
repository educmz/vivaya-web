"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featureBubbles = [
  {
    title: "Fruta real",
    description: "Sabor cítrico que se siente",
    className: "left-[4%] top-[53%] xl:left-[6%]",
  },
  {
    title: "Frescura",
    description: "Preparado al momento",
    className: "left-[10%] top-[36%] xl:left-[12%]",
  },
  {
    title: "Para llevar",
    description: "Ideal para tu ritmo",
    className: "left-[3%] top-[72%] xl:left-[5%]",
  },
];

export function OrangeHeroExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const brandRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const archRef = useRef<HTMLDivElement | null>(null);
  const productWrapRef = useRef<HTMLDivElement | null>(null);
  const productFloatRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const bottomShapeRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const bubbles = gsap.utils.toArray<HTMLElement>("[data-hero-bubble]");

      gsap.set(
        [
          brandRef.current,
          ctaRef.current,
          stageRef.current,
          copyRef.current,
          bottomShapeRef.current,
          ...bubbles,
        ],
        { autoAlpha: 1 },
      );

      if (prefersReducedMotion) return;

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(brandRef.current, {
          y: 60,
          opacity: 0,
          duration: 0.9,
        })
        .from(
          ctaRef.current,
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.45",
        )
        .from(
          archRef.current,
          {
            scale: 0.8,
            rotate: -8,
            opacity: 0,
            duration: 1,
          },
          "-=0.15",
        )
        .from(
          productWrapRef.current,
          {
            y: 120,
            x: -20,
            rotate: 16,
            scale: 0.88,
            opacity: 0,
            duration: 1,
          },
          "-=0.7",
        )
        .from(
          bubbles,
          {
            y: 26,
            opacity: 0,
            scale: 0.9,
            stagger: 0.12,
            duration: 0.55,
          },
          "-=0.45",
        )
        .from(
          copyRef.current,
          {
            x: 60,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.5",
        )
        .from(
          bottomShapeRef.current,
          {
            y: 80,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.35",
        );

      gsap.to(productFloatRef.current, {
        y: -12,
        rotation: -2,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=110%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      heroTl
        .to(
          brandRef.current,
          {
            y: -30,
            opacity: 0.18,
          },
          0,
        )
        .to(
          ctaRef.current,
          {
            y: -12,
            opacity: 0.55,
          },
          0,
        )
        .to(
          productWrapRef.current,
          {
            y: -30,
            x: 18,
            rotate: -10,
            scale: 1.06,
          },
          0,
        )
        .to(
          archRef.current,
          {
            rotate: 10,
            scale: 1.03,
            opacity: 0.9,
          },
          0,
        )
        .to(
          bubbles,
          {
            y: -18,
            stagger: 0.03,
          },
          0,
        )
        .to(
          copyRef.current,
          {
            y: -18,
            x: 16,
          },
          0,
        )
        .to(
          bottomShapeRef.current,
          {
            scaleX: 1.08,
            y: -10,
          },
          0,
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#C7DBB7] text-[#1D4B2F]"
    >
      {/* Fondo */}
      <div
        className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_center,rgba(255,247,232,0.55),transparent_58%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-20 [background-image:radial-gradient(rgba(29,75,47,0.22)_0.7px,transparent_0.7px)] [background-size:8px_8px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-5 pb-10 pt-32 sm:px-8 lg:px-12 lg:pt-36 xl:px-16">
        {/* Marca superior */}
        <div
          ref={brandRef}
          className="invisible relative z-20 text-center"
        >
          <div className="font-heading text-[clamp(5.2rem,16vw,13rem)] uppercase leading-[0.82] tracking-[-0.055em] text-[#1D4B2F]">
            Vivaya
          </div>
        </div>

        {/* CTA superior */}
        <div
          ref={ctaRef}
          className="invisible relative z-20 -mt-1 flex justify-center sm:-mt-2"
        >
          <Link
            href="/carta"
            className="group inline-flex items-center gap-2 rounded-full bg-[#1D4B2F] px-4 py-2 text-sm font-bold text-[#FFF7E8] shadow-[0_14px_28px_rgba(29,75,47,0.18)] transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="grid size-7 place-items-center rounded-full bg-[#FFF7E8] text-[#1D4B2F]">
              <ArrowUpRight className="size-4" />
            </span>
            <span>Conoce la carta</span>
          </Link>
        </div>

        {/* Escena principal */}
        <div className="relative flex-1">
          {/* Desktop composition */}
          <div className="hidden h-full lg:block">
            {/* bubbles */}
            {featureBubbles.map((bubble) => (
              <div
                key={bubble.title}
                data-hero-bubble
                className={`invisible absolute z-20 ${bubble.className}`}
              >
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#FFF7E8] p-5 text-center shadow-[0_18px_38px_rgba(29,75,47,0.15)] xl:h-40 xl:w-40">
                  <div>
                    <p className="font-heading text-[1.45rem] uppercase leading-[0.9] text-[#1D4B2F] xl:text-[1.65rem]">
                      {bubble.title}
                    </p>
                    <p className="mt-2 text-[12px] leading-5 text-[#1D4B2F]/72 xl:text-[13px]">
                      {bubble.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* producto + arco */}
            <div
              ref={stageRef}
              className="invisible absolute bottom-[3%] left-[10%] z-10 h-[64vh] w-[50vw] max-w-[820px] xl:left-[12%]"
            >
              {/* arco detrás */}
              <div
                ref={archRef}
                className="absolute inset-0"
              >
                <svg
                  viewBox="0 0 900 900"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <path
                    d="M150 760C150 470 270 220 470 165C620 124 720 194 790 310"
                    fill="none"
                    stroke="#FFF7E8"
                    strokeWidth="20"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* producto */}
              <div
                ref={productWrapRef}
                className="absolute bottom-[-2%] left-[18%] z-20 h-[88%] w-[52%] origin-bottom-left rotate-[10deg]"
              >
                <div
                  ref={productFloatRef}
                  className="relative h-full w-full"
                >
                  <Image
                    src="/images/hero/hero-product.png"
                    alt="Vaso de jugo de naranja Vivaya"
                    fill
                    priority
                    sizes="(max-width: 1024px) 0px, 34vw"
                    className="object-contain drop-shadow-[0_38px_38px_rgba(29,75,47,0.18)]"
                  />
                </div>
              </div>
            </div>

            {/* copy derecha */}
            <div
              ref={copyRef}
              className="invisible absolute right-[4%] top-[25%] z-20 max-w-[460px] xl:right-[6%] xl:max-w-[500px]"
            >
              <p className="font-accent text-3xl font-bold text-[#FF6A22] xl:text-4xl">
                Vivaya
              </p>

              <h1 className="font-heading mt-2 text-[clamp(4.8rem,8.4vw,7.8rem)] uppercase leading-[0.82] tracking-[-0.05em] text-[#1D4B2F]">
                Sabor
                <br />
                <span className="text-[#FFF7E8]">que se</span>
                <br />
                vive
              </h1>

              <p className="mt-5 max-w-[360px] text-lg leading-8 text-[#1D4B2F]/78">
                Frescura, energía y una experiencia natural lista para acompañarte en cada momento del día.
              </p>

              <div className="mt-6 h-2 w-32 rounded-full bg-[#FFF7E8]" aria-hidden="true" />
            </div>
          </div>

          {/* Mobile / tablet */}
          <div className="relative mx-auto flex w-full max-w-[36rem] flex-col items-center pb-24 pt-10 text-center lg:hidden">
            <div className="font-heading text-[clamp(3.2rem,15vw,5.6rem)] uppercase leading-[0.82] tracking-[-0.05em] text-[#1D4B2F]">
              Jugo
              <br />
              <span className="text-[#FFF7E8]">de</span>
              <br />
              naranja
            </div>

            <p className="mt-4 max-w-sm text-base leading-7 text-[#1D4B2F]/78">
              Una bebida lista para acompañarte con sabor, frescura y energía visualmente
              vibrante.
            </p>

            <div className="relative mt-10 h-[27rem] w-full max-w-[19rem]">
              <div className="absolute inset-0">
                <svg viewBox="0 0 420 520" className="h-full w-full" aria-hidden="true">
                  <path
                    d="M80 470C80 260 155 92 292 56C354 40 393 64 405 118"
                    fill="none"
                    stroke="#FFF7E8"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="absolute bottom-0 left-1/2 h-[92%] w-[82%] -translate-x-1/2 rotate-[8deg]">
                <Image
                  src="/images/hero/hero-product.png"
                  alt="Vaso de jugo de naranja Vivaya"
                  fill
                  priority
                  sizes="90vw"
                  className="object-contain drop-shadow-[0_28px_28px_rgba(29,75,47,0.18)]"
                />
              </div>
            </div>

            <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-3">
              {featureBubbles.map((bubble) => (
                <div
                  key={bubble.title}
                  className="rounded-3xl bg-[#FFF7E8] px-3 py-4 shadow-[0_14px_24px_rgba(29,75,47,0.12)]"
                >
                  <p className="font-heading text-lg uppercase leading-none text-[#1D4B2F]">
                    {bubble.title}
                  </p>
                  <p className="mt-1 text-[11px] leading-4 text-[#1D4B2F]/70">
                    {bubble.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* forma inferior */}
      <div
        ref={bottomShapeRef}
        className="invisible pointer-events-none absolute bottom-[-16%] left-1/2 z-0 h-[26rem] w-[96rem] max-w-none -translate-x-1/2 rounded-[50%] bg-[#2B5D38]"
        aria-hidden="true"
      />
    </section>
  );
}