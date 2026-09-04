"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Product } from "@/types/product";
import { TextReveal } from "@/components/animations/TextReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FeaturedProductCard({ product, index, isActive = false }: { product: Product; index: number; isActive?: boolean }) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="flex h-full flex-col items-center"
      initial={reduced ? false : { opacity: 0, y: 48, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative h-72 w-full sm:h-[26rem]"
        animate={reduced ? undefined : { scale: isActive ? 1.1 : 1, y: isActive ? -8 : 0 }}
        whileHover={reduced ? undefined : { scale: 1.16, rotate: -2, y: -12 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {product.image ? (
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 60vw, (max-width: 1024px) 36vw, 24vw" className="object-contain drop-shadow-2xl" />
        ) : (
          <div className="grid h-full place-items-center text-center text-sm font-semibold text-black/45" role="img" aria-label={`Imagen temporal pendiente de ${product.name}`}>
            Imagen de producto pendiente
          </div>
        )}
      </motion.div>
      <h3 className="font-heading mt-6 text-center text-2xl tracking-wide text-[var(--foreground)] sm:text-4xl">
        <TextReveal text={product.name.toUpperCase()} />
      </h3>
    </motion.article>
  );
}
