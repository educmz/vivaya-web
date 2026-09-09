import type { Metadata } from "next";

import { EventCatalog } from "@/components/events/EventsCatalog";

export const metadata: Metadata = {
  title: "Eventos",
};

export default function EventsPage() {
  return (
    <div className="bg-background pt-16 lg:pt-[72px]">
      <EventCatalog />
    </div>
  );
}
