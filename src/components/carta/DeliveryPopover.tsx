"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { deliveryConfig } from "@/config/delivery";

interface DeliveryPopoverProps {
  id: string;
  onClose: () => void;
}

export function DeliveryPopover({ id, onClose }: DeliveryPopoverProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      if (!panelRef.current?.contains(event.target) && !event.target.closest("[data-order-trigger]")) onClose();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      panelRef.current?.parentElement?.querySelector<HTMLButtonElement>("[data-order-trigger]")?.focus();
      onClose();
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [onClose]);

  const platforms = [deliveryConfig.rappi, deliveryConfig.pedidosYa].filter((platform) => platform.enabled);

  return (
    <div
      ref={panelRef}
      id={id}
      role="region"
      aria-label="Opciones de pedido"
      className="absolute inset-x-0 bottom-[calc(100%+12px)] z-20 rounded-2xl border border-[#E7DED8] bg-[#FFFCF9] p-3 text-[#302E2A] shadow-[0_12px_32px_-8px_rgba(48,46,42,0.28)] sm:p-4"
    >
      <div className="mb-2 flex min-h-11 items-center justify-between gap-1 sm:mb-3">
        <p className="text-sm font-semibold leading-tight tracking-tight sm:text-base">Haz tu pedido</p>
      <button
        type="button"
        onClick={() => {
          panelRef.current?.parentElement?.querySelector<HTMLButtonElement>("[data-order-trigger]")?.focus();
          onClose();
        }}
        aria-label="Cerrar opciones de pedido"
        className="-mr-2 grid size-11 shrink-0 place-items-center rounded-full text-[#77736D] transition-colors hover:bg-[#302E2A]/5 hover:text-[#302E2A] focus-visible:outline-[#FF8A00]"
      >
        <X size={17} strokeWidth={1.5} aria-hidden="true" />
      </button>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir en ${platform.name}`}
            className="flex min-h-11 min-w-0 items-center justify-center overflow-hidden rounded-xl border border-[#E7DED8] bg-white transition-colors duration-200 hover:border-[#FF8A00] focus-visible:outline-[#FF8A00]"
          >
            <Image src={platform.logo} alt={platform.name} width={1672} height={941} sizes="(min-width: 640px) 160px, 200px" className="h-auto w-full object-contain" />
          </a>
        ))}
      </div>
      <svg aria-hidden="true" width="24" height="12" viewBox="0 0 24 12" className="pointer-events-none absolute -bottom-[11px] left-1/2 -translate-x-1/2 overflow-visible">
        <path d="M0 0H24L14 10Q12 12 10 10Z" fill="#FFFCF9" />
        <path d="M0 0L10 10Q12 12 14 10L24 0" fill="none" stroke="#E7DED8" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
