import { categories } from "@/data/categories";

export function ProductCategories() {
  return <ul className="flex snap-x gap-3 overflow-x-auto pb-2" aria-label="Categorías de productos">{categories.map((category) => <li className="shrink-0 snap-start rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-bold" key={category.id}>{category.name}</li>)}</ul>;
}
