export type CartaCategoryId =
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
  category: CartaCategoryId;
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
  // =====================================================
  // JUGOS — 8
  // =====================================================

  {
    id: "jugo-01",
    number: "01",
    name: "Jugo 01",
    category: "jugos",
    categoryLabel: "Jugos",
    description:
      "Presentación temporal mientras construimos la carta definitiva de Vivaya.",
    image: "/images/about/about-product.webp",
    imageMode: "photo",
    accent: "#FF8A00",
    surface: "#FFB347",
    foreground: "#073B3A",
  },

  {
    id: "jugo-02",
    number: "02",
    name: "Jugo 02",
    category: "jugos",
    categoryLabel: "Jugos",
    description:
      "Una opción fresca presentada temporalmente para visualizar la carta.",
    image: "/images/products/Jugos/3.png",
    imageMode: "cutout",
    accent: "#FF8A00",
    surface: "#E9F5EE",
    foreground: "#073B3A",
  },

  {
    id: "jugo-03",
    number: "03",
    name: "Jugo 03",
    category: "jugos",
    categoryLabel: "Jugos",
    description:
      "Producto temporal pendiente de información final proporcionada por Vivaya.",
    image: "/images/products/Jugos/11.png",
    imageMode: "cutout",
    accent: "#FFB347",
    surface: "#073B3A",
    foreground: "#FFF7E8",
  },

  {
    id: "jugo-04",
    number: "04",
    name: "Jugo 04",
    category: "jugos",
    categoryLabel: "Jugos",
    description:
      "Presentación referencial utilizada para construir la experiencia de Carta.",
    image: "/images/products/Jugos/12.png",
    imageMode: "cutout",
    accent: "#FF8A00",
    surface: "#0F6B6D",
    foreground: "#FFF7E8",
  },

  {
    id: "jugo-05",
    number: "05",
    name: "Jugo 05",
    category: "jugos",
    categoryLabel: "Jugos",
    description:
      "Contenido provisional hasta recibir los productos definitivos de la marca.",
    image: "/images/products/Jugos/13.png",
    imageMode: "cutout",
    accent: "#0F6B6D",
    surface: "#E9F5EE",
    foreground: "#073B3A",
  },

  {
    id: "jugo-06",
    number: "06",
    name: "Jugo 06",
    category: "jugos",
    categoryLabel: "Jugos",
    description:
      "Producto de demostración para visualizar la futura carta de Vivaya.",
    image: "/images/products/Jugos/14.png",
    imageMode: "cutout",
    accent: "#FF8A00",
    surface: "#FFB347",
    foreground: "#073B3A",
  },

  {
    id: "jugo-07",
    number: "07",
    name: "Jugo 07",
    category: "jugos",
    categoryLabel: "Jugos",
    description:
      "Presentación temporal pendiente de nombre, descripción y precio definitivos.",
    image: "/images/products/Jugos/15.png",
    imageMode: "cutout",
    accent: "#FFB347",
    surface: "#073B3A",
    foreground: "#FFF7E8",
  },

  {
    id: "jugo-08",
    number: "08",
    name: "Jugo 08",
    category: "jugos",
    categoryLabel: "Jugos",
    description:
      "Una muestra temporal para completar la composición visual de la categoría.",
    image: "/images/products/Jugos/17.png",
    imageMode: "cutout",
    accent: "#FF8A00",
    surface: "#E9F5EE",
    foreground: "#073B3A",
  },

  // =====================================================
  // CREMOLADAS — 6
  // =====================================================

  {
    id: "cremolada-01",
    number: "09",
    name: "Cremolada 01",
    category: "cremoladas",
    categoryLabel: "Cremoladas",
    description:
      "Presentación temporal para construir la categoría de cremoladas.",
    image: "/images/about/vivaya-cup.png",
    imageMode: "cutout",
    accent: "#FFB347",
    surface: "#073B3A",
    foreground: "#FFF7E8",
  },

  {
    id: "cremolada-02",
    number: "10",
    name: "Cremolada 02",
    category: "cremoladas",
    categoryLabel: "Cremoladas",
    description:
      "Producto provisional pendiente de información definitiva del cliente.",
    image: "/images/products/Jugos/3.png",
    imageMode: "cutout",
    accent: "#FF8A00",
    surface: "#0F6B6D",
    foreground: "#FFF7E8",
  },

  {
    id: "cremolada-03",
    number: "11",
    name: "Cremolada 03",
    category: "cremoladas",
    categoryLabel: "Cremoladas",
    description:
      "Contenido referencial utilizado únicamente durante el desarrollo de la carta.",
    image: "/images/products/Jugos/11.png",
    imageMode: "cutout",
    accent: "#FFB347",
    surface: "#E9F5EE",
    foreground: "#073B3A",
  },

  {
    id: "cremolada-04",
    number: "12",
    name: "Cremolada 04",
    category: "cremoladas",
    categoryLabel: "Cremoladas",
    description:
      "Producto temporal hasta recibir fotografías y contenido finales.",
    image: "/images/products/Jugos/14.png",
    imageMode: "cutout",
    accent: "#FF8A00",
    surface: "#FFB347",
    foreground: "#073B3A",
  },

  {
    id: "cremolada-05",
    number: "13",
    name: "Cremolada 05",
    category: "cremoladas",
    categoryLabel: "Cremoladas",
    description:
      "Muestra visual preparada para representar la futura oferta Vivaya.",
    image: "/images/products/Jugos/15.png",
    imageMode: "cutout",
    accent: "#0F6B6D",
    surface: "#073B3A",
    foreground: "#FFF7E8",
  },

  {
    id: "cremolada-06",
    number: "14",
    name: "Cremolada 06",
    category: "cremoladas",
    categoryLabel: "Cremoladas",
    description:
      "Información provisional pendiente de validación antes del lanzamiento.",
    image: "/images/products/Jugos/18.png",
    imageMode: "cutout",
    accent: "#FF8A00",
    surface: "#E9F5EE",
    foreground: "#073B3A",
  },

  // =====================================================
  // HEALTHY — 6
  // =====================================================

  {
    id: "healthy-01",
    number: "15",
    name: "Healthy 01",
    category: "healthy",
    categoryLabel: "Healthy",
    description:
      "Presentación temporal para visualizar la categoría Healthy de Vivaya.",
    image: "/images/about/about-lifestyle.webp",
    imageMode: "photo",
    accent: "#0F6B6D",
    surface: "#E9F5EE",
    foreground: "#073B3A",
  },

  {
    id: "healthy-02",
    number: "16",
    name: "Healthy 02",
    category: "healthy",
    categoryLabel: "Healthy",
    description:
      "Producto provisional pendiente de contenido definitivo de la marca.",
    image: "/images/products/Jugos/12.png",
    imageMode: "cutout",
    accent: "#FF8A00",
    surface: "#FFB347",
    foreground: "#073B3A",
  },

  {
    id: "healthy-03",
    number: "17",
    name: "Healthy 03",
    category: "healthy",
    categoryLabel: "Healthy",
    description:
      "Contenido temporal utilizado para construir la experiencia del catálogo.",
    image: "/images/products/Jugos/13.png",
    imageMode: "cutout",
    accent: "#FFB347",
    surface: "#073B3A",
    foreground: "#FFF7E8",
  },

  {
    id: "healthy-04",
    number: "18",
    name: "Healthy 04",
    category: "healthy",
    categoryLabel: "Healthy",
    description:
      "Producto de demostración hasta recibir los datos oficiales.",
    image: "/images/products/Jugos/17.png",
    imageMode: "cutout",
    accent: "#0F6B6D",
    surface: "#E9F5EE",
    foreground: "#073B3A",
  },

  {
    id: "healthy-05",
    number: "19",
    name: "Healthy 05",
    category: "healthy",
    categoryLabel: "Healthy",
    description:
      "Presentación provisional para completar visualmente esta categoría.",
    image: "/images/products/Jugos/18.png",
    imageMode: "cutout",
    accent: "#FF8A00",
    surface: "#0F6B6D",
    foreground: "#FFF7E8",
  },

  {
    id: "healthy-06",
    number: "20",
    name: "Healthy 06",
    category: "healthy",
    categoryLabel: "Healthy",
    description:
      "Contenido temporal pendiente de validación y reemplazo por información real.",
    image: "/images/products/Naranjas/Naranja1.png",
    imageMode: "cutout",
    accent: "#073B3A",
    surface: "#FFB347",
    foreground: "#073B3A",
  },
];