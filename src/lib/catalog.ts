import { menuProducts } from "@/data/menu/products";
import { eventPackages } from "@/data/events/packages";

import type {
  EventCategoryId,
  MenuCategoryId,
} from "@/types/catalog";

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

export function getAllEventPackages() {
  return eventPackages.filter(
    (eventPackage) => eventPackage.available,
  );
}

export function getEventPackagesByCategory(
  category: EventCategoryId,
) {
  return eventPackages.filter(
    (eventPackage) =>
      eventPackage.available &&
      eventPackage.categories.includes(category),
  );
}

export function getEventPackageBySlug(
  slug: string,
) {
  return eventPackages.find(
    (eventPackage) =>
      eventPackage.available &&
      eventPackage.slug === slug,
  );
}