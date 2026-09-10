"use client";

import { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { deliveryConfig } from "@/config/delivery";

interface DeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeliveryModal({
  isOpen,
  onClose,
}: DeliveryModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const platforms = [
    deliveryConfig.rappi,
    deliveryConfig.pedidosYa,
  ].filter((platform) => platform.enabled);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/25 px-4 pb-4 backdrop-blur-[1px] sm:items-center sm:pb-0"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delivery-title"
        className="relative w-full max-w-[390px] rounded-[26px] bg-[#FFF8F3] p-5 shadow-[0_24px_70px_rgba(48,46,42,0.16)] sm:p-6"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#DED6D0] text-[#302E2A] transition hover:border-[#302E2A] hover:bg-[#302E2A] hover:text-white"
        >
          <X size={15} />
        </button>

        <div className="pt-2 text-center">
          <p
            className="text-lg text-[#FF8A00]"
            style={{
              fontFamily:
                "var(--font-script), 'Pacifico', cursive",
            }}
          >
            A tu manera
          </p>

          <h2
            id="delivery-title"
            className="mt-1 font-heading text-2xl text-[#302E2A] sm:text-3xl"
          >
            Haz tu pedido
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group relative flex min-h-[110px] flex-col items-center justify-center rounded-[20px] border border-[#E6DED8] bg-white px-4 text-center transition duration-300 hover:-translate-y-0.5 hover:border-[#FF8A00] hover:shadow-[0_10px_25px_rgba(48,46,42,0.08)]"
            >
              <span className="font-heading text-xl text-[#302E2A] sm:text-2xl">
                {platform.name}
              </span>

              <span className="mt-2 flex items-center gap-1 text-xs font-medium text-[#8F8983] transition group-hover:text-[#FF8A00]">
                Pedir ahora
                <ArrowUpRight
                  size={13}
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}