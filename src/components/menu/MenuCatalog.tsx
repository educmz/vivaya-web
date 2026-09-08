"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

import { CartaCategoryNav } from "@/components/menu/MenuCategoryNav";
import { CartaMenuCard } from "@/components/menu/MenuCard";

import { menuCategories } from "@/data/menu/categories";
import { menuProducts } from "@/data/menu/products";

import type { MenuCategoryId } from "@/types/catalog";

export function CartaCatalog() {
  const [activeCategory, setActiveCategory] =
    useState<MenuCategoryId>(menuCategories[0].id);

  const sections = useMemo(
    () =>
      menuCategories
        .sort((a, b) => a.order - b.order)
        .map((category) => ({
          category,
          items: menuProducts.filter(
            (product) =>
              product.category === category.id &&
              product.available,
          ),
        }))
        .filter((section) => section.items.length > 0),
    [],
  );

  useEffect(() => {
    const elements = sections
      .map(({ category }) =>
        document.getElementById(
          `carta-${category.id}`,
        ),
      )
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio,
          )[0];

        if (!visibleSection) return;

        const category =
          visibleSection.target.getAttribute(
            "data-category",
          ) as MenuCategoryId | null;

        if (category) {
          setActiveCategory(category);
        }
      },
      {
        rootMargin: "-22% 0px -62% 0px",
        threshold: [0.05, 0.15, 0.3],
      },
    );

    elements.forEach((element) =>
      observer.observe(element),
    );

    return () => observer.disconnect();
  }, [sections]);

  function goToCategory(
    category: MenuCategoryId,
  ) {
    setActiveCategory(category);

    document
      .getElementById(`carta-${category}`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <section className="bg-[#FFF9F3] text-[#302E2A]">
      <CartaCategoryNav
        categories={menuCategories}
        activeCategory={activeCategory}
        onChange={goToCategory}
      />

      <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        {sections.map(
          ({ category, items }, index) => (
            <section
              key={category.id}
              id={`carta-${category.id}`}
              data-category={category.id}
              className={`
                scroll-mt-[10rem]
                py-14
                sm:py-16
                lg:py-20
                ${
                  index !== sections.length - 1
                    ? "border-b border-[#302E2A]/8"
                    : ""
                }
              `}
            >
              <CategoryHeading
                title={category.name}
              />

              <div
                className="
                  mt-8
                  grid
                  grid-cols-1
                  gap-x-5
                  gap-y-10
                  sm:grid-cols-2
                  lg:mt-10
                  lg:grid-cols-3
                  xl:grid-cols-4
                "
              >
                {items.map((item, itemIndex) => (
                  <CartaMenuCard
                    key={item.id}
                    item={item}
                    index={itemIndex}
                  />
                ))}
              </div>
            </section>
          ),
        )}
      </div>
    </section>
  );
}

function CategoryHeading({
  title,
}: {
  title: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 14,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-center gap-4"
    >
      <h2 className="shrink-0 text-2xl font-semibold tracking-[-0.02em] text-[#302E2A] sm:text-3xl">
        {title}
      </h2>

      <div className="h-px flex-1 bg-[#302E2A]/10" />
    </motion.div>
  );
}