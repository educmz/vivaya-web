"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import type { EventCategory } from "@/data/events/categories";
import type { EventCategoryId } from "@/types/events";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface EventCategoryNavProps {
  categories: EventCategory[];
  activeCategory: EventCategoryId;
  onChange: (category: EventCategoryId) => void;
}

export function EventCategoryNav({
  categories,
  activeCategory,
  onChange,
}: EventCategoryNavProps) {
  const reducedMotion = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);
  const [dotX, setDotX] = useState<number | null>(null);

  const sync = useCallback(() => {
    const nav = navRef.current;
    const activeEl = nav?.querySelector<HTMLElement>('[data-active="true"]');
    if (!nav || !activeEl) return;

    setDotX(activeEl.offsetLeft + activeEl.offsetWidth / 2);

    const navRect = nav.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();
    if (elRect.left < navRect.left || elRect.right > navRect.right) {
      nav.scrollTo({
        left:
          nav.scrollLeft +
          (elRect.left - navRect.left) -
          navRect.width / 2 +
          elRect.width / 2,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    }
  }, [reducedMotion]);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync, activeCategory, categories.length]);

  return (
    <div
      className="sticky top-0 z-[55] bg-[color:var(--carta-ribbon,#FF8A00)]"
      style={{
        fontFamily:
          "var(--font-carta), 'Montserrat', system-ui, sans-serif",
      }}
    >
      <nav
        ref={navRef}
        aria-label="Categorías de eventos"
        className="
          relative
          flex
          items-start
          gap-5
          overflow-x-auto
          overscroll-x-contain
          px-4
          py-2.5
          sm:gap-9
          sm:px-8
          lg:justify-between
          lg:gap-4
          lg:px-12
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {categories.map((category) => {
          const active = category.id === activeCategory;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.id)}
              aria-current={active ? "true" : undefined}
              data-active={active ? "true" : undefined}
              className="flex shrink-0 flex-col items-center gap-1.5 whitespace-nowrap px-1.5 text-xs font-extrabold uppercase tracking-[0.05em] sm:text-[13px]"
            >
              <span
                className={`
                  block origin-center transition-[color,opacity,transform]
                  duration-300 ease-out motion-reduce:transition-none
                  ${
                    active
                      ? "scale-[1.06] text-[#FFF7E8] opacity-100"
                      : "text-[#302E2A] opacity-50 hover:opacity-80"
                  }
                `}
              >
                {category.name}
              </span>
              {/* espacio reservado para el punto (sin salto de layout) */}
              <span aria-hidden="true" className="block h-1.5 w-1.5" />
            </button>
          );
        })}

        {dotX !== null && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2.5 left-0 -ml-[3px] h-1.5 w-1.5 rounded-full bg-background"
            initial={false}
            animate={{ x: dotX }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 420, damping: 34 }
            }
          />
        )}
      </nav>
    </div>
  );
}
