import Image from "next/image";
import Link from "next/link";

import { menuCategories } from "@/data/menu/categories";
import type { MenuCategoryId } from "@/types/catalog";
import { HomeHeading } from "./HomeHeading";

const visuals: Record<MenuCategoryId, { background: string; image: string; alt: string }> = {
  smoothies: {
    background: "#DCEEF2",
    image: "/images/products/Carta/naranja-fresa.webp",
    alt: "Naranja Fresa de Vivaya",
  },
  "tes-helados": {
    background: "#F6E9B8",
    image: "/images/products/Carta/jamaica.webp",
    alt: "Té helado Jamaica de Vivaya",
  },
  "bebidas-calientes": {
    background: "#F5D6C2",
    image: "/images/products/Carta/chocolate-caliente.webp",
    alt: "Chocolate Caliente de Vivaya",
  },
  frappes: {
    background: "#E6E1F0",
    image: "/images/products/Carta/mocaccino.webp",
    alt: "Frappé Mocaccino de Vivaya",
  },
  waffles: {
    background: "#F6E9B8",
    image: "/images/products/Carta/waffle.webp",
    alt: "Waffle de Vivaya",
  },
  sandwiches: {
    background: "#DFEACF",
    image: "/images/products/Carta/mixto.png",
    alt: "Sándwich Mixto Ninfit de Vivaya",
  },
  tostones: {
    background: "#F5D6C2",
    image: "/images/products/Carta/toston-benedictino.webp",
    alt: "Tostón Benedictino de Vivaya",
  },
  pizzas: {
    background: "#DCEEF2",
    image: "/images/products/Carta/pizza-hawaiana.webp",
    alt: "Pizza Hawaiana de Vivaya",
  },
};

export function CravingsSection() {
  return (
    <section aria-labelledby="cravings-title" className="bg-background pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <HomeHeading id="cravings-title" eyebrow="A tu gusto">
          ¿Qué se te antoja?
        </HomeHeading>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:gap-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-4">
            {[...menuCategories].sort((a, b) => a.order - b.order).map((category) => {
              const visual = visuals[category.id];

              return (
                <Link
                  key={category.id}
                  href={`/menu#carta-${category.id}`}
                  className="group flex aspect-[4/5] min-w-0 flex-col items-center overflow-hidden rounded-lg px-3 pb-4 pt-5 text-[#302E2A] transition-transform duration-200 hover:-translate-y-1 motion-reduce:transform-none sm:px-4 sm:pb-5 sm:pt-6"
                  style={{ backgroundColor: visual.background }}
                >
                  <h3 className="relative z-10 flex min-h-[2.3em] items-center justify-center text-center font-heading text-[clamp(1.35rem,2.1vw,2rem)] uppercase leading-[1.12]">
                    {category.name}
                  </h3>
                  <div className="relative mt-3 flex min-h-0 w-full flex-1 items-center justify-center">
                    <div className="relative h-[72%] w-[72%]">
                      <Image
                        src={visual.image}
                        alt={visual.alt}
                        fill
                        sizes="(min-width: 1280px) 180px, (min-width: 1024px) 26vw, 34vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <Link href="/eventos" className="group flex min-h-[360px] flex-col overflow-hidden rounded-lg bg-[#E5EBD8] text-[#302E2A] transition-transform duration-200 hover:-translate-y-1 motion-reduce:transform-none sm:min-h-[420px] lg:min-h-0">
            <div className="relative min-h-[260px] flex-1 overflow-hidden">
              <Image src="/images/home/events/eventos.webp" alt="Equipo de Vivaya" fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover object-center" />
            </div>
            <div className="flex items-center justify-center px-6 py-8 text-center lg:py-10">
              <h3 className="font-heading text-4xl uppercase leading-none sm:text-5xl">Eventos</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
