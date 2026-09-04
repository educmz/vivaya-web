import { Container } from "@/components/ui/Container";
import { RappiButton } from "@/components/products/RappiButton";
import { rappiConfig } from "@/config/rappi";

export function RappiBanner() {
  return <section className="py-8"><Container><div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[var(--primary)] p-8 text-white sm:flex-row sm:items-center sm:p-10"><div><p className="text-xs font-black uppercase tracking-widest">Integración futura</p><h2 className="mt-2 text-3xl font-black">Pide por Rappi</h2><p className="mt-2 text-white/75">El enlace se habilitará cuando exista una URL oficial configurada.</p></div><RappiButton rappiUrl={rappiConfig.storeUrl} className="bg-white text-black" /></div></Container></section>;
}
