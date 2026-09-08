"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import type { MenuCategory } from "@/data/menu/categories";
import type { MenuCategoryId } from "@/types/catalog";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CartaCategoryNavProps {
  categories: MenuCategory[];
  activeCategory: MenuCategoryId;
  onChange: (category: MenuCategoryId) => void;
}

export function CartaCategoryNav({
  categories,
  activeCategory,
  onChange,
}: CartaCategoryNavProps) {
  const reducedMotion = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);
  const [dotX, setDotX] = useState<number | null>(null);

  const sync = useCallback(() => {
    const nav = navRef.current;
    const activeEl = nav?.querySelector<HTMLElement>('[data-active="true"]');
    if (!nav || !activeEl) return;

    // Posición del punto = centro del botón activo, relativo al contenido
    // desplazable de la cinta (no toca el scroll de la página).
    setDotX(activeEl.offsetLeft + activeEl.offsetWidth / 2);

    // Si el botón activo quedó fuera de la parte visible de la cinta,
    // la desplazamos SOLO en horizontal para acercarlo.
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
  }, [sync, activeCategory, categories]);

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
        aria-label="Categorías de la carta"
        className="
          relative
          flex
          items-center
          gap-5
          overflow-x-auto
          overscroll-x-contain
          px-4
          py-2
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
              className="relative shrink-0 whitespace-nowrap px-2.5 pb-4 pt-1.5 text-xs font-extrabold uppercase tracking-[0.05em] sm:text-[13px]"
            >
              <span
                className={`
                  block origin-center transition-[color,opacity,transform]
                  duration-300 ease-out motion-reduce:transition-none
                  ${
                    active
                      ? "scale-[1.08] text-[#FFF7E8] opacity-100"
                      : "text-[#302E2A] opacity-50 hover:opacity-80"
                  }
                `}
              >
                {category.name}
              </span>
            </button>
          );
        })}

        {dotX !== null && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-1 left-0 -ml-[3px] h-1.5 w-1.5 rounded-full bg-[#FFF7E8]"
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
