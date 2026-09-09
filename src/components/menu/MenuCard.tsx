"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

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
    "group/btn relative flex min-h-11 w-full items-center justify-center overflow-hidden bg-[#302E2A] px-2 py-2 text-[10px] font-bold uppercase tracking-[0.04em] sm:min-h-12 sm:px-5 sm:text-sm sm:tracking-[0.12em] text-white transition-[background-color,translate,scale] duration-200 hover:-translate-y-0.5 hover:bg-[#454039] active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

  const buttonInner = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
        Comprar
        <ArrowRight
          size={15}
          className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1 motion-reduce:transition-none"
        />
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[650ms] ease-out group-hover/btn:translate-x-full motion-reduce:hidden"
      />
    </>
  );

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
      className="group flex h-full min-w-0 flex-col bg-white shadow-[0_2px_10px_rgba(7,59,58,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(7,59,58,0.12)]"
    >
      {/* IMAGEN */}
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden sm:aspect-square bg-[#F5EDDF]">
        {!imageFailed && (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="
              (max-width: 899px) 50vw,
              (max-width: 1279px) 33vw,
              25vw
            "
            className="object-contain object-center sm:object-cover"
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
      <div className="flex min-w-0 flex-1 flex-col p-3 sm:px-5 sm:pb-6 sm:pt-5">
        <h3 className="min-w-0 break-words text-sm font-extrabold uppercase leading-tight sm:text-lg tracking-[0.01em] text-[#302E2A]">
          {item.name}
        </h3>

        <p className="mt-2 break-words text-xs leading-[1.45] sm:mt-3 sm:text-[13px] sm:leading-5 text-[#302E2A]">
          {item.description}
        </p>

        <div className="mt-auto pt-3 sm:pt-6">
          {rappiEnabled ? (
            <a
              href={rappiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              {buttonInner}
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onOrder?.(item)}
              className={buttonClass}
            >
              {buttonInner}
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
