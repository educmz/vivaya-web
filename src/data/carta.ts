export type CartaCategoryId =
  | "todos"
  | "jugos"
  | "cremoladas"
  | "healthy";

export type CartaImageMode = "photo" | "cutout";

export interface CartaCategory {
  id: CartaCategoryId;
  name: string;
}

export interface CartaItem {
  id: string;
  number: string;
  name: string;
  category: Exclude<CartaCategoryId, "todos">;
  categoryLabel: string;
  description: string;
  image: string;
  imageMode: CartaImageMode;
  accent: string;
  surface: string;
  foreground: string;
}

export const cartaCategories: CartaCategory[] = [
  {
    id: "todos",
    name: "Todo",
  },
  {
    id: "jugos",
    name: "Jugos",
  },
  {
    id: "cremoladas",
    name: "Cremoladas",
  },
  {
    id: "healthy",
    name: "Healthy",
  },
];

export const cartaItems: CartaItem[] = [
  {
    id: "carta-01",
    number: "01",
    name: "Jugo 01",
    category: "jugos",
    categoryLabel: "Jugos",
    description:
      "Una propuesta fresca pensada para acompañar distintos momentos del día.",
    image: "/images/about/about-product.webp",
    imageMode: "photo",
    accent: "#FF8A00",
    surface: "#FFB347",
    foreground: "#073B3A",
  },
  {
    id: "carta-02",
    number: "02",
    name: "Jugo 02",
    category: "jugos",
    categoryLabel: "Jugos",
    description:
      "Fruta, frescura y una presentación práctica para disfrutar donde quieras.",
    image: "/images/products/Jugos/3.png",
    imageMode: "cutout",
    accent: "#FF8A00",
    surface: "#E9F5EE",
    foreground: "#073B3A",
  },
  {
    id: "carta-03",
    number: "03",
    name: "Cremolada 01",
    category: "cremoladas",
    categoryLabel: "Cremoladas",
    description:
      "Una experiencia fría y refrescante construida alrededor del sabor de la fruta.",
    image: "/images/about/vivaya-cup.png",
    imageMode: "cutout",
    accent: "#FFB347",
    surface: "#073B3A",
    foreground: "#FFF7E8",
  },
  {
    id: "carta-04",
    number: "04",
    name: "Cremolada 02",
    category: "cremoladas",
    categoryLabel: "Cremoladas",
    description:
      "Una opción fresca para esos momentos en los que provoca algo diferente.",
    image: "/images/products/Jugos/11.png",
    imageMode: "cutout",
    accent: "#FF8A00",
    surface: "#0F6B6D",
    foreground: "#FFF7E8",
  },
  {
    id: "carta-05",
    number: "05",
    name: "Healthy 01",
    category: "healthy",
    categoryLabel: "Healthy",
    description:
      "Opciones pensadas para complementar una rutina dinámica de manera práctica.",
    image: "/images/about/about-lifestyle.webp",
    imageMode: "photo",
    accent: "#FF8A00",
    surface: "#E9F5EE",
    foreground: "#073B3A",
  },
  {
    id: "carta-06",
    number: "06",
    name: "Healthy 02",
    category: "healthy",
    categoryLabel: "Healthy",
    description:
      "Una selección temporal mientras construimos la carta definitiva de Vivaya.",
    image: "/images/products/Jugos/12.png",
    imageMode: "cutout",
    accent: "#073B3A",
    surface: "#FFB347",
    foreground: "#073B3A",
  },
];