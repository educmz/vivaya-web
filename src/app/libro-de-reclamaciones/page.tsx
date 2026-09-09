import type { Metadata } from "next";

import { ComplaintBook } from "@/components/complaints/ComplaintBook";

export const metadata: Metadata = {
  title: { absolute: "Libro de Reclamaciones | Vivanya" },
  description: "Completa y revisa tu hoja de reclamación de Vivanya.",
};

export default function ComplaintBookPage() {
  return (
    <div className="complaint-page bg-background pt-24 sm:pt-[100px] lg:pt-[108px]">
      <ComplaintBook />
    </div>
  );
}
