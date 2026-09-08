import type { PresentationProduct as Product } from "@/types/presentation-product";
import { Badge } from "@/components/ui/Badge";
import { RappiButton } from "@/components/products/RappiButton";
import { formatPrice } from "@/lib/utils";

export function ProductInfo({ product }: { product: Product }) {
  return <div><Badge>{product.category}</Badge><h1 className="mt-5 text-balance text-4xl font-black tracking-[-0.045em] sm:text-5xl">{product.name}</h1><p className="mt-5 text-lg leading-8 text-black/65">{product.description}</p><p className="mt-7 text-2xl font-black">{formatPrice(product.price)}</p><RappiButton rappiUrl={product.rappiUrl} className="mt-7 w-full sm:w-auto" /><p className="mt-3 text-xs text-black/45">Disponibilidad y datos comerciales pendientes de confirmación.</p></div>;
}
