"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function VivayaSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-background py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">

          {/* TEXTO */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reducedMotion ? 0 : 0.45, ease: "easeOut" }}
            className="min-w-0 max-w-lg"
          >
            <p
              className="text-2xl leading-none text-[#FF8A00] sm:text-3xl"
              style={{
                fontFamily: "var(--font-script), 'Pacifico', cursive",
              }}
            >
              Nuestra esencia
            </p>

            <h2 className="mt-4 font-heading text-3xl font-normal leading-[1.08] text-[#302E2A] sm:text-4xl lg:text-5xl">
              Sabor para
              <span className="block">cada momento.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#77736D] sm:text-base sm:leading-7">
              Una propuesta pensada para acompañar tus antojos,
              tus pausas y esos momentos que simplemente se disfrutan.
            </p>
          </motion.div>

          {/* COMPOSICIÓN DE IMÁGENES */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-full max-w-[440px]"
          >

            {/* Imagen principal */}
            <div className="absolute right-0 top-0 aspect-[2/3] w-[62%] overflow-hidden rounded-2xl bg-[#F3EADF] sm:rounded-3xl">
              <Image
                src="/images/about/about-lifestyle.webp"
                alt="Mujer disfrutando una bebida a la entrada de Vivaya"
                fill
                sizes="(max-width: 480px) 58vw, (max-width: 767px) 273px, (max-width: 1023px) 28vw, 273px"
                className="object-cover"
              />
            </div>

            {/* Imagen secundaria */}
            <div className="absolute bottom-0 left-0 aspect-[2/3] w-[44%] overflow-hidden rounded-2xl border-[6px] border-background bg-[#F3EADF] sm:rounded-3xl sm:border-8">
              <Image
                src="/images/about/about-product.webp"
                alt="Waffle con frutas, smoothie y sándwich en una mesa de Vivaya"
                fill
                sizes="(max-width: 480px) 40vw, (max-width: 767px) 194px, (max-width: 1023px) 20vw, 194px"
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
