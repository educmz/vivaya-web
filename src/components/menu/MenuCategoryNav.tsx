"use client";

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

  return (
    <motion.div
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: -8,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        z-20
        border-y
        border-[#302E2A]/8
        bg-[#FFF9F3]/95
        backdrop-blur-md
      "
    >
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
          aria-label="Categorías de la carta"
          className="
            flex
            min-w-max
            items-center
            gap-2
            py-4
            sm:gap-3
          "
        >
          {categories.map((category) => {
            const active =
              category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  onChange(category.id)
                }
                aria-current={
                  active ? "true" : undefined
                }
                className="
                  group
                  relative
                  isolate
                  overflow-hidden
                  rounded-full
                  border
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  whitespace-nowrap
                  transition-colors
                  duration-200
                  sm:px-5
                "
                style={{
                  borderColor: active
                    ? "#F4A06D"
                    : "rgba(48, 46, 42, 0.10)",
                }}
              >
                {active && (
                  <motion.span
                    layoutId="carta-active-category"
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      -z-10
                      rounded-full
                      bg-[#FDE8D8]
                    "
                    transition={
                      reducedMotion
                        ? {
                            duration: 0,
                          }
                        : {
                            type: "spring",
                            stiffness: 400,
                            damping: 35,
                          }
                    }
                  />
                )}

                <span
                  className={
                    active
                      ? "text-[#C96532]"
                      : "text-[#77736D] group-hover:text-[#302E2A]"
                  }
                >
                  {category.name}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
}