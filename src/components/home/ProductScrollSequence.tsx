"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { WaveDivider } from "@/components/sections/WaveDivider";

const messages = [
  { title: "Fruta real", copy: "Sabor vivo, color natural y una experiencia que empieza en la fruta." },
  { title: "Frescura al instante", copy: "Preparado para acompañarte sin detener el ritmo de tu día." },
  { title: "Bienestar para llevar", copy: "Una forma práctica y deliciosa de elegir algo que te hace bien." },
];

export function ProductScrollSequence() {
  const rootRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ["start start", "end end"] });

  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 520]);
  const productY = useTransform(scrollYProgress, [0, 0.5, 1], [80, -20, 70]);
  const productScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.05, 0.88]);
  const firstOpacity = useTransform(scrollYProgress, [0, 0.25, 0.36], [1, 1, 0]);
  const secondOpacity = useTransform(scrollYProgress, [0.25, 0.42, 0.62, 0.72], [0, 1, 1, 0]);
  const thirdOpacity = useTransform(scrollYProgress, [0.62, 0.78, 1], [0, 1, 1]);
  const cardOpacities = [firstOpacity, secondOpacity, thirdOpacity];

  return (
    <section ref={rootRef} className="relative h-[320svh] bg-[#E7EFE2]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(51,92,48,0.22)_0.7px,transparent_0.7px)] [background-size:8px_8px]" aria-hidden="true" />

        <svg className="pointer-events-none absolute inset-0 h-full w-full text-white" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-90 630C175 448 347 724 595 622C816 531 793 209 1070 270C1267 313 1365 557 1540 442" fill="none" stroke="currentColor" strokeWidth="38" strokeLinecap="round" />
        </svg>

        <div className="absolute inset-x-5 top-28 z-20 sm:inset-x-10 lg:inset-x-16">
          <p className="font-accent text-3xl font-bold text-[#6E9D58] sm:text-4xl">Mira lo que hay dentro</p>
          <h2 className="font-heading mt-2 max-w-3xl text-[clamp(3.8rem,7vw,7.5rem)] uppercase leading-[0.82] text-[#335C30]">Más fruta. Más frescura.</h2>
        </div>

        {messages.map((message, index) => (
          <motion.article
            key={message.title}
            style={{ opacity: cardOpacities[index] }}
            className={`absolute z-20 w-[min(82vw,27rem)] rounded-[2rem] bg-[#B9D2AD] p-7 text-[#335C30] shadow-[0_22px_55px_rgba(51,92,48,0.12)] sm:p-9 ${index === 0 ? "left-[4%] top-[42%] -rotate-3" : index === 1 ? "right-[5%] top-[22%] rotate-3" : "bottom-[10%] left-[7%] rotate-2"}`}
          >
            <span className="font-heading text-sm">0{index + 1}</span>
            <h3 className="font-heading mt-3 text-4xl uppercase leading-none sm:text-5xl">{message.title}</h3>
            <p className="mt-5 leading-7 text-[#335C30]/75">{message.copy}</p>
          </motion.article>
        ))}

        <motion.div style={{ rotate, y: productY, scale: productScale }} className="absolute left-1/2 top-[55%] z-30 aspect-[3/4] w-[min(54vw,32rem)] -translate-x-1/2 -translate-y-1/2 will-change-transform">
          <Image src="/images/hero/hero-product.png" alt="Producto Vivaya" fill priority sizes="(max-width: 768px) 54vw, 32rem" className="object-contain drop-shadow-[0_38px_42px_rgba(51,92,48,0.22)]" />
        </motion.div>

        <p className="absolute bottom-8 right-8 z-20 hidden max-w-48 text-right text-xs font-black uppercase tracking-[0.16em] text-[#335C30]/50 sm:block">Desliza para descubrir Vivaya</p>
        <WaveDivider fill="#F6D98B" variant="drift" className="absolute -bottom-px inset-x-0 z-40" />
      </div>
    </section>
  );
}
