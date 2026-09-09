import type { Metadata } from "next";

import { CartaCatalog } from "@/components/menu/MenuCatalog";

export const metadata: Metadata = {
  title: "Carta",
};

export default function CartaPage() {
  return (
    <div className="bg-background pt-[88px] sm:pt-24 lg:pt-28">
      <CartaCatalog />
    </div>
  );
}
