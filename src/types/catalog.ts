export type MenuCategoryId =
  | "smoothies"
  | "tes-helados"
  | "bebidas-calientes"
  | "frappes"
  | "waffles"
  | "sandwiches"
  | "tostones"
  | "pizzas";

export type EventCategoryId =
  | "carritos"
  | "dulces"
  | "salados"
  | "bebidas"
  | "combos"
  | "helados";

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

export interface MenuProduct {
  id: string;
  slug: string;

  name: string;
  description: string;

  price: number;

  category: MenuCategoryId;

  image: string;

  available: boolean;
  featured?: boolean;

  customizations?: CustomizationGroup[];

  delivery?: DeliveryLinks;

  sourcePage?: number;
}

export interface EventPriceOption {
  id: string;
  label: string;
  price: number;
  note?: string;
}

export interface EventPackage {
  id: string;
  slug: string;

  name: string;
  description?: string;

  categories: EventCategoryId[];

  image: string;

  priceFrom: number;

  pricing?: EventPriceOption[];

  includes: string[];

  durationHours?: number;

  staffCount?: number;
  cartsCount?: number;

  mobilityIncluded?: boolean;

  notes?: string[];

  available: boolean;

  sourcePage?: number;
}