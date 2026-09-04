import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { Container } from "@/components/ui/Container";

const steps = [
  { number: "01", title: "Elige", description: "Encuentra el sabor que va con tu momento." },
  { number: "02", title: "Sirve", description: "La máquina prepara tu Vivaya de forma simple." },
  { number: "03", title: "Disfruta", description: "Tómalo al instante o llévalo contigo." },
];

export function HowVivayaWorks() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FFF4C4] pb-44 pt-28 sm:pb-52 sm:pt-36">
      <div className="pointer-events-none absolute left-[-10rem] top-24 -z-10 size-[30rem] rounded-full bg-[#FFB347]/20 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-8rem] top-1/3 -z-10 size-[26rem] rounded-full bg-[#BFDDBD]/30 blur-[100px]" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="font-accent text-3xl font-bold text-[#FF6A22] sm:text-4xl">Así de fácil</p>
            <h2 className="font-heading mt-3 text-[clamp(3.8rem,8vw,7.5rem)] uppercase leading-[0.84] text-[#073B3A]">Cómo funciona Vivaya</h2>

            <ScrollReveal className="mt-12 space-y-3">
              {steps.map((step, index) => (
                <article className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-[#073B3A]/20 py-6 last:border-b" key={step.title}>
                  <span className="font-heading text-xl text-[#FF6A22]">{step.number}</span>
                  <div>
                    <h3 className="font-heading text-4xl uppercase leading-none text-[#073B3A] sm:text-5xl">{step.title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-[#073B3A]/65">{step.description}</p>
                  </div>
                  {index < steps.length - 1 ? <ArrowDown className="size-5 text-[#073B3A]/40" /> : <ArrowRight className="size-5 text-[#FF6A22]" />}
                </article>
              ))}
            </ScrollReveal>
          </div>

          <ScrollReveal className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-[8%] rounded-[48%_52%_58%_42%/45%_55%_45%_55%] bg-[#F4C783]" aria-hidden="true" />
            <div className="absolute inset-[16%] rounded-full border border-[#073B3A]/15" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[44%_56%_48%_52%/58%_44%_56%_42%]">
              <Image src="/images/about/about-machine.webp" alt="Máquina Vivaya" fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" />
            </div>
            <span className="font-accent absolute -bottom-4 -left-3 rotate-[-7deg] rounded-full bg-[#FF6A22] px-6 py-3 text-2xl font-bold text-white shadow-lg sm:text-3xl">Listo en un momento</span>
          </ScrollReveal>
        </div>
      </Container>

      <WaveDivider fill="#DDEEDB" variant="valley" className="absolute -bottom-px inset-x-0" />
    </section>
  );
}
