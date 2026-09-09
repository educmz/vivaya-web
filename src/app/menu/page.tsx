import type { Metadata } from "next";

import { CartaCatalog } from "@/components/menu/MenuCatalog";
import { ImageHero } from "@/components/sections/ImageHero";

export const metadata: Metadata = {
  title: "Carta",
};

export default function CartaPage() {
  return (
    <div className="bg-background pt-16 lg:pt-[72px]">
      <ImageHero image="/images/locals/local-hero.webp" lines={["ELIGE TU", "FAVORITO"]} />
      <CartaCatalog />
    </div>
  );
}
