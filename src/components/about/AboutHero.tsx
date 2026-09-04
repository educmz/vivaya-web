import Image from "next/image";

import { TextReveal } from "@/components/animations/TextReveal";
import { Container } from "@/components/ui/Container";

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FFF7E8]">
      <div
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#FFB347]/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#E9F5EE] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid min-h-[calc(100svh-7rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div className="relative z-10">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#FF8A00]">
            Nosotros
          </p>

          <h1 className="max-w-4xl text-[clamp(3.6rem,9vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-[#073B3A]">
            <TextReveal text="Activamos lo natural." />
          </h1>

          <p className="mt-8 max-w-lg text-base leading-7 text-[#073B3A]/70 sm:text-lg">
            Frescura, nutrición y energía pensadas para acompañarte donde sea
            que vaya tu día.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-12 bg-[#FF8A00]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#073B3A]/60">
              Descubre nuestra esencia
            </span>
          </div>
        </div>

        <div className="relative flex min-h-[28rem] items-center justify-center lg:min-h-[38rem]">
          <div
            className="absolute h-[76%] aspect-square rounded-full bg-[#FF8A00]"
            aria-hidden="true"
          />

          <div
            className="absolute h-[88%] aspect-square rounded-full border border-[#073B3A]/10"
            aria-hidden="true"
          />

          <Image
            src="/images/about/vivaya-cup.png"
            alt="Producto Vivaya"
            width={700}
            height={900}
            priority
            className="relative z-10 h-auto max-h-[34rem] w-auto object-contain drop-shadow-[0_30px_40px_rgba(7,59,58,0.18)] lg:max-h-[42rem]"
          />

          <span className="absolute right-[2%] top-[13%] rotate-6 rounded-full bg-[#073B3A] px-5 py-3 text-sm font-black uppercase tracking-wider text-white">
            Fruta real
          </span>

          <span className="absolute bottom-[13%] left-[2%] -rotate-6 rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-wider text-[#073B3A] shadow-sm">
            Bienestar para llevar
          </span>
        </div>
      </Container>
    </section>
  );
}