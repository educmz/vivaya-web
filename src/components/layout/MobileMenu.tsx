"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "motion/react";

import { navigationItems } from "@/data/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    // The native modal stays above the animated header and manages focus.
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialog.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();

    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
      if (dialog.open) dialog.close();
    };
  }, [open]);

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-haspopup="dialog"
        aria-label="Abrir menú"
        className="grid size-12 place-items-center rounded-full bg-[#174C2C] text-[#FFF7E8] shadow-[0_6px_24px_rgba(7,59,58,0.12)] transition-colors hover:bg-[#073B3A]"
      >
        <Menu size={24} aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-labelledby="mobile-menu-title"
        onClose={() => setOpen(false)}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain border-0 bg-[#FFF7E8] p-0 text-[#174C2C] backdrop:bg-[#073B3A]/40"
      >
        {open && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative isolate flex min-h-full flex-col overflow-hidden"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-24 -z-10 size-72 rounded-full bg-[#F6D98B]/50 blur-3xl" />
            <div className="flex items-center justify-between px-5 pb-3 pt-[max(1rem,env(safe-area-inset-top))] sm:px-10">
              <Image src="/images/brand/logo_negro.png" alt="Vivaya" width={2172} height={724} className="h-auto w-36 object-contain" />
              <button type="button" onClick={closeMenu} className="grid size-12 place-items-center rounded-full border border-[#174C2C]/15 bg-white/70 transition-colors hover:bg-[#F6D98B]" aria-label="Cerrar menú">
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <div className="mx-auto w-full max-w-xl flex-1 px-5 pb-12 pt-5 sm:px-10">
              <h2 id="mobile-menu-title" className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#174C2C]/60">Explora Vivaya</h2>
              <nav aria-label="Navegación móvil">
                <ul className="space-y-1">
                  {navigationItems.map((item, index) => {
                    const isActive = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(item.href + "/");
                    return (
                      <motion.li key={item.href} initial={reducedMotion ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reducedMotion ? 0 : index * 0.04, duration: 0.2 }}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          aria-current={isActive ? "page" : undefined}
                          className={cn("group flex min-h-16 items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-colors", isActive ? "bg-[#174C2C] text-[#FFF7E8]" : "hover:bg-[#F6D98B]/50")}
                        >
                          <span className="font-heading text-[clamp(1.9rem,7vw,2.8rem)] uppercase leading-tight">{item.label}</span>
                          <span className={cn("grid size-9 shrink-0 place-items-center rounded-full", isActive ? "bg-[#F6D98B] text-[#174C2C]" : "border border-[#174C2C]/15 group-hover:bg-[#F6D98B]")}>
                            <ArrowUpRight size={19} aria-hidden="true" />
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </div>

          </motion.div>
        )}
      </dialog>
    </div>
  );
}
