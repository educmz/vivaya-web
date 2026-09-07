import type { Metadata } from "next";
import { LocationsList } from "@/components/locations/LocationsList";

export const metadata: Metadata = { title: "Locales" };
export default function LocationsPage() {
  return (
    <div className="bg-[#FFF7E8] pt-24 sm:pt-[100px] lg:pt-[108px]">
      <LocationsList />
    </div>
  );
}
