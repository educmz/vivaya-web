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
    <div className="relative z-20 border-b border-[#073B3A]/12 bg-[#FFF7E8]">
      <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-10">
        <nav
          aria-label="Categorías de la carta"
          className="flex min-w-max items-center gap-8 py-4"
        >
          {categories.map((category, index) => {
            const active =
              category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  onChange(category.id)
                }
                className="group relative flex items-baseline gap-2 pb-2"
              >
                <span
                  className={`text-[9px] font-black tracking-[0.18em] transition-colors ${
                    active
                      ? "text-[#FF8A00]"
                      : "text-[#073B3A]/25"
                  }`}
                >
                  {String(index + 1).padStart(
                    2,
                    "0",
                  )}
                </span>

                <span
                  className={`text-[11px] font-black uppercase tracking-[0.17em] transition-colors ${
                    active
                      ? "text-[#073B3A]"
                      : "text-[#073B3A]/40 group-hover:text-[#073B3A]"
                  }`}
                >
                  {category.name}
                </span>

                {active && (
                  <motion.span
                    layoutId="carta-category-line"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#FF8A00]"
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