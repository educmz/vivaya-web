"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";

import type { VivayaLocation } from "@/data/locations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

interface LocationCardProps {
  location: VivayaLocation;
  index: number;
}

export function LocationCard({ location, index }: LocationCardProps) {
  const reducedMotion = useReducedMotion();
  const hasMapsUrl = Boolean(
    location.mapsUrl && location.mapsUrl !== "#",
  );

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease,
      }}
      className="grid overflow-hidden rounded-2xl bg-white text-[#302E2A] shadow-[0_4px_18px_rgba(48,46,42,0.07)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(48,46,42,0.16)] focus-within:shadow-[0_16px_40px_rgba(48,46,42,0.16)] motion-reduce:transition-none md:grid-cols-2"
    >
      {/* IMAGEN */}
      <div className="relative aspect-[16/11] overflow-hidden bg-[#F5EDDF] md:aspect-auto md:min-h-[380px]">
        <Image
          src={location.image}
          alt={`Local VIVAYA ${location.name}`}
          fill
          sizes="(min-width: 1160px) 560px, (min-width: 768px) 45vw, 92vw"
          className="object-cover"
        />
      </div>

      {/* INFO */}
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <h2 className="mt-3 text-3xl font-extrabold uppercase leading-[1.05] tracking-[0.01em] sm:text-4xl">
          <span className="block text-[#302E2A]/35">VIVAYA</span>
          {location.name}
        </h2>

        <address className="mt-6 flex gap-2.5 text-sm not-italic leading-6 text-[#302E2A]/70">
          <MapPin
            size={17}
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-[#FF8A00]"
          />
          {location.address}
        </address>

        <div className="mt-5 text-sm leading-6 text-[#302E2A]/70">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#302E2A]">
            Horario de atención
          </p>
          {location.schedule.map((schedule) => (
            <p key={schedule} className="mt-1">
              {schedule}
            </p>
          ))}
        </div>

        {location.note && (
          <p className="mt-5 text-xs leading-5 text-[#302E2A]/45">
            {location.note}
          </p>
        )}

        <div className="mt-8">
          {hasMapsUrl ? (
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver VIVAYA ${location.name} en Google Maps (abre otra pestaña)`}
              className="group/btn relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden bg-[#302E2A] px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition-[background-color,translate,scale] duration-200 hover:-translate-y-0.5 hover:bg-[#454039] active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <MapPin size={16} aria-hidden="true" />
                Ver en Google Maps
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 motion-reduce:transition-none"
                />
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[650ms] ease-out group-hover/btn:translate-x-full motion-reduce:hidden"
              />
            </a>
          ) : (
            <p className="text-sm text-[#302E2A]/45">
              Ubicación en Google Maps próximamente.
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
