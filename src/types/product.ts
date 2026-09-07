export type ProductCategory =
  | "smoothies"
  | "tes-helados"
  | "bebidas-calientes"
  | "frappes"
  | "waffles"
  | "sandwiches"
  | "tostones"
  | "pizzas";

export interface ProductDeliveryLinks {
  rappi?: string;
  pedidosYa?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;

  category: ProductCategory;

  image: string;

  available: boolean;
  featured?: boolean;

  delivery?: ProductDeliveryLinks;
}