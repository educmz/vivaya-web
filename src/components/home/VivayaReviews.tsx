"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

import { WaveDivider } from "@/components/sections/WaveDivider";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const reviews = [
  { quote: "Fresco de verdad y perfecto para llevar.", name: "María" },
  { quote: "Mi pausa favorita cuando el día no para.", name: "Lucía" },
  { quote: "Sabe a fruta y se siente ligero.", name: "Diego" },
  { quote: "Rápido, rico y con una energía distinta.", name: "Andrea" },
];

export function VivayaReviews() {
  const reduced = useReducedMotion();
  const loop = [...reviews, ...reviews];

  return (
    <section className="relative isolate overflow-hidden bg-[#F2A76F] pb-44 pt-32 sm:pb-52 sm:pt-40">
      <Container className="text-center">
        <p className="font-accent text-3xl font-bold text-[#073B3A] sm:text-4xl">No solo lo decimos nosotros</p>
        <h2 className="font-heading mx-auto mt-4 max-w-4xl text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.82] text-[#FFF7E8]">Se siente bien. Sabe mejor.</h2>
      </Container>

      <div className="mt-16 overflow-hidden">
        <motion.div
          className="flex w-max gap-5 px-5"
          animate={reduced ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((review, index) => (
            <article className={`flex h-72 w-[78vw] max-w-sm shrink-0 flex-col justify-between p-8 sm:w-96 ${index % 2 === 0 ? "rounded-[48%_52%_42%_58%/55%_44%_56%_45%] bg-[#FFF7E8]" : "rounded-[58%_42%_55%_45%/42%_58%_42%_58%] bg-[#DDEEDB]"}`} key={`${review.name}-${index}`}>
              <div className="flex gap-1 text-[#FF6A22]">{Array.from({ length: 5 }, (_, star) => <Star key={star} className="size-4 fill-current" />)}</div>
              <blockquote className="font-heading text-3xl uppercase leading-[0.95] text-[#073B3A]">“{review.quote}”</blockquote>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#073B3A]/55">{review.name}</p>
            </article>
          ))}
        </motion.div>
      </div>

      <WaveDivider fill="#F4C783" variant="swell" className="absolute -bottom-px inset-x-0" />
    </section>
  );
}
