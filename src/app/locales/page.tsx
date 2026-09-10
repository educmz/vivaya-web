import type { Metadata } from "next";
import { LocationsCatalog } from "@/components/locations/LocationsCatalog";

export const metadata: Metadata = {
  title: "Locales",
  description:
    "Encuentra nuestros locales Vivaya, horarios de atención y cómo llegar.",
};

export default function LocationsPage() {
  return (
    <div className="bg-background pt-[88px] sm:pt-24 lg:pt-28">
      <LocationsCatalog />
    </div>
  );
}
