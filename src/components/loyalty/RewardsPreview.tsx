import { rewards } from "@/data/rewards";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/sections/SectionTitle";

export function RewardsPreview() {
  return <section className="bg-[var(--surface)] py-20"><Container><SectionTitle eyebrow="Datos ficticios" title="Recompensas de muestra" description="Ninguna recompensa está activa comercialmente; son tarjetas para validar el diseño." /><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{rewards.filter((reward) => reward.active).map((reward) => <article className="rounded-3xl bg-white p-7" key={reward.id}><div className="aspect-[4/3] rounded-2xl bg-[var(--surface-strong)]" role="img" aria-label={`Imagen temporal pendiente de ${reward.title}`} /><p className="mt-5 text-sm font-black text-[var(--primary)]">{reward.points} puntos</p><h3 className="mt-2 text-xl font-black">{reward.title}</h3><p className="mt-3 text-sm leading-6 text-black/60">{reward.description}</p></article>)}</div></Container></section>;
}
