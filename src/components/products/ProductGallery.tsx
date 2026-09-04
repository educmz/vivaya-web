"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, productName }: { images: string[]; productName: string }) {
  const availableImages = images.filter(Boolean);
  const [selected, setSelected] = useState(0);
  if (availableImages.length === 0) return <div className="grid aspect-square place-items-center rounded-[2rem] bg-[var(--surface-strong)] p-8 text-center text-sm font-semibold text-black/45" role="img" aria-label={`Galería temporal pendiente de ${productName}`}>Galería de producto pendiente</div>;
  return <div><div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[var(--surface)]"><Image src={availableImages[selected]} alt={`${productName}, vista ${selected + 1}`} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><div className="mt-3 flex gap-3 overflow-x-auto">{availableImages.map((image, index) => <button className={cn("relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2", selected === index ? "border-[var(--primary)]" : "border-transparent")} type="button" onClick={() => setSelected(index)} aria-label={`Ver imagen ${index + 1}`} key={`${image}-${index}`}><Image src={image} alt="" fill sizes="80px" className="object-cover" /></button>)}</div></div>;
}
