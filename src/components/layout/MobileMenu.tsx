"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { navigationItems } from "@/data/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="relative z-[60] flex h-12 items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition hover:bg-black/30 focus-visible:outline"
      >
        <span>Menú</span>
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] bg-[#120a08]/95 px-6 pb-8 pt-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <Image
                src="/images/brand/vivaya-logo.png"
                alt="Vivaya"
                width={110}
                height={110}
                className="h-16 w-auto object-contain"
              />

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white"
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>
            </div>

            <nav
              className="mt-10 flex flex-col"
              aria-label="Navegación móvil"
            >
              {navigationItems.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 + index * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block border-b border-white/10 py-4 text-[clamp(2rem,9vw,3.5rem)] font-black tracking-[-0.05em]",
                        isActive ? "text-[#f36b21]" : "text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}