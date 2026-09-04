import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function ImageTextSection({ title, description, imageAlt, reverse = false }: { title: string; description: string; imageAlt: string; reverse?: boolean }) {
  return (
    <section className="py-16 sm:py-24"><Container className="grid items-center gap-10 md:grid-cols-2">
      <div className={cn("aspect-[4/3] rounded-[2rem] bg-[var(--secondary)]", reverse && "md:order-2")} role="img" aria-label={`${imageAlt}. Recurso visual temporal pendiente.`} />
      <div><p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--primary)]">Bloque editorial temporal</p><h2 className="mt-3 text-4xl font-black tracking-tight">{title}</h2><p className="mt-5 leading-7 text-black/65">{description}</p></div>
    </Container></section>
  );
}
