"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const menuItems = [
  {
    label: "INICIO",
    href: "/",
  },
  {
    label: "CARTA",
    href: "/menu",
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

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
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
    <div id="mobile-navigation" className="fixed inset-0 z-[9998] overflow-y-auto overscroll-contain bg-[#FFF9F4]">
      <div className="flex h-full flex-col px-5 pb-6 pt-4">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={onClose}
            className="relative block w-[132px]"
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
            aria-label="Cerrar menú"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#FF8A00] bg-white text-[#155E38] transition duration-300 hover:bg-[#FFF3E4]"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>

        {/* CONTENIDO */}
        <div className="mt-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#77A48B]">
            Explora Vivaya
          </p>

          <nav className="mt-5">
            <ul className="space-y-1.5">
              {menuItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`group flex min-h-[56px] items-center justify-between rounded-2xl px-4 transition-all duration-300 ${
                        isActive
                          ? "bg-[#185C36] text-white"
                          : "text-[#165A36] hover:bg-[#F3EEE7]"
                      }`}
                    >
                      <span className="font-heading text-[28px] leading-none">
                        {item.label}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-[#F7D278] bg-[#F7D278] text-[#185C36]"
                            : "border-[#DED8CF] bg-transparent text-[#185C36] group-hover:border-[#185C36]"
                        }`}
                      >
                        <ArrowUpRight
                          className="h-4 w-4"
                          strokeWidth={1.8}
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* ESPACIO FLEXIBLE */}
        <div className="flex-1" />

        {/* OPCIONAL: FOOTER MOBILE */}
        <div className="border-t border-[#E8E1D9] pt-4">
          <p className="text-xs leading-5 text-[#918A82]">
            Natural. Fresco. Vivaya.
          </p>

          <p className="mt-1 text-xs leading-5 text-[#B0A9A1]">
            Activa lo natural en tu día a día.
          </p>
        </div>
      </div>
    </div>
  );
}
