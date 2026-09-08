"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { motion } from "motion/react";

import { CartaCategoryNav } from "@/components/menu/MenuCategoryNav";
import { CartaMenuCard } from "@/components/menu/MenuCard";

import { menuCategories } from "@/data/menu/categories";
import { menuProducts } from "@/data/menu/products";

import type { MenuCategoryId } from "@/types/catalog";

export function CartaCatalog() {
  const navigating = useRef(false);
  useEffect(() => {
    // Keep the clicked category selected until the user resumes manual scrolling.
    const resumeTracking = () => {
      navigating.current = false;
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLElement &&
          event.target.closest("input, textarea, select, [contenteditable=true]")) return;
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
        resumeTracking();
      }
    };
    window.addEventListener("wheel", resumeTracking, { passive: true });
    window.addEventListener("touchmove", resumeTracking, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", resumeTracking);
      window.removeEventListener("touchmove", resumeTracking);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const sections = useMemo(
    () =>
      [...menuCategories]
        .sort((a, b) => a.order - b.order)
        .map((category) => ({
          category,
          items: menuProducts.filter(
            (product) =>
              product.category === category.id && product.available,
          ),
        }))
        .filter((section) => section.items.length > 0),
    [],
  );

  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>(
    sections[0]?.category.id ?? menuCategories[0].id,
  );

  useEffect(() => {
    const elements = sections
      .map(({ category }) =>
        document.getElementById(`carta-${category.id}`),
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
        ) as MenuCategoryId | null;

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

  function goToCategory(category: MenuCategoryId) {
    const target = document.getElementById(`carta-${category}`);
    if (!target) return;
    navigating.current = true;
    setActiveCategory(category);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section
      className="text-[color:var(--carta-ink)]"
      style={{
        fontFamily:
          "var(--font-carta), 'Jost', system-ui, sans-serif",
        background: "#FBF4EF",
        "--carta-ink": "#141414",
        // Cinta de categorías: naranja vibrante (las letras negras se leen bien)
        "--carta-ribbon": "#FF8A00",
      } as CSSProperties}
    >
      <h1 className="sr-only">Carta Vivaya</h1>

      <CartaCategoryNav
        categories={sections.map(({ category }) => category)}
        activeCategory={activeCategory}
        onChange={goToCategory}
      />

      <div className="mx-auto max-w-7xl px-5 pb-28 sm:px-8 lg:px-10">
        {sections.map(({ category, items }) => (
          <section
            key={category.id}
            id={`carta-${category.id}`}
            data-category={category.id}
            className="scroll-mt-16 pt-16 sm:pt-24"
          >
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-center text-4xl font-bold uppercase tracking-[0.01em] text-[color:var(--carta-ink)] sm:text-5xl lg:text-6xl"
            >
              {category.name}
            </motion.h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
              {items.map((item, itemIndex) => (
                <CartaMenuCard
                  key={item.id}
                  item={item}
                  index={itemIndex}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
