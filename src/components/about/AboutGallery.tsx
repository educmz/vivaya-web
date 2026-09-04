"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { aboutGallery } from "@/data/about";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutGallery() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#FFF7E8] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="relative lg:min-h-[58rem]">
          {/* Texto superior izquierdo */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 40,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-2xl lg:absolute lg:left-0 lg:top-0 lg:w-[36rem]"
          >
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#FF8A00]">
              Somos Vivaya
            </p>

            <h2 className="mt-4 text-[clamp(3.2rem,7vw,6.5rem)] font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#073B3A]">
              Más que
              <br />
              una bebida.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#073B3A]/62">
              Vivaya conecta producto, frescura e innovación en una experiencia
              que acompaña el ritmo cotidiano.
            </p>
          </motion.div>

          {/* Texto inferior derecho */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 40,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="mt-14 max-w-2xl lg:absolute lg:bottom-6 lg:right-0 lg:mt-0 lg:w-[34rem]"
          >
            <p className="text-[clamp(1.7rem,3vw,3rem)] font-medium leading-[1.12] tracking-[-0.04em] text-[#073B3A]">
              Personas, producto y una idea que sigue{" "}
              <span className="font-black text-[#0F6B6D]">avanzando</span>.
            </p>
          </motion.div>

          {/* Fotos estilo Paput */}
          <PolaroidCard
            src={aboutGallery[0].src}
            alt={aboutGallery[0].alt}
            className="mx-auto mt-12 w-[19rem] sm:w-[23rem] lg:absolute lg:left-[27%] lg:top-[2rem] lg:mt-0 lg:w-[26rem]"
            angle={-4}
            floatY={12}
            delay={0.02}
          />

          <PolaroidCard
            src={aboutGallery[1].src}
            alt={aboutGallery[1].alt}
            className="ml-auto mt-8 w-[14rem] sm:w-[18rem] lg:absolute lg:right-[2%] lg:top-[0.5rem] lg:mt-0 lg:w-[17rem]"
            angle={6}
            floatY={10}
            delay={0.1}
          />

          <PolaroidCard
            src={aboutGallery[2].src}
            alt={aboutGallery[2].alt}
            className="mt-8 w-[15rem] sm:w-[18rem] lg:absolute lg:bottom-[1rem] lg:left-[4%] lg:mt-0 lg:w-[18rem]"
            angle={-7}
            floatY={14}
            delay={0.16}
          />

          <PolaroidCard
            src={aboutGallery[3].src}
            alt={aboutGallery[3].alt}
            className="ml-auto mt-8 w-[19rem] sm:w-[24rem] lg:absolute lg:bottom-0 lg:right-[18%] lg:mt-0 lg:w-[27rem]"
            angle={4}
            floatY={12}
            delay={0.22}
          />
        </div>
      </Container>
    </section>
  );
}

function PolaroidCard({
  src,
  alt,
  className,
  angle,
  floatY,
  delay,
}: {
  src: string;
  alt: string;
  className: string;
  angle: number;
  floatY: number;
  delay: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.figure
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 80,
              rotate: angle * 0.65,
              scale: 0.94,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: angle,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.95,
        delay,
        ease,
      }}
      animate={
        reducedMotion
          ? undefined
          : {
              y: [0, -floatY, 0],
              rotate: [angle, angle + 1.2, angle],
            }
      }
      className={className}
      style={{
        transition:
          "box-shadow 300ms ease, transform 300ms ease, rotate 300ms ease",
      }}
    >
      <motion.div
        whileHover={
          reducedMotion
            ? undefined
            : {
                y: -8,
                rotate: 0,
                scale: 1.02,
              }
        }
        transition={{ duration: 0.4, ease }}
        className="border-[3px] border-[#0F6B6D] bg-white p-4 shadow-[0_18px_40px_rgba(7,59,58,0.12)]"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-[#E9F5EE]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 80vw, 30vw"
            className="object-cover"
          />
        </div>
      </motion.div>
    </motion.figure>
  );
}