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
        <div className={styles.eventHeader}>
          <div className="max-w-3xl">
            <HomeHeading
              id="events-preview-title"
              eyebrow="eventos vivaya"
            >
              Celebramos contigo.
            </HomeHeading>

          </div>

          {/* Desktop controls */}
          <div className={styles.eventControls}>
            <button
              type="button"
              onClick={() => scroll(-1)}
              disabled={!edges.left}
              aria-label="Ver eventos anteriores"
              className={styles.eventControl}
            >
              <ArrowLeft
                size={18}
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={() => scroll(1)}
              disabled={!edges.right}
              aria-label="Ver más eventos"
              className={styles.eventControl}
            >
              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className={styles.eventGallery}>

          <div
            ref={scrollRef}
            tabIndex={0}
            role="region"
            aria-label="Fotografías de eventos"
            className={styles.eventTrack}
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
                className={styles.eventPhoto}
              >
                <HomeImage
                  src={event.image}
                  alt={event.alt}
                  fill
                  sizes="(min-width: 1360px) 550px, (min-width: 640px) 43vw, 82vw"
                  draggable={false}
                  className={styles.eventImage}
                />

              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.eventFooter}>
          <Link
            href="/eventos"
            className={styles.eventLink}
          >
            Conoce nuestros eventos

            <span className={styles.eventLinkIcon}>
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
