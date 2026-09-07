import type { Metadata } from "next";

import { AboutClosing } from "@/components/about/AboutClosing";
import { AboutGallery } from "@/components/about/AboutGallery";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutValues } from "@/components/about/AboutValues";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la esencia de Vivaya, nuestra historia y nuestra forma de activar lo natural.",
};

export default function AboutPage() {
  return (
    <div
      className="
        bg-[#FFF7E8]
        pt-24 sm:pt-[100px] lg:pt-[108px]
        text-[#073B3A]
        [--background:#FFF7E8]
        [--foreground:#073B3A]
        [--primary:#FF8A00]
        [--secondary:#E9F5EE]
        [--accent:#FFB347]
      "
    >
      <AboutTimeline />
      <AboutGallery />
      <AboutValues />
      <AboutClosing />
    </div>
  );
}
