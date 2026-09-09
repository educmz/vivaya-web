"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import { CartaCategoryNav } from "@/components/menu/MenuCategoryNav";
import { CartaMenuCard } from "@/components/menu/MenuCard";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

import { menuCategories } from "@/data/menu/categories";
import { menuProducts } from "@/data/menu/products";

import type { MenuCategoryId } from "@/types/catalog";

export function CartaCatalog() {
  // Mientras dura un salto por click, el scroll-spy se pausa para que la
  // categoría elegida no "parpadee" con las que pasan de largo.
  const navigating = useRef(false);
  const navStartedAt = useRef(0);
  const navTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    // Un gesto real de scroll del usuario (>200ms tras el click) reanuda el spy.
    const maybeResume = () => {
      if (Date.now() - navStartedAt.current > 200) {
        navigating.current = false;
      }
    };
    const onScrollEnd = () => {
      navigating.current = false;
    };
    window.addEventListener("wheel", maybeResume, { passive: true });
    window.addEventListener("touchmove", maybeResume, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    return () => {
      window.removeEventListener("wheel", maybeResume);
      window.removeEventListener("touchmove", maybeResume);
      window.removeEventListener("scrollend", onScrollEnd);
      clearTimeout(navTimeout.current);
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
    navStartedAt.current = Date.now();
    setActiveCategory(category);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Respaldo por si el navegador no dispara "scrollend".
    clearTimeout(navTimeout.current);
    navTimeout.current = setTimeout(() => {
      navigating.current = false;
    }, 1000);
  }

  return (
    <section
      className="text-[color:var(--carta-ink)]"
      style={{
        fontFamily:
          "var(--font-carta), 'Montserrat', system-ui, sans-serif",
        background: "var(--background)",
        "--carta-ink": "#302E2A",
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
            <AnimatedTitle
              text={category.name}
              className="text-center text-4xl font-extrabold uppercase tracking-[0.01em] text-[color:var(--carta-ink)] sm:text-5xl lg:text-6xl"
            />

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
