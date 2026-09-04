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
        "border border-white/25",
        "bg-[#8a6846]/55 p-1.5",
        "backdrop-blur-2xl backdrop-saturate-150",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_10px_30px_rgba(83,48,20,0.14)]",
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
                className="absolute inset-0 rounded-full bg-[#ff6422] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_5px_14px_rgba(255,100,34,0.24)]"
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
