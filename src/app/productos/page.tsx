import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProductCategories } from "@/components/products/ProductCategories";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "Productos" };
export default function ProductsPage() {
  return <><PageHero title="Productos" description="Catálogo inicial con información ficticia para desarrollo. Todos los datos podrán reemplazarse desde un único módulo." /><section className="py-14 sm:py-20"><Container><ProductCategories /><div className="mt-7"><ProductFilters /></div><ProductGrid products={products} className="mt-10" /></Container></section></>;
}
