"use client";

import Image from "next/image";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { AboutImage, AboutItem, AboutReveal } from "@/components/about/AboutMotion";

export function VivayaSection() {
  return (
    <section className="bg-background py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-10">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">

          {/* TEXTO */}
          <AboutReveal className="min-w-0 max-w-lg" amount={0.4}>
            <AboutItem>
              <p
                className="text-2xl leading-none text-[#FF8A00] sm:text-3xl"
                style={{
                  fontFamily: "var(--font-script), 'Pacifico', cursive",
                }}
              >
                Nuestra esencia
              </p>
            </AboutItem>

            <AnimatedTitle
              text={"Sabor para\ncada momento."}
              className="mt-4 font-heading text-3xl font-normal leading-[1.08] text-[#302E2A] sm:text-4xl lg:text-5xl"
            />

            <AboutItem className="mt-5">
              <p className="max-w-md text-sm leading-6 text-[#77736D] sm:text-base sm:leading-7">
                Una propuesta pensada para acompañar tus antojos,
                tus pausas y esos momentos que simplemente se disfrutan.
              </p>
            </AboutItem>
          </AboutReveal>

          {/* COMPOSICIÓN DE IMÁGENES */}
          <AboutReveal
            className="relative mx-auto aspect-square w-full max-w-[440px]"
            amount={0.25}
            stagger={0.18}
          >
            {/* Imagen principal */}
            <AboutImage
              hover
              className="absolute right-0 top-0 aspect-[2/3] w-[62%] overflow-hidden rounded-2xl bg-[#F3EADF] shadow-[0_24px_60px_-24px_rgba(48,46,42,0.35)] sm:rounded-3xl"
            >
              <Image
                src="/images/about/about-lifestyle.webp"
                alt="Mujer disfrutando una bebida a la entrada de Vivaya"
                fill
                sizes="(max-width: 480px) 58vw, (max-width: 767px) 273px, (max-width: 1023px) 28vw, 273px"
                className="object-cover"
              />
            </AboutImage>

            {/* Imagen secundaria */}
            <AboutImage
              hover
              className="absolute bottom-0 left-0 aspect-[2/3] w-[44%] overflow-hidden rounded-2xl border-[6px] border-background bg-[#F3EADF] shadow-[0_20px_50px_-20px_rgba(48,46,42,0.4)] sm:rounded-3xl sm:border-8"
            >
              <Image
                src="/images/about/about-product.webp"
                alt="Waffle con frutas, smoothie y sándwich en una mesa de Vivaya"
                fill
                sizes="(max-width: 480px) 40vw, (max-width: 767px) 194px, (max-width: 1023px) 20vw, 194px"
                className="object-cover"
              />
            </AboutImage>
          </AboutReveal>

        </div>
      </div>
    </section>
  );
}
