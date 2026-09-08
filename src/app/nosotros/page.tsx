import type { Metadata } from "next";

import { PanoramicBanner } from "@/components/sections/PanoramicBanner";
import { EssenceSection } from "@/components/about/EssenceSection";
import { StorySection } from "@/components/about/StorySection";
import { TimelineSection } from "@/components/about/TimelineSection";
import { VivayaSection } from "@/components/about/VivayaSection";

export const metadata: Metadata = {
  title: "Nosotros | VIVAYA",
  description:
    "Conoce la historia, esencia y propuesta que hay detrás de VIVAYA.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FFF9F3] pt-16 lg:pt-[72px]">
      <h1 className="sr-only">Nosotros VIVAYA</h1>
      <PanoramicBanner />
      <VivayaSection />
      <TimelineSection />
      <EssenceSection />
      <StorySection />
    </div>
  );
}
