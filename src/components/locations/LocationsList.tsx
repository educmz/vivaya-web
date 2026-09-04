import Image from "next/image";
import type { StoreLocation } from "@/types/location";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { isSafeExternalUrl } from "@/lib/utils";
import { locations } from "@/data/locations";

function MapButton({ mapsUrl }: { mapsUrl: string }) {
  const enabled = isSafeExternalUrl(mapsUrl);
  if (!enabled) return <Button variant="ghost" disabled aria-label="Mapa no disponible">Ver mapa</Button>;
  return <Button variant="ghost" href={mapsUrl} external aria-label="Abrir ubicación en una pestaña nueva">Ver mapa</Button>;
}

function LocationCard({ location }: { location: StoreLocation }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm">
      <div className="relative aspect-[16/10]">
        <Image src={location.image} alt={location.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="font-heading text-2xl normal-case tracking-normal">{location.name}</h3>
        <address className="mt-3 flex items-start gap-2 text-sm not-italic text-black/60">{location.address}</address>
        <p className="mt-2 text-sm text-black/60">{location.schedule}</p>
        <div className="mt-5"><MapButton mapsUrl={location.mapsUrl} /></div>
      </div>
    </article>
  );
}

export function LocationsList() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] normal-case tracking-normal">Encuentra tu tienda más cercana</h2>
        <ScrollReveal className="mt-10 grid gap-6 md:grid-cols-2">
          {locations.filter((location) => location.active).map((location) => <LocationCard location={location} key={location.id} />)}
        </ScrollReveal>
      </Container>
    </section>
  );
}
