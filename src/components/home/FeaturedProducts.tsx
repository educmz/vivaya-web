"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FeaturedProductsCarousel } from "@/components/home/FeaturedProductsCarousel";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FeaturedProducts() {
  const activeProducts = products.filter((product) => product.active).slice(0, 4);
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#F4C783] pb-44 pt-28 sm:pb-52 sm:pt-36">
      <div className="pointer-events-none absolute -left-32 top-10 -z-20 h-[28rem] w-[28rem] rounded-full bg-[var(--primary)]/20 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-20 h-[32rem] w-[32rem] rounded-full bg-[var(--accent)]/35 blur-[110px]" aria-hidden="true" />

      <span className="font-heading pointer-events-none absolute inset-0 -z-20 flex select-none items-center justify-center text-[clamp(20rem,45vw,42rem)] leading-none text-[var(--foreground)]/[0.06]" aria-hidden="true">
        V
      </span>

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[70vw] max-w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--foreground)]/10" aria-hidden="true" />

      <motion.div
        className="pointer-events-none absolute -right-8 -top-8 -z-10 w-44 sm:w-64"
        animate={reduced ? undefined : { y: [0, -14, 0], rotate: [12, 6, 12] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <Image src="/images/hero/orange-left.png" alt="" aria-hidden="true" width={320} height={320} className="h-auto w-full" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -top-4 left-12 -z-10 w-28 sm:w-36"
        animate={reduced ? undefined : { y: [0, 10, 0], rotate: [45, 55, 45] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      >
        <Image src="/images/products/Hojas/Hoja1.png" alt="" aria-hidden="true" width={260} height={260} className="h-auto w-full" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -bottom-20 -left-10 -z-10 w-44 sm:w-64"
        animate={reduced ? undefined : { y: [0, 14, 0], rotate: [-12, -6, -12] }}
        transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
      >
        <Image src="/images/products/Hojas/Hoja1.png" alt="" aria-hidden="true" width={320} height={320} className="h-auto w-full" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -bottom-12 right-16 -z-10 w-32 sm:w-44"
        animate={reduced ? undefined : { y: [0, -10, 0], rotate: [-45, -35, -45] }}
        transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut" }}
      >
        <Image src="/images/hero/orange-left.png" alt="" aria-hidden="true" width={260} height={260} className="h-auto w-full" />
      </motion.div>

      <Container className="relative [&_h2]:font-heading [&_h2]:normal-case [&_h2]:tracking-normal [&_h2]:text-[clamp(2.75rem,6vw,4.75rem)] [&_p:first-child]:font-accent [&_p:first-child]:!text-3xl [&_p:first-child]:!normal-case [&_p:first-child]:!tracking-normal [&_p:first-child]:text-[var(--primary)] [&_p:last-child]:max-w-xl [&_p:last-child]:text-lg">
        <SectionTitle eyebrow="Nuestra selección" title="Productos destacados" description="Descubre los formatos Vivaya pensados para acompañar cada momento de tu día." />
      </Container>

      <div className="relative mt-16 w-full">
        <FeaturedProductsCarousel products={activeProducts} />
      </div>

      <div className="relative z-10 mt-10 flex justify-center">
        <Button href="/carta" className="min-h-14 bg-[#073B3A] px-8 text-white hover:bg-[#0F6B6D]">Conoce toda la carta</Button>
      </div>

      <WaveDivider fill="#FFF4C4" variant="swell" className="absolute -bottom-px inset-x-0" />
    </section>
  );
}
