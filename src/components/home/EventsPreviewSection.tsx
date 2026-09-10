"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { HomeImage } from "./HomeImage";
import { HomeHeading } from "./HomeHeading";
import styles from "./Home.module.css";

const events = [
  {
    id: "event-1",
    image: "/images/events/gallery/events-gallery-01.webp",
    alt: "Carritos de algodón de azúcar, canchita y bebidas en una celebración",
  },
  {
    id: "event-2",
    image: "/images/events/gallery/events-gallery-02.webp",
    alt: "Niños recibiendo canchita en un carrito de snacks",
  },
  {
    id: "event-3",
    image: "/images/events/gallery/events-gallery-03.webp",
    alt: "Carritos de snacks decorados para una fiesta al aire libre",
  },
  {
    id: "event-4",
    image: "/images/events/gallery/events-gallery-04.webp",
    alt: "Familias disfrutando de carritos de snacks en una celebración",
  },
] as const;

export function EventsPreviewSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);

  const [edges, setEdges] = useState({
    left: false,
    right: true,
  });

  const updateEdges = useCallback(() => {
    const node = scrollRef.current;

    if (!node) return;

    setEdges({
      left: node.scrollLeft > 2,
      right:
        node.scrollLeft <
        node.scrollWidth - node.clientWidth - 2,
    });
  }, []);

  useEffect(() => {
    const node = scrollRef.current;

    if (!node) return;

    const frame = requestAnimationFrame(updateEdges);

    const observer = new ResizeObserver(updateEdges);
    observer.observe(node);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [updateEdges]);

  function scroll(direction: number) {
    const node = scrollRef.current;
    const card = node?.firstElementChild;

    if (!node || !card) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    node.scrollBy({
      left:
        direction *
        (card.getBoundingClientRect().width + 20),
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  }

  return (
    <section
      aria-labelledby="events-preview-title"
      className={`${styles.section} overflow-hidden`}
    >
      <div className={styles.container}>
        {/* Heading */}
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <HomeHeading
              id="events-preview-title"
              eyebrow="eventos VIVAYA"
            >
              Celebramos contigo.
            </HomeHeading>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#77736D] sm:text-base">
              Momentos reales, sabores para compartir y experiencias
              que forman parte de cada celebración.
            </p>
          </div>

          {/* Desktop controls */}
          <div className="mb-1 hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll(-1)}
              disabled={!edges.left}
              aria-label="Ver eventos anteriores"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#DDD4CD] bg-white text-[#302E2A] transition duration-300 hover:border-[#302E2A] hover:bg-[#302E2A] hover:text-white disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </button>

            <button
              type="button"
              onClick={() => scroll(1)}
              disabled={!edges.right}
              aria-label="Ver más eventos"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#DDD4CD] bg-white text-[#302E2A] transition duration-300 hover:border-[#302E2A] hover:bg-[#302E2A] hover:text-white disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="relative mt-8">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#FFF9F3] via-[#FFF9F3]/70 to-transparent transition-opacity duration-300 sm:w-16 ${
              edges.left ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#FFF9F3] via-[#FFF9F3]/70 to-transparent transition-opacity duration-300 sm:w-16 ${
              edges.right ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            ref={scrollRef}
            tabIndex={0}
            role="region"
            aria-label="Fotografías de eventos"
            className={`${styles.eventTrack} scroll-smooth`}
            onScroll={updateEdges}
            onKeyDown={(event) => {
              if (
                event.key === "ArrowRight" ||
                event.key === "ArrowLeft"
              ) {
                event.preventDefault();

                scroll(
                  event.key === "ArrowRight" ? 1 : -1
                );
              }
            }}
            onDragStart={(event) => event.preventDefault()}
            onPointerDown={(event) => {
              if (
                event.pointerType !== "mouse" ||
                event.button !== 0
              )
                return;

              drag.current = {
                x: event.clientX,
                left: event.currentTarget.scrollLeft,
              };

              event.currentTarget.dataset.dragging = "true";
              event.currentTarget.setPointerCapture(
                event.pointerId
              );
            }}
            onPointerMove={(event) => {
              if (!drag.current) return;

              event.currentTarget.scrollLeft =
                drag.current.left -
                (event.clientX - drag.current.x);
            }}
            onPointerUp={(event) => {
              drag.current = null;

              delete event.currentTarget.dataset.dragging;

              if (
                event.currentTarget.hasPointerCapture(
                  event.pointerId
                )
              ) {
                event.currentTarget.releasePointerCapture(
                  event.pointerId
                );
              }
            }}
            onPointerCancel={(event) => {
              drag.current = null;
              delete event.currentTarget.dataset.dragging;
            }}
          >
            {events.map((event) => (
              <div
                key={event.id}
                className={`${styles.eventPhoto} group relative overflow-hidden rounded-2xl bg-[#EFE8E2]`}
              >
                <HomeImage
                  src={event.image}
                  alt={event.alt}
                  fill
                  sizes="(min-width: 1360px) 550px, (min-width: 640px) 43vw, 82vw"
                  draggable={false}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-7 flex justify-end">
          <Link
            href="/eventos"
            className="group inline-flex items-center gap-3 rounded-full bg-[#302E2A] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#FF8A00]"
          >
            Conoce nuestros eventos

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#FF8A00]">
              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}