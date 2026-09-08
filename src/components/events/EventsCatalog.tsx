"use client";

import { useMemo, useState } from "react";

import { EventCard } from "@/components/events/EventCard";
import { EventCategoryNav } from "@/components/events/EventsCategoryNav";
import { EventDetailsModal } from "@/components/events/EventDetailsModal";

import { eventCategories } from "@/data/events/categories";
import { eventPackages } from "@/data/events/packages";

import type {
  EventCategoryId,
  EventPackage,
} from "@/types/catalog";

export type EventFilter = "all" | EventCategoryId;

export function EventCatalog() {
  const [activeCategory, setActiveCategory] =
    useState<EventFilter>("all");

  const [selectedEvent, setSelectedEvent] =
    useState<EventPackage | null>(null);

  const filteredEvents = useMemo(() => {
    const availableEvents = eventPackages.filter(
      (eventPackage) => eventPackage.available,
    );

    if (activeCategory === "all") {
      return availableEvents;
    }

    return availableEvents.filter((eventPackage) =>
      eventPackage.categories.includes(activeCategory),
    );
  }, [activeCategory]);

  return (
    <section className="min-h-screen bg-[#FFF9F3] text-[#302E2A]">
      <EventCategoryNav
        categories={eventCategories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      {/* RESULTADOS */}
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 sm:pt-12 lg:px-10">
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map(
              (eventPackage, index) => (
                <EventCard
                  key={eventPackage.id}
                  eventPackage={eventPackage}
                  index={index}
                  onDetails={setSelectedEvent}
                />
              ),
            )}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-sm text-[#77736D]">
              No encontramos experiencias en esta categoría.
            </p>
          </div>
        )}
      </div>

      <EventDetailsModal
        eventPackage={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
}