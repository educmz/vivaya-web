"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

import type { EventPackage } from "@/types/events";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

interface EventDetailsModalProps {
  eventPackage: EventPackage | null;
  onClose: () => void;
}

export function EventDetailsModal({
  eventPackage,
  onClose,
}: EventDetailsModalProps) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!eventPackage) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [eventPackage, onClose]);

  const whatsappUrl =
    process.env.NEXT_PUBLIC_VIVAYA_WHATSAPP_URL;

  function handleQuote() {
    if (!eventPackage || !whatsappUrl) {
      return;
    }

    const message = encodeURIComponent(
      `Hola, quisiera información sobre el paquete "${eventPackage.name}" de VIVAYA.`,
    );

    const separator = whatsappUrl.includes("?")
      ? "&"
      : "?";

    window.open(
      `${whatsappUrl}${separator}text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <AnimatePresence>
      {eventPackage && (
        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-end
            justify-center
            bg-[#302E2A]/30
            p-0
            backdrop-blur-[2px]
            sm:items-center
            sm:p-5
          "
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              onClose();
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                    scale: 0.98,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,
              ease,
            }}
            className="
              relative
              max-h-[92svh]
              w-full
              overflow-y-auto
              rounded-t-[2rem]
              bg-[#FFF9F3]
              shadow-2xl
              sm:max-w-3xl
              sm:rounded-[2rem]
            "
          >
            {/* CERRAR */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/90
                text-[#302E2A]
                shadow-sm
                backdrop-blur
                transition-colors
                hover:bg-white
              "
            >
              <X size={18} />
            </button>

            {/* IMAGEN */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F5EEE5]">
              <Image
                src={eventPackage.image}
                alt={eventPackage.name}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            {/* CONTENIDO */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div>
                  <p className="text-sm font-medium text-[#52734C]">
                    Eventos VIVAYA
                  </p>

                  <h2
                    id="event-modal-title"
                    className="mt-2 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#302E2A]"
                  >
                    {eventPackage.name}
                  </h2>

                  {eventPackage.description && (
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#77736D]">
                      {eventPackage.description}
                    </p>
                  )}
                </div>

                <div className="shrink-0 sm:text-right">
                  <span className="block text-xs text-[#77736D]">
                    Desde
                  </span>

                  <span className="mt-1 block text-2xl font-semibold text-[#C96532]">
                    S/{" "}
                    {eventPackage.priceFrom.toFixed(
                      2,
                    )}
                  </span>
                </div>
              </div>

              {/* PRECIOS */}
              {eventPackage.pricing &&
                eventPackage.pricing.length > 0 && (
                  <section className="mt-8">
                    <h3 className="text-base font-semibold text-[#302E2A]">
                      Opciones
                    </h3>

                    <div className="mt-3 divide-y divide-[#302E2A]/8 overflow-hidden rounded-2xl border border-[#302E2A]/8 bg-white">
                      {eventPackage.pricing.map(
                        (option) => (
                          <div
                            key={option.id}
                            className="flex items-center justify-between gap-4 px-4 py-3.5"
                          >
                            <div>
                              <p className="text-sm font-medium text-[#302E2A]">
                                {option.label}
                              </p>

                              {option.note && (
                                <p className="mt-1 text-xs text-[#77736D]">
                                  {option.note}
                                </p>
                              )}
                            </div>

                            <span className="shrink-0 text-sm font-semibold text-[#C96532]">
                              S/{" "}
                              {option.price.toFixed(
                                2,
                              )}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </section>
                )}

              {/* INCLUYE */}
              <section className="mt-8">
                <h3 className="text-base font-semibold text-[#302E2A]">
                  Incluye
                </h3>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {eventPackage.includes.map(
                    (includedItem) => (
                      <li
                        key={includedItem}
                        className="flex gap-3 text-sm leading-5 text-[#5F5B55]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8CFA3]"
                        />

                        <span>
                          {includedItem}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </section>

              {/* DATOS DEL SERVICIO */}
              {(eventPackage.durationHours ||
                eventPackage.staffCount ||
                eventPackage.cartsCount ||
                eventPackage.mobilityIncluded !==
                  undefined) && (
                <section className="mt-8">
                  <h3 className="text-base font-semibold text-[#302E2A]">
                    Detalles del servicio
                  </h3>

                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {eventPackage.durationHours && (
                      <DetailItem
                        label="Duración"
                        value={`${eventPackage.durationHours} h`}
                      />
                    )}

                    {eventPackage.staffCount && (
                      <DetailItem
                        label="Personal"
                        value={String(
                          eventPackage.staffCount,
                        )}
                      />
                    )}

                    {eventPackage.cartsCount && (
                      <DetailItem
                        label="Carritos"
                        value={String(
                          eventPackage.cartsCount,
                        )}
                      />
                    )}

                    {eventPackage.mobilityIncluded !==
                      undefined && (
                      <DetailItem
                        label="Movilidad"
                        value={
                          eventPackage.mobilityIncluded
                            ? "Incluida"
                            : "No incluida"
                        }
                      />
                    )}
                  </div>
                </section>
              )}

              {/* NOTAS */}
              {eventPackage.notes &&
                eventPackage.notes.length > 0 && (
                  <section className="mt-8 rounded-2xl bg-[#FDE8D8]/65 p-4">
                    <h3 className="text-sm font-semibold text-[#302E2A]">
                      Ten en cuenta
                    </h3>

                    <ul className="mt-2 space-y-1.5">
                      {eventPackage.notes.map(
                        (note) => (
                          <li
                            key={note}
                            className="text-xs leading-5 text-[#6E6158]"
                          >
                            {note}
                          </li>
                        ),
                      )}
                    </ul>
                  </section>
                )}

              {/* CTA */}
              <div className="mt-8 border-t border-[#302E2A]/8 pt-6">
                <button
                  type="button"
                  onClick={handleQuote}
                  disabled={!whatsappUrl}
                  className="
                    min-h-12
                    w-full
                    rounded-full
                    bg-[#A8CFA3]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-[#30482C]
                    transition-colors
                    hover:bg-[#98BE92]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  Cotizar por WhatsApp
                </button>

                {!whatsappUrl && (
                  <p className="mt-2 text-center text-xs text-[#77736D]">
                    Configura el número de WhatsApp para habilitar la cotización.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white px-4 py-3">
      <span className="block text-[11px] text-[#77736D]">
        {label}
      </span>

      <span className="mt-1 block text-sm font-semibold text-[#302E2A]">
        {value}
      </span>
    </div>
  );
}
