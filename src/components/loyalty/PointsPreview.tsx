import { Container } from "@/components/ui/Container";

const steps = ["Regístrate", "Acumula puntos", "Obtén recompensas"];

export function PointsPreview() {
  return <section className="py-20"><Container><div className="rounded-[2rem] border border-black/10 bg-white p-8 sm:p-12"><p className="text-sm font-bold uppercase tracking-widest text-black/45">Saldo de demostración</p><p className="mt-2 text-6xl font-black tracking-tight">0 <span className="text-2xl">puntos</span></p><h2 className="mt-12 text-3xl font-black">¿Cómo funciona?</h2><ol className="mt-7 grid gap-5 md:grid-cols-3">{steps.map((step, index) => <li className="rounded-2xl bg-[var(--surface)] p-6" key={step}><span className="text-sm font-black text-[var(--primary)]">{index + 1}.</span><p className="mt-2 font-bold">{step}</p></li>)}</ol></div></Container></section>;
}
