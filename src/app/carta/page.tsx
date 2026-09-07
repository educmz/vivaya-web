import type { Metadata } from "next";

import { CartaCatalog } from "@/components/carta/CartaCatalog";

export const metadata: Metadata = {
  title: "Carta",
};

export default function CartaPage() {
  return (
    <main className="bg-[#FFF7E8] pt-24 sm:pt-[100px] lg:pt-[108px]">
      <CartaCatalog />
    </main>
  );
}