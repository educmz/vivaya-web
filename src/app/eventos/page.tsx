import { ChocolateCafeSection } from "@/components/events/ChocolateCafeSection";
import { ImageHero } from "@/components/sections/ImageHero";
import { FuenteChocolateSection } from "@/components/events/FuenteChocolateSection";
import { SnacksSection } from "@/components/events/SnacksSection";
import { Combos123Section } from "@/components/events/Combos123Section";
import { PopcornAlgodonHotdogSection } from "@/components/events/PopcornAlgodonHotdogSection";
import { AlgodonPopcornBurgersSection } from "@/components/events/AlgodonPopcornBurgersSection";
import { PopcornPanchosManzanasSection } from "@/components/events/PopcornPanchosManzanasSection";
import { MiniBurgersHotdogPopcornSection } from "@/components/events/MiniBurgersHotdogPopcornSection";
import { PopcornManzanasSalchiNuggetsSection } from "@/components/events/PopcornManzanasSalchiNuggetsSection";
import { WafflesSalchipapasChurrosSection } from "@/components/events/WafflesSalchipapasChurrosSection";
import { PromocionLocuraSection } from "@/components/events/PromocionLocuraSection";
import { HeladoSoftSection } from "@/components/events/HeladoSoftSection";
import { CremoladasChilcanosSection } from "@/components/events/CremoladasChilcanosSection";

export const metadata: Metadata = { title: "Eventos" };

export default function EventsPage() {
  return (
    <div className="bg-background pt-16 lg:pt-[72px]">
      <ImageHero image="/images/about/about-hero.webp" lines={["CELEBRAMOS", "CONTIGO"]} />
      <ChocolateCafeSection />
      <FuenteChocolateSection />
      <SnacksSection />
      <Combos123Section />
      <PopcornAlgodonHotdogSection />
      <AlgodonPopcornBurgersSection />
      <PopcornPanchosManzanasSection />
      <MiniBurgersHotdogPopcornSection />
      <PopcornManzanasSalchiNuggetsSection />
      <WafflesSalchipapasChurrosSection />
      <PromocionLocuraSection />
      <HeladoSoftSection />
      <CremoladasChilcanosSection />
    </div>
  );
}
import type { Metadata } from "next";
