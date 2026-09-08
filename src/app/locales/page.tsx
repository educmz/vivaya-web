import type { Metadata } from "next";
import { LocationsCatalog } from "@/components/locations/LocationsCatalog";

export const metadata: Metadata = {
  title: "Locales | VIVAYA",
  description:
    "Encuentra nuestros locales VIVAYA, horarios de atención y cómo llegar.",
};

export default function LocationsPage() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <LocationsCatalog />
    </div>
  );
}
