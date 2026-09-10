export type CartaCategoryId =
  | "smoothies"
  | "tes-helados"
  | "bebidas-calientes"
  | "frappes"
  | "waffles"
  | "sandwiches"
  | "tostones"
  | "pizzas";

export interface DeliveryLinks {
  rappi?: string;
  pedidosYa?: string;
}

export interface CustomizationOption {
  id: string;
  name: string;
}

export interface CustomizationGroup {
  id: string;
  name: string;

  min: number;
  max: number;

  options: CustomizationOption[];
}

export interface CartaProduct {
  id: string;
  slug: string;

  name: string;
  description: string;

  price: number;

  category: CartaCategoryId;

  image: string;
  // Escala la foto dentro de la card (1 = llena el cuadro, <1 la achica).
  imageScale?: number;

  available: boolean;
  featured?: boolean;

  customizations?: CustomizationGroup[];

  delivery?: DeliveryLinks;

  sourcePage?: number;
}