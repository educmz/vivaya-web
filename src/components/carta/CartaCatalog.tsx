"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { CartaCategoryNav } from "@/components/carta/CartaCategoryNav";
import { CartaMenuCard } from "@/components/carta/CartaMenuCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";

import {
  cartaCategories,
  cartaItems,
  type CartaCategoryId,
} from "@/data/carta";

const categoryVisuals: Record<
  CartaCategoryId,
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
  const reducedMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] =
    useState<CartaCategoryId>("jugos");

  const sections = useMemo(
    () =>
      cartaCategories.map((category) => ({
        category,
        items: cartaItems.filter(
          (item) => item.category === category.id,
        ),
      })),
    [],
  );

  useEffect(() => {
    const elements = cartaCategories
      .map((category) =>
        document.getElementById(`carta-${category.id}`),
      )
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          )[0];

        if (!visible) return;

        const target = visible.target as HTMLElement;

        const id = target.dataset.category as
          | CartaCategoryId
          | undefined;

        if (id) {
          setActiveCategory(id);
        }
      },
      {
        rootMargin: "-25% 0px -58% 0px",
        threshold: [0.05, 0.15, 0.3],
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

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
        categories={cartaCategories}
        activeCategory={activeCategory}
        onChange={goToCategory}
      />

      {sections.map(
        ({ category, items }, categoryIndex) => {
          const visual = categoryVisuals[category.id];

          return (
            <section
              key={category.id}
              id={`carta-${category.id}`}
              data-category={category.id}
              className="relative overflow-hidden scroll-mt-[9rem] border-b border-[#073B3A]/10"
              style={{
                backgroundColor: visual.background,
              }}
            >
              <motion.div
                aria-hidden="true"
                animate={
                  reducedMotion
                    ? undefined
                    : { y: [0, -14, 0], rotate: [8, 14, 8] }
                }
                transition={{
                  repeat: Infinity,
                  duration: 7 + categoryIndex,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-6 top-8 -z-0 h-20 w-20 opacity-20 sm:h-28 sm:w-28"
              >
                <Image
                  src="/images/ingredients/orange-slice.png"
                  alt=""
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </motion.div>

              <motion.div
                aria-hidden="true"
                animate={
                  reducedMotion
                    ? undefined
                    : { y: [0, 12, 0], rotate: [-6, -12, -6] }
                }
                transition={{
                  repeat: Infinity,
                  duration: 8 + categoryIndex,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-8 bottom-10 -z-0 h-24 w-24 opacity-15 sm:h-32 sm:w-32"
              >
                <Image
                  src="/images/products/Hojas/Hoja1.png"
                  alt=""
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </motion.div>

              <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
                <CategoryHeading
                  number={String(
                    categoryIndex + 1,
                  ).padStart(2, "0")}
                  title={category.name}
                  accent={visual.accent}
                />

                <div
                  className="
                    mt-10
                    grid
                    grid-cols-1
                    gap-x-5
                    gap-y-10
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    lg:mt-12
                  "
                >
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
        y: 25,
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-b border-[#073B3A] pb-5"
    >
      <div className="flex items-end justify-between gap-8">
        <div>
          <h2 className="font-accent text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.9] text-[#F36B21]">
            {title}
          </h2>
        </div>

        <span
          className="hidden pb-1 text-4xl font-black sm:block lg:text-5xl"
          style={{
            color: accent,
          }}
        >
          {number}
        </span>
      </div>
    </motion.div>
  );
}