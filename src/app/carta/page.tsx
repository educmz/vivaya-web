import type { Metadata } from "next";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";

export const metadata: Metadata = { title: "Carta" };
export default function CartaPage() {
  return <FeaturedProducts />;
}
