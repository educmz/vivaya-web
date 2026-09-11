"use client";

import Image from "next/image";
import {
  Check,
  Clock3,
  UserRound,
  Wine,
} from "lucide-react";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import {
  EventReveal,
  EventItem,
  EventCard,
} from "@/components/events/EventReveal";

const whatsappNumber = "51999999999";

const packages = [
  {
    id: "cremoladas-2-sabores",
    name: "Cremoladas",
    subtitle: "2 sabores",
    image: "/images/events/cremoladas-2-sabores.webp",
    price: 450,
    alcohol: false,
    includes: [
      "2 barriles de 12 L",
      "Vasos de 8, 10 o 12 onzas",
      "Vasos incluidos",
      "1 operador uniformado",
    ],
    message:
      "Hola, quisiera información sobre el paquete de Cremoladas de 2 Sabores para mi evento.",
  },
  {
    id: "cremoladas-2-sabores-alcohol",
    name: "Cremoladas",
    subtitle: "2 sabores + Pisco o Ron",
    image: "/images/events/cremoladas-2-sabores-alcohol.webp",
    price: 600,
    alcohol: true,
    includes: [
      "2 barriles de 12 L",
      "Pisco o ron",
      "Vasos de 8, 10 o 12 onzas",
      "Vasos incluidos",
      "1 operador uniformado",
    ],
    message:
      "Hola, quisiera información sobre el paquete de Cremoladas de 2 Sabores con Pisco o Ron para mi evento.",
  },
  {
    id: "cremoladas-3-sabores",
    name: "Cremoladas",
    subtitle: "3 sabores",
    image: "/images/events/cremoladas-3-sabores.webp",
    price: 650,
    alcohol: false,
    includes: [
      "3 barriles de 12 L",
      "Cualquier sabor de la lista",
      "Vasos de 8, 10 o 12 onzas",
      "Vasos incluidos",
      "1 operador uniformado",
    ],
    message:
      "Hola, quisiera información sobre el paquete de Cremoladas de 3 Sabores para mi evento.",
  },
  {
    id: "chilcanos-3-sabores",
    name: "Chilcanos",
    subtitle: "3 sabores",
    image: "/images/events/chilcanos-3-sabores.webp",
    price: 800,
    alcohol: true,
    includes: [
      "3 barriles de 12 L",
      "Cualquier sabor de la lista",
      "Vasos de 8, 10 o 12 onzas",
      "Vasos incluidos",
      "1 operador uniformado",
    ],
    message:
      "Hola, quisiera información sobre el paquete de Chilcanos de 3 Sabores para mi evento.",
  },
];

export function CremoladasChilcanosSection() {
  return (
    <section className="bg-[#FFF8F3] pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-10">
        {/* ENCABEZADO */}
        <EventReveal delay={0.05} className="mx-auto max-w-2xl text-center">
          <EventItem>
            <p
              className="text-xl leading-relaxed text-[#FF8A00] sm:text-2xl"
              style={{
                fontFamily:
                  "var(--font-script), 'Pacifico', cursive",
              }}
            >
              Algo fresco para cada celebración
            </p>
          </EventItem>

          <AnimatedTitle
            text="Cremoladas & Chilcanos"
            className="mt-3 font-extrabold uppercase text-3xl leading-[1.08] text-[#302E2A] sm:text-4xl"
          />
        </EventReveal>

        {/* PAQUETES */}
        <div className="mt-6 grid event-cards-grid gap-4">
          {packages.map((item, index) => {
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              item.message
            )}`;

            return (
              <EventCard
                key={item.id}
                index={index}
                columns={4}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E9DED4] bg-white transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(48,46,42,0.08)]"
              >
                {/* IMAGEN */}
                <div className="relative h-36 shrink-0 overflow-hidden bg-[#F4E8DF] sm:h-44">
                  <Image
                    src={item.image}
                    alt={`${item.name} ${item.subtitle} para eventos`}
                    fill
                    sizes="(max-width: 607px) calc(100vw - 48px), (max-width: 911px) 50vw, (max-width: 1215px) 33vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.035]"
                  />
                </div>

                {/* CONTENIDO */}
                <div className="flex min-w-0 flex-1 flex-col p-3">
                  <h3 className="[overflow-wrap:anywhere] font-extrabold uppercase text-xl sm:text-2xl text-[#302E2A]">
                    {item.name}
                  </h3>

                  <p className="mt-1 font-extrabold uppercase text-base leading-snug text-[#302E2A]">
                    {item.subtitle}
                  </p>

                  {/* INCLUYE */}
                  <div className="mt-3 space-y-1">
                    {item.includes.map((include) => (
                      <div
                        key={include}
                        className="flex items-start gap-1.5"
                      >
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-center rounded-full bg-[#FFF1E0]">
                          <Check className="h-3 w-3 text-[#FF8A00]" />
                        </div>

                        <span className="text-xs leading-[1.4] text-[#5F5A54]">
                          {include}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* PRECIO */}
                  <div className="mt-auto pt-3">
                    <p className="text-xs text-[#8C867F]">
                      Desde
                    </p>

                    <p className="mt-1 font-extrabold uppercase text-3xl text-[#302E2A]">
                      S/ {item.price}
                    </p>
                  </div>

                  {/* DETALLES + CTA */}
                  <div className="pt-3">
                    <div className="border-t border-[#E6DDD5] pt-3">
                      <div className="flex flex-wrap gap-x-2 gap-y-1.5">
                        <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                          <Clock3 className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                          3 horas
                        </div>

                        <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                          <UserRound className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                          1 operador
                        </div>

                        {item.alcohol && (
                          <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                            <Wine className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                            Con alcohol
                          </div>
                        )}
                      </div>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#FF8A00] px-2 py-2 text-xs font-semibold text-white transition hover:scale-[1.01] hover:bg-[#F57F00]"
                      >
                        Quiero este paquete
                      </a>
                    </div>
                  </div>
                </div>
              </EventCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
