"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

// Keep missing and loading assets silent while preserving their layout and alt.
export function HomeImage({ alt, className = "object-cover object-center", ...props }: ImageProps) {
  const [loadedSource, setLoadedSource] = useState<ImageProps["src"] | null>(null);
  const [failedSource, setFailedSource] = useState<ImageProps["src"] | null>(null);
  const ready = loadedSource === props.src && failedSource !== props.src;

  return (
    <>
      {!ready && <span role={alt ? "img" : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true} className="absolute inset-0 bg-[#E8E8E8]" />}
      {failedSource !== props.src && (
        <Image {...props} alt={alt} className={`${className} ${ready ? "opacity-100" : "opacity-0"}`} onLoad={() => setLoadedSource(props.src)} onError={() => setFailedSource(props.src)} />
      )}
    </>
  );
}
