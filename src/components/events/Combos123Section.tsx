"use client";

import Image from "next/image";
import { Check, Clock3, Store, UserRound } from "lucide-react";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import {
  EventReveal,
  EventItem,
  EventCard,
} from "@/components/events/EventReveal";

const whatsappNumber = "51948742332";

const combos = [
  {
    id: "combo-1",
    name: "Combo 1",
    image: "/images/events/combos/combo-1.webp",
    price: 550,
    includes: [
      "50 mini hamburguesas",
      "50 mini salchipapas",
    ],
    message:
      "Hola, quisiera información sobre el Combo 1 para mi evento.",
  },
  {
    id: "combo-2",
    name: "Combo 2",
    image: "/images/events/combos/combo-2.webp",
    price: 650,
    includes: [
      "50 hotdog",
      "50 mini salchipapas",
      "Pop Corn ilimitado",
    ],
    message:
      "Hola, quisiera información sobre el Combo 2 para mi evento.",
  },
  {
    id: "combo-3",
    name: "Combo 3",
    image: "/images/events/combos/combo-3.webp",
    price: 750,
    secondaryPrice: 800,
    secondaryLabel: "Con papas fritas",
    includes: [
      "50 hamburguesas",
      "50 salchipapas adulta",
      "Papas fritas opcional",
    ],
    message:
      "Hola, quisiera información sobre el Combo 3 para mi evento.",
  },
];

export function Combos123Section() {
  return (
    <section className="bg-[#FFF8F3] py-8 sm:py-10 lg:py-12">
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
              Todo combina mejor
            </p>
          </EventItem>

          <AnimatedTitle
            text="Combos para compartir"
            className="mt-2 font-heading text-3xl font-normal leading-[1.08] text-[#302E2A] sm:text-4xl"
          />
        </EventReveal>

        {/* COMBOS */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {combos.map((combo, index) => {
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              combo.message
            )}`;

            return (
              <EventCard
                key={combo.id}
                index={index}
                columns={3}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E9DED4] bg-white transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(48,46,42,0.08)] md:row-span-5 md:grid md:grid-rows-subgrid md:gap-y-0"
              >
                {/* IMAGEN */}
                <div className="relative aspect-[4/3] max-h-[260px] w-full overflow-hidden bg-[#F4E8DF]">
                  <Image
                    src={combo.image}
                    alt={`${combo.name} para eventos`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.035]"
                  />
                </div>

                {/* CONTENIDO */}
                <div className="flex flex-1 flex-col p-4 md:row-span-4 md:grid md:grid-rows-subgrid md:gap-y-0">
                  <h3 className="font-heading text-2xl text-[#302E2A]">
                    {combo.name}
                  </h3>

                  <div className="mt-3 space-y-1.5">
                    {combo.includes.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF1E0]">
                          <Check className="h-3.5 w-3.5 text-[#FF8A00]" />
                        </div>

                        <span className="text-sm leading-5 text-[#5F5A54]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* PRECIO */}
                  <div className="mt-3">
                    <p className="text-sm text-[#8C867F]">Por solo</p>

                    <p className="mt-1 font-heading text-3xl text-[#302E2A]">
                      S/ {combo.price}
                    </p>

                    {combo.secondaryPrice && (
                      <p className="mt-1 text-sm text-[#77736D]">
                        {combo.secondaryLabel}:{" "}
                        <span className="font-semibold text-[#302E2A]">
                          S/ {combo.secondaryPrice}
                        </span>
                      </p>
                    )}
                  </div>

                  {/* DETALLES */}
                  <div className="mt-3 border-t border-[#E6DDD5] pt-3">
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                        <Clock3 className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                        3 horas
                      </div>

                      <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                        <Store className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                        Carrito temático
                      </div>

                      <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                        <UserRound className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                        Atención personalizada
                      </div>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#FF8A00] px-4 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.01] hover:bg-[#F57F00]"
                    >
                      Quiero este combo
                    </a>
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
