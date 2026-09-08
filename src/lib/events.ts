import { eventPackages } from "@/data/events/packages";

import type { EventCategoryId } from "@/types/events";

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
