"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "hidden items-center rounded-full",
        "border border-white/20",
        "bg-black/20 p-1.5",
        "backdrop-blur-md",
        "lg:flex",
        className,
      )}
      aria-label="Navegación principal"
    >
      {navigationItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative flex min-h-10 items-center justify-center",
              "rounded-full px-4 xl:px-5",
              "text-[11px] font-extrabold uppercase tracking-[0.08em]",
              "transition-colors duration-300",
              isActive
                ? "text-white"
                : "text-white/90 hover:text-white",
            )}
          >
            {/* Cápsula activa animada */}
            {isActive && (
              <motion.span
                layoutId="vivaya-active-nav"
                className="absolute inset-0 rounded-full bg-[#ff6422] shadow-[0_5px_14px_rgba(255,100,34,0.28)]"
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 32,
                  mass: 0.8,
                }}
              />
            )}

            {/* Texto encima */}
            <span className="relative z-10">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
