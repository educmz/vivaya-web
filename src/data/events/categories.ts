import type { EventCategoryId } from "@/types/catalog";

export interface EventCategory {
  id: EventCategoryId;
  name: string;
  order: number;
}

export const eventCategories: EventCategory[] = [
  {
    id: "carritos",
    name: "Carritos",
    order: 1,
  },
  {
    id: "dulces",
    name: "Dulces",
    order: 2,
  },
  {
    id: "salados",
    name: "Salados",
    order: 3,
  },
  {
    id: "bebidas",
    name: "Bebidas",
    order: 4,
  },
  {
    id: "combos",
    name: "Combos",
    order: 5,
  },
  {
    id: "helados",
    name: "Helados",
    order: 6,
  },
];