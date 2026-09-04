"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Clock3, MapPin, Search } from "lucide-react";
import type { StoreLocation } from "@/types/location";
import { Container } from "@/components/ui/Container";
import { LocationsMap } from "@/components/locations/LocationsMap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import { locations } from "@/data/locations";

const ease = [0.22, 1, 0.36, 1] as const;
const accents = ["#E8792E", "#3F7D4F", "#7A4B2A"];

function LocationCard({ location, active, index, onSelect }: { location: StoreLocation; active: boolean; index: number; onSelect: () => void }) {
  const reducedMotion = useReducedMotion();
  const leftCard = index % 2 === 0;
  const restingRotation = leftCard ? -1.4 : 1.4;
  const accent = accents[index % accents.length];

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 50, rotate: leftCard ? -5 : 5, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotate: restingRotation, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease }}
      className="group relative cursor-pointer"
      onClick={onSelect}
    >
      <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.8rem] border-2 border-[#3E2A1B]" style={{ backgroundColor: accent }} />

      <motion.div
        whileHover={reducedMotion ? undefined : { y: -8, rotate: 0, scale: 1.01 }}
        transition={{ duration: 0.45, ease }}
        className={cn("relative rounded-[1.8rem] border-2 bg-[#FFF7E8] p-3 sm:p-4", active ? "border-[#E8792E]" : "border-[#3E2A1B]")}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.3rem]">
          <Image src={location.image} alt={location.name} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
          <div className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-full border-2 border-[#3E2A1B] bg-[#FFF7E8] text-xs font-black text-[#3E2A1B]">{String(index + 1).padStart(2, "0")}</div>
        </div>

        <div className="px-2 pb-3 pt-6">
          <h3 className="font-accent text-[clamp(2.25rem,4vw,3rem)] leading-[0.9] text-[#3E2A1B]">{location.name}</h3>

          <div className="mt-5 space-y-2.5 border-t border-[#3E2A1B]/15 pt-5">
            <address className="flex items-start gap-2.5 text-sm not-italic text-[#3E2A1B]/70">
              <MapPin className="mt-0.5 size-4 shrink-0" style={{ color: accent }} aria-hidden="true" />
              {location.address}
            </address>
            <p className="flex items-start gap-2.5 text-sm text-[#3E2A1B]/70">
              <Clock3 className="mt-0.5 size-4 shrink-0" style={{ color: accent }} aria-hidden="true" />
              {location.schedule}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function LocationsList() {
  const activeLocations = useMemo(() => locations.filter((location) => location.active), []);
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string | null>(activeLocations[0]?.id ?? null);
  const reducedMotion = useReducedMotion();

  const filtered = activeLocations.filter((location) => `${location.name} ${location.address}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="bg-[#FFF7E8] py-20 text-[#3E2A1B] sm:py-28">
      <Container>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease }}
          className="flex items-end justify-between gap-8 border-b-2 border-[#3E2A1B] pb-6"
        >
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#3F7D4F]">Encuéntranos</p>
            <h2 className="font-accent text-[clamp(3rem,7vw,5.5rem)] leading-[0.9] text-[#E8792E]">Tu tienda más cercana</h2>
          </div>
        </motion.div>

        <label className="mt-8 flex max-w-md items-center gap-3 rounded-full border-2 border-[#3E2A1B]/15 bg-white px-5 py-3.5 shadow-sm transition focus-within:border-[#E8792E]">
          <Search className="size-4 text-[#3E2A1B]/40" aria-hidden="true" />
          <span className="sr-only">Buscar local por nombre o dirección</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por nombre o dirección" className="w-full bg-transparent text-sm outline-none placeholder:text-[#3E2A1B]/40" />
        </label>

        <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {filtered.map((location, index) => <LocationCard location={location} active={activeId === location.id} index={index} onSelect={() => setActiveId(location.id)} key={location.id} />)}
          {filtered.length === 0 && <p className="text-sm text-[#3E2A1B]/50 sm:col-span-2">No encontramos locales que coincidan con tu búsqueda.</p>}
        </div>

        <div className="mt-16">
          <LocationsMap locations={filtered} activeId={activeId} />
        </div>
      </Container>
    </section>
  );
}
