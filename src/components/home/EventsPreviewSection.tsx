"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { HomeImage } from "./HomeImage";
import { HomeHeading } from "./HomeHeading";
import styles from "./Home.module.css";

const events = [
  {
    id: "event-1",
    image: "/images/home/events/event-1.webp",
    alt: "Montaje de evento VIVAYA",
  },
  {
    id: "event-2",
    image: "/images/home/events/event-2.webp",
    alt: "Carrito para eventos VIVAYA",
  },
  {
    id: "event-3",
    image: "/images/home/events/event-3.webp",
    alt: "Experiencia VIVAYA en evento",
  },
  {
    id: "event-4",
    image: "/images/home/events/event-4.webp",
    alt: "Snacks preparados para evento VIVAYA",
  },
  {
    id: "event-5",
    image: "/images/home/events/event-5.webp",
    alt: "Estación VIVAYA para celebración",
  },
  {
    id: "event-6",
    image: "/images/home/events/event-6.webp",
    alt: "Celebración con VIVAYA",
  },
] as const;


export function EventsPreviewSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const [edges, setEdges] = useState({ left: false, right: true });
  const updateEdges = useCallback(() => {
    const node = scrollRef.current;
    if (!node) return;
    setEdges({ left: node.scrollLeft > 2, right: node.scrollLeft < node.scrollWidth - node.clientWidth - 2 });
  }, []);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    const frame = requestAnimationFrame(updateEdges);
    const observer = new ResizeObserver(updateEdges);
    observer.observe(node);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [updateEdges]);

  function scroll(direction: number) {
    const node = scrollRef.current;
    const card = node?.firstElementChild;
    if (!node || !card) return;
    node.scrollBy({ left: direction * (card.getBoundingClientRect().width + 16), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <section aria-labelledby="events-preview-title" className={styles.section}>
      <div className={styles.container}>
        <div className="flex items-end justify-between gap-4">
          <HomeHeading id="events-preview-title" eyebrow="eventos VIVAYA">Celebramos contigo.</HomeHeading>
          <div className="mb-7 hidden shrink-0 gap-2 sm:flex">
            <button type="button" onClick={() => scroll(-1)} disabled={!edges.left} aria-label="Ver eventos anteriores" className={styles.control}><ArrowLeft size={18} /></button>
            <button type="button" onClick={() => scroll(1)} disabled={!edges.right} aria-label="Ver más eventos" className={styles.control}><ArrowRight size={18} /></button>
          </div>
        </div>
        <div className="relative">
          <div aria-hidden="true" className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#FFF9F3] to-transparent transition-opacity sm:w-12 ${edges.left ? 'opacity-100' : 'opacity-0'}`} />
          <div aria-hidden="true" className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#FFF9F3] to-transparent transition-opacity sm:w-12 ${edges.right ? 'opacity-100' : 'opacity-0'}`} />
          <div ref={scrollRef} tabIndex={0} role="region" aria-label="Fotografías de eventos" className={styles.eventTrack}
            onScroll={updateEdges}
            onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); scroll(event.key === "ArrowRight" ? 1 : -1); } }}
            onDragStart={(event) => event.preventDefault()}
            onPointerDown={(event) => {
              if (event.pointerType !== "mouse" || event.button !== 0) return;
              drag.current = { x: event.clientX, left: event.currentTarget.scrollLeft };
              event.currentTarget.dataset.dragging = "true";
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => { if (drag.current) event.currentTarget.scrollLeft = drag.current.left - (event.clientX - drag.current.x); }}
            onPointerUp={(event) => { drag.current = null; delete event.currentTarget.dataset.dragging; if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
            onPointerCancel={(event) => { drag.current = null; delete event.currentTarget.dataset.dragging; }}
          >
            {events.map((event) => <div key={event.id} className={styles.eventPhoto}><HomeImage src={event.image} alt={event.alt} fill sizes="(min-width: 1360px) 550px, (min-width: 640px) 43vw, 82vw" draggable={false} /></div>)}
          </div>
        </div>
        <div className="mt-4 flex justify-end"><Link href="/eventos" className={styles.link}>Ver eventos <ArrowRight size={18} aria-hidden="true" /></Link></div>
      </div>
    </section>
  );
}
