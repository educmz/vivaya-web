"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/types/product";
import { FeaturedProductCard } from "@/components/home/FeaturedProductCard";

export function FeaturedProductsCarousel({ products }: { products: Product[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect).on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-10 sm:gap-14">
          {products.map((product, index) => (
            <div className="min-w-0 flex-[0_0_62%] sm:flex-[0_0_38%] lg:flex-[0_0_25%]" key={product.id}>
              <FeaturedProductCard product={product} index={index} isActive={index === selectedIndex} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button type="button" onClick={() => emblaApi?.scrollPrev()} className="grid size-11 place-items-center rounded-full border border-black/15 transition hover:bg-black hover:text-white focus-visible:outline" aria-label="Ver jugo anterior">
          <ChevronLeft className="size-5" />
        </button>
        <button type="button" onClick={() => emblaApi?.scrollNext()} className="grid size-11 place-items-center rounded-full border border-black/15 transition hover:bg-black hover:text-white focus-visible:outline" aria-label="Ver siguiente jugo">
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
