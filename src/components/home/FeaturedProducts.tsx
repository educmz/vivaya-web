import { FeaturedProductsCarousel } from "@/components/home/FeaturedProductsCarousel";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const activeProducts = products.filter((product) => product.active);
  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <Container>
        <SectionTitle eyebrow="Selección temporal" title="Productos destacados" description="Datos ficticios creados exclusivamente para validar la arquitectura visual." />
        <div className="mt-12">
          <FeaturedProductsCarousel products={activeProducts} />
        </div>
      </Container>
    </section>
  );
}
