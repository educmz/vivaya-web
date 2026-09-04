"use client";

import { motion } from "motion/react";

import type {
  CartaCategory,
  CartaCategoryId,
} from "@/data/carta";

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
  return (
    <div className="sticky top-[5rem] z-40 border-b border-[#073B3A]/15 bg-[#FFF7E8]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-10">
        <nav
          aria-label="Categorías de la carta"
          className="flex min-w-max items-center gap-10 py-5"
        >
          {categories.map((category, index) => {
            const active = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onChange(category.id)}
                className="group relative flex items-baseline gap-2 pb-2"
              >
                <span
                  className={`text-[10px] font-black tracking-[0.18em] transition-colors ${
                    active
                      ? "text-[#FF8A00]"
                      : "text-[#073B3A]/30"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`text-xs font-black uppercase tracking-[0.18em] transition-colors ${
                    active
                      ? "text-[#073B3A]"
                      : "text-[#073B3A]/45 group-hover:text-[#073B3A]"
                  }`}
                >
                  {category.name}
                </span>

                {active && (
                  <motion.span
                    layoutId="carta-category-line"
                    className="absolute bottom-0 left-0 h-[3px] w-full bg-[#FF8A00]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 34,
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}