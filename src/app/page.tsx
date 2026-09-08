import { CravingsSection } from "@/components/home/CravingsSection";
import { EventsPreviewSection } from "@/components/home/EventsPreviewSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HealthyProductsSection } from "@/components/home/HealthyProductsSection";
import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <CravingsSection />

      <HealthyProductsSection />

      <EventsPreviewSection />

      <FinalCtaSection />
    </main>
  );
}