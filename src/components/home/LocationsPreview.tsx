import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/Button";
import { locations } from "@/data/locations";

export function LocationsPreview() {
  return <section className="py-20 sm:py-24"><Container><SectionTitle eyebrow="Ubicaciones temporales" title="Encuentra un local" description="Direcciones y horarios ficticios, pendientes de información validada." /><div className="mt-9 grid gap-5 md:grid-cols-2">{locations.map((location) => <article className="rounded-3xl border border-black/10 p-7" key={location.id}><h3 className="text-xl font-black">{location.name}</h3><address className="mt-3 not-italic text-sm text-black/60">{location.address}</address><p className="mt-2 text-sm text-black/60">{location.schedule}</p></article>)}</div><Button href="/locales" className="mt-8" variant="ghost">Ver locales</Button></Container></section>;
}
