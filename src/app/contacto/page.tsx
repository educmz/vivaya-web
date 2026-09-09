import type { Metadata } from "next";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = { title: "Contacto" };
export default function ContactPage() {
  return (
    <div className="bg-background pt-16 lg:pt-[72px]">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
