"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Clock3, Store, UserRound } from "lucide-react";

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
  const [selectedSnackId, setSelectedSnackId] =
    useState<SnackId>("popcorn");

  const selectedSnack = useMemo(
    () =>
      snacks.find((snack) => snack.id === selectedSnackId) ??
      snacks[0],
    [selectedSnackId]
  );

  const priceFrom = Math.min(
    ...selectedSnack.pricing.map((option) => option.price)
  );

  const whatsappMessage = `Hola, quisiera información sobre ${selectedSnack.name} para mi evento.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="bg-[#FFF8F3] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-8 lg:px-10">
        {/* ENCABEZADO */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-xl leading-relaxed text-[#FF8A00] sm:text-2xl"
            style={{
              fontFamily:
                "var(--font-script), 'Pacifico', cursive",
            }}
          >
            Elige tu favorito
          </p>

          <h2 className="mt-3 font-heading text-3xl font-normal leading-[1.08] text-[#302E2A] sm:text-4xl lg:text-5xl">
            Snacks para tu evento
          </h2>

        </div>

        {/* SELECTORES */}
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {snacks.map((snack) => {
            const isActive = snack.id === selectedSnackId;

            return (
              <button
                key={snack.id}
                type="button"
                onClick={() => setSelectedSnackId(snack.id)}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#FF8A00] text-white"
                    : "border border-[#E8DDD3] bg-white text-[#5F5A54] hover:border-[#FF8A00] hover:text-[#FF8A00]"
                }`}
              >
                {snack.shortName}
              </button>
            );
          })}
        </div>

        {/* CONTENIDO */}
        <div className="mt-8 grid items-center gap-7 md:grid-cols-2 lg:gap-10">
          {/* IMAGEN */}
          <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-2xl bg-[#F4E8DF]">
            <div className="relative aspect-square">
              <Image
                key={selectedSnack.image}
                src={selectedSnack.image}
                alt={`${selectedSnack.name} para eventos`}
                fill
                sizes="(max-width: 575px) 90vw, (max-width: 767px) 520px, (max-width: 1159px) 45vw, 520px"
                className="object-cover"
              />
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div className="min-w-0 max-w-xl">
            <h3 className="font-heading text-3xl font-normal leading-[1.08] text-[#302E2A] sm:text-4xl lg:text-5xl">
              {selectedSnack.name}
            </h3>

            <p className="mt-4 max-w-lg text-sm leading-6 text-[#77736D]">
              {selectedSnack.description}
            </p>

            {/* PRECIO DESDE */}
            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-[#8C867F]">Desde</p>

                <p className="mt-1 font-heading text-3xl text-[#302E2A]">
                  S/ {priceFrom}
                </p>
              </div>

              <span className="text-sm text-[#8C867F]">
                según cantidad
              </span>
            </div>

            {/* PRECIOS */}
            <div className="mt-3 overflow-hidden rounded-xl border border-[#E9DED4] bg-white">
              {selectedSnack.pricing.map((option, index) => (
                <div
                  key={option.label}
                  className={`flex items-center justify-between px-4 py-2.5 ${
                    index !== selectedSnack.pricing.length - 1
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

            {/* DETALLES + CTA */}
            <div className="mt-5 border-t border-[#E6DDD5] pt-4">
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
                  Personal uniformado
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#FF8A00] px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#F57F00]"
              >
                Quiero esta opción
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
