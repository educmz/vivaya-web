import type { Product } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";

export function ProductGrid({ products, className }: { products: Product[]; className?: string }) {
  return <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>{products.filter((product) => product.active).map((product) => <ProductCard product={product} key={product.id} />)}</div>;
}
