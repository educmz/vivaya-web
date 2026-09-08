"use client";

import Image from "next/image";
import { motion } from "motion/react";

import type { EventPackage } from "@/types/catalog";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

interface EventCardProps {
  eventPackage: EventPackage;
  index: number;
  onDetails: (eventPackage: EventPackage) => void;
}

export function EventCard({
  eventPackage,
  index,
  onDetails,
}: EventCardProps) {
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
        amount: 0.12,
      }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.04,
        ease,
      }}
      className="group"
    >
      <div
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
          transition
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_14px_36px_rgba(60,45,30,0.08)]
        "
      >
        {/* IMAGEN */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F5EEE5]">
          <Image
            src={eventPackage.image}
            alt={eventPackage.name}
            fill
            sizes="
              (max-width: 640px) 90vw,
              (max-width: 1024px) 45vw,
              33vw
            "
            className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          />
        </div>

        {/* INFORMACIÓN */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-5">
            <h2 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-[#302E2A]">
              {eventPackage.name}
            </h2>

            <div className="shrink-0 text-right">
              <span className="block text-[11px] leading-none text-[#77736D]">
                Desde
              </span>

              <span className="mt-1 block text-lg font-semibold tracking-[-0.02em] text-[#C96532]">
                S/ {eventPackage.priceFrom.toFixed(2)}
              </span>
            </div>
          </div>

          {eventPackage.description && (
            <p className="mt-3 text-sm leading-6 text-[#77736D]">
              {eventPackage.description}
            </p>
          )}

          {/* INCLUYE */}
          <ul className="mt-5 space-y-2">
            {eventPackage.includes
              .slice(0, 4)
              .map((includedItem) => (
                <li
                  key={includedItem}
                  className="flex gap-2 text-sm leading-5 text-[#5F5B55]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8CFA3]"
                  />

                  <span>{includedItem}</span>
                </li>
              ))}
          </ul>

          {eventPackage.includes.length > 4 && (
            <p className="mt-3 text-xs font-medium text-[#77736D]">
              + {eventPackage.includes.length - 4} más
            </p>
          )}

          {/* INFORMACIÓN RÁPIDA */}
          {(eventPackage.durationHours ||
            eventPackage.staffCount ||
            eventPackage.cartsCount) && (
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#302E2A]/8 pt-4 text-xs text-[#77736D]">
              {eventPackage.durationHours && (
                <span>
                  {eventPackage.durationHours} h de servicio
                </span>
              )}

              {eventPackage.staffCount && (
                <span>
                  {eventPackage.staffCount}{" "}
                  {eventPackage.staffCount === 1
                    ? "persona"
                    : "personas"}
                </span>
              )}

              {eventPackage.cartsCount && (
                <span>
                  {eventPackage.cartsCount}{" "}
                  {eventPackage.cartsCount === 1
                    ? "carrito"
                    : "carritos"}
                </span>
              )}
            </div>
          )}

          {/* CTA */}
          <div className="mt-auto pt-6">
            <button
              type="button"
              onClick={() =>
                onDetails(eventPackage)
              }
              className="
                min-h-11
                w-full
                rounded-full
                bg-[#A8CFA3]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-[#30482C]
                transition-colors
                duration-200
                hover:bg-[#98BE92]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#A8CFA3]
                focus-visible:ring-offset-2
              "
            >
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}