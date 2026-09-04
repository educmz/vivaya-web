import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ClubPreview() {
  return <section className="pb-20 sm:pb-28"><Container><ScrollReveal className="grid gap-8 rounded-[2rem] bg-[var(--accent)] p-8 sm:p-12 md:grid-cols-[1fr_auto] md:items-end"><div><p className="text-xs font-black uppercase tracking-widest">Club en preparación</p><h2 className="mt-3 text-4xl font-black tracking-tight">Tu futura zona de beneficios.</h2><p className="mt-4 max-w-xl text-black/65">Una vista previa sin registro, puntos reales ni autenticación.</p></div><Button href="/club">Conocer el Club</Button></ScrollReveal></Container></section>;
}
