"use client";

import { AnimatePresence, motion } from "motion/react";
import type { StoreLocation } from "@/types/location";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function LocationsMap({ locations, activeId }: { locations: StoreLocation[]; activeId: string | null }) {
  const reduced = useReducedMotion();
  const active = locations.find((location) => location.id === activeId) ?? locations[0];

  if (!active) {
    return (
      <div className="grid h-full min-h-[320px] place-items-center rounded-[1.8rem] border-2 border-dashed border-[#3E2A1B]/25 bg-[#EAF2E7] p-8 text-center text-sm font-semibold text-[#3E2A1B]/50 sm:min-h-[420px]">
        No hay locales que mostrar en el mapa.
      </div>
    );
  }

  const mapQuery = encodeURIComponent(`${active.name}, ${active.address}`);

  return (
    <div className="overflow-hidden rounded-[1.8rem] border-2 border-[#3E2A1B] bg-[#FFF7E8]">
      <div className="flex items-center gap-2 border-b-2 border-[#3E2A1B]/15 px-6 py-4">
        <span className="size-2 rounded-full bg-[#E8792E]" aria-hidden="true" />
        <p className="text-sm font-black text-[#3E2A1B]">{active.name}</p>
        <p className="ml-auto text-xs text-[#3E2A1B]/50">{active.schedule}</p>
      </div>
      <div className="relative h-[320px] w-full sm:h-[400px]">
        <AnimatePresence mode="wait">
          <motion.iframe
            key={active.id}
            title={`Ubicación de Vivaya en ${active.name}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
