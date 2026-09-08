"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { EventCard } from "@/components/events/EventCard";
import { EventCategoryNav } from "@/components/events/EventsCategoryNav";
import { EventDetailsModal } from "@/components/events/EventDetailsModal";
import { eventCategories } from "@/data/events/categories";
import { eventPackages } from "@/data/events/packages";
import type { EventCategoryId, EventPackage } from "@/types/events";

export function EventCatalog() {
  const navigating = useRef(false);
  useEffect(() => {
    // Keep the clicked category selected until the user resumes manual scrolling.
    const resumeTracking = () => {
      navigating.current = false;
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLElement &&
          event.target.closest("input, textarea, select, [contenteditable=true]")) return;
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
        resumeTracking();
      }
    };
    window.addEventListener("wheel", resumeTracking, { passive: true });
    window.addEventListener("touchmove", resumeTracking, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", resumeTracking);
      window.removeEventListener("touchmove", resumeTracking);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  const sections = useMemo(() => [...eventCategories]
    .sort((a, b) => a.order - b.order)
    .map((category) => ({
      category,
      items: eventPackages.filter((item) => item.available && item.categories.includes(category.id)),
    }))
    .filter((section) => section.items.length > 0), []);

  const [activeCategory, setActiveCategory] = useState<EventCategoryId>(sections[0]?.category.id ?? eventCategories[0].id);
  const [selectedEvent, setSelectedEvent] = useState<EventPackage | null>(null);

  useEffect(() => {
    const elements = sections
      .map(({ category }) =>
        document.getElementById(`eventos-${category.id}`),
      )
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (navigating.current) return;
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )[0];

        if (!visibleSection) return;

        const category = visibleSection.target.getAttribute(
          "data-category",
        ) as EventCategoryId | null;

        if (category) {
          setActiveCategory(category);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: [0.05, 0.15, 0.3],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections]);

  function goToCategory(category: EventCategoryId) {
    const target = document.getElementById(`eventos-${category}`);
    if (!target) return;
    navigating.current = true;
    setActiveCategory(category);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }


  return (
    <section className="min-h-screen bg-[#FFF9F3] text-[#302E2A]">
      <h1 className="sr-only">Eventos Vivaya</h1>
      <EventCategoryNav
        categories={sections.map(({ category }) => category)}
        activeCategory={activeCategory}
        onChange={goToCategory}
      />
      <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        {sections.map(({ category, items }) => (
          <section key={category.id} id={`eventos-${category.id}`} data-category={category.id} aria-labelledby={`eventos-title-${category.id}`} className="scroll-mt-16 pt-16 sm:pt-24">
            <h2 id={`eventos-title-${category.id}`} className="border-b border-[#302E2A]/10 pb-5 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">{category.name}</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((eventPackage, index) => (
                <EventCard key={eventPackage.id} eventPackage={eventPackage} index={index} onDetails={setSelectedEvent} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <EventDetailsModal eventPackage={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
}
