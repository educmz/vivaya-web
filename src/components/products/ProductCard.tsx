import Link from "next/link";
import Image from "next/image";
import type { PresentationProduct as Product } from "@/types/presentation-product";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-[var(--surface-strong)]">
        {product.image ? <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /> : <div className="grid h-full place-items-center p-6 text-center text-sm font-semibold text-black/45" role="img" aria-label={`Imagen temporal pendiente de ${product.name}`}>Imagen de producto pendiente</div>}
      </div>
      <div className="flex flex-1 flex-col p-6"><Badge>{product.category}</Badge><h2 className="mt-4 text-xl font-black">{product.name}</h2><p className="mt-2 flex-1 text-sm leading-6 text-black/60">{product.shortDescription}</p><div className="mt-5 flex items-center justify-between gap-4"><span className="font-black">{formatPrice(product.price)}</span><Link className="rounded-full border border-black/15 px-4 py-2 text-sm font-bold transition hover:bg-black hover:text-white focus-visible:outline" href="/carta">Ver producto</Link></div></div>
    </article>
  );
}
