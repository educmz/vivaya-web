import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { CravingsSection } from "@/components/home/CravingsSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MomentsSection } from "@/components/home/MomentsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CravingsSection />
      <AboutPreviewSection />
      <MomentsSection />
      <FinalCtaSection />
    </main>
  );
}