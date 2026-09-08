import type { EventPackage } from "@/types/events";

export const eventPackages: EventPackage[] = [
  // =========================================================
  // CHOCOLATE Y CAFÉ
  // =========================================================

  {
    id: "chocolate-cafe",
    slug: "chocolate-cafe",

    name: "Chocolate y Café",

    description:
      "Servicio de chocolate, café e infusiones para eventos.",

    categories: ["carritos", "bebidas"],

    image: "/images/events/chocolate-cafe.webp",

    priceFrom: 300,

    pricing: [
      {
        id: "50-vasos",
        label: "50 vasos",
        price: 300,
      },
      {
        id: "75-vasos",
        label: "75 vasos",
        price: 420,
      },
      {
        id: "100-vasos",
        label: "100 vasos",
        price: 520,
      },
    ],

    includes: [
      "Máquina de café",
      "Máquina de chocolate",
      "Café de especialidad de alta calidad en granos",
      "Barra móvil",
      "Infusiones a elección",
      "Carrito temático incluido",
      "Personal de atención",
    ],

    durationHours: 3,

    mobilityIncluded: false,

    available: true,

    sourcePage: 2,
  },

  // =========================================================
  // FUENTE DE CHOCOLATE
  // =========================================================

  {
    id: "fuente-chocolate",
    slug: "fuente-chocolate",

    name: "Fuente de Chocolate",

    description:
      "Módulo de fuente de chocolate para eventos.",

    categories: ["carritos", "dulces"],

    image: "/images/events/fuente-chocolate.webp",

    priceFrom: 280,

    pricing: [
      {
        id: "50-unidades",
        label: "50 unidades",
        price: 280,
      },
      {
        id: "80-unidades",
        label: "80 unidades",
        price: 370,
      },
      {
        id: "150-unidades",
        label: "150 unidades",
        price: 720,
      },
      {
        id: "200-unidades",
        label: "200 unidades",
        price: 940,
      },
    ],

    includes: [
      "1 fuente de chocolate",
      "Brochetas de frutas y marshmellow",
      "Grajeas de colores",
      "Personal de atención uniformado",
      "Carrito temático incluido",
    ],

    durationHours: 3,

    available: true,

    sourcePage: 3,
  },

  // =========================================================
  // SNACKS INDIVIDUALES
  // =========================================================

  {
    id: "popcorn-eventos",
    slug: "popcorn-eventos",

    name: "Pop Corn",

    categories: ["carritos", "salados"],

    image: "/images/events/popcorn.webp",

    priceFrom: 180,

    pricing: [
      {
        id: "50",
        label: "50 unidades",
        price: 180,
      },
      {
        id: "100",
        label: "100 unidades",
        price: 240,
      },
      {
        id: "ilimitado",
        label: "Ilimitado",
        price: 300,
      },
    ],

    includes: [
      "Personal uniformado",
      "Carrito temático",
    ],

    durationHours: 3,

    available: true,

    sourcePage: 4,
  },

  {
    id: "hamburguesitas-eventos",
    slug: "hamburguesitas-eventos",

    name: "Hamburguesitas",

    categories: ["carritos", "salados"],

    image: "/images/events/hamburguesitas.webp",

    priceFrom: 300,

    pricing: [
      {
        id: "50",
        label: "50 unidades",
        price: 300,
      },
      {
        id: "100",
        label: "100 unidades",
        price: 500,
      },
    ],

    includes: [
      "Personal uniformado",
      "Carrito temático",
    ],

    durationHours: 3,

    available: true,

    sourcePage: 4,
  },

  {
    id: "hotdog-eventos",
    slug: "hotdog-eventos",

    name: "Hotdog",

    categories: ["carritos", "salados"],

    image: "/images/events/hotdog.webp",

    priceFrom: 190,

    pricing: [
      {
        id: "50",
        label: "50 unidades",
        price: 190,
      },
      {
        id: "100",
        label: "100 unidades",
        price: 290,
      },
    ],

    includes: [
      "Personal uniformado",
      "Carrito temático",
    ],

    durationHours: 3,

    available: true,

    sourcePage: 4,
  },

  {
    id: "mini-salchipapas-eventos",
    slug: "mini-salchipapas-eventos",

    name: "Mini salchipapas",

    categories: ["carritos", "salados"],

    image: "/images/events/mini-salchipapas.webp",

    priceFrom: 320,

    pricing: [
      {
        id: "50",
        label: "50 unidades",
        price: 320,
      },
    ],

    includes: [
      "Personal uniformado",
      "Carrito temático",
    ],

    durationHours: 3,

    available: true,

    sourcePage: 4,
  },

  // =========================================================
  // COMBOS
  // =========================================================

  {
    id: "combo-1",
    slug: "combo-1",

    name: "Combo 1",

    categories: ["carritos", "salados", "combos"],

    image: "/images/events/combo-1.webp",

    priceFrom: 550,

    includes: [
      "50 mini hamburguesas",
      "50 mini salchipapas",
      "Carrito temático",
    ],

    mobilityIncluded: false,

    available: true,

    sourcePage: 5,
  },

  {
    id: "combo-2",
    slug: "combo-2",

    name: "Combo 2",

    categories: ["carritos", "salados", "combos"],

    image: "/images/events/combo-2.webp",

    priceFrom: 650,

    includes: [
      "50 hot dog",
      "50 mini salchipapas",
      "Pop Corn ilimitado",
      "Carrito temático",
    ],

    mobilityIncluded: false,

    available: true,

    sourcePage: 5,
  },

  {
    id: "combo-3",
    slug: "combo-3",

    name: "Combo 3",

    categories: ["carritos", "salados", "combos"],

    image: "/images/events/combo-3.webp",

    priceFrom: 750,

    pricing: [
      {
        id: "sin-papas",
        label: "Combo",
        price: 750,
      },
      {
        id: "con-papas",
        label: "Con papas fritas",
        price: 800,
      },
    ],

    includes: [
      "50 hamburguesas",
      "50 salchipapas adulta",
      "Papas fritas opcional",
      "Carrito temático",
    ],

    mobilityIncluded: false,

    available: true,

    sourcePage: 5,
  },

  // =========================================================
  // POPCORN + ALGODÓN + HOTDOG
  // =========================================================

  {
    id: "popcorn-algodon-70-hotdog",
    slug: "popcorn-algodon-70-hotdog",

    name: "Pop Corn y Algodón + 70 Hotdog",

    categories: [
      "carritos",
      "dulces",
      "salados",
      "combos",
    ],

    image:
      "/images/events/popcorn-algodon-hotdog.webp",

    priceFrom: 380,

    includes: [
      "Algodón de azúcar ilimitado",
      "Pop Corn ilimitado",
      "70 Hotdog",
      "Personal correctamente uniformado",
      "2 carritos decorados según temática",
      "Todos los insumos necesarios",
    ],

    durationHours: 3,

    cartsCount: 2,

    mobilityIncluded: false,

    available: true,

    sourcePage: 6,
  },

  // =========================================================
  // ALGODÓN + POPCORN + MINI BURGERS
  // =========================================================

  {
    id: "algodon-popcorn-mini-burgers",
    slug: "algodon-popcorn-mini-burgers",

    name: "Algodón y Pop Corn + 50 Mini Burgers",

    categories: [
      "carritos",
      "dulces",
      "salados",
      "combos",
    ],

    image:
      "/images/events/algodon-popcorn-mini-burgers.webp",

    priceFrom: 380,

    includes: [
      "Algodón ilimitado",
      "Pop Corn ilimitado",
      "50 mini burgers",
      "Personal The Cool Snack",
    ],

    available: true,

    sourcePage: 7,
  },

  // =========================================================
  // POPCORN + PANCHOS + MANZANAS
  // =========================================================

  {
    id: "popcorn-panchos-manzanas",
    slug: "popcorn-panchos-manzanas",

    name: "Pop Corn + Panchos + Manzanas Acarameladas",

    categories: [
      "carritos",
      "dulces",
      "salados",
      "combos",
    ],

    image:
      "/images/events/popcorn-panchos-manzanas.webp",

    priceFrom: 380,

    includes: [
      "Pop Corn ilimitado",
      "50 panchos",
      "50 manzanas acarameladas",
      "1 carrito decorado",
      "1 personal de atención",
    ],

    durationHours: 3,

    staffCount: 1,
    cartsCount: 1,

    available: true,

    sourcePage: 8,
  },

  // =========================================================
  // COMBO 6
  // =========================================================

  {
    id: "combo-6",
    slug: "combo-6",

    name: "Combo 6",

    categories: [
      "carritos",
      "dulces",
      "salados",
      "combos",
    ],

    image: "/images/events/combo-6.webp",

    priceFrom: 490,

    includes: [
      "50 mini burger",
      "50 hotdog",
      "Pop Corn ilimitado",
    ],

    notes: [
      "Algodón ilimitado por S/ 1 adicional.",
    ],

    mobilityIncluded: false,

    available: true,

    sourcePage: 9,
  },

  // =========================================================
  // POPCORN + MANZANAS + SALCHINUGGETS
  // =========================================================

  {
    id: "popcorn-manzanas-salchinuggets",
    slug: "popcorn-manzanas-salchinuggets",

    name: "Pop Corn + Manzanas + Salchinuggets",

    categories: [
      "carritos",
      "dulces",
      "salados",
      "combos",
    ],

    image:
      "/images/events/popcorn-manzanas-salchinuggets.webp",

    priceFrom: 490,

    includes: [
      "Pop Corn ilimitado",
      "50 manzanas",
      "50 salchinuggets",
      "2 carritos",
      "2 personal de atención",
    ],

    durationHours: 3,

    staffCount: 2,
    cartsCount: 2,

    mobilityIncluded: false,

    available: true,

    sourcePage: 10,
  },

  // =========================================================
  // WAFFLES + SALCHIPAPAS + CHURROS + POPCORN
  // =========================================================

  {
    id: "waffles-salchipapas-churros-popcorn",
    slug: "waffles-salchipapas-churros-popcorn",

    name: "Waffles + Salchipapas + Churros + Popcorn",

    categories: [
      "carritos",
      "dulces",
      "salados",
      "combos",
    ],

    image:
      "/images/events/waffles-salchipapas-churros.webp",

    priceFrom: 680,

    includes: [
      "50 mini waffles",
      "50 mini salchipapas",
      "50 churros",
      "Popcorn ilimitado",
      "3 carritos decorados",
      "3 personal de atención",
    ],

    durationHours: 3,

    staffCount: 3,
    cartsCount: 3,

    available: true,

    sourcePage: 11,
  },

  // =========================================================
  // PROMOCIÓN LOCURA
  // =========================================================

  {
    id: "promocion-locura",
    slug: "promocion-locura",

    name: "Promoción Locura",

    description:
      "Diversión sin límites.",

    categories: [
      "carritos",
      "dulces",
      "salados",
      "combos",
    ],

    image: "/images/events/promocion-locura.webp",

    priceFrom: 790,

    includes: [
      "100 mini hamburguesas",
      "100 mini salchipapas",
      "Algodón ilimitado",
      "Popcorn ilimitado",
    ],

    notes: [
      "Ideal para cumpleaños.",
      "Ideal para fiestas infantiles.",
      "Ideal para eventos escolares.",
      "Ideal para reuniones y celebraciones.",
    ],

    available: true,

    sourcePage: 12,
  },

  // =========================================================
  // HELADO SOFT - BÁSICO
  // =========================================================

  {
    id: "helado-soft-basico",
    slug: "helado-soft-basico",

    name: "Paquete Básico de Helado Soft",

    categories: ["helados", "dulces"],

    image: "/images/events/helado-soft-basico.webp",

    priceFrom: 400,

    includes: [
      "Máquina de helado soft premium",
      "Hasta 100 helados soft",
      "Sabores vainilla, chocolate o mixto",
      "Vasos y/o barquillos incluidos",
      "1 operador uniformado",
    ],

    durationHours: 3,

    staffCount: 1,

    mobilityIncluded: false,

    available: true,

    sourcePage: 13,
  },

  // =========================================================
  // HELADO SOFT - PREMIUM
  // =========================================================

  {
    id: "helado-soft-premium",
    slug: "helado-soft-premium",

    name: "Paquete Premium de Helado Soft",

    categories: ["helados", "dulces"],

    image: "/images/events/helado-soft-premium.webp",

    priceFrom: 500,

    includes: [
      "Máquina de helado soft premium",
      "Hasta 120 helados soft",
      "Sabores vainilla, chocolate o mixto",
      "Vasos y/o barquillos incluidos",
      "Estación de toppings gourmet",
      "1 operador uniformado",
    ],

    durationHours: 3,

    staffCount: 1,

    mobilityIncluded: false,

    notes: [
      "La estación de toppings indicada en el catálogo incluye jaleas de fresa y mango, grajeas, Oreo, fudge y otros complementos señalados en la pieza original.",
    ],

    available: true,

    sourcePage: 13,
  },

  // =========================================================
  // CREMOLADAS - 2 SABORES
  // =========================================================

  {
    id: "cremoladas-2-sabores",
    slug: "cremoladas-2-sabores",

    name: "Cremoladas de 2 Sabores",

    categories: ["bebidas"],

    image:
      "/images/events/cremoladas-2-sabores.webp",

    priceFrom: 450,

    includes: [
      "2 barriles de 12 L",
      "Vasos de 8, 10 o 12 onzas",
      "Vasos incluidos",
      "1 operador uniformado",
    ],

    durationHours: 3,

    staffCount: 1,

    mobilityIncluded: false,

    notes: [
      "Servicio continuo y prolongado.",
    ],

    available: true,

    sourcePage: 14,
  },

  // =========================================================
  // CREMOLADAS - 2 SABORES CON PISCO O RON
  // =========================================================

  {
    id: "cremoladas-2-sabores-alcohol",
    slug: "cremoladas-2-sabores-alcohol",

    name: "Cremoladas de 2 Sabores con Pisco o Ron",

    categories: ["bebidas"],

    image:
      "/images/events/cremoladas-2-sabores-alcohol.webp",

    priceFrom: 600,

    includes: [
      "2 barriles de 12 L",
      "Pisco o ron",
      "Vasos de 8, 10 o 12 onzas",
      "Vasos incluidos",
      "1 operador uniformado",
    ],

    durationHours: 3,

    staffCount: 1,

    mobilityIncluded: false,

    notes: [
      "Servicio continuo y prolongado.",
      "Contiene alcohol.",
    ],

    available: true,

    sourcePage: 14,
  },

  // =========================================================
  // CREMOLADAS - 3 SABORES
  // =========================================================

  {
    id: "cremoladas-3-sabores",
    slug: "cremoladas-3-sabores",

    name: "Cremoladas de 3 Sabores",

    categories: ["bebidas"],

    image:
      "/images/events/cremoladas-3-sabores.webp",

    priceFrom: 650,

    includes: [
      "3 barriles de 12 L",
      "Vasos de 8, 10 o 12 onzas",
      "Vasos incluidos",
      "1 operador uniformado",
      "Cualquier sabor de la lista",
    ],

    durationHours: 3,

    staffCount: 1,

    mobilityIncluded: false,

    notes: [
      "Sin alcohol.",
      "Servicio continuo y prolongado.",
    ],

    available: true,

    sourcePage: 14,
  },

  // =========================================================
  // CHILCANOS - 3 SABORES
  // =========================================================

  {
    id: "chilcanos-3-sabores",
    slug: "chilcanos-3-sabores",

    name: "Chilcanos de 3 Sabores",

    categories: ["bebidas"],

    image:
      "/images/events/chilcanos-3-sabores.webp",

    priceFrom: 800,

    includes: [
      "3 barriles de 12 L",
      "Vasos de 8, 10 o 12 onzas",
      "Vasos incluidos",
      "1 operador uniformado",
      "Cualquier sabor de la lista",
    ],

    durationHours: 3,

    staffCount: 1,

    mobilityIncluded: false,

    notes: [
      "Con alcohol.",
      "Servicio continuo y prolongado.",
    ],

    available: true,

    sourcePage: 14,
  },
];