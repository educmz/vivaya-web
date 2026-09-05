"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getGsap } from "@/lib/gsap";

export function AboutClosing() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    if (reducedMotion) return;

    const { gsap } = getGsap();
    const root = rootRef.current;

    const ctx = gsap.context(() => {
      gsap.set("[data-closing-line]", {
        yPercent: 115,
      });

      gsap.set("[data-closing-copy]", {
        opacity: 0,
        y: 24,
      });

      gsap.set("[data-closing-button]", {
        opacity: 0,
        y: 20,
      });

      gsap.set("[data-closing-kicker]", {
        opacity: 0,
        y: 16,
      });

      gsap.set("[data-closing-circle]", {
        scale: 0.22,
        opacity: 0,
        transformOrigin: "50% 50%",
      });

      gsap.set("[data-closing-glow]", {
        scale: 0.6,
        opacity: 0,
        transformOrigin: "50% 50%",
      });

      gsap.set("[data-closing-cup]", {
        y: 100,
        opacity: 0,
        scale: 0.9,
        transformOrigin: "50% 100%",
      });

      gsap.set("[data-closing-slice]", {
        x: 80,
        y: 50,
        rotate: 18,
        opacity: 0,
        scale: 0.82,
        transformOrigin: "50% 50%",
      });

      gsap.set("[data-closing-leaf]", {
        x: -28,
        y: -32,
        rotate: -10,
        opacity: 0,
        scale: 0.8,
        transformOrigin: "50% 50%",
      });

      gsap.set("[data-closing-orbit]", {
        opacity: 0,
        scale: 0.92,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to("[data-closing-kicker]", {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      })
        .to(
          "[data-closing-line]",
          {
            yPercent: 0,
            duration: 0.95,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.1",
        )
        .to(
          "[data-closing-copy]",
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          "[data-closing-button]",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          "[data-closing-circle]",
          {
            opacity: 1,
            scale: 1,
            duration: 1.15,
            ease: "power4.out",
          },
          "-=0.65",
        )
        .to(
          "[data-closing-glow]",
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          "<",
        )
        .to(
          "[data-closing-orbit]",
          {
            opacity: 1,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.75",
        )
        .to(
          "[data-closing-cup]",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            ease: "back.out(1.35)",
          },
          "-=0.8",
        )
        .to(
          "[data-closing-slice]",
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: -6,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.7",
        )
        .to(
          "[data-closing-leaf]",
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 0.75,
            ease: "back.out(1.4)",
          },
          "-=0.65",
        );

      gsap.to("[data-float='cup']", {
        y: -10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-float='slice']", {
        y: -8,
        rotate: -3,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-float='leaf']", {
        y: -6,
        rotate: 4,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-parallax='far']", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to("[data-parallax='mid']", {
        y: -10,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to("[data-parallax='near']", {
        y: -6,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (!rootRef.current || reducedMotion) return;

    const rect = rootRef.current.getBoundingClientRect();
    const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;

    const { gsap } = getGsap();

    gsap.to("[data-parallax='far']", {
      x: normalizedX * 18,
      y: normalizedY * 12,
      duration: 0.45,
      ease: "power3.out",
      overwrite: true,
    });

    gsap.to("[data-parallax='mid']", {
      x: normalizedX * 10,
      y: normalizedY * 7,
      duration: 0.45,
      ease: "power3.out",
      overwrite: true,
    });

    gsap.to("[data-parallax='near']", {
      x: normalizedX * 6,
      y: normalizedY * 4,
      duration: 0.45,
      ease: "power3.out",
      overwrite: true,
    });
  }

  function handlePointerLeave() {
    if (reducedMotion) return;

    const { gsap } = getGsap();

    gsap.to("[data-parallax]", {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      overwrite: true,
    });
  }

  return (
    <section
      ref={rootRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative overflow-hidden bg-[#073B3A] text-[#FFF7E8]"
    >
      <Container className="relative grid min-h-[88svh] items-center gap-14 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:py-24">
        <div className="relative z-20 max-w-2xl">
          <p
            data-closing-kicker
            className="text-xs font-black uppercase tracking-[0.25em] text-[#FFB347]"
          >
            Vivaya
          </p>

          <h2 className="mt-5 font-accent text-[clamp(3.4rem,7vw,7.5rem)] leading-[0.95] text-[#FFF7E8]">
            <span className="block overflow-hidden pb-[0.1em]">
              <span data-closing-line className="block leading-[0.95]">
                Encuentra
              </span>
            </span>

            <span className="block overflow-hidden pb-[0.1em]">
              <span data-closing-line className="block leading-[0.95]">
                tu Vivaya.
              </span>
            </span>
          </h2>

          <p
            data-closing-copy
            className="mt-7 max-w-md text-base leading-7 text-[#FFF7E8]/72 sm:text-lg"
          >
            Frescura para acompañar el ritmo de tu día con opciones prácticas,
            naturales y listas para disfrutar.
          </p>

          <div data-closing-button className="mt-9">
            <Button
              href="/productos"
              className="min-h-14 border-2 border-[#FFF7E8] bg-transparent px-8 text-[#FFF7E8] hover:bg-[#FFF7E8] hover:text-[#073B3A]"
            >
              Conoce nuestros productos
            </Button>
          </div>
        </div>

        <div className="relative flex min-h-[28rem] items-center justify-center lg:min-h-[42rem] lg:justify-end">
          <div className="relative h-[28rem] w-full max-w-[44rem] lg:h-[42rem] lg:max-w-[50rem]">
            {/* Círculo gigante */}
            <div
              data-closing-circle
              data-parallax="far"
              className="absolute bottom-[-4%] right-[-10%] h-[24rem] w-[24rem] rounded-full bg-[#FF8A00] shadow-[0_40px_120px_rgba(255,138,0,0.22)] sm:h-[28rem] sm:w-[28rem] lg:h-[36rem] lg:w-[36rem]"
            />

            {/* Glow */}
            <div
              data-closing-glow
              data-parallax="far"
              className="absolute bottom-[12%] right-[8%] h-[12rem] w-[12rem] rounded-full bg-[#FFD786]/35 blur-3xl sm:h-[14rem] sm:w-[14rem] lg:h-[18rem] lg:w-[18rem]"
            />

            {/* Órbita sutil */}
            <div
              data-closing-orbit
              data-parallax="mid"
              className="absolute bottom-[8%] right-[2%] h-[26rem] w-[26rem] rounded-full border border-[#FFF7E8]/18 sm:h-[30rem] sm:w-[30rem] lg:h-[39rem] lg:w-[39rem]"
            />

            {/* Hoja flotante */}
            <div
              data-closing-leaf
              data-parallax="far"
              data-float="leaf"
              className="absolute right-[12%] top-[12%] h-16 w-24 rotate-6 rounded-[100%_0_100%_0] bg-[#8FD34A] shadow-[0_10px_35px_rgba(0,0,0,0.12)] lg:h-20 lg:w-28"
            />

            {/* Rodaja */}
            <div
              data-closing-slice
              data-parallax="mid"
              data-float="slice"
              className="absolute bottom-[20%] right-[4%] z-20"
            >
              <div className="relative h-24 w-24 lg:h-32 lg:w-32">
                <Image
                  src="/images/ingredients/orange-slice.png"
                  alt="Rodaja de naranja"
                  fill
                  className="object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.16)]"
                />
              </div>
            </div>

            {/* Vaso */}
            <div
              data-closing-cup
              data-parallax="near"
              data-float="cup"
              className="absolute bottom-[2%] right-[18%] z-30"
            >
              <div className="relative h-[22rem] w-[14rem] sm:h-[25rem] sm:w-[15rem] lg:h-[34rem] lg:w-[20rem]">
                <Image
                  src="/images/about/vivaya-cup.png"
                  alt="Vaso Vivaya"
                  fill
                  priority={false}
                  className="object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.22)]"
                />
              </div>
            </div>

            {/* Accent blur behind cup */}
            <div
              data-parallax="mid"
              className="absolute bottom-[8%] right-[18%] z-10 h-28 w-44 rounded-full bg-[#FFF7E8]/12 blur-2xl lg:h-36 lg:w-56"
            />
          </div>
        </div>
      </Container>

      <div
        className="absolute bottom-0 left-0 h-2 w-full bg-[#FF8A00]"
        aria-hidden="true"
      />
    </section>
  );
}