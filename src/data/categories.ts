export interface ProductCategory {
  id: string;
  name: string;
  description: string;
}

export const categories: ProductCategory[] = [
  { id: "vasos", name: "Vasos", description: "Categoría temporal de desarrollo." },
  { id: "botellas", name: "Botellas", description: "Categoría temporal de desarrollo." },
  { id: "latas", name: "Latas", description: "Categoría temporal de desarrollo." },
  { id: "briks", name: "Briks", description: "Categoría temporal de desarrollo." },
  { id: "pouches", name: "Pouches", description: "Categoría temporal de desarrollo." },
  { id: "multipack", name: "Multipack", description: "Categoría temporal de desarrollo." },
];
