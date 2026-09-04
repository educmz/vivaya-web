"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navigationItems } from "@/data/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button type="button" className="rounded-full border border-black/15 px-4 py-2 text-sm font-bold focus-visible:outline" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open ? "Cerrar" : "Menú"}</button>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="absolute inset-x-0 top-full border-t border-black/10 bg-[var(--background)] px-5 py-5 shadow-lg"
            aria-label="Navegación móvil"
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1">
              {navigationItems.map((item, index) => (
                <motion.li key={item.href} initial={reduced ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduced ? 0 : index * 0.04 }}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-semibold hover:bg-black/5 focus-visible:outline">{item.label}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
