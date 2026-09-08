import Image from "next/image";
import Link from "next/link";
import { Coffee, CupSoda, Grid2X2, Sandwich, Croissant, Pizza, ArrowUpRight } from "lucide-react";

import { menuCategories } from "@/data/menu/categories";
import type { MenuCategoryId } from "@/types/catalog";

const visuals: Record<MenuCategoryId, { background: string; image?: string; icon?: typeof Coffee }> = {
  smoothies: { background: "#DCEEF2", image: "/images/products/Carta/naranja-fresa.webp" },
  "tes-helados": { background: "#F6E9B8", image: "/images/products/Carta/jamaica.webp" },
  "bebidas-calientes": { background: "#F5D6C2", icon: Coffee },
  frappes: { background: "#E6E1F0", icon: CupSoda },
  waffles: { background: "#F6E9B8", icon: Grid2X2 },
  sandwiches: { background: "#DFEACF", icon: Sandwich },
  tostones: { background: "#F5D6C2", icon: Croissant },
  pizzas: { background: "#DCEEF2", icon: Pizza },
};

export function CravingsSection() {
  return (
    <section aria-labelledby="cravings-title" className="bg-[#FFF9F3] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <h2 id="cravings-title" className="mb-8 text-3xl font-semibold tracking-[-0.035em] text-[#302E2A] sm:mb-10 sm:text-4xl">
          ¿Qué se te antoja?
        </h2>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:gap-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-4">
            {[...menuCategories].sort((a, b) => a.order - b.order).map((category) => {
              const visual = visuals[category.id];
              const Icon = visual.icon;

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
                    {visual.image ? (
                      <Image src={visual.image} alt="" fill sizes="(min-width: 1280px) 230px, (min-width: 1024px) 32vw, 45vw" className="object-contain" />
                    ) : Icon ? (
                      <Icon aria-hidden="true" strokeWidth={1} className="h-3/4 w-3/4 max-w-36 text-[#302E2A]/65" />
                    ) : null}
                  </div>
                </Link>
              );
            })}
          </div>

          <Link href="/eventos" className="group flex min-h-[360px] flex-col overflow-hidden rounded-lg bg-[#E5EBD8] text-[#302E2A] sm:min-h-[420px] lg:min-h-0">
            <div className="relative min-h-[260px] flex-1 overflow-hidden">
              <Image src="/images/home/events/eventos.webp" alt="Equipo de Vivaya" fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover object-center" />
            </div>
            <div className="flex items-center justify-between gap-3 px-6 py-8 lg:flex-col lg:py-10">
              <h3 className="font-heading text-4xl uppercase leading-none sm:text-5xl">Eventos</h3>
              <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full border border-[#302E2A]/25 transition-colors group-hover:bg-[#FF8A00]">
                <ArrowUpRight size={22} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
