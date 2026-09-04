import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Contacto" };
export default function ContactPage() {
  return <><PageHero title="Contacto" description="Formulario visual temporal. El envío se conectará a un servicio en una fase posterior." /><section className="py-16"><Container><form className="mx-auto grid max-w-2xl gap-5" aria-label="Formulario de contacto temporal"><label className="grid gap-2 font-bold">Nombre<input className="min-h-12 rounded-xl border border-black/15 bg-white px-4 font-normal" name="name" autoComplete="name" /></label><label className="grid gap-2 font-bold">Correo<input className="min-h-12 rounded-xl border border-black/15 bg-white px-4 font-normal" name="email" type="email" autoComplete="email" /></label><label className="grid gap-2 font-bold">Mensaje<textarea className="min-h-36 rounded-xl border border-black/15 bg-white p-4 font-normal" name="message" /></label><Button type="button" disabled>Envío disponible próximamente</Button></form></Container></section></>;
}
