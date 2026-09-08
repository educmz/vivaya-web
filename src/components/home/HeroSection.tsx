"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Fotografías disponibles hasta incorporar los banners definitivos de Inicio.
const slides = [
  { id: "slide-1", image: "/images/about/about-product.webp", alt: "Productos de Vivaya" },
  { id: "slide-2", image: "/images/about/about-lifestyle.webp", alt: "Experiencia Vivaya" },
  { id: "slide-3", image: "/images/about/about-machine.webp", alt: "Preparación en Vivaya" },
  { id: "slide-4", image: "/images/about/about-team.webp", alt: "Equipo de Vivaya" },
  { id: "slide-5", image: "/images/products/Locales/Miraflores.jpg", alt: "Local Vivaya en Miraflores" },
  { id: "slide-6", image: "/images/products/Locales/Surco.jpeg", alt: "Local Vivaya en Surco" },
] as const;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [paused, activeSlide]);

  function changeSlide(direction: number) {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <section
      aria-label="Fotografías de Vivaya"
      aria-roledescription="carrusel"
      className="w-full bg-[#FFF9F3] px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-24 lg:px-10 lg:pt-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          changeSlide(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div data-home-hero className="group relative mx-auto h-[52svh] w-full max-w-[1440px] overflow-hidden sm:h-[60svh] lg:h-[68svh]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${index + 1} de ${slides.length}`}
            aria-hidden={index !== activeSlide}
            className={`absolute inset-0 ${index === activeSlide ? "visible" : "invisible"}`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1520px) 1440px, (min-width: 1024px) calc(100vw - 80px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
              className="object-cover object-center"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Diapositiva anterior"
          className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/70 text-[#302E2A] transition-opacity hover:bg-white focus-visible:opacity-100 lg:left-5 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100"
        >
          <ArrowLeft size={17} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Siguiente diapositiva"
          className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/70 text-[#302E2A] transition-opacity hover:bg-white focus-visible:opacity-100 lg:right-5 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100"
        >
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-col items-center px-4 pb-8 pt-4 sm:pb-10">
        <div className="flex items-center" aria-label="Elegir diapositiva">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Ir a la diapositiva ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
              className="grid size-8 place-items-center rounded-full"
            >
              <span aria-hidden="true" className={`h-2 rounded-full transition-[width,background-color] duration-200 motion-reduce:transition-none ${index === activeSlide ? "w-6 bg-[#F4A06D]" : "w-2 bg-[#302E2A]/20"}`} />
            </button>
          ))}
        </div>
        <Link
          href="/menu"
          className="mt-5 inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#F4A06D] px-7 text-sm font-semibold text-[#4B2D1E] transition-colors duration-200 hover:bg-[#EE925C]"
        >
          Ver carta
        </Link>
      </div>
    </section>
  );
}
