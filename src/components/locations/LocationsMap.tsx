"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { MapPin } from "lucide-react";

import type { StoreLocation } from "@/types/location";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function LocationsMap({
  locations,
  activeId,
}: {
  locations: StoreLocation[];
  activeId: string | null;
}) {
  const reduced = useReducedMotion();
  const [mapAccepted, setMapAccepted] = useState(false);

  const active =
    locations.find((location) => location.id === activeId) ?? locations[0];

  if (!active) {
    return (
      <div className="grid h-full min-h-[320px] place-items-center rounded-[1.8rem] border-2 border-dashed border-[#3E2A1B]/25 bg-[#EAF2E7] p-8 text-center text-sm font-semibold text-[#3E2A1B]/50 sm:min-h-[420px]">
        No hay locales que mostrar en el mapa.
      </div>
    );
  }

  const mapQuery = encodeURIComponent(
    `${active.name}, ${active.address}`,
  );

  return (
    <div className="overflow-hidden rounded-[1.8rem] border-2 border-[#3E2A1B] bg-[#FFF7E8]">
      <div className="flex items-center gap-2 border-b-2 border-[#3E2A1B]/15 px-6 py-4">
        <span
          className="size-2 rounded-full bg-[#E8792E]"
          aria-hidden="true"
        />

        <p className="text-sm font-black text-[#3E2A1B]">
          {active.name}
        </p>

        <p className="ml-auto text-xs text-[#3E2A1B]/50">
          {active.schedule}
        </p>
      </div>

      <div className="relative h-[320px] w-full sm:h-[400px]">
        <AnimatePresence mode="wait">
          {!mapAccepted ? (
            <motion.div
              key="map-consent"
              className="absolute inset-0 grid place-items-center bg-[#F7FBF3]"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mx-auto max-w-md px-6 text-center">
                <div className="mx-auto grid size-12 place-items-center rounded-full bg-[#DCEBD7] text-[#3F7D4F]">
                  <MapPin className="size-5" aria-hidden="true" />
                </div>

                <p className="mt-4 text-lg font-black text-[#073B3A]">
                  Ver ubicación en Google Maps
                </p>

                <p className="mt-2 text-sm leading-6 text-[#3E2A1B]/65">
                  Google Maps es un servicio externo y puede utilizar cookies
                  o procesar información técnica al cargar el mapa.
                </p>

                <button
                  type="button"
                  onClick={() => setMapAccepted(true)}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#E8792E] px-6 text-sm font-bold text-white transition hover:bg-[#F36B21] focus-visible:outline"
                >
                  Aceptar y cargar mapa
                </button>

                <div className="mt-4">
                  <Link
                    href="/politica-de-cookies"
                    className="text-xs font-bold text-[#3F7D4F] underline decoration-[#3F7D4F]/30 underline-offset-4 transition hover:text-[#E8792E]"
                  >
                    Política de cookies
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.iframe
              key={active.id}
              title={`Ubicación de Vivanya en ${active.name}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.35 }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}