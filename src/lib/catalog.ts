import { menuProducts } from "@/data/menu/products";

import type { MenuCategoryId } from "@/types/catalog";

export function getAllMenuProducts() {
  return menuProducts.filter(
    (product) => product.available,
  );
}

export function getMenuProductsByCategory(
  category: MenuCategoryId,
) {
  return menuProducts.filter(
    (product) =>
      product.available &&
      product.category === category,
  );
}

export function getFeaturedMenuProducts() {
  return menuProducts.filter(
    (product) =>
      product.available &&
      product.featured,
  );
}

export function getMenuProductBySlug(
  slug: string,
) {
  return menuProducts.find(
    (product) =>
      product.available &&
      product.slug === slug,
  );
}
