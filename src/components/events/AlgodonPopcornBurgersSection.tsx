"use client";

import Image from "next/image";
import {
  Check,
  Clock3,
  Store,
  UserRound,
  Popcorn,
} from "lucide-react";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import {
  EventReveal,
  EventRevealImage,
  EventGroup,
  EventItem,
} from "@/components/events/EventReveal";

const includes = [
  "Algodón de azúcar ilimitado",
  "Pop Corn ilimitado",
  "50 mini burgers",
  "Personal de atención",
];

const whatsappNumber = "51948742332";

export function AlgodonPopcornBurgersSection() {
  const whatsappMessage =
    "Hola, quisiera información sobre la promoción Algodón, Pop Corn y 50 Mini Burgers para mi evento.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="bg-[#FFF8F3] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-2 lg:gap-10">
          {/* TÍTULO — en móvil va sobre la imagen */}
          <div className="min-w-0 lg:hidden">
            <p
              className="text-xl leading-relaxed text-[#FF8A00] sm:text-2xl"
              style={{ fontFamily: "var(--font-script), 'Pacifico', cursive" }}
            >
              Dulce, salado y listo para disfrutar
            </p>

            <AnimatedTitle
              text="Algodón & Pop Corn"
              className="mt-3 font-extrabold uppercase text-3xl leading-[1.08] text-[#302E2A] sm:text-4xl lg:text-5xl"
            />

            <p className="mt-2 font-extrabold uppercase text-xl text-[#302E2A] sm:text-2xl">
              + 50 Mini Burgers
            </p>
          </div>

          {/* CONTENIDO */}
          <EventReveal delay={0.05} className="order-2 min-w-0 max-w-xl lg:order-1">
            <div className="hidden lg:block">
              <EventItem>
                <p
                  className="text-xl leading-relaxed text-[#FF8A00] sm:text-2xl"
                  style={{
                    fontFamily:
                      "var(--font-script), 'Pacifico', cursive",
                  }}
                >
                  Dulce, salado y listo para disfrutar
                </p>
              </EventItem>

              <AnimatedTitle
                text="Algodón & Pop Corn"
                className="mt-3 font-extrabold uppercase text-3xl leading-[1.08] text-[#302E2A] sm:text-4xl lg:text-5xl"
              />

              <EventItem className="mt-2">
                <p className="font-extrabold uppercase text-xl text-[#302E2A] sm:text-2xl">
                  + 50 Mini Burgers
                </p>
              </EventItem>
            </div>

            <EventItem className="mt-4">
              <p className="max-w-lg text-sm leading-6 text-[#77736D]">
                Una promoción que combina opciones dulces y saladas,
                ideal para compartir y disfrutar durante tu evento.
              </p>
            </EventItem>

            {/* INCLUYE */}
            <EventItem className="mt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#302E2A]">
                Incluye
              </p>

              <EventGroup className="mt-3 grid event-includes-grid gap-2">
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

            {/* PRECIO */}
            <EventItem className="mt-5">
              <p className="text-sm text-[#8C867F]">
                Promoción completa
              </p>

              <p className="mt-1 font-extrabold uppercase text-3xl text-[#302E2A]">
                S/ 380
              </p>
            </EventItem>

            {/* DETALLES + CTA */}
            <EventItem className="mt-5 border-t border-[#E6DDD5] pt-4">
              <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                  <Popcorn className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                  Pop Corn ilimitado
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
                  <Clock3 className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                  Servicio para evento
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

          {/* IMAGEN */}
          <EventRevealImage className="order-1 relative mx-auto w-full max-w-[520px] overflow-hidden rounded-2xl bg-[#F4E8DF] lg:order-2">
            <div className="relative aspect-[1122/1402]">
              <Image
                src="/images/events/algodon-popcorn-mini-burgers.webp"
                alt="Carrito de algodón, Pop Corn y mini burgers para eventos"
                fill
                sizes="(max-width: 575px) 90vw, (max-width: 1023px) 520px, (max-width: 1159px) 45vw, 520px"
                className="object-contain"
              />
            </div>
          </EventRevealImage>
        </div>
      </div>
    </section>
  );
}
