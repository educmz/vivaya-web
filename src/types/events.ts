export type EventCategoryId =
  | "carritos"
  | "dulces"
  | "salados"
  | "bebidas"
  | "combos"
  | "helados";

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
