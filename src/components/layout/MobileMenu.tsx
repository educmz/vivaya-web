"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button type="button" className="rounded-full border border-black/15 px-4 py-2 text-sm font-bold focus-visible:outline" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open ? "Cerrar" : "Menú"}</button>
      {open && (
        <nav id="mobile-navigation" className="absolute inset-x-0 top-full border-t border-black/10 bg-[var(--background)] px-5 py-5 shadow-lg" aria-label="Navegación móvil">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigationItems.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-semibold hover:bg-black/5 focus-visible:outline">{item.label}</Link></li>)}
          </ul>
        </nav>
      )}
    </div>
  );
}
