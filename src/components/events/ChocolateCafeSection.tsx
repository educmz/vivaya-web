"use client";

import Image from "next/image";
import { Coffee, Clock3, Store, UserRound, Check } from "lucide-react";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import {
  EventReveal,
  EventRevealImage,
  EventGroup,
  EventItem,
} from "@/components/events/EventReveal";

const pricing = [
  { label: "50 vasos", price: 300 },
  { label: "75 vasos", price: 420 },
  { label: "100 vasos", price: 520 },
];

const includes = [
  "Máquina de café",
  "Máquina de chocolate",
  "Café de especialidad de alta calidad en granos",
  "Barra móvil",
  "Infusiones a elección",
];

const whatsappNumber = "51948742332";

export function ChocolateCafeSection() {
  const whatsappMessage =
    "Hola, quisiera información sobre la promoción Chocolate y Café para mi evento.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="bg-[#FFF8F3] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-10">
        <div className="grid items-center gap-7 md:grid-cols-2 lg:gap-10">

          {/* IMAGEN */}
          <EventRevealImage className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-2xl bg-[#F4E8DF]">
            <div className="relative aspect-[1122/1402]">
              <Image
                src="/images/events/chocolate-cafe.webp"
                alt="Carrito de chocolate y café para eventos"
                fill
                sizes="(max-width: 575px) 90vw, (max-width: 767px) 520px, (max-width: 1159px) 45vw, 520px"
                className="object-contain"
                priority
              />
            </div>
          </EventRevealImage>

          {/* CONTENIDO */}
          <EventReveal delay={0.05} className="min-w-0 max-w-xl">
            <EventItem>
              <p
                className="text-xl leading-relaxed text-[#FF8A00] sm:text-2xl"
                style={{
                  fontFamily: "var(--font-script), 'Pacifico', cursive",
                }}
              >
                Calidez en cada taza
              </p>
            </EventItem>

            <AnimatedTitle
              text="Chocolate & Café"
              className="mt-3 whitespace-nowrap font-heading text-3xl font-normal leading-[1.08] text-[#302E2A] sm:text-4xl lg:text-5xl"
            />

            <EventItem className="mt-4">
              <p className="max-w-lg text-sm leading-6 text-[#77736D]">
                Una estación de café, chocolate e infusiones pensada para
                acompañar tu evento durante tres horas de servicio.
              </p>
            </EventItem>

            {/* INCLUYE */}
            <EventItem className="mt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#302E2A]">
                Incluye
              </p>

              <EventGroup className="mt-3 grid grid-cols-2 gap-2">
                {includes.map((item) => (
                  <EventItem
                    key={item}
                    className="flex min-w-0 items-start gap-2 rounded-xl bg-white px-3 py-2"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF1E0]">
                      <Check className="h-3.5 w-3.5 text-[#FF8A00]" />
                    </div>

                    <span className="text-xs leading-5 text-[#5F5A54]">
                      {item}
                    </span>
                  </EventItem>
                ))}
              </EventGroup>
            </EventItem>

            {/* PRECIOS */}
            <EventItem className="mt-5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-[#8C867F]">Desde</p>
                  <p className="mt-1 font-heading text-3xl text-[#302E2A]">
                    S/ 300
                  </p>
                </div>

                <span className="text-sm text-[#8C867F]">
                  según cantidad de vasos
                </span>
              </div>

              <div className="mt-3 overflow-hidden rounded-xl border border-[#E9DED4] bg-white">
                {pricing.map((option, index) => (
                  <div
                    key={option.label}
                    className={`flex items-center justify-between px-4 py-2.5 ${
                      index !== pricing.length - 1
                        ? "border-b border-[#EFE7E0]"
                        : ""
                    }`}
                  >
                    <span className="text-sm text-[#67615A]">
                      {option.label}
                    </span>

                    <span className="font-semibold text-[#302E2A]">
                      S/ {option.price}
                    </span>
                  </div>
                ))}
              </div>
            </EventItem>

            {/* DETALLES + CTA */}
            <EventItem className="mt-5 border-t border-[#E6DDD5] pt-4">
              <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                  <Clock3 className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                  3 horas de servicio
                </div>

                <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                  <Store className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                  Carrito temático
                </div>

                <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                  <UserRound className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                  Personal de atención
                </div>

                <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                  <Coffee className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                  Café e infusiones
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#FF8A00] px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#F57F00]"
              >
                Quiero esta promoción
              </a>
            </EventItem>
          </EventReveal>

        </div>
      </div>
    </section>
  );
}
