import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PromotionsSection } from "@/components/home/PromotionsSection";

export const metadata: Metadata = { title: "Promociones" };
export default function PromotionsPage() { return <><PageHero title="Promociones" description="Muestras visuales ficticias; no son promociones comerciales vigentes." /><PromotionsSection /></>; }
