import type { Metadata } from "next";

import { CartaCatalog } from "@/components/menu/MenuCatalog";

export const metadata: Metadata = {
  title: "Carta",
};

export default function CartaPage() {
  return (
    <div className="bg-[#FFF9F3] pt-16 lg:pt-[72px]">
      <CartaCatalog />
    </div>
  );
}
