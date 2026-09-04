import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = { title: "Contacto" };
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </>
  );
}
