import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/Button";
import { promotions } from "@/data/promotions";

export function PromotionsSection() {
  return <section className="py-20 sm:py-28"><Container><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionTitle eyebrow="Contenido temporal" title="Promociones" description="Estas promociones son ficticias y no representan ofertas vigentes." /><Button href="/promociones" variant="ghost">Ver todas</Button></div><ScrollReveal className="mt-10 grid gap-6 md:grid-cols-2">{promotions.filter((promotion) => promotion.active).map((promotion) => <article className="rounded-[2rem] bg-[var(--secondary)] p-8 sm:p-10" key={promotion.id}><p className="text-xs font-black uppercase tracking-widest">Promoción ficticia</p><h3 className="mt-5 text-3xl font-black">{promotion.title}</h3><p className="mt-3 text-black/65">{promotion.description}</p></article>)}</ScrollReveal></Container></section>;
}
