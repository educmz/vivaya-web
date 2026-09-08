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
    "flex min-h-12 w-full items-center justify-center bg-[#302E2A] px-5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#454039] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

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
      <div className="relative aspect-square overflow-hidden bg-[#F5EDDF]">
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
            style={
              item.imageScale
                ? { transform: `scale(${item.imageScale})` }
                : undefined
            }
            onError={() => setImageFailed(true)}
          />
        )}

        {imageFailed && (
          <span className="absolute inset-0 flex items-center justify-center px-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-black/30">
            {item.name}
          </span>
        )}
      </div>

      {/* INFORMACIÓN */}
      <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
        <h3 className="text-lg font-extrabold uppercase leading-tight tracking-[0.01em] text-[#302E2A]">
          {item.name}
        </h3>

        <p className="mt-3 text-[13px] leading-5 text-[#302E2A]">
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
