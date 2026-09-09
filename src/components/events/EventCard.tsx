"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import type { EventPackage } from "@/types/events";
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
      className="group flex h-full min-w-0 flex-col bg-white shadow-[0_2px_10px_rgba(7,59,58,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(7,59,58,0.12)]"
    >
      {/* IMAGEN */}
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-[#F5EDDF]">
        <Image
          src={eventPackage.image}
          alt={eventPackage.name}
          fill
          sizes="
            (max-width: 899px) 50vw,
            (max-width: 1279px) 33vw,
            25vw
          "
          className="object-cover"
        />
      </div>

      {/* INFORMACIÓN */}
      <div className="flex min-w-0 flex-1 flex-col p-3 sm:px-5 sm:pb-6 sm:pt-5">
        <div className="flex min-w-0 flex-col items-start gap-2 sm:gap-3 lg:flex-row lg:justify-between lg:gap-4">
          <h3 className="min-w-0 break-words text-sm font-extrabold uppercase leading-tight sm:text-lg tracking-[0.01em] text-[#302E2A]">
            {eventPackage.name}
          </h3>

          <div className="shrink-0 lg:text-right">
            <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[#302E2A]/45">
              Desde
            </span>

            <span className="mt-1 block text-sm sm:text-base font-extrabold text-[#302E2A]">
              S/ {eventPackage.priceFrom.toFixed(2)}
            </span>
          </div>
        </div>

        {eventPackage.description && (
          <p className="mt-2 break-words text-xs leading-[1.45] sm:mt-3 sm:text-[13px] sm:leading-5 text-[#302E2A]">
            {eventPackage.description}
          </p>
        )}

        {/* INCLUYE */}
        <ul className="mt-3 space-y-1.5 sm:mt-5 sm:space-y-2">
          {eventPackage.includes.slice(0, 4).map((includedItem) => (
            <li
              key={includedItem}
              className="flex gap-1.5 text-xs leading-[1.45] sm:gap-2 sm:text-[13px] sm:leading-5 text-[#302E2A]/75"
            >
              <span
                aria-hidden="true"
                className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-[#FF8A00]"
              />

              <span className="min-w-0 break-words">{includedItem}</span>
            </li>
          ))}
        </ul>

        {eventPackage.includes.length > 4 && (
          <p className="mt-3 text-xs font-bold text-[#302E2A]/55">
            + {eventPackage.includes.length - 4} más
          </p>
        )}

        {/* INFORMACIÓN RÁPIDA */}
        {(eventPackage.durationHours ||
          eventPackage.staffCount ||
          eventPackage.cartsCount) && (
          <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 border-t border-[#302E2A]/10 pt-3 text-xs sm:mt-5 sm:gap-x-4 sm:gap-y-2 sm:pt-4 text-[#302E2A]/70">
            {eventPackage.durationHours && (
              <span>{eventPackage.durationHours} h de servicio</span>
            )}

            {eventPackage.staffCount && (
              <span>
                {eventPackage.staffCount}{" "}
                {eventPackage.staffCount === 1 ? "persona" : "personas"}
              </span>
            )}

            {eventPackage.cartsCount && (
              <span>
                {eventPackage.cartsCount}{" "}
                {eventPackage.cartsCount === 1 ? "carrito" : "carritos"}
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-3 sm:pt-6">
          <button
            type="button"
            onClick={() => onDetails(eventPackage)}
            className="group/btn relative flex min-h-11 w-full items-center justify-center overflow-hidden bg-[#302E2A] px-2 py-2 text-[10px] font-bold uppercase tracking-[0.04em] sm:min-h-12 sm:px-5 sm:text-sm sm:tracking-[0.12em] text-white transition-[background-color,translate,scale] duration-200 hover:-translate-y-0.5 hover:bg-[#454039] active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
              Ver detalles
              <ArrowRight
                size={15}
                className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1 motion-reduce:transition-none"
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
