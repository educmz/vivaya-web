import type { Metadata } from "next";

import { AboutClosing } from "@/components/about/AboutClosing";
import { AboutGallery } from "@/components/about/AboutGallery";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutValues } from "@/components/about/AboutValues";
import { OrangeJourney } from "@/components/experiences/OrangeJourney";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la esencia de Vivaya, nuestra historia y la forma en que buscamos activar lo natural.",
};

export default function AboutPage() {
  return (
    <div
      className="
        bg-[#FFF7E8]
        text-[#073B3A]
        [--background:#FFF7E8]
        [--foreground:#073B3A]
        [--primary:#FF8A00]
        [--secondary:#E9F5EE]
        [--accent:#FFB347]
      "
    >
      <AboutHero />

      <OrangeJourney />

      <AboutTimeline />

      <AboutGallery />

      <AboutValues />

      <AboutClosing />
    </div>
  );
}