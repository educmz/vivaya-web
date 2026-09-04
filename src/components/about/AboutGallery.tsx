"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Parallax } from "@/components/animations/Parallax";
import { Container } from "@/components/ui/Container";
import { aboutGallery } from "@/data/about";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const stickers = [
  {
    text: "100% fresco",
    className:
      "left-[3%] top-[42%] -rotate-6 bg-[#FF8A00] text-white",
  },
  {
    text: "Activa",
    className:
      "right-[5%] top-[15%] rotate-6 bg-[#073B3A] text-white",
  },
  {
    text: "Fruta real",
    className:
      "bottom-[8%] left-[37%] rotate-3 bg-[#E9F5EE] text-[#073B3A]",
  },
];

export function AboutGallery() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36 lg:py-44">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FF8A00]">
              Somos Vivaya
            </p>

            <h2 className="mt-5 text-[clamp(3.6rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-[#073B3A]">
              Más que
              <br />
              una bebida.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-[#073B3A]/62 lg:justify-self-end">
            Producto, tecnología, personas y momentos cotidianos construyen una
            misma experiencia alrededor del bienestar.
          </p>
        </div>

        <div className="relative mt-20 min-h-[52rem] lg:min-h-[66rem]">
          <figure className="absolute left-0 top-0 w-[58%] lg:w-[44%]">
            <Parallax
              distance={28}
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
            >
              <Image
                src={aboutGallery[0].src}
                alt={aboutGallery[0].alt}
                fill
                sizes="45vw"
                className="object-cover"
              />
            </Parallax>

            <figcaption className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-[#073B3A]/45">
              {aboutGallery[0].label}
            </figcaption>
          </figure>

          <figure className="absolute right-0 top-[8%] w-[36%] lg:w-[28%]">
            <Parallax
              distance={46}
              className="relative aspect-[3/4] overflow-hidden rounded-[2rem]"
            >
              <Image
                src={aboutGallery[1].src}
                alt={aboutGallery[1].alt}
                fill
                sizes="30vw"
                className="object-cover"
              />
            </Parallax>

            <figcaption className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-[#073B3A]/45">
              {aboutGallery[1].label}
            </figcaption>
          </figure>

          <figure className="absolute bottom-[5%] left-[7%] w-[34%] lg:left-[14%] lg:w-[27%]">
            <Parallax
              distance={35}
              className="relative aspect-square overflow-hidden rounded-[2rem]"
            >
              <Image
                src={aboutGallery[2].src}
                alt={aboutGallery[2].alt}
                fill
                sizes="30vw"
                className="object-cover"
              />
            </Parallax>

            <figcaption className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-[#073B3A]/45">
              {aboutGallery[2].label}
            </figcaption>
          </figure>

          <figure className="absolute bottom-[2%] right-0 w-[53%] lg:w-[48%]">
            <Parallax
              distance={18}
              className="relative aspect-[16/10] overflow-hidden rounded-[2rem]"
            >
              <Image
                src={aboutGallery[3].src}
                alt={aboutGallery[3].alt}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </Parallax>

            <figcaption className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-[#073B3A]/45">
              {aboutGallery[3].label}
            </figcaption>
          </figure>

          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    rotate: [-7, -3, -7],
                    y: [0, -7, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[46%] top-[35%] h-28 w-28 lg:h-40 lg:w-40"
          >
            <Image
              src="/images/ingredients/orange-slice.png"
              alt=""
              fill
              sizes="160px"
              className="object-contain"
            />
          </motion.div>

          <div className="hidden lg:block">
            {stickers.map((sticker) => (
              <motion.button
                key={sticker.text}
                type="button"
                drag
                dragElastic={0.18}
                whileDrag={{
                  scale: 1.08,
                  cursor: "grabbing",
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className={`absolute z-30 cursor-grab rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.17em] shadow-lg shadow-black/5 ${sticker.className}`}
                aria-label={`Mover sticker ${sticker.text}`}
              >
                {sticker.text}
              </motion.button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}