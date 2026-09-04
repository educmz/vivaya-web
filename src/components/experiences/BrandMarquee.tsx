import { Marquee } from "@/components/animations/Marquee";

export function BrandMarquee() {
  return <div className="border-y border-black/10 py-5"><Marquee items={["Vivaya", "Contenido temporal", "Hecho para evolucionar", "Frontend inicial"]} /></div>;
}
