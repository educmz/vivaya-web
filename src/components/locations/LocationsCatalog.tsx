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
        background: "var(--background)",
      }}
    >
      <h1 className="sr-only">Locales VIVAYA</h1>
      <PanoramicBanner />

      <div className="mx-auto w-full max-w-[1160px] px-5 pb-28 pt-10 sm:px-8 sm:pb-36 sm:pt-14 lg:px-10">
        <div className="mb-10 sm:mb-12">
          <p className="mb-3 font-[family-name:var(--font-script)] text-2xl font-normal lowercase leading-relaxed tracking-normal text-[#FF8A00] sm:text-3xl">Encuéntranos</p>
          <h2 className="font-heading text-4xl font-normal leading-[1.08] text-[#302E2A] sm:text-5xl lg:text-6xl">Nuestros locales</h2>
        </div>
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
