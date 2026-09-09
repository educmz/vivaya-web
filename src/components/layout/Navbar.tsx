"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  return (
    <nav
      className={cn(
        "hidden items-center gap-9 lg:flex xl:gap-12",
        "[font-family:var(--font-dm-sans)]",
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
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative isolate flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full",
              "px-1 text-[15px] font-medium normal-case tracking-[0.025em]",
              "transition-colors duration-200",
              isActive
                ? "text-white"
                : "text-[#302E2A]/70 hover:text-[#302E2A]",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="vivaya-active-nav"
                aria-hidden="true"
                className="
                  absolute
                  -inset-x-3
                  inset-y-0
                  -z-10
                  rounded-full
                  bg-[#FF8A00]
                "
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : {
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }
                }
              />
            )}

            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
