"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import type { MenuProduct } from "@/types/catalog";
import { deliveryConfig } from "@/config/delivery";
import { isSafeExternalUrl } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

interface CartaMenuCardProps {
  item: MenuProduct;
  index: number;
  onOrder?: (product: MenuProduct) => void;
}

export function CartaMenuCard({
  item,
  index,
  onOrder,
}: CartaMenuCardProps) {
  const reducedMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  const rappiUrl = item.delivery?.rappi || deliveryConfig.rappiStoreUrl;
  const rappiEnabled = isSafeExternalUrl(rappiUrl);

  const buttonClass =
    "flex min-h-12 w-full items-center justify-center bg-[#141414] px-5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#333] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <motion.article
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 18,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: (index % 4) * 0.05,
        ease,
      }}
      className="group flex h-full flex-col bg-white shadow-[0_2px_10px_rgba(7,59,58,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(7,59,58,0.12)]"
    >
      {/* IMAGEN */}
      <div className="relative aspect-square overflow-hidden bg-[#ECECEC]">
        {!imageFailed && (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="
              (max-width: 640px) 90vw,
              (max-width: 1024px) 45vw,
              25vw
            "
            className="object-cover"
            onError={() => setImageFailed(true)}
          />
        )}

        {imageFailed && (
          <span className="absolute inset-0 flex items-center justify-center px-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-black/30">
            {item.name}
          </span>
        )}

        {item.featured && (
          <span className="absolute left-0 top-3 bg-[#141414] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
            Favorito
          </span>
        )}
      </div>

      {/* INFORMACIÓN */}
      <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
        <h3 className="text-lg font-bold uppercase leading-tight tracking-[0.01em] text-[#141414]">
          {item.name}
        </h3>

        <p className="mt-3 text-[13px] leading-5 text-[#3D3AA8]">
          {item.description}
        </p>

        <div className="mt-auto pt-6">
          {rappiEnabled ? (
            <a
              href={rappiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              Comprar
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onOrder?.(item)}
              className={buttonClass}
            >
              Comprar
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
