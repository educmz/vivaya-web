import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Preguntas frecuentes" };
const questions = [
  { title: "¿Este contenido es definitivo?", content: "No. Todo el contenido visible es temporal y existe únicamente para validar la arquitectura frontend." },
  { title: "¿Ya funciona el Club?", content: "No. No hay autenticación, usuarios ni puntos reales en esta fase." },
  { title: "¿Ya está integrado Rappi?", content: "No. Los botones solo se habilitarán cuando se configure una URL externa válida." },
];
export default function FaqPage() { return <><PageHero title="Preguntas frecuentes" description="Respuestas temporales sobre el estado actual del proyecto." /><section className="py-16"><Container><Accordion items={questions} className="mx-auto max-w-3xl" /></Container></section></>; }
