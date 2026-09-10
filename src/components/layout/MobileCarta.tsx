"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const cartaItems = [
  {
    label: "INICIO",
    href: "/",
  },
  {
    label: "CARTA",
    href: "/carta",
  },
  {
    label: "EVENTOS",
    href: "/eventos",
  },
  {
    label: "NOSOTROS",
    href: "/nosotros",
  },
  {
    label: "LOCALES",
    href: "/locales",
  },
];

interface MobileCartaProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileCarta({
  isOpen,
  onClose,
}: MobileCartaProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (desktop.matches) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div id="mobile-navigation" className="fixed inset-0 z-[9998] overflow-y-auto overscroll-contain bg-[#FFF8F3] text-[#302E2A]">
      <div className="flex min-h-full flex-col px-6 pb-[max(24px,env(safe-area-inset-bottom))] pt-[max(20px,env(safe-area-inset-top))] sm:px-8">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={onClose}
            className="relative flex min-h-12 w-[120px] shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A00]"
          >
            <Image
              src="/images/brand/logo_negro.png"
              alt="Vivaya"
              width={400}
              height={160}
              priority
              className="h-auto w-full object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar carta"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#302E2A]/15 text-[#302E2A] transition-colors duration-200 hover:border-[#FF8A00] hover:bg-[#FF8A00]/5 active:bg-[#FF8A00]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A00] motion-reduce:transition-none"
          >
            <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-9 border-t border-[#302E2A]/10 pt-6 sm:mt-12">
          <nav aria-label="Navegación principal">
            <ul className="space-y-2">
              {cartaItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={isActive ? "page" : undefined}
                      className={`group flex min-h-16 items-center justify-between gap-5 rounded-xl px-5 py-4 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A00] motion-reduce:transition-none ${
                        isActive
                          ? "bg-[#FF8A00] text-[#302E2A] hover:bg-[#F58200] active:bg-[#EB7C00]"
                          : "text-[#302E2A] hover:bg-[#302E2A]/5 active:bg-[#302E2A]/10"
                      }`}
                    >
                      <span className="font-[family-name:var(--font-carta)] text-xl font-semibold normal-case leading-tight tracking-[-0.025em] sm:text-2xl">
                        {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                      </span>

                      <ArrowUpRight
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 ${isActive ? "text-[#302E2A]" : "text-[#918A82] group-hover:text-[#302E2A]"}`}
                        strokeWidth={1.5}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
