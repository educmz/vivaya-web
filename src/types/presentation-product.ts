// Product presentations shown on the home page, separate from the menu catalog.
export interface PresentationProduct {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  images: string[];
  category: "vasos" | "botellas" | "briks" | "latas" | "pouches" | "multipack";
  active: boolean;
  rappiUrl: string;
}
