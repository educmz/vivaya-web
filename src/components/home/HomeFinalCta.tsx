import Image from "next/image";

import { WaveDivider } from "@/components/sections/WaveDivider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeFinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#DDEEDB] pb-44 pt-28 sm:pb-52 sm:pt-36">
      <div className="pointer-events-none absolute -right-24 top-10 -z-10 size-[30rem] rounded-full bg-[#FFB347]/30 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 bottom-12 -z-10 size-96 rounded-full bg-white/50 blur-[90px]" aria-hidden="true" />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.55fr]">
        <div className="relative z-10">
          <p className="font-accent text-3xl font-bold text-[#FF6A22] sm:text-4xl">Tu próximo favorito</p>
          <h2 className="font-heading mt-3 max-w-4xl text-[clamp(4.2rem,9vw,9rem)] uppercase leading-[0.8] text-[#073B3A]">Pruébalo. Llévalo. Disfrútalo.</h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#073B3A]/70">Descubre una forma fresca, práctica y llena de sabor para acompañar tu día.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/carta" className="min-h-14 bg-[#FF6A22] px-8 text-white hover:bg-[#E95718]">Ver la carta</Button>
            <Button href="/contacto" variant="ghost" className="min-h-14 border-[#073B3A] px-8 text-[#073B3A]">Quiero probar Vivaya</Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-[min(78vw,30rem)] lg:-rotate-3">
          <div className="absolute inset-[8%] rounded-[58%_42%_52%_48%/44%_60%_40%_56%] bg-[#F6D98B]" aria-hidden="true" />
          <Image src="/images/about/vivaya-cup.png" alt="Vaso Vivaya" fill sizes="(max-width: 1024px) 78vw, 30rem" className="relative object-contain p-8 drop-shadow-[0_30px_30px_rgba(7,59,58,0.18)]" />
        </div>
      </Container>

      <WaveDivider fill="var(--foreground)" variant="drift" className="absolute -bottom-px inset-x-0" />
    </section>
  );
}
