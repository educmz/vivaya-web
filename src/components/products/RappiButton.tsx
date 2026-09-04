import { Button } from "@/components/ui/Button";
import { isSafeExternalUrl } from "@/lib/utils";

export function RappiButton({ rappiUrl, className }: { rappiUrl: string; className?: string }) {
  const enabled = isSafeExternalUrl(rappiUrl);
  if (!enabled) return <Button className={className} disabled aria-label="Pedido por Rappi no disponible">Rappi próximamente</Button>;
  return <Button className={className} href={rappiUrl} external aria-label="Pedir por Rappi en una pestaña nueva">Pedir por Rappi</Button>;
}
