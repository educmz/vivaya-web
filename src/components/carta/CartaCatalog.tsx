"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

import { CartaCategoryNav } from "@/components/carta/CartaCategoryNav";
import { CartaMenuCard } from "@/components/carta/CartaMenuCard";

import {
  cartaCategories,
  cartaItems,
  type CartaCategoryId,
} from "@/data/carta";

const categories = cartaCategories.filter(
  (category) => category.id !== "todos",
);

const categoryVisuals: Record<
  string,
  {
    background: string;
    accent: string;
  }
> = {
  jugos: {
    background: "#FFF7E8",
    accent: "#FF8A00",
  },

  cremoladas: {
    background: "#E9F5EE",
    accent: "#0F6B6D",
  },

  healthy: {
    background: "#FFF7E8",
    accent: "#FFB347",
  },
};

export function CartaCatalog() {
  const [activeCategory, setActiveCategory] =
    useState<CartaCategoryId>("jugos");

  const sections = useMemo(
    () =>
      categories.map((category) => ({
        category,
        items: cartaItems.filter(
          (item) => item.category === category.id,
        ),
      })),
    [],
  );

  useEffect(() => {
    const elements = categories
      .map((category) =>
        document.getElementById(`carta-${category.id}`),
      )
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          )[0];

        if (!current) return;

        const target = current.target as HTMLElement;

const id = target.dataset.category as
  | CartaCategoryId
  | undefined;

if (id) {
  setActiveCategory(id);
}

        if (id) {
          setActiveCategory(id);
        }
      },
      {
        rootMargin: "-22% 0px -60% 0px",
        threshold: [0.08, 0.2, 0.4],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  function goToCategory(category: CartaCategoryId) {
    setActiveCategory(category);

    document
      .getElementById(`carta-${category}`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <section className="relative bg-[#FFF7E8] text-[#073B3A]">
      <CartaCategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onChange={goToCategory}
      />

      {sections.map(
        ({ category, items }, categoryIndex) => {
          const visual =
            categoryVisuals[category.id] ??
            categoryVisuals.jugos;

          return (
            <div key={category.id}>
              {categoryIndex > 0 && (
                <CategoryMarquee
                  label={category.name}
                  background={visual.accent}
                />
              )}

              <section
                id={`carta-${category.id}`}
                data-category={category.id}
                className="scroll-mt-28"
                style={{
                  backgroundColor: visual.background,
                }}
              >
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
                  <CategoryHeading
                    number={String(
                      categoryIndex + 1,
                    ).padStart(2, "0")}
                    title={category.name}
                    accent={visual.accent}
                  />

                  <div className="mt-14 grid gap-x-10 gap-y-20 md:grid-cols-2 lg:mt-20">
                    {items.map((item, index) => (
                      <CartaMenuCard
                        key={item.id}
                        item={item}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          );
        },
      )}
    </section>
  );
}

function CategoryHeading({
  number,
  title,
  accent,
}: {
  number: string;
  title: string;
  accent: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.45,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-end justify-between gap-8 border-b-2 border-[#073B3A] pb-6"
    >
      <div>
        <p
          className="mb-4 text-xs font-black uppercase tracking-[0.24em]"
          style={{
            color: accent,
          }}
        >
          Categoría {number}
        </p>

        <h2 className="text-[clamp(5rem,11vw,10rem)] font-black uppercase leading-[0.72] tracking-[-0.09em]">
          {title}
        </h2>
      </div>

      <span
        className="hidden pb-2 text-5xl font-black sm:block lg:text-7xl"
        style={{
          color: accent,
        }}
      >
        {number}
      </span>
    </motion.div>
  );
}

function CategoryMarquee({
  label,
  background,
}: {
  label: string;
  background: string;
}) {
  const repeated = Array.from({ length: 8 });

  return (
    <div
      className="overflow-hidden border-y-2 border-[#073B3A] py-4 text-[#073B3A]"
      style={{
        backgroundColor: background,
      }}
    >
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max whitespace-nowrap"
      >
        {[...repeated, ...repeated].map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-8 pr-8"
          >
            <span className="text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">
              {label}
            </span>

            <span className="text-sm">●</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}