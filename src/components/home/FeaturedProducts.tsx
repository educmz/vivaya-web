import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";

export function FeaturedProducts() {
  return <section className="py-20 sm:py-28"><Container><SectionTitle eyebrow="Selección temporal" title="Productos destacados" description="Datos ficticios creados exclusivamente para validar la arquitectura visual." /><ScrollReveal className="mt-10"><ProductGrid products={products.filter((product) => product.featured)} /></ScrollReveal></Container></section>;
}
