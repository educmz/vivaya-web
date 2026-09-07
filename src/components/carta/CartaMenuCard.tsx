"use client";

import Image from "next/image";
import { motion } from "motion/react";

import type { MenuProduct } from "@/types/catalog";
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
        delay: (index % 4) * 0.04,
        ease,
      }}
      className="group"
    >
      <motion.div
        whileHover={
          reducedMotion
            ? undefined
            : {
                y: -4,
              }
        }
        transition={{
          duration: 0.25,
          ease,
        }}
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[1.5rem]
          border
          border-[#302E2A]/8
          bg-white
          shadow-[0_8px_30px_rgba(60,45,30,0.04)]
          transition-shadow
          duration-300
          group-hover:shadow-[0_14px_36px_rgba(60,45,30,0.08)]
        "
      >
        {/* IMAGEN */}
        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden
            bg-[#F8EBDD]
          "
        >
          <motion.div
            className="absolute inset-0"
            whileHover={
              reducedMotion
                ? undefined
                : {
                    scale: 1.025,
                  }
            }
            transition={{
              duration: 0.45,
              ease,
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="
                (max-width: 640px) 90vw,
                (max-width: 1024px) 45vw,
                (max-width: 1280px) 33vw,
                25vw
              "
              className="object-cover"
            />
          </motion.div>

          {item.featured && (
            <span
              className="
                absolute
                left-4
                top-4
                rounded-full
                bg-white/90
                px-3
                py-1.5
                text-[11px]
                font-medium
                text-[#C96532]
                shadow-sm
                backdrop-blur-sm
              "
            >
              Favorito
            </span>
          )}

          {item.customizations &&
            item.customizations.length > 0 && (
              <span
                className="
                  absolute
                  right-4
                  top-4
                  rounded-full
                  bg-[#EAF3E7]/95
                  px-3
                  py-1.5
                  text-[11px]
                  font-medium
                  text-[#52734C]
                  shadow-sm
                  backdrop-blur-sm
                "
              >
                Personalizable
              </span>
            )}
        </div>

        {/* INFORMACIÓN */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-5">
            <h3
              className="
                text-xl
                font-semibold
                leading-tight
                tracking-[-0.02em]
                text-[#302E2A]
                sm:text-[1.35rem]
              "
            >
              {item.name}
            </h3>

            <span
              className="
                shrink-0
                text-lg
                font-semibold
                tracking-[-0.02em]
                text-[#C96532]
              "
            >
              S/ {item.price.toFixed(2)}
            </span>
          </div>

          <p
            className="
              mt-3
              line-clamp-3
              text-sm
              leading-6
              text-[#77736D]
            "
          >
            {item.description}
          </p>

          <div className="mt-auto pt-5">
            <button
              type="button"
              onClick={() => onOrder?.(item)}
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#F4A06D]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-[#4B2D1E]
                transition
                duration-200
                hover:bg-[#EE925C]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#F4A06D]
                focus-visible:ring-offset-2
              "
            >
              Pedir
            </button>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}