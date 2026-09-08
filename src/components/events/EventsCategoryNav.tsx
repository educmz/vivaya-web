"use client";

import { motion } from "motion/react";

import type { EventCategory } from "@/data/events/categories";
import type { EventFilter } from "@/components/events/EventsCatalog";

interface EventCategoryNavProps {
  categories: EventCategory[];
  activeCategory: EventFilter;
  onChange: (category: EventFilter) => void;
}

export function EventCategoryNav({
  categories,
  activeCategory,
  onChange,
}: EventCategoryNavProps) {
  const options = [
    {
      id: "all" as const,
      name: "Todos",
    },
    ...categories,
  ];

  return (
    <div className="border-y border-[#302E2A]/8 bg-[#FFF9F3]/95 backdrop-blur-md">
      <div
        className="
          mx-auto
          max-w-7xl
          overflow-x-auto
          px-5
          sm:px-8
          lg:px-10
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        <nav
          aria-label="Categorías de eventos"
          className="flex min-w-max items-center gap-2 py-4 sm:gap-3"
        >
          {options.map((category) => {
            const active =
              category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  onChange(category.id)
                }
                aria-pressed={active}
                className="
                  group
                  relative
                  isolate
                  overflow-hidden
                  whitespace-nowrap
                  rounded-full
                  border
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  sm:px-5
                "
                style={{
                  borderColor: active
                    ? "#A8CFA3"
                    : "rgba(48, 46, 42, 0.10)",
                }}
              >
                {active && (
                  <motion.span
                    layoutId="event-active-category"
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-full bg-[#EAF3E7]"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                    }}
                  />
                )}

                <span
                  className={
                    active
                      ? "text-[#52734C]"
                      : "text-[#77736D] transition-colors group-hover:text-[#302E2A]"
                  }
                >
                  {category.name}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}