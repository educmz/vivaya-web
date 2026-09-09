"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { EventCard } from "@/components/events/EventCard";
import { EventCategoryNav } from "@/components/events/EventsCategoryNav";
import { EventDetailsModal } from "@/components/events/EventDetailsModal";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { eventCategories } from "@/data/events/categories";
import { eventPackages } from "@/data/events/packages";
import type { EventCategoryId, EventPackage } from "@/types/events";

export function EventCatalog() {
  // Mientras dura un salto por click, el scroll-spy se pausa para que la
  // categoría elegida no "parpadee" con las que pasan de largo.
  const navigating = useRef(false);
  const navStartedAt = useRef(0);
  const navTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const maybeResume = () => {
      if (Date.now() - navStartedAt.current > 200) {
        navigating.current = false;
      }
    };
    const onScrollEnd = () => {
      navigating.current = false;
    };
    window.addEventListener("wheel", maybeResume, { passive: true });
    window.addEventListener("touchmove", maybeResume, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    return () => {
      window.removeEventListener("wheel", maybeResume);
      window.removeEventListener("touchmove", maybeResume);
      window.removeEventListener("scrollend", onScrollEnd);
      clearTimeout(navTimeout.current);
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
    navStartedAt.current = Date.now();
    setActiveCategory(category);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    clearTimeout(navTimeout.current);
    navTimeout.current = setTimeout(() => {
      navigating.current = false;
    }, 1000);
  }


  return (
    <section
      className="min-h-screen text-[color:var(--carta-ink)]"
      style={{
        fontFamily:
          "var(--font-carta), 'Montserrat', system-ui, sans-serif",
        background: "var(--background)",
        "--carta-ink": "#302E2A",
        "--carta-ribbon": "#FF8A00",
      } as CSSProperties}
    >
      <h1 className="sr-only">Eventos Vivaya</h1>
      <EventCategoryNav
        categories={sections.map(({ category }) => category)}
        activeCategory={activeCategory}
        onChange={goToCategory}
      />
      <div className="mx-auto min-w-0 max-w-7xl px-3 pb-16 sm:px-6 sm:pb-24 lg:px-10 lg:pb-28">
        {sections.map(({ category, items }) => (
          <section key={category.id} id={`eventos-${category.id}`} data-category={category.id} aria-labelledby={`eventos-title-${category.id}`} className="scroll-mt-[60px] pt-8 sm:pt-16 lg:pt-24">
            <AnimatedTitle
              id={`eventos-title-${category.id}`}
              text={category.name}
              className="break-words text-center text-2xl min-[400px]:text-3xl font-extrabold uppercase tracking-[0.01em] text-[color:var(--carta-ink)] sm:text-5xl lg:text-6xl"
            />
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 min-[900px]:grid-cols-3 lg:mt-14 lg:gap-6 xl:grid-cols-4">
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
