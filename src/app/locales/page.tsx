import type { Metadata } from "next";
import { LocationsList } from "@/components/locations/LocationsList";

export const metadata: Metadata = { title: "Locales" };
export default function LocationsPage() {
  return (
    <div className="bg-[#FFF7E8] pt-16 lg:pt-[72px]">
      <LocationsList />
    </div>
  );
}
