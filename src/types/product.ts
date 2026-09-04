export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  active: boolean;
  rappiUrl: string;
}
