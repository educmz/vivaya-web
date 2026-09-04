import { Hand, Leaf, Sparkles, Zap } from "lucide-react";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { WaveDivider } from "@/components/sections/WaveDivider";
import { Container } from "@/components/ui/Container";

const benefits = [
  { title: "Fruta real", description: "Sabores que nacen de ingredientes reconocibles y llenos de color.", icon: Leaf, shape: "rounded-[42%_58%_46%_54%/56%_42%_58%_44%]", color: "bg-[#FFF7E8]" },
  { title: "Frescura", description: "Una experiencia ligera, vibrante y preparada al momento.", icon: Sparkles, shape: "rounded-[55%_45%_60%_40%/42%_58%_42%_58%]", color: "bg-[#F8EAAF]" },
  { title: "Energía natural", description: "El impulso frutal que acompaña el ritmo de cada día.", icon: Zap, shape: "rounded-[48%_52%_38%_62%/60%_44%_56%_40%]", color: "bg-[#FFD18F]" },
  { title: "Practicidad", description: "Bienestar fácil de elegir, servir y llevar contigo.", icon: Hand, shape: "rounded-[60%_40%_50%_50%/46%_61%_39%_54%]", color: "bg-[#E6F2DF]" },
];

export function BenefitsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F6D98B] pb-40 pt-28 sm:pb-48 sm:pt-36">
      <div className="pointer-events-none absolute -left-28 top-1/4 -z-10 size-80 rounded-full bg-[#FF8A00]/15 blur-[90px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-36 top-0 -z-10 size-96 rounded-full bg-white/35 blur-[100px]" aria-hidden="true" />

      <Container>
        <div className="max-w-3xl">
          <p className="font-accent text-3xl font-bold text-[#C75B31] sm:text-4xl">Lo bueno se siente</p>
          <h2 className="font-heading mt-3 text-[clamp(3.6rem,8vw,7.5rem)] uppercase leading-[0.86] text-[#073B3A]">Bienestar que sigue tu ritmo</h2>
        </div>

        <ScrollReveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article className={`relative flex min-h-72 flex-col justify-between p-8 ${benefit.shape} ${benefit.color} ${index % 2 === 1 ? "lg:translate-y-10" : ""}`} key={benefit.title}>
                <div className="grid size-14 place-items-center rounded-full bg-[#073B3A] text-white"><Icon className="size-6" strokeWidth={2.2} /></div>
                <div>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#FF6A22]">0{index + 1}</p>
                  <h3 className="font-heading text-3xl uppercase leading-none text-[#073B3A]">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#073B3A]/65">{benefit.description}</p>
                </div>
              </article>
            );
          })}
        </ScrollReveal>
      </Container>

      <WaveDivider fill="#F2A76F" variant="drift" className="absolute -bottom-px inset-x-0" />
    </section>
  );
}
