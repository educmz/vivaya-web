import { locations } from "@/data/locations";
import { LocationCard } from "./LocationCard";
import { PanoramicBanner } from "@/components/sections/PanoramicBanner";

export function LocationsCatalog() {
  return (
    <section
      className="text-[#302E2A]"
      style={{
        fontFamily:
          "var(--font-carta), 'Montserrat', system-ui, sans-serif",
        background: "#FBF4EF",
      }}
    >
      <h1 className="sr-only">Locales VIVAYA</h1>
      <PanoramicBanner />

      <div className="mx-auto w-full max-w-[1160px] px-5 pb-28 pt-10 sm:px-8 sm:pb-36 sm:pt-14 lg:px-10">
        <div className="flex flex-col gap-14 sm:gap-20">
          {locations.map((location, index) => (
            <LocationCard
              key={location.id}
              location={location}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
