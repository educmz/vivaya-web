"use client";

import Image from "next/image";
import { Clock3, Store, UserRound } from "lucide-react";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import {
  EventReveal,
  EventItem,
  EventCard,
} from "@/components/events/EventReveal";

type SnackId =
  | "popcorn"
  | "hamburguesitas"
  | "hotdog"
  | "mini-salchipapas";

interface SnackOption {
  id: SnackId;
  name: string;
  shortName: string;
  image: string;
  description: string;
  pricing: {
    label: string;
    price: number;
  }[];
}

const snacks: SnackOption[] = [
  {
    id: "popcorn",
    name: "Pop Corn",
    shortName: "Pop Corn",
    image: "/images/events/snacks/popcorn.webp",
    description:
      "Una opción clásica, ligera y perfecta para acompañar celebraciones de todo tipo.",
    pricing: [
      { label: "50 unidades", price: 180 },
      { label: "100 unidades", price: 240 },
      { label: "Ilimitado", price: 300 },
    ],
  },
  {
    id: "hamburguesitas",
    name: "Hamburguesitas",
    shortName: "Mini burgers",
    image: "/images/events/snacks/hamburguesitas.webp",
    description:
      "Mini hamburguesas ideales para servir de forma práctica durante tu evento.",
    pricing: [
      { label: "50 unidades", price: 300 },
      { label: "100 unidades", price: 500 },
    ],
  },
  {
    id: "hotdog",
    name: "Hotdog",
    shortName: "Hotdog",
    image: "/images/events/snacks/hotdog.webp",
    description:
      "Hotdogs preparados para servir durante el evento en formato práctico y fácil de disfrutar.",
    pricing: [
      { label: "50 unidades", price: 190 },
      { label: "100 unidades", price: 290 },
    ],
  },
  {
    id: "mini-salchipapas",
    name: "Mini salchipapas",
    shortName: "Salchipapas",
    image: "/images/events/snacks/mini-salchipapas.webp",
    description:
      "Porciones individuales de mini salchipapas para acompañar reuniones y celebraciones.",
    pricing: [{ label: "50 unidades", price: 320 }],
  },
];

const whatsappNumber = "51948742332";

export function SnacksSection() {
  return (
    <section className="bg-[#FFF8F3] py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-10">
        {/* ENCABEZADO */}
        <EventReveal delay={0.05} className="mx-auto max-w-2xl text-center">
          <EventItem>
            <p
              className="text-xl leading-relaxed text-[#FF8A00] sm:text-2xl"
              style={{
                fontFamily: "var(--font-script), 'Pacifico', cursive",
              }}
            >
              Elige tu favorito
            </p>
          </EventItem>

          <AnimatedTitle
            text="Snacks para tu evento"
            className="mt-3 font-heading text-3xl font-normal leading-[1.08] text-[#302E2A] sm:text-4xl"
          />

          <EventItem className="mt-4">
            <p className="mx-auto max-w-xl text-sm leading-6 text-[#77736D] sm:text-base">
              Opciones prácticas y deliciosas para acompañar tus celebraciones.
            </p>
          </EventItem>
        </EventReveal>

        {/* CARDS */}
        <div className="mt-6 grid gap-3 min-[360px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {snacks.map((snack, index) => {
            const priceFrom = Math.min(
              ...snack.pricing.map((option) => option.price)
            );

            const whatsappMessage = `Hola, quisiera información sobre ${snack.name} para mi evento.`;

            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`;

            return (
              <EventCard
                key={snack.id}
                index={index}
                columns={4}
                className="group row-span-7 grid h-full min-w-0 grid-rows-subgrid gap-y-0 overflow-hidden rounded-2xl border border-[#EDE3DA] bg-white transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(48,46,42,0.08)]"
              >
                {/* IMAGEN */}
                <div className="relative h-36 overflow-hidden sm:h-44 bg-[#F4E8DF]">
                  <Image
                    src={snack.image}
                    alt={`${snack.name} para eventos`}
                    fill
                    sizes="(max-width: 359px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.035]"
                  />
                </div>

                {/* CONTENIDO */}
                <div className="row-span-6 grid min-w-0 grid-rows-subgrid gap-y-0 p-3">
                  <h3 className="break-words font-heading text-xl font-normal leading-tight text-[#302E2A] sm:text-2xl">
                    {snack.name}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#77736D]">
                    {snack.description}
                  </p>

                  {/* PRECIO */}
                  <div className="mt-3 flex flex-wrap items-end justify-between gap-2">
                    <div>
                      <p className="text-xs text-[#8C867F]">
                        Desde
                      </p>

                      <p className="mt-1 font-heading text-3xl text-[#302E2A]">
                        S/ {priceFrom}
                      </p>
                    </div>

                    <span className="pb-1 text-xs text-[#8C867F]">
                      según cantidad
                    </span>
                  </div>

                  {/* PRECIOS */}
                  <div className="mt-3 self-start overflow-hidden rounded-xl border border-[#E9DED4] bg-[#FFFDFC]">
                    {snack.pricing.map((option, index) => (
                      <div
                        key={option.label}
                        className={`flex items-center justify-between gap-1.5 px-2 py-2 ${
                          index !== snack.pricing.length - 1
                            ? "border-b border-[#EFE7E0]"
                            : ""
                        }`}
                      >
                        <span className="text-xs text-[#67615A]">
                          {option.label}
                        </span>

                        <span className="shrink-0 whitespace-nowrap text-xs font-semibold text-[#302E2A]">
                          S/ {option.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* BENEFICIOS */}
                  <div className="mt-3 space-y-1.5 border-t border-[#EEE5DE] pt-3">
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
                      Personal uniformado
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#FF8A00] px-2 py-2 text-xs font-semibold text-white transition duration-300 hover:bg-[#F57F00]"
                  >
                    Quiero esta opción
                  </a>
                </div>
              </EventCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}