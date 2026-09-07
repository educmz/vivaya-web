"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { WaveDivider } from "@/components/sections/WaveDivider";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Viewport = "mobile" | "tablet" | "desktop";

export function ProductScrollSequence() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const reduced = useReducedMotion();

  return desktop && !reduced ? <DesktopProductSequence /> : <MobileProductSequence />;
}

function MobileProductSequence() {
  const reduced = useReducedMotion();
  const scenes = [
    { title: "Más fruta. Más frescura.", copy: "Fruta real. Sabor vivo desde el origen.", background: "#EEF4E9", color: "#335C30" },
    { title: "Frescura al instante", copy: "Preparado al momento.", background: "#E9F5EE", color: "#335C30" },
    { title: "Sabor a tu ritmo", copy: "Vivaya, donde quieras.", background: "#0F6B6D", color: "#FFF7E8" },
    { title: "Esto es Vivaya.", copy: "", background: "#073B3A", color: "#FFF7E8" },
  ];

  return (
    <section aria-label="Frescura Vivaya">
      {scenes.map((scene, index) => (
        <article key={scene.title} className="relative isolate overflow-hidden px-5 pb-28 pt-16 text-center sm:pb-36" style={{ backgroundColor: scene.background, color: scene.color }}>
          <motion.div initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45 }} className="mx-auto max-w-lg">
            <h2 className="font-heading text-[clamp(2.5rem,10vw,4rem)] uppercase leading-[0.95]">{scene.title}</h2>
            {scene.copy && <p className="mt-4 text-base">{scene.copy}</p>}
            <div className="relative mx-auto mt-8 aspect-square w-full max-w-72">
              <div aria-hidden="true" className="absolute inset-5 rounded-full border border-current opacity-20" />
              <Image src="/images/hero/hero-product.png" alt="Vaso de jugo Vivaya" fill sizes="(max-width: 360px) 85vw, 288px" className="object-contain p-3 drop-shadow-xl" />
            </div>
          </motion.div>
          <WaveDivider fill={scenes[index + 1]?.background ?? "#F6D98B"} variant="drift" className="absolute inset-x-0 -bottom-px" />
        </article>
      ))}
    </section>
  );
}

function DesktopProductSequence() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedPreference = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [viewport, setViewport] = useState<Viewport>("desktop");

  useEffect(() => {
    const updateViewport = () => {
      setViewport(
        window.innerWidth < 640
          ? "mobile"
          : window.innerWidth < 1024
            ? "tablet"
            : "desktop",
      );
    };

    const frame = requestAnimationFrame(() => {
      updateViewport();
      setMounted(true);
    });
    window.addEventListener("resize", updateViewport);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  const reduced = mounted && Boolean(reducedPreference);
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });

  const cupXKeyframes = reduced
    ? ["0vw", "0vw", "0vw", "0vw", "0vw", "0vw"]
    : viewport === "mobile"
      ? ["6vw", "3vw", "0vw", "-3vw", "3vw", "5vw"]
      : viewport === "tablet"
        ? ["13.5vw", "7.5vw", "1.5vw", "-6vw", "5.25vw", "11.25vw"]
        : ["18vw", "10vw", "2vw", "-8vw", "7vw", "15vw"];
  const cupYKeyframes = reduced
    ? ["-8vh", "-4vh", "0vh", "4vh", "8vh", "10vh"]
    : viewport === "mobile"
      ? ["-28vh", "-15vh", "-2vh", "13vh", "25vh", "33vh"]
      : ["-34vh", "-18vh", "-2vh", "14vh", "27vh", "36vh"];

  const cupProgress = [0, 0.2, 0.4, 0.6, 0.8, 1];
  const cupX = useTransform(scrollYProgress, cupProgress, cupXKeyframes);
  const cupY = useTransform(scrollYProgress, cupProgress, cupYKeyframes);
  const cupScale = useTransform(
    scrollYProgress,
    cupProgress,
    reduced
      ? [0.9, 0.9, 0.92, 0.92, 0.94, 0.94]
      : [0.76, 0.9, 1.04, 0.88, 1.08, 0.94],
  );
  const cupRotateZ = useTransform(
    scrollYProgress,
    cupProgress,
    reduced ? [0, 0, 0, 0, 0, 0] : [-6, -2, 3, -8, 10, 4],
  );
  const cupRotateY = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    reduced ? [0, 0, 0, 0] : [-6, 4, -5, 3],
  );
  const cupRotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduced ? [0, 0, 0] : [2, -3, 1],
  );

  const pathX = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [100, -160]);
  const pathY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-30, 50]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#EEF4E9", "#EEF4E9", "#E9F5EE", "#0F6B6D", "#073B3A"],
  );

  const scene1Opacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.24, 0.3],
    [1, 1, 0, 0],
  );
  const scene2Opacity = useTransform(
    scrollYProgress,
    [0.22, 0.3, 0.42, 0.5],
    [0, 1, 1, 0],
  );
  const scene3Opacity = useTransform(
    scrollYProgress,
    [0.44, 0.52, 0.66, 0.74],
    [0, 1, 1, 0],
  );
  const scene4Opacity = useTransform(scrollYProgress, [0.68, 0.78, 1], [0, 1, 1]);

  const scene1Y = useTransform(
    scrollYProgress,
    [0, 0.3],
    reduced ? ["0vh", "0vh"] : ["0vh", "-30vh"],
  );
  const scene2Y = useTransform(
    scrollYProgress,
    [0.22, 0.3, 0.5],
    reduced ? ["0vh", "0vh", "0vh"] : ["30vh", "0vh", "-30vh"],
  );
  const scene3Y = useTransform(
    scrollYProgress,
    [0.44, 0.52, 0.74],
    reduced ? ["0vh", "0vh", "0vh"] : ["30vh", "0vh", "-30vh"],
  );
  const scene4Y = useTransform(
    scrollYProgress,
    [0.68, 0.78, 1],
    reduced ? ["0vh", "0vh", "0vh"] : ["30vh", "0vh", "0vh"],
  );

  return (
    <section ref={rootRef} className="relative h-[300svh]">
      <motion.div
        style={{ backgroundColor }}
        className="sticky top-0 h-[100svh] overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(51,92,48,0.18)_0.7px,transparent_0.7px)] [background-size:9px_9px]"
        />

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <motion.path
            style={{ x: pathX, y: pathY }}
            d="M-180 670 C120 470 350 790 620 645 C850 515 850 220 1090 290 C1280 345 1380 585 1610 420"
            fill="none"
            stroke="white"
            strokeWidth="28"
            strokeLinecap="round"
          />
        </svg>

        <motion.article
          style={{ opacity: scene1Opacity, y: scene1Y }}
          className="absolute inset-x-5 top-[7svh] z-20 sm:inset-x-auto sm:left-[6%] sm:top-[10svh] sm:w-[48vw] lg:w-[44vw]"
        >
          <p className="font-accent text-xl font-bold text-[#6E9D58] sm:text-2xl lg:text-3xl">
            Mira lo que hay dentro
          </p>
          <h2 className="font-heading mt-2 text-[clamp(2.8rem,6vw,6.8rem)] uppercase leading-[0.84] tracking-[-0.04em] text-[#335C30]">
            Más fruta.
            <br />
            Más frescura.
          </h2>
          <div className="mt-5 w-fit max-w-64 rounded-2xl bg-[#B9D2AD]/90 px-5 py-4 text-[#335C30] shadow-[0_18px_45px_rgba(51,92,48,0.08)] backdrop-blur-sm">
            <h3 className="font-heading text-xl uppercase leading-none sm:text-2xl">Fruta real</h3>
            <p className="mt-2 text-sm leading-5 text-[#335C30]/70">Sabor vivo desde el origen.</p>
          </div>
        </motion.article>

        <motion.article
          style={{ opacity: scene2Opacity, y: scene2Y }}
          className="absolute right-5 top-[25svh] z-20 w-[min(72vw,25rem)] text-right sm:right-[7%] sm:top-[35svh]"
        >
          <h2 className="font-heading text-[clamp(2.8rem,5.8vw,6.4rem)] uppercase leading-[0.86] tracking-[-0.04em] text-[#335C30]">
            Frescura
            <br />
            al instante
          </h2>
          <p className="mt-4 text-base font-medium text-[#335C30]/70 sm:text-lg">Preparado al momento.</p>
        </motion.article>

        <motion.article
          style={{ opacity: scene3Opacity, y: scene3Y }}
          className="absolute bottom-[18svh] left-5 z-20 w-[min(72vw,29rem)] sm:bottom-[16svh] sm:left-[7%]"
        >
          <h2 className="font-heading text-[clamp(2.8rem,5.8vw,6.4rem)] uppercase leading-[0.86] tracking-[-0.04em] text-[#FFF7E8]">
            Sabor
            <br />
            a tu ritmo
          </h2>
          <p className="mt-4 text-base font-medium text-[#FFF7E8]/75 sm:text-lg">Vivaya, donde quieras.</p>
        </motion.article>

        <motion.article
          style={{ opacity: scene4Opacity, y: scene4Y }}
          className="absolute left-5 top-[17svh] z-20 w-[min(72vw,31rem)] sm:left-[7%] sm:top-[21svh]"
        >
          <h2 className="font-heading text-[clamp(3.2rem,6.6vw,7.2rem)] uppercase leading-[0.84] tracking-[-0.04em] text-[#FFF7E8]">
            Esto es
            <br />
            Vivaya.
          </h2>
        </motion.article>

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-30 aspect-square w-[min(58vw,22rem)] -translate-x-1/2 -translate-y-1/2 sm:w-[min(42vw,24rem)] lg:w-[min(30vw,26rem)]"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            style={{
              x: cupX,
              y: cupY,
              scale: cupScale,
              rotateX: cupRotateX,
              rotateY: cupRotateY,
              rotateZ: cupRotateZ,
            }}
            className="relative h-full w-full transform-gpu will-change-transform [transform-style:preserve-3d]"
          >
            <Image
              src="/images/hero/hero-product.png"
              alt="Vaso de jugo Vivaya"
              fill
              sizes="(max-width: 640px) 58vw, (max-width: 1024px) 42vw, 26rem"
              className="object-contain drop-shadow-[0_30px_35px_rgba(51,92,48,0.18)]"
            />
          </motion.div>
        </div>

      </motion.div>

      <WaveDivider
        fill="#F6D98B"
        variant="swell"
        className="pointer-events-none absolute inset-x-0 -bottom-px z-40 h-24 sm:h-32 lg:h-40"
      />
    </section>
  );
}
