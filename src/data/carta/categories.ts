import type { CartaCategoryId } from "@/types/catalog";

export interface CartaCategory {
  id: CartaCategoryId;
  name: string;
  order: number;
}

export const cartaCategories: CartaCategory[] = [
  {
    id: "smoothies",
    name: "Smoothies",
    order: 1,
  },
  {
    id: "tes-helados",
    name: "Tés helados",
    order: 2,
  },
  {
    id: "bebidas-calientes",
    name: "Bebidas calientes",
    order: 3,
  },
  {
    id: "frappes",
    name: "Frappés",
    order: 4,
  },
  {
    id: "waffles",
    name: "Waffles",
    order: 5,
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    order: 6,
  },
  {
    id: "tostones",
    name: "Tostones",
    order: 7,
  },
  {
    id: "pizzas",
    name: "Pizzas",
    order: 8,
  },
];