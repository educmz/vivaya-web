import type { Metadata } from "next";

import { EventCatalog } from "@/components/events/EventsCatalog";

export const metadata: Metadata = {
  title: "Eventos",
};

export default function EventsPage() {
  return (
    <div className="bg-[#FFF9F3] pt-16 lg:pt-[72px]">
      <EventCatalog />
    </div>
  );
}
