import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/sections/SectionTitle";

const benefits = ["Componentes reutilizables", "Experiencia responsive", "Animaciones accesibles"];

export function BenefitsSection() {
  return <section className="bg-[var(--surface)] py-20 sm:py-24"><Container><SectionTitle eyebrow="Base técnica" title="Preparada para crecer" /><ScrollReveal className="mt-10 grid gap-5 md:grid-cols-3">{benefits.map((benefit, index) => <article className="rounded-3xl bg-white p-7" key={benefit}><span className="text-sm font-black text-[var(--primary)]">0{index + 1}</span><h3 className="mt-5 text-xl font-black">{benefit}</h3><p className="mt-3 text-sm leading-6 text-black/60">Descripción temporal de desarrollo, pendiente de contenido final.</p></article>)}</ScrollReveal></Container></section>;
}
