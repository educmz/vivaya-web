import type { MenuProduct } from "@/types/catalog";

export const menuProducts: MenuProduct[] = [
  // =========================================================
  // SMOOTHIES
  // =========================================================

  {
    id: "matcha",
    slug: "matcha",
    name: "Matcha",
    description:
      "Bebida a base de proteína vegetal sabor a vainilla y Matcha.",
    price: 14.9,
    category: "smoothies",
    image: "/images/products/matcha.webp",
    available: true,
    featured: true,
    sourcePage: 1,
  },

  {
    id: "naranja-fresa",
    slug: "naranja-fresa",
    name: "Naranja Fresa",
    description:
      "Bebida a base de proteína vegetal sabor a naranja con fresas.",
    price: 14.9,
    category: "smoothies",
    image: "/images/products/naranja-fresa.webp",
    available: true,
    featured: true,
    sourcePage: 1,
  },

  {
    id: "chocolate",
    slug: "chocolate",
    name: "Chocolate",
    description:
      "Bebida a base de proteína vegetal sabor a chocolate y cacao.",
    price: 14.9,
    category: "smoothies",
    image: "/images/products/chocolate.webp",
    available: true,
    sourcePage: 1,
  },

  {
    id: "dulce-de-leche",
    slug: "dulce-de-leche",
    name: "Dulce de leche",
    description:
      "Bebida a base de proteína vegetal sabor a vainilla y nueces.",
    price: 14.9,
    category: "smoothies",
    image: "/images/products/dulce-de-leche.webp",
    available: true,
    sourcePage: 1,
  },

  {
    id: "frutos-rojos",
    slug: "frutos-rojos",
    name: "Frutos Rojos",
    description:
      "Bebida a base de proteína vegetal sabor a vainilla y frutos rojos.",
    price: 14.9,
    category: "smoothies",
    image: "/images/products/frutos-rojos.webp",
    available: true,
    sourcePage: 1,
  },

  // =========================================================
  // TÉS HELADOS
  // =========================================================

  {
    id: "frutado",
    slug: "frutado",
    name: "Frutado",
    description:
      "Bebida a base de té verde y aloe vera.",
    price: 13.9,
    category: "tes-helados",
    image: "/images/products/frutado.webp",
    available: true,
    sourcePage: 1,
  },

  {
    id: "chai",
    slug: "chai",
    name: "Chai",
    description:
      "Bebida a base de té chai y aloe vera.",
    price: 13.9,
    category: "tes-helados",
    image: "/images/products/chai.webp",
    available: true,
    sourcePage: 1,
  },

  {
    id: "jamaica",
    slug: "jamaica",
    name: "Jamaica",
    description:
      "Bebida a base de té verde, hibiscus y aloe vera.",
    price: 13.9,
    category: "tes-helados",
    image: "/images/products/jamaica.webp",
    available: true,
    sourcePage: 1,
  },

  // =========================================================
  // BEBIDAS CALIENTES
  // =========================================================

  {
    id: "te-aromatico",
    slug: "te-aromatico",
    name: "Té Aromático",
    description:
      "A base de té con especias de la India, hierbas aromáticas y frutas de estación.",
    price: 13.9,
    category: "bebidas-calientes",
    image: "/images/products/te-aromatico.webp",
    available: true,
    sourcePage: 1,
  },

  {
    id: "chocolate-caliente",
    slug: "chocolate-caliente",
    name: "Chocolate caliente",
    description:
      "A base de proteína vegetal y cacao.",
    price: 8.9,
    category: "bebidas-calientes",
    image: "/images/products/chocolate-caliente.webp",
    available: true,
    sourcePage: 1,
  },

  // =========================================================
  // FRAPPÉS
  // =========================================================

  {
    id: "capuccino",
    slug: "capuccino",
    name: "Capuccino",
    description:
      "A base de café y proteína vegetal.",
    price: 18.9,
    category: "frappes",
    image: "/images/products/capuccino.webp",
    available: true,
    sourcePage: 1,
  },

  {
    id: "mocaccino",
    slug: "mocaccino",
    name: "Mocaccino",
    description:
      "A base de café, cacao y proteína vegetal.",
    price: 17.9,
    category: "frappes",
    image: "/images/products/mocaccino.webp",
    available: true,
    sourcePage: 1,
  },

  {
    id: "algarrobina",
    slug: "algarrobina",
    name: "Algarrobina",
    description:
      "A base de algarrobina y proteína vegetal.",
    price: 17.9,
    category: "frappes",
    image: "/images/products/algarrobina.webp",
    available: true,
    sourcePage: 1,
  },

  // =========================================================
  // WAFFLES
  // =========================================================

  {
    id: "waffle-proteico",
    slug: "waffle-proteico",
    name: "Waffle",
    description:
      "Masa proteica. Elige 2 frutas, 1 topping y una salsa.",
    price: 20.9,
    category: "waffles",
    image: "/images/products/waffle.webp",
    available: true,
    featured: true,
    sourcePage: 2,

    customizations: [
      {
        id: "frutas",
        name: "Frutas",
        min: 2,
        max: 2,
        options: [
          {
            id: "fresas",
            name: "Fresas",
          },
          {
            id: "platano",
            name: "Plátano",
          },
          {
            id: "arandanos",
            name: "Arándanos",
          },
          {
            id: "aguaymanto",
            name: "Aguaymanto",
          },
        ],
      },

      {
        id: "topping",
        name: "Topping",
        min: 1,
        max: 1,
        options: [
          {
            id: "mix-nueces",
            name: "Mix de nueces",
          },
          {
            id: "coco-rallado",
            name: "Coco rallado",
          },
          {
            id: "semillas-girasol",
            name: "Semillas de girasol",
          },
          {
            id: "semillas-calabaza",
            name: "Semillas de calabaza",
          },
          {
            id: "grageas-colores",
            name: "Grageas de colores",
          },
          {
            id: "chispas-chocolate",
            name: "Chispas de chocolate",
          },
        ],
      },

      {
        id: "salsa",
        name: "Salsa",
        min: 1,
        max: 1,
        options: [
          {
            id: "miel",
            name: "Miel",
          },
          {
            id: "algarrobina",
            name: "Algarrobina",
          },
          {
            id: "fudge",
            name: "Fudge",
          },
          {
            id: "dulce-de-leche",
            name: "Dulce de leche",
          },
        ],
      },
    ],
  },

  // =========================================================
  // SANDWICHES
  // =========================================================

  {
    id: "acevichado",
    slug: "acevichado",
    name: "Acevichado",
    description:
      "Conserva de atún acevichada, brotes, huevo y tomate.",
    price: 20.9,
    category: "sandwiches",
    image: "/images/products/acevichado.webp",
    available: true,
    sourcePage: 2,
  },

  {
    id: "mixto-ninfit",
    slug: "mixto-ninfit",
    name: "Mixto Ninfit",
    description:
      "Jamón de pavo, queso dambo, palta y tomate, aliño de la casa.",
    price: 20.9,
    category: "sandwiches",
    image: "/images/products/mixto.webp",
    available: true,
    sourcePage: 2,
  },

  // =========================================================
  // TOSTONES
  // =========================================================

  {
    id: "bruschetta-trucha",
    slug: "bruschetta-trucha",
    name: "Bruschetta de Trucha",
    description:
      "Queso crema, trucha ahumada, palta, tomate, brotes y nuestra salsa acevichada.",
    price: 20.9,
    category: "tostones",
    image: "/images/products/bruschetta-trucha.webp",
    available: true,
    sourcePage: 2,
  },

  {
    id: "toston-quinua",
    slug: "toston-quinua",
    name: "Tostón de Quinua",
    description:
      "Solterito de quinua, pimiento, palta y huevo.",
    price: 20.9,
    category: "tostones",
    image: "/images/products/toston-quinua.webp",
    available: true,
    sourcePage: 2,
  },

  {
    id: "toston-benedictino",
    slug: "toston-benedictino",
    name: "Tostón Benedictino",
    description:
      "Jamón, huevos pochados y nuestra salsa Holandesa.",
    price: 20.9,
    category: "tostones",
    image: "/images/products/toston-benedictino.webp",
    available: true,
    sourcePage: 2,
  },

  // =========================================================
  // PIZZAS
  // =========================================================

  {
    id: "pizza-ninfit",
    slug: "pizza-ninfit",
    name: "Ninfit",
    description:
      "Queso, jamón, pimiento morrón, aceitunas verdes, arúgula.",
    price: 21.9,
    category: "pizzas",
    image: "/images/products/pizza-ninfit.webp",
    available: true,
    sourcePage: 2,
  },

  {
    id: "pizza-hawaiana",
    slug: "pizza-hawaiana",
    name: "Hawaiana",
    description:
      "Queso, jamón, piña, albahaca.",
    price: 21.9,
    category: "pizzas",
    image: "/images/products/pizza-hawaiana.webp",
    available: true,
    sourcePage: 2,
  },
];