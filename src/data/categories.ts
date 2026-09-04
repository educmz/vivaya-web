export interface ProductCategory {
  id: string;
  name: string;
  description: string;
}

export const categories: ProductCategory[] = [
  { id: "temporada", name: "Temporada", description: "Categoría temporal de desarrollo." },
  { id: "clasicos", name: "Clásicos", description: "Categoría temporal de desarrollo." },
  { id: "ligeros", name: "Ligeros", description: "Categoría temporal de desarrollo." },
];
