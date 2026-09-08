import { locations } from "@/data/locations";
import { LocationCard } from "./LocationCard";
import { PanoramicBanner } from "@/components/sections/PanoramicBanner";

export function LocationsCatalog() {
  return (
    <section className="bg-[#FFF9F3]">
      <h1 className="sr-only">Locales VIVAYA</h1>
      <PanoramicBanner />
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-5 px-5 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-16">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </section>
  );
}
