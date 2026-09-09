"use client";

import Image from "next/image";
import { Check, Clock3, UserRound, IceCreamBowl } from "lucide-react";

const whatsappNumber = "51999999999";

const packages = [
  {
    id: "basico",
    name: "Básico",
    image: "/images/events/helado-soft-basico.webp",
    price: 400,
    includes: [
      "Máquina de helado soft premium",
      "Hasta 100 helados soft",
      "Sabores vainilla, chocolate o mixto",
      "Vasos y/o barquillos incluidos",
      "1 operador uniformado",
    ],
    message:
      "Hola, quisiera información sobre el Paquete Básico de Helado Soft para mi evento.",
  },
  {
    id: "premium",
    name: "Premium",
    image: "/images/events/helado-soft-premium.webp",
    price: 500,
    includes: [
      "Máquina de helado soft premium",
      "Hasta 120 helados soft",
      "Sabores vainilla, chocolate o mixto",
      "Vasos y/o barquillos incluidos",
      "Estación de toppings gourmet",
      "1 operador uniformado",
    ],
    message:
      "Hola, quisiera información sobre el Paquete Premium de Helado Soft para mi evento.",
  },
];

export function HeladoSoftSection() {
  return (
    <section className="bg-[#FFF8F3] py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-8 lg:px-10">
        {/* ENCABEZADO */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-xl leading-relaxed text-[#FF8A00] sm:text-2xl"
            style={{
              fontFamily: "var(--font-script), 'Pacifico', cursive",
            }}
          >
            Un toque refrescante para celebrar
          </p>

          <h2 className="mt-1 font-heading text-2xl font-normal leading-[1.08] text-[#302E2A] sm:text-4xl">
            Helado Soft
          </h2>
        </div>

        {/* PAQUETES */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {packages.map((item) => {
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              item.message
            )}`;

            return (
              <article
                key={item.id}
                className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E9DED4] bg-white"
              >
                {/* IMAGEN */}
                <div className="relative h-[260px] shrink-0 overflow-hidden bg-[#F4E8DF] sm:h-[280px] lg:h-[300px]">
                  <Image
                    src={item.image}
                    alt={`Paquete ${item.name} de Helado Soft`}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* CONTENIDO */}
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FF8A00]">
                    Paquete
                  </p>

                  <h3 className="mt-1 font-heading text-2xl text-[#302E2A]">
                    {item.name}
                  </h3>

                  <div className="mt-3 grid gap-x-4 gap-y-1.5 lg:grid-cols-2">
                    {item.includes.map((include) => (
                      <div
                        key={include}
                        className="flex items-start gap-2"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF1E0]">
                          <Check className="h-3.5 w-3.5 text-[#FF8A00]" />
                        </div>

                        <span className="text-sm leading-5 text-[#5F5A54]">
                          {include}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* PRECIO */}
                  <div className="mt-auto pt-3">
                    <p className="text-sm text-[#8C867F]">Desde</p>

                    <p className="mt-1 font-heading text-3xl text-[#302E2A]">
                      S/ {item.price}
                    </p>
                  </div>

                  {/* DETALLES */}
                  <div className="mt-3 border-t border-[#E6DDD5] pt-3">
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                        <Clock3 className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                        3 horas
                      </div>

                      <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                        <UserRound className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                        1 operador
                      </div>

                      <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                        <IceCreamBowl className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                        Helado soft
                      </div>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#FF8A00] px-4 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.01] hover:bg-[#F57F00]"
                  >
                    Quiero este paquete
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
