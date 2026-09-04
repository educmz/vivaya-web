"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Product } from "@/types/product";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FeaturedProductCard({ product, index, isActive = false }: { product: Product; index: number; isActive?: boolean }) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="h-full"
      initial={reduced ? false : { opacity: 0, y: 48, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white"
        animate={reduced ? undefined : { scale: isActive ? 1.04 : 1, boxShadow: isActive ? "0 24px 48px -18px rgba(0,0,0,0.35)" : "0 1px 2px rgba(0,0,0,0.06)" }}
        whileHover={reduced ? undefined : { y: -10, scale: 1.07 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="flex h-full flex-col">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--surface-strong)]">
            {product.image ? (
              <motion.div className="absolute inset-0" whileHover={reduced ? undefined : { scale: 1.1, rotate: -1.5 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 31vw" className="object-cover" />
              </motion.div>
            ) : (
              <div className="grid h-full place-items-center p-6 text-center text-sm font-semibold text-black/45" role="img" aria-label={`Imagen temporal pendiente de ${product.name}`}>
                Imagen de producto pendiente
              </div>
            )}
          </div>
          <div className="flex flex-1 items-center justify-center p-6">
            <h3 className="text-center text-xl font-black">{product.name}</h3>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
