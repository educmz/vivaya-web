import type { Metadata } from "next";

import { CartaCatalog } from "@/components/carta/CartaCatalog";

export const metadata: Metadata = {
  title: "Carta",
};

export default function CartaPage() {
  return (
    <div className="bg-[#FFF9F3] pt-[88px] sm:pt-[100px] lg:pt-[108px] xl:pt-28">
      <CartaCatalog />
    </div>
  );
}
