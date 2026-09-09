import type { Metadata } from "next";

import { AboutBanner } from "@/components/about/AboutBanner";
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
    <div
      className="bg-background pt-16 lg:pt-[72px]"
      style={{
        fontFamily:
          "var(--font-carta), 'Montserrat', system-ui, sans-serif",
      }}
    >
      <AboutBanner />
      <VivayaSection />
      <TimelineSection />
      <EssenceSection />
      <StorySection />
    </div>
  );
}
