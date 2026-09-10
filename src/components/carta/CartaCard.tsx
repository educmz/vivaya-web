"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import type { CartaProduct } from "@/types/catalog";
import { DeliveryPopover } from "./DeliveryPopover";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

interface CartaCardProps {
  item: CartaProduct;
  index: number;
  isOrderOpen: boolean;
  onToggleOrder: () => void;
}

export function CartaCard({
  item,
  index,
  isOrderOpen,
  onToggleOrder,
}: CartaCardProps) {
  const reducedMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  const buttonClass =
    "group/btn relative flex min-h-11 w-full items-center justify-center overflow-hidden bg-[#302E2A] px-2 py-2 text-[10px] font-bold uppercase tracking-[0.04em] text-white transition-[background-color,translate,scale] duration-200 hover:-translate-y-0.5 hover:bg-[#FF8A00] active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:min-h-12 sm:px-5 sm:text-sm sm:tracking-[0.12em] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

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
      style={{ position: "relative", zIndex: isOrderOpen ? 20 : undefined }}
      className="group flex h-full min-w-0 flex-col bg-white shadow-[0_2px_10px_rgba(48,46,42,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(48,46,42,0.12)]"
    >
      {/* IMAGEN */}
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-[#F5EDDF] sm:aspect-square">
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
                ? {
                    transform: `scale(${item.imageScale})`,
                  }
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
        <h3 className="min-w-0 break-words text-sm font-extrabold uppercase leading-tight tracking-[0.01em] text-[#302E2A] sm:text-lg">
          {item.name}
        </h3>

        <p className="mt-2 break-words text-xs leading-[1.45] text-[#302E2A] sm:mt-3 sm:text-[13px] sm:leading-5">
          {item.description}
        </p>

        <div className="relative mt-auto pt-3 sm:pt-6">
          {isOrderOpen && (
            <DeliveryPopover id={`delivery-${item.id}`} onClose={onToggleOrder} />
          )}

          {/* BOTÓN COMPRAR */}
          <button
            type="button"
            onClick={onToggleOrder}
            className={buttonClass}
            aria-expanded={isOrderOpen}
            aria-controls={isOrderOpen ? `delivery-${item.id}` : undefined}
            data-order-trigger
          >
            <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
              Comprar

              <ArrowRight
                size={15}
                className={`shrink-0 transition-transform duration-300 ${
                  isOrderOpen
                    ? "rotate-90"
                    : "group-hover/btn:translate-x-1"
                }`}
                aria-hidden="true"
              />
            </span>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[650ms] ease-out group-hover/btn:translate-x-full motion-reduce:hidden"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}