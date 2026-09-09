"use client";

import Image from "next/image";
import Wave from "react-wavify";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CURTAIN_COLOR = "#F4E8D2";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const waveBackRef = useRef<HTMLDivElement | null>(null);
  const waveFrontRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  const revealedRef = useRef(false);

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.dataset.vivayaPreloader = "active";

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Avisa al resto de la web que el héroe ya puede entrar (detrás de la
    // cortina, que aún se está yendo). Se dispara una sola vez, tal como
    // esperan los listeners existentes.
    const revealApp = () => {
      if (revealedRef.current) return;
      revealedRef.current = true;

      delete document.documentElement.dataset.vivayaPreloader;
      window.dispatchEvent(new Event("vivaya:preloader-complete"));
    };

    // El scroll se libera solo cuando la cortina ya salió por completo, para
    // que las ondas invertidas del filo no generen scroll durante la salida.
    const unmount = () => {
      document.body.style.overflow = "";
      setIsVisible(false);
    };

    const ctx = gsap.context(() => {
      const idleTweens: gsap.core.Tween[] = [];

      const startIdle = () => {
        // Movimiento mínimo y continuo para que las ondas y el logo
        // respiren en lugar de quedarse congelados.
        idleTweens.push(
          gsap.to(waveBackRef.current, {
            yPercent: -5,
            duration: 3.4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }),
          gsap.to(waveFrontRef.current, {
            yPercent: -8,
            duration: 2.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 0.15,
          }),
          gsap.to(logoRef.current, {
            y: -5,
            duration: 3.6,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          })
        );
      };

      const stopIdle = () => {
        idleTweens.forEach((tween) => tween.kill());
        idleTweens.length = 0;
      };

      if (prefersReduced) {
        gsap.set(
          [bgRef.current, waveBackRef.current, waveFrontRef.current],
          { opacity: 1 }
        );

        const tl = gsap.timeline({
          onComplete: () => {
            revealApp();
            unmount();
          },
        });

        tl.fromTo(
          logoRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: "power1.out" }
        )
          .to({}, { duration: 1.6 })
          .call(revealApp)
          .to(rootRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power1.inOut",
          });

        return;
      }

      // Estado inicial: todo ligeramente desplazado y oculto para que la
      // entrada se sienta construida y con profundidad.
      gsap.set(bgRef.current, {
        scale: 1.06,
        transformOrigin: "50% 50%",
      });
      gsap.set([waveBackRef.current, waveFrontRef.current], {
        yPercent: 55,
        opacity: 0,
      });
      gsap.set(logoRef.current, {
        clipPath: "inset(0% 100% 0% 0%)",
        opacity: 0,
        y: 16,
        scale: 0.97,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          revealApp();
          unmount();
        },
      });

      tl
        // Fondo: leve reencuadre que asienta la escena.
        .to(
          bgRef.current,
          { scale: 1, duration: 1.7, ease: "power2.out" },
          0
        )
        // Ondas: suben desde abajo, escalonadas.
        .to(
          waveBackRef.current,
          { yPercent: 0, opacity: 1, duration: 1.25 },
          0.1
        )
        .to(
          waveFrontRef.current,
          { yPercent: 0, opacity: 0.7, duration: 1.15 },
          0.26
        )
        // Logo: revelado lateral con un pequeño avance en Y y escala.
        .to(
          logoRef.current,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            ease: "power2.out",
          },
          0.22
        )
        .addLabel("settled")
        .call(startIdle, undefined, "settled")
        // Pausa breve antes de salir.
        .to({}, { duration: 0.75 }, "settled")
        .addLabel("leave")
        .call(stopIdle, undefined, "leave")
        // El héroe se revela detrás mientras la cortina aún se mueve.
        .call(revealApp, undefined, "leave")
        // Salida: primero el logo.
        .to(
          logoRef.current,
          {
            opacity: 0,
            y: -26,
            scale: 0.985,
            duration: 0.5,
            ease: "power2.in",
          },
          "leave"
        )
        // El filo inferior se vuelve líquido: se deja de recortar la cortina
        // y las ondas se voltean para que su cresta dibuje el borde que
        // despega. El oleaje propio de react-wavify sigue vivo mientras sube.
        .set(rootRef.current, { overflow: "visible" }, "leave")
        .to(
          waveBackRef.current,
          {
            scaleY: -1.5,
            y: 40,
            transformOrigin: "50% 50%",
            duration: 1.1,
            ease: "power2.inOut",
          },
          "leave"
        )
        .to(
          waveFrontRef.current,
          {
            scaleY: -1.25,
            y: 26,
            opacity: 1,
            transformOrigin: "50% 50%",
            duration: 1.1,
            ease: "power2.inOut",
          },
          "leave+=0.08"
        )
        // La cortina entera asciende con un easing largo; las ondas la
        // siguen con un leve retraso que estira el borde al despegar.
        .to(
          rootRef.current,
          {
            yPercent: -126,
            duration: 1.25,
            ease: "power4.inOut",
          },
          "leave+=0.18"
        )
        .to(
          [waveBackRef.current, waveFrontRef.current],
          {
            yPercent: 16,
            duration: 1.25,
            ease: "power3.in",
          },
          "leave+=0.18"
        )
        .to(
          bgRef.current,
          {
            scale: 1.03,
            duration: 1.25,
            ease: "power4.inOut",
          },
          "leave+=0.18"
        );
    });

    const fallbackTimer = window.setTimeout(() => {
      revealApp();
      unmount();
    }, 6000);

    return () => {
      window.clearTimeout(fallbackTimer);
      ctx.revert();

      document.body.style.overflow = "";
      delete document.documentElement.dataset.vivayaPreloader;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999] overflow-hidden"
    >
      {/* Fondo principal */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundColor: CURTAIN_COLOR,
        }}
      />

      {/* Onda trasera */}
      <div
        ref={waveBackRef}
        className="absolute bottom-[-44px] left-0 w-full"
      >
        <Wave
          fill={CURTAIN_COLOR}
          paused={false}
          options={{
            height: 26,
            amplitude: 22,
            speed: 0.18,
            points: 5,
          }}
          style={{
            display: "block",
            width: "100%",
            height: "150px",
          }}
        />
      </div>

      {/* Onda frontal para darle más movimiento */}
      <div
        ref={waveFrontRef}
        className="absolute bottom-[-54px] left-0 w-full opacity-70"
      >
        <Wave
          fill={CURTAIN_COLOR}
          paused={false}
          options={{
            height: 30,
            amplitude: 15,
            speed: 0.28,
            points: 6,
          }}
          style={{
            display: "block",
            width: "100%",
            height: "150px",
          }}
        />
      </div>

      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div ref={logoRef} className="w-64 sm:w-80 lg:w-[26rem]">
          <Image
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
