import Image from "next/image";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

const storyImages = [
  { src: "/images/about/about-lifestyle.webp", alt: "Experiencia VIVAYA", layout: "col-start-1 row-start-1 row-span-2 lg:row-span-3" },
  { src: "/images/about/about-product.webp", alt: "Productos VIVAYA", layout: "col-start-2 row-start-1" },
  { src: "/images/about/about-machine.webp", alt: "Preparación en VIVAYA", layout: "col-start-2 row-start-2 row-span-2" },
  { src: "/images/about/about-team.webp", alt: "Equipo VIVAYA", layout: "col-start-1 row-start-3 lg:col-start-3 lg:row-start-1" },
  { src: "/images/about/about-lifestyle.webp", alt: "Momentos para compartir en VIVAYA", layout: "col-start-1 row-start-4 row-span-2 lg:col-start-3 lg:row-start-2" },
  { src: "/images/about/about-product.webp", alt: "Sabores VIVAYA", layout: "col-start-2 row-start-4 row-span-2 lg:col-start-4 lg:row-start-1 lg:row-span-3" },
];

export function StorySection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-10">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="text-2xl text-[#FF8A00] sm:text-3xl" style={{ fontFamily: "var(--font-script), 'Pacifico', cursive" }}>Nuestra historia</p>
          <AnimatedTitle
            text={"Todo empieza con\nuna buena idea."}
            className="mt-4 text-4xl leading-[1.08] tracking-[-0.02em] text-[#302E2A] sm:text-5xl lg:text-6xl font-heading font-normal"
          />
        </div>
        <div className="grid grid-cols-2 auto-rows-[clamp(120px,24vw,220px)] gap-0 overflow-hidden lg:grid-cols-4 lg:auto-rows-[clamp(160px,16vw,240px)]">
          {storyImages.map((image, index) => (
            <div key={`${image.src}-${index}`} className={`relative min-w-0 overflow-hidden bg-[#E9E5DE] ${image.layout}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1440px) 340px, (min-width: 1024px) 25vw, 50vw" className="object-cover object-center" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
