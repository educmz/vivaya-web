import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { VivayaLocation } from "@/data/locations";

interface LocationCardProps {
  location: VivayaLocation;
}

export function LocationCard({ location }: LocationCardProps) {
  const hasMapsUrl = Boolean(location.mapsUrl && location.mapsUrl !== "#");

  return (
    <article className="grid overflow-hidden rounded-lg bg-white p-4 text-[#302E2A] shadow-[0_3px_22px_rgba(60,45,30,0.09)] sm:p-5 md:grid-cols-2 md:gap-5">
      <div className="flex flex-col justify-center px-2 py-5 sm:px-4 sm:py-6 lg:px-7">
        <h2 className="font-heading text-2xl uppercase leading-[1.12] sm:text-3xl">
          <span className="block">VIVAYA</span>
          {location.name}
        </h2>

        <address className="mt-5 text-sm not-italic leading-6 text-[#55514C]">
          {location.address}
        </address>
        <div className="mt-3 text-sm leading-6 text-[#55514C]">
          <p className="font-medium text-[#302E2A]">Horario de atención</p>
          {location.schedule.map((schedule) => <p key={schedule}>{schedule}</p>)}
        </div>

        {location.note && <p className="mt-4 text-sm font-medium text-[#52734C]">{location.note}</p>}

        <div className="mt-5">
          {hasMapsUrl ? (
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver VIVAYA ${location.name} en Google Maps (abre otra pestaña)`}
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#F4A06D] px-6 py-3 text-sm font-semibold text-[#302E2A] transition-colors duration-200 hover:bg-[#EE925C] focus-visible:outline-2 focus-visible:outline-offset-4 sm:w-auto"
            >
              <MapPin size={18} aria-hidden="true" />
              Ver en Google Maps
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ) : (
            <p className="text-sm text-[#77736D]">Ubicación en Google Maps próximamente.</p>
          )}
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden rounded-sm md:aspect-auto md:min-h-[300px]">
        <Image
          src={location.image}
          alt={`Local VIVAYA ${location.name}`}
          fill
          sizes="(min-width: 1120px) 500px, (min-width: 768px) 45vw, 90vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}
