"use client";

import type { MenuCategory } from "@/data/menu/categories";
import type { MenuCategoryId } from "@/types/catalog";

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
  return (
    <div className="sticky top-0 z-40 bg-[color:var(--carta-ribbon,#FF8A00)]">
      <nav
        aria-label="Categorías de la carta"
        className="
          flex
          items-center
          gap-7
          overflow-x-auto
          px-5
          py-4
          sm:gap-10
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
              className={`
                relative
                shrink-0
                whitespace-nowrap
                py-1
                text-[13px]
                font-bold
                uppercase
                tracking-[0.06em]
                text-[#141414]
                transition-opacity
                hover:opacity-100
                sm:text-sm
                ${active ? "opacity-100" : "opacity-55"}
              `}
            >
              {category.name}

              <span
                aria-hidden="true"
                className={`
                  absolute
                  -bottom-1
                  left-0
                  h-[2px]
                  bg-[#141414]
                  transition-all
                  duration-200
                  ${active ? "w-full" : "w-0"}
                `}
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
