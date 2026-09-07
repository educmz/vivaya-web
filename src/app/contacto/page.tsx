import type { Metadata } from "next";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = { title: "Contacto" };
export default function ContactPage() {
  return (
    <div className="bg-[#FFF7E8] pt-24 sm:pt-[100px] lg:pt-[108px]">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
