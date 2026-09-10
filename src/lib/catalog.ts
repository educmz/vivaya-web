import { cartaProducts } from "@/data/carta/products";

import type { CartaCategoryId } from "@/types/catalog";

export function getAllCartaProducts() {
  return cartaProducts.filter(
    (product) => product.available,
  );
}

export function getCartaProductsByCategory(
  category: CartaCategoryId,
) {
  return cartaProducts.filter(
    (product) =>
      product.available &&
      product.category === category,
  );
}

export function getFeaturedCartaProducts() {
  return cartaProducts.filter(
    (product) =>
      product.available &&
      product.featured,
  );
}

export function getCartaProductBySlug(
  slug: string,
) {
  return cartaProducts.find(
    (product) =>
      product.available &&
      product.slug === slug,
  );
}
