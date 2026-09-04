import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "product-01",
    slug: "producto-temporal-citrico",
    name: "Producto temporal cítrico",
    description: "Descripción ficticia para validar la futura ficha de producto durante el desarrollo.",
    shortDescription: "Contenido temporal con notas cítricas.",
    price: 18.9,
    image: "/images/products/Jugo1.jpg",
    images: [],
    category: "temporada",
    active: true,
    rappiUrl: "",
  },
  {
    id: "product-02",
    slug: "producto-temporal-clasico",
    name: "Producto temporal clásico",
    description: "Contenido ficticio reemplazable para probar jerarquía, precio y llamadas a la acción.",
    shortDescription: "Una opción clásica solo para desarrollo.",
    price: 16.5,
    image: "/images/products/Jugo2.jpg",
    images: [],
    category: "clasicos",
    active: true,
    rappiUrl: "",
  },
  {
    id: "product-03",
    slug: "producto-temporal-ligero",
    name: "Producto temporal ligero",
    description: "Texto temporal sin afirmaciones empresariales, creado únicamente para maquetación.",
    shortDescription: "Propuesta ligera de demostración.",
    price: 14.9,
    image: "/images/products/Jugo5.jpg",
    images: [],
    category: "ligeros",
    active: true,
    rappiUrl: "",
  },
  {
    id: "product-04",
    slug: "producto-temporal-especial",
    name: "Producto temporal especial",
    description: "Ficha ficticia preparada para ser sustituida cuando exista el catálogo definitivo.",
    shortDescription: "Edición especial temporal de desarrollo.",
    price: 20.0,
    image: "/images/products/Jugo3.jpg",
    images: [],
    category: "temporada",
    active: true,
    rappiUrl: "",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug && product.active);
}
