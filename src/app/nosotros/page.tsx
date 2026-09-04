import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { BrandStory } from "@/components/home/BrandStory";
import { IngredientsStory } from "@/components/experiences/IngredientsStory";
import { BrandMarquee } from "@/components/experiences/BrandMarquee";

export const metadata: Metadata = { title: "Nosotros" };
export default function AboutPage() { return <><PageHero title="Nosotros" description="Estructura editorial lista para recibir la historia, el propósito y los recursos oficiales de Vivaya." /><BrandStory /><BrandMarquee /><IngredientsStory /></>; }
