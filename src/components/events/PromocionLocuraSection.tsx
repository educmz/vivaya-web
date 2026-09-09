"use client";

import Image from "next/image";
import {
  Check,
  CakeSlice,
  Popcorn,
  PartyPopper,
  UsersRound,
} from "lucide-react";

const includes = [
  "100 mini hamburguesas",
  "100 mini salchipapas",
  "Algodón de azúcar ilimitado",
  "Pop Corn ilimitado",
];

const idealFor = [
  "Cumpleaños",
  "Fiestas infantiles",
  "Eventos escolares",
  "Reuniones y celebraciones",
];

const whatsappNumber = "51999999999";

export function PromocionLocuraSection() {
  const whatsappMessage =
    "Hola, quisiera información sobre la promoción de 100 mini hamburguesas, 100 mini salchipapas, algodón ilimitado y Pop Corn ilimitado para mi evento.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="bg-[#FFF8F3] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-7 md:grid-cols-2 lg:gap-10">
          {/* IMAGEN */}
          <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-2xl bg-[#F4E8DF]">
            <div className="relative aspect-[1122/1402]">
              <Image
                src="/images/events/promocion-locura.webp"
                alt="Carritos con mini hamburguesas, mini salchipapas, algodón y Pop Corn para eventos"
                fill
                sizes="(max-width: 575px) 90vw, (max-width: 767px) 520px, (max-width: 1159px) 45vw, 520px"
                className="object-contain"
              />
            </div>
          </div>

          {/* CONTENIDO */}
          <div className="min-w-0 max-w-xl">
            <p
              className="text-xl leading-relaxed text-[#FF8A00] sm:text-2xl"
              style={{
                fontFamily:
                  "var(--font-script), 'Pacifico', cursive",
              }}
            >
              Sabor para celebrar en grande
            </p>

            <h2 className="mt-3 font-heading text-3xl font-normal leading-[1.08] text-[#302E2A] sm:text-4xl lg:text-5xl">
              Mini Burgers & Salchipapas
            </h2>

            <p className="mt-2 font-heading text-xl text-[#302E2A] sm:text-2xl">
              + Algodón & Pop Corn ilimitado
            </p>

            <p className="mt-4 max-w-lg text-sm leading-6 text-[#77736D]">
              Una promoción pensada para celebraciones grandes, con opciones
              dulces y saladas para compartir durante todo el evento.
            </p>

            {/* INCLUYE */}
            <div className="mt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#302E2A]">
                Incluye
              </p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {includes.map((item) => (
                  <div
                    key={item}
                    className="flex min-w-0 items-start gap-2 rounded-xl bg-white px-3 py-2"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF1E0]">
                      <Check className="h-3.5 w-3.5 text-[#FF8A00]" />
                    </div>

                    <span className="text-xs leading-5 text-[#5F5A54]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PRECIO */}
            <div className="mt-5">
              <p className="text-sm text-[#8C867F]">
                Promoción completa
              </p>

              <p className="mt-1 font-heading text-3xl text-[#302E2A]">
                S/ 790
              </p>
            </div>

            {/* IDEAL PARA */}
            <div className="mt-5 border-t border-[#E6DDD5] pt-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#302E2A]">
                Ideal para
              </p>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                  <CakeSlice className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                  Cumpleaños
                </div>

                <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                  <PartyPopper className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                  Fiestas infantiles
                </div>

                <div className="flex items-center gap-2 text-xs text-[#6F6962]">
                  <UsersRound className="h-4 w-4 shrink-0 text-[#FF8A00]" />
                  Eventos y reuniones
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}