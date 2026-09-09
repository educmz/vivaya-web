"use client";

import Image from "next/image";
import { useState } from "react";

const fallbackImage = "/images/home/events/eventos.webp";

export function EventImage({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const usesFallback = !src || failedSrc === src;

  return (
    <Image
      src={usesFallback ? fallbackImage : src}
      alt={usesFallback ? "Imagen general de eventos Vivaya" : alt}
      fill
      sizes={sizes}
      className="object-contain object-center"
      onError={usesFallback ? undefined : () => setFailedSrc(src)}
    />
  );
}
