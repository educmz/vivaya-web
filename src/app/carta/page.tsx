import type { Metadata } from "next";

import { CartaHero } from "@/components/carta/CartaHero";
import { CartaCatalog } from "@/components/carta/CartaCatalog";

export const metadata: Metadata = {
  title: "Carta",
};

export default function CartaPage() {
  return (
    <>
      <CartaHero />
      <CartaCatalog />
    </>
  );
}