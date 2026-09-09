"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CURTAIN_COLOR = "#F4E8D2";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  const revealedRef = useRef(false);

  useLayoutEffect(() => {
    const previousOverflow = document.body.style.overflow;
    revealedRef.current = false;
    let timeline: gsap.core.Timeline | undefined;
    let finished = false;
    document.body.style.overflow = "hidden";
    document.documentElement.dataset.vivayaPreloader = "active";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealApp = () => {
      if (revealedRef.current) return;

      revealedRef.current = true;

      delete document.documentElement.dataset.vivayaPreloader;

      window.dispatchEvent(
        new Event("vivaya:preloader-complete")
      );
    };

    const finishPreloader = () => {
      if (finished) return;
      finished = true;
      revealApp();
      document.body.style.overflow = previousOverflow;
      setIsVisible(false);
    };

    const ctx = gsap.context(() => {
      if (!rootRef.current || !logoRef.current) return;

      if (prefersReducedMotion) {
        gsap.set(logoRef.current, {
          opacity: 1,
        });

        timeline = gsap.timeline({
          paused: true,
          onComplete: finishPreloader,
        });

        timeline
          .to({}, { duration: 0.3 })
          .call(revealApp)
          .to(rootRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.inOut",
          });

        return;
      }

      /*
       * ESTADO INICIAL
       */
      gsap.set(logoRef.current, {
        opacity: 0,
        y: 18,
        scale: 0.97,
        clipPath: "inset(0% 100% 0% 0%)",
      });

      /*
       * TIMELINE PRINCIPAL
       */
      timeline = gsap.timeline({
        paused: true,
        onComplete: finishPreloader,
      });

      timeline

        /*
         * ENTRADA DEL LOGO
         */
        .to(logoRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",

          duration: 1.25,

          ease: "power3.out",
        })

        /*
         * PEQUEÑA PAUSA
         */
        .to({}, {
          duration: 0.65,
        })

        /*
         * LA WEB COMIENZA A ENTRAR DETRÁS
         */
        .call(revealApp)

        // El logo y el fondo desaparecen juntos, sin desplazamiento.
        .to(rootRef.current, {
          opacity: 0,
          duration: 0.85,
          ease: "power2.inOut",
        });
    });

    /*
     * FALLBACK
     */
    const image = imageRef.current;
    const startAnimation = () => {
      if (!finished) timeline?.play();
    };
    if (image?.complete && image.naturalWidth > 0) {
      startAnimation();
    } else {
      image?.addEventListener("load", startAnimation, { once: true });
      image?.addEventListener("error", startAnimation, { once: true });
    }

    const fallbackTimer = window.setTimeout(() => {
      timeline?.kill();
      revealApp();
      finishPreloader();
    }, 6000);

    return () => {
      finished = true;
      image?.removeEventListener("load", startAnimation);
      image?.removeEventListener("error", startAnimation);
      window.clearTimeout(fallbackTimer);

      ctx.revert();

      document.body.style.overflow = previousOverflow;

      delete document.documentElement.dataset.vivayaPreloader;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999]"
      style={{ backgroundColor: CURTAIN_COLOR }}
    >

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div
          ref={logoRef}
          className="w-64 sm:w-80 lg:w-[26rem]"
        >
          <Image
            ref={imageRef}
            src="/images/brand/logo_naranja.png"
            alt="Vivaya"
            width={1774}
            height={887}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
