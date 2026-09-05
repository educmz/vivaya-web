"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { WaveDivider } from "@/components/sections/WaveDivider";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Cambia únicamente estas rutas cuando estén listas las fotos definitivas.
const manifestoImages = [
  { src: "/images/about/about-lifestyle.webp", alt: "Experiencia Vivaya", className: "left-[2%] top-[8%] -rotate-6" },
  { src: "/images/about/about-product.webp", alt: "Producto Vivaya", className: "right-[3%] top-[2%] rotate-5" },
  { src: "/images/about/about-machine.webp", alt: "Máquina Vivaya", className: "bottom-[2%] left-[12%] rotate-3" },
  { src: "/images/products/Locales/Miraflores.jpg", alt: "Vivaya en movimiento", className: "bottom-[7%] right-[10%] -rotate-4" },
];

export function VivayaManifesto() {
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate min-h-[115svh] overflow-hidden bg-[#073B3A] py-32 text-[#FFF7E8] sm:min-h-[135svh] sm:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[75vw] max-w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFF7E8]/10" aria-hidden="true" />

      <Container className="relative z-10 flex min-h-[72svh] items-center justify-center text-center">
        <div>
          <p className="font-accent text-3xl font-bold text-[#F6D98B] sm:text-5xl">Te mereces sentirte bien</p>
          <h2 className="font-heading mx-auto mt-5 max-w-5xl text-[clamp(3.8rem,8.6vw,9rem)] uppercase leading-[0.83]">
            Lo natural también puede seguir tu ritmo
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#FFF7E8]/65 sm:text-lg sm:leading-8">
            Hacemos que elegir fruta, frescura y sabor sea una experiencia sencilla, alegre y lista para acompañarte cada día.
          </p>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {manifestoImages.map((image, index) => (
          <motion.figure
            key={image.src}
            className={`absolute aspect-[4/5] w-[clamp(9rem,15vw,15rem)] overflow-hidden rounded-[2rem] border-[6px] border-[#FFF7E8] shadow-[0_25px_60px_rgba(0,0,0,0.28)] ${image.className}`}
            initial={reduced ? false : { opacity: 0, y: 80, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduced ? undefined : { scale: 1.05, rotate: 0 }}
          >
            <Image src={image.src} alt={image.alt} fill sizes="15rem" className="object-cover" />
          </motion.figure>
        ))}
      </div>

      <WaveDivider fill="#EEF4E9" variant="soft" className="absolute -bottom-px inset-x-0 z-30" />
    </section>
  );
}
