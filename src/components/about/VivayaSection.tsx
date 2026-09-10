"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Sparkles, Leaf } from "lucide-react";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Parallax } from "@/components/animations/Parallax";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  AboutImage,
  AboutItem,
  AboutReveal,
} from "@/components/about/AboutMotion";

const ease = [0.16, 1, 0.3, 1] as const;

/* -------------------------------------------------------------------------- */
/*  Piezas decorativas                                                         */
/* -------------------------------------------------------------------------- */

/** Cuadro de color plano que asoma detrás de la imagen. */
function Shape({
  className,
  color,
  drift = 0,
}: {
  className: string;
  color: string;
  drift?: number;
}) {
  const inner = (
    <motion.div
      aria-hidden="true"
      className="h-full w-full rounded-xl"
      style={{ backgroundColor: color }}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease }}
    />
  );

  if (drift === 0) {
    return (
      <div className={`pointer-events-none absolute z-0 ${className}`}>
        {inner}
      </div>
    );
  }

  return (
    <Parallax
      distance={drift}
      className={`pointer-events-none absolute z-0 ${className}`}
    >
      {inner}
    </Parallax>
  );
}

/** Chip flotante estilo notificación, anclado a la imagen. */
function Badge({
  icon: Icon,
  text,
  side,
}: {
  icon: typeof Sparkles;
  text: string;
  side: "left" | "right";
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`absolute bottom-5 z-20 ${
        side === "right" ? "left-4 sm:-left-6" : "right-4 sm:-right-6"
      }`}
      initial={reduced ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease, delay: 0.35 }}
    >
      <div className={reduced ? "" : "animate-gentle-float"}>
        <div className="flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 shadow-[0_16px_40px_-16px_rgba(48,46,42,0.4)] ring-1 ring-black/5 backdrop-blur">
          <span className="flex size-6 items-center justify-center rounded-full bg-[#FFF1E0]">
            <Icon className="size-3.5 text-[#FF8A00]" />
          </span>
          <span className="whitespace-nowrap text-xs font-semibold text-[#302E2A]">
            {text}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/** Línea punteada curva que enlaza una fila con la siguiente (solo desktop). */
function Connector({ flip }: { flip: boolean }) {
  return (
    <div className="relative hidden h-24 md:block" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="vv-connector" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FF8A00" />
            <stop offset="1" stopColor="#8FB98A" />
          </linearGradient>
        </defs>
        <motion.path
          d={
            flip
              ? "M 880 0 C 880 70, 320 55, 320 120"
              : "M 320 0 C 320 70, 880 55, 880 120"
          }
          stroke="url(#vv-connector)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="1 14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease }}
        />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bloque principal (estilo referencia)                                       */
/* -------------------------------------------------------------------------- */

function HeroBlock() {
  return (
    <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      {/* IMAGEN + FORMAS */}
      <AboutReveal
        className="relative order-1 mx-auto w-full max-w-[560px]"
        amount={0.3}
        stagger={0.12}
      >
        {/* Bloque azul que sangra por el borde izquierdo */}
        <Shape
          className="-left-[14vw] top-10 hidden h-[110%] w-[62%] sm:block"
          color="#1C3A5E"
          drift={30}
        />
        {/* Cuadro mostaza arriba */}
        <Shape
          className="-top-9 right-[16%] hidden size-28 sm:block lg:size-32"
          color="#F4C24C"
          drift={-16}
        />
        {/* Cuadro melocotón abajo */}
        <Shape
          className="-bottom-9 left-[4%] hidden h-24 w-40 sm:block"
          color="#F6C9AC"
          drift={18}
        />

        <AboutImage
          hover
          className="relative z-10 aspect-[4/3] overflow-hidden rounded-2xl border-[10px] border-background bg-[#F3EADF] shadow-[0_36px_80px_-32px_rgba(48,46,42,0.5)] sm:rounded-3xl"
        >
          <Image
            src="/images/about/about-product.webp"
            alt="Mesa VIVAYA con waffle, smoothie y sándwich"
            fill
            sizes="(max-width: 767px) 88vw, (max-width: 1023px) 46vw, 560px"
            className="object-cover"
            priority
          />
        </AboutImage>
      </AboutReveal>

      {/* TEXTO + CTA */}
      <AboutReveal className="order-2 min-w-0 max-w-lg" amount={0.4}>
        <AboutItem>
          <p
            className="text-2xl leading-none text-[#FF8A00] sm:text-3xl"
            style={{ fontFamily: "var(--font-script), 'Pacifico', cursive" }}
          >
            Nosotros
          </p>
        </AboutItem>

        <AnimatedTitle
          text={"Creamos momentos\npara disfrutar."}
          className="mt-4 font-heading text-4xl font-normal leading-[1.08] tracking-[-0.02em] text-[#302E2A] sm:text-5xl lg:text-[3.4rem]"
        />

        <AboutItem className="mt-5">
          <p className="max-w-md text-sm leading-6 text-[#77736D] sm:text-base sm:leading-7">
            VIVAYA nace para acercar fruta real y opciones frescas a una
            rutina cada vez más dinámica. Conectamos producto, bienestar y
            una experiencia pensada para el día a día.
          </p>
        </AboutItem>

        <AboutItem className="mt-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#302E2A]">
            Descubre la propuesta
          </p>
          <Link
            href="/carta"
            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-[#FF8A00] px-7 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#F57F00]"
          >
            Ver la carta
          </Link>
        </AboutItem>
      </AboutReveal>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Filas alternas                                                             */
/* -------------------------------------------------------------------------- */

type Row = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  shape: string;
  badge: { icon: typeof Sparkles; text: string };
  imageSide: "left" | "right";
};

const rows: Row[] = [
  {
    eyebrow: "Nuestra esencia",
    title: "Sabor para\ncada momento.",
    body: "Una propuesta pensada para acompañar tus antojos, tus pausas y esos momentos que simplemente se disfrutan.",
    image: "/images/about/about-lifestyle.webp",
    imageAlt: "Persona disfrutando una bebida a la entrada de VIVAYA",
    shape: "#D8E7CB",
    badge: { icon: Sparkles, text: "Hecho al momento" },
    imageSide: "right",
  },
  {
    eyebrow: "Nuestro producto",
    title: "Ingredientes\nque reconoces.",
    body: "Empezamos por fruta real y opciones frescas. Lo natural puede ser rico, rápido y estar donde lo necesitas.",
    image: "/images/about/about-hero.webp",
    imageAlt: "Selección de platos y bebidas VIVAYA",
    shape: "#C9DEEA",
    badge: { icon: Leaf, text: "Fruta de verdad" },
    imageSide: "left",
  },
];

function StoryRow({ row }: { row: Row }) {
  const imageRight = row.imageSide === "right";
  const Icon = row.badge.icon;

  return (
    <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
      {/* TEXTO */}
      <AboutReveal
        className={`min-w-0 max-w-md ${
          imageRight ? "md:order-1" : "md:order-2 md:ml-auto"
        }`}
        amount={0.4}
      >
        <AboutItem>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF8A00]">
            {row.eyebrow}
          </p>
        </AboutItem>

        <AnimatedTitle
          as="h3"
          text={row.title}
          amount={0.5}
          className="mt-3 font-heading text-3xl font-normal leading-[1.1] tracking-[-0.02em] text-[#302E2A] sm:text-4xl"
        />

        <AboutItem className="mt-4">
          <p className="text-sm leading-6 text-[#77736D] sm:leading-7">
            {row.body}
          </p>
        </AboutItem>
      </AboutReveal>

      {/* IMAGEN */}
      <AboutReveal
        className={`relative mx-auto w-full max-w-[440px] ${
          imageRight ? "md:order-2" : "md:order-1"
        }`}
        amount={0.25}
        stagger={0.16}
      >
        <Shape
          className={`h-2/3 w-1/2 ${
            imageRight ? "-right-5 -top-6" : "-left-5 -bottom-6"
          }`}
          color={row.shape}
          drift={20}
        />

        <AboutImage
          hover
          className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-background bg-[#F3EADF] shadow-[0_28px_70px_-30px_rgba(48,46,42,0.45)] sm:border-8"
        >
          <Image
            src={row.image}
            alt={row.imageAlt}
            fill
            sizes="(max-width: 767px) 88vw, (max-width: 1023px) 44vw, 440px"
            className="object-cover"
          />
        </AboutImage>

        <Badge icon={Icon} text={row.badge.text} side={row.imageSide} />
      </AboutReveal>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

export function VivayaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-10">
        <HeroBlock />

        <div className="mt-16 lg:mt-24">
          {rows.map((row, index) => (
            <div key={row.title}>
              <StoryRow row={row} />
              {index < rows.length - 1 && (
                <Connector flip={row.imageSide === "left"} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
