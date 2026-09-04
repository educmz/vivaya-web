"use client";

import { useState } from "react";
import { categories } from "@/data/categories";

export function ProductFilters() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  return (
    <form className="grid gap-4 rounded-3xl bg-[var(--surface)] p-5 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()} aria-label="Filtros visuales del catálogo">
      <label className="grid gap-2 text-sm font-bold">Buscar<input className="min-h-11 rounded-xl border border-black/15 bg-white px-4 font-normal outline-none focus:border-[var(--primary)]" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nombre del producto" type="search" /></label>
      <label className="grid gap-2 text-sm font-bold">Categoría<select className="min-h-11 rounded-xl border border-black/15 bg-white px-4 font-normal outline-none focus:border-[var(--primary)]" value={category} onChange={(event) => setCategory(event.target.value)}><option value="all">Todas</option>{categories.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}</select></label>
      <p className="text-xs text-black/50 sm:col-span-2" aria-live="polite">Vista temporal: búsqueda “{query || "sin término"}” · categoría “{category}”. La conexión con datos reales llegará después.</p>
    </form>
  );
}
