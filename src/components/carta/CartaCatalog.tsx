"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import { CartaCategoryNav } from "@/components/carta/CartaCategoryNav";
import { CartaCard } from "@/components/carta/CartaCard";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { ImageHero } from "@/components/sections/ImageHero";

import { cartaCategories } from "@/data/carta/categories";
import { cartaProducts } from "@/data/carta/products";

import type { CartaCategoryId } from "@/types/catalog";

export function CartaCatalog() {
  // Mientras dura un salto por click, el scroll-spy se pausa para que la
  // categoría elegida no "parpadee" con las que pasan de largo.
  const navigating = useRef(false);
  const navStartedAt = useRef(0);
  const navTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const [openOrderId, setOpenOrderId] = useState<string | null>(null);

  useEffect(() => {
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
      [...cartaCategories]
        .sort((a, b) => a.order - b.order)
        .map((category) => ({
          category,
          items: cartaProducts.filter(
            (product) =>
              product.category === category.id && product.available,
          ),
        }))
        .filter((section) => section.items.length > 0),
    [],
  );

  const [activeCategory, setActiveCategory] = useState<CartaCategoryId>(
    sections[0]?.category.id ?? cartaCategories[0].id,
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
        ) as CartaCategoryId | null;

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

  function goToCategory(category: CartaCategoryId) {
    const target = document.getElementById(`carta-${category}`);

    if (!target) return;

    navigating.current = true;
    navStartedAt.current = Date.now();
    setActiveCategory(category);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

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
        "--carta-ribbon": "#FF8A00",
      } as CSSProperties}
    >
      <ImageHero
        image="/images/carta/carta-hero.webp"
        lines={["ELIGE TU", "FAVORITO"]}
      />

      <CartaCategoryNav
        categories={sections.map(({ category }) => category)}
        activeCategory={activeCategory}
        onChange={goToCategory}
      />

      <div className="mx-auto min-w-0 max-w-7xl px-6 pb-16 sm:px-6 sm:pb-24 lg:px-10 lg:pb-28">
        {sections.map(({ category, items }) => (
          <section
            key={category.id}
            id={`carta-${category.id}`}
            data-category={category.id}
            className="scroll-mt-[60px] pt-8 sm:pt-16 lg:pt-24"
          >
            <AnimatedTitle
              text={category.name}
              className="break-words text-center text-2xl font-extrabold uppercase tracking-[0.01em] text-[color:var(--carta-ink)] min-[400px]:text-3xl sm:text-5xl lg:text-6xl"
            />

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:mt-8 sm:gap-x-6 sm:gap-y-5 min-[900px]:grid-cols-3 lg:mt-14 lg:gap-x-7 lg:gap-y-6 xl:grid-cols-4">
              {items.map((item, itemIndex) => (
                <CartaCard
                  key={item.id}
                  item={item}
                  index={itemIndex}
                  isOrderOpen={openOrderId === item.id}
                  onToggleOrder={() =>
                    setOpenOrderId((current) =>
                      current === item.id ? null : item.id
                    )
                  }
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}