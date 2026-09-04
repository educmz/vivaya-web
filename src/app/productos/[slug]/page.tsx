import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { Container } from "@/components/ui/Container";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.filter((product) => product.active).map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/productos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product?.name ?? "Producto no encontrado", description: product?.shortDescription };
}

export default async function ProductPage({ params }: PageProps<"/productos/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <section className="py-14 sm:py-20"><Container className="grid items-start gap-10 md:grid-cols-2 lg:gap-16"><ProductGallery images={product.images.length ? product.images : [product.image]} productName={product.name} /><ProductInfo product={product} /></Container></section>;
}
