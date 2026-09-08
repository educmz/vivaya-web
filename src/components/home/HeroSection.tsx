"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: "slide-1",
    image: "/images/home/hero/inicio-1.webp",
    alt: "Productos de Vivaya",
    position: "center",
  },
  {
    id: "slide-2",
    image: "/images/home/hero/inicio-2.webp",
    alt: "Experiencia Vivaya",
    position: "center",
  },
  {
    id: "slide-3",
    image: "/images/home/hero/inicio-3.webp",
    alt: "Preparación en Vivaya",
    position: "center",
  },
  {
    id: "slide-4",
    image: "/images/home/hero/inicio-4.webp",
    alt: "Equipo de Vivaya",
    position: "center",
  },
  {
    id: "slide-5",
    image: "/images/home/hero/inicio-5.webp",
    alt: "Local Vivaya en Miraflores",
    position: "center",
  },
  {
    id: "slide-6",
    image: "/images/home/hero/inicio-6.webp",
    alt: "Local Vivaya en Surco",
    position: "center",
  },
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
  }, [paused]);

  function changeSlide(direction: number) {
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length
    );
  }

  return (
    <section
      aria-label="Fotografías de Vivaya"
      aria-roledescription="carrusel"
      className="w-full bg-[#FFF9F3] pt-16 lg:pt-[72px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          changeSlide(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div
        data-home-hero
        className="
          group
          relative
          h-[calc(100svh-64px)]
          w-full
          overflow-hidden
          lg:h-[calc(100svh-72px)]
        "
      >
        {/* SLIDES */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${index + 1} de ${slides.length}`}
            aria-hidden={index !== activeSlide}
            className={`
              absolute
              inset-0
              overflow-hidden
              transition-opacity
              duration-700
              ease-out
              motion-reduce:transition-none
              ${
                index === activeSlide
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
              "
              style={{
                objectPosition: slide.position,
              }}
            />
          </div>
        ))}

        {/* FLECHA IZQUIERDA */}
        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Diapositiva anterior"
          className="
            absolute
            left-4
            top-1/2
            z-20
            grid
            size-11
            -translate-y-1/2
            place-items-center
            rounded-full
            bg-white/85
            text-[#302E2A]
            backdrop-blur-sm
            transition-all
            duration-200
            hover:scale-105
            hover:bg-white
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            lg:left-7
            lg:size-12
            lg:opacity-0
            lg:group-hover:opacity-100
            lg:group-focus-within:opacity-100
          "
        >
          <ArrowLeft
            size={18}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </button>

        {/* FLECHA DERECHA */}
        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Siguiente diapositiva"
          className="
            absolute
            right-4
            top-1/2
            z-20
            grid
            size-11
            -translate-y-1/2
            place-items-center
            rounded-full
            bg-white/85
            text-[#302E2A]
            backdrop-blur-sm
            transition-all
            duration-200
            hover:scale-105
            hover:bg-white
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            lg:right-7
            lg:size-12
            lg:opacity-0
            lg:group-hover:opacity-100
            lg:group-focus-within:opacity-100
          "
        >
          <ArrowRight
            size={18}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </button>

        {/* INDICADORES */}
        <div
          className="
            absolute
            bottom-5
            left-1/2
            z-20
            -translate-x-1/2
            sm:bottom-6
            lg:bottom-8
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white/90
              px-3
              py-2
              backdrop-blur-md
            "
            aria-label="Elegir diapositiva"
          >
            {slides.map((slide, index) => {
              const isActive = index === activeSlide;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Ir a la diapositiva ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className="
                    grid
                    size-5
                    place-items-center
                    rounded-full
                    focus-visible:outline-none
                  "
                >
                  <span
                    aria-hidden="true"
                    className={`
                      block
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "h-2 w-6 bg-[#FF8A00]"
                          : "size-2 bg-[#302E2A]/25"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}