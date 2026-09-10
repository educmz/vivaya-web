"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import type { CartaCategory } from "@/data/carta/categories";
import type { CartaCategoryId } from "@/types/catalog";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CartaCategoryNavProps {
  categories: CartaCategory[];
  activeCategory: CartaCategoryId;
  onChange: (category: CartaCategoryId) => void;
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
    if (elRect.left < navRect.left + 8 || elRect.right > navRect.right - 8) {
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
      className="sticky top-0 z-[55] min-w-0 max-w-full bg-[color:var(--carta-ribbon,#FF8A00)]"
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
          items-start
          gap-3
          min-w-0
          max-w-full
          overflow-x-auto
          overscroll-x-contain
          px-3
          h-[52px]
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
