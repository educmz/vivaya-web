"use client";

import { useEffect, type ReactNode } from "react";
import { EventImage } from "./EventImage";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { ArrowRight, X } from "lucide-react";

import type { EventPackage } from "@/types/events";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

const body: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const block: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 26 },
  },
};

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
    if (!eventPackage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [eventPackage, onClose]);

  const whatsappUrl = process.env.NEXT_PUBLIC_VIVAYA_WHATSAPP_URL;

  function handleQuote() {
    if (!eventPackage || !whatsappUrl) return;
    const message = encodeURIComponent(
      `Hola, quisiera información sobre el paquete "${eventPackage.name}" de VIVAYA.`,
    );
    const separator = whatsappUrl.includes("?") ? "&" : "?";
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
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#302E2A]/50 p-3 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 60, scale: 0.92 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.94 }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 240, damping: 28 }
            }
            style={{
              fontFamily:
                "var(--font-carta), 'Montserrat', system-ui, sans-serif",
            }}
            className="relative flex max-h-[calc(100dvh-24px)] min-w-0 w-full flex-col overflow-hidden rounded-2xl bg-background shadow-[0_40px_120px_-20px_rgba(48,46,42,0.55)] sm:max-h-[90svh] sm:max-w-4xl sm:rounded-[2.25rem] lg:max-w-5xl"
          >
            {/* CERRAR */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="group absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#302E2A] shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white"
            >
              <X
                size={19}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </button>

            <div className="min-h-0 overflow-y-auto overscroll-contain">
              {/* HEADER */}
              <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#FF8A00] via-[#FF9A20] to-[#E67C00] px-4 pb-5 pt-6 sm:px-10 sm:pb-10 sm:pt-12">
                {/* Blobs decorativos */}
                {!reducedMotion && (
                  <>
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-white/15 blur-sm"
                      animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 7,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-[#302E2A]/10 blur-sm"
                      animate={{ y: [0, -14, 0], x: [0, 12, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 8.5,
                        ease: "easeInOut",
                      }}
                    />
                  </>
                )}

                <div className="relative pr-12">
                  <motion.p
                    initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05, duration: 0.4, ease }}
                    className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFF7E8]/80"
                  >
                    Eventos VIVAYA
                  </motion.p>

                  <motion.h2
                    id="event-modal-title"
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.5, ease }}
                    className="mt-2 max-w-2xl break-words text-xl min-[400px]:text-2xl font-extrabold uppercase leading-[1.05] tracking-[0.01em] text-[#FFF7E8] sm:text-4xl lg:text-5xl"
                  >
                    {eventPackage.name}
                  </motion.h2>

                  {eventPackage.description && (
                    <motion.p
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5, ease }}
                      className="mt-3 max-w-xl text-sm leading-6 text-[#FFF7E8]/85"
                    >
                      {eventPackage.description}
                    </motion.p>
                  )}

                  <motion.div
                    initial={
                      reducedMotion ? false : { opacity: 0, scale: 0.8, y: 10 }
                    }
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.28,
                      type: "spring",
                      stiffness: 320,
                      damping: 18,
                    }}
                    className="mt-5 inline-flex items-baseline gap-2 rounded-full bg-background px-4 py-2 shadow-lg"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#302E2A]/55">
                      Desde
                    </span>
                    <span className="text-lg font-extrabold text-[#302E2A]">
                      S/ {eventPackage.priceFrom.toFixed(2)}
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* CONTENIDO */}
              <motion.div
                variants={reducedMotion ? undefined : body}
                initial={reducedMotion ? false : "hidden"}
                animate="visible"
                className="min-w-0 p-4 sm:p-10"
              >
                <div className="relative mb-5 h-52 overflow-hidden rounded-xl bg-[#F5EDDF] sm:mb-8 sm:h-80">
                  <EventImage src={eventPackage.image} alt={eventPackage.name} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 944px" />
                </div>
                {/* PRECIOS */}
                {eventPackage.pricing && eventPackage.pricing.length > 0 && (
                  <motion.section variants={block}>
                    <SectionHeading>Opciones</SectionHeading>

                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#302E2A]/10 bg-white">
                      {eventPackage.pricing.map((option, index) => (
                        <motion.div
                          key={option.id}
                          whileHover={
                            reducedMotion ? undefined : { x: 4 }
                          }
                          className={`flex items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-5 sm:py-4 transition-colors hover:bg-background ${
                            index > 0 ? "border-t border-[#302E2A]/10" : ""
                          }`}
                        >
                          <div>
                            <p className="text-sm font-semibold text-[#302E2A]">
                              {option.label}
                            </p>
                            {option.note && (
                              <p className="mt-1 text-xs text-[#302E2A]/60">
                                {option.note}
                              </p>
                            )}
                          </div>
                          <span className="shrink-0 text-base font-extrabold text-[#302E2A]">
                            S/ {option.price.toFixed(2)}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* INCLUYE */}
                <motion.section variants={block} className="mt-6 first:mt-0 sm:mt-9">
                  <SectionHeading>Incluye</SectionHeading>

                  <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {eventPackage.includes.map((includedItem, index) => (
                      <motion.li
                        key={includedItem}
                        initial={
                          reducedMotion ? false : { opacity: 0, x: -12 }
                        }
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: Math.min(index * 0.04, 0.3),
                          duration: 0.35,
                          ease,
                        }}
                        className="flex gap-3 text-sm leading-5 text-[#302E2A]/80"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-[#FF8A00]"
                        />
                        <span>{includedItem}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.section>

                {/* DATOS DEL SERVICIO */}
                {(eventPackage.durationHours ||
                  eventPackage.staffCount ||
                  eventPackage.cartsCount ||
                  eventPackage.mobilityIncluded !== undefined) && (
                  <motion.section variants={block} className="mt-6 first:mt-0 sm:mt-9">
                    <SectionHeading>Detalles del servicio</SectionHeading>

                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {eventPackage.durationHours && (
                        <DetailItem
                          label="Duración"
                          value={`${eventPackage.durationHours} h`}
                          reducedMotion={reducedMotion}
                        />
                      )}
                      {eventPackage.staffCount && (
                        <DetailItem
                          label="Personal"
                          value={String(eventPackage.staffCount)}
                          reducedMotion={reducedMotion}
                        />
                      )}
                      {eventPackage.cartsCount && (
                        <DetailItem
                          label="Carritos"
                          value={String(eventPackage.cartsCount)}
                          reducedMotion={reducedMotion}
                        />
                      )}
                      {eventPackage.mobilityIncluded !== undefined && (
                        <DetailItem
                          label="Movilidad"
                          value={
                            eventPackage.mobilityIncluded
                              ? "Incluida"
                              : "No incluida"
                          }
                          reducedMotion={reducedMotion}
                        />
                      )}
                    </div>
                  </motion.section>
                )}

                {/* NOTAS */}
                {eventPackage.notes && eventPackage.notes.length > 0 && (
                  <motion.section
                    variants={block}
                    className="mt-9 rounded-2xl bg-[#F5EDDF] p-5"
                  >
                    <SectionHeading>Ten en cuenta</SectionHeading>
                    <ul className="mt-3 space-y-1.5">
                      {eventPackage.notes.map((note) => (
                        <li
                          key={note}
                          className="text-xs leading-5 text-[#302E2A]/75"
                        >
                          {note}
                        </li>
                      ))}
                    </ul>
                  </motion.section>
                )}

                {/* CTA */}
                <motion.div
                  variants={block}
                  className="mt-6 border-t border-[#302E2A]/10 pt-5 sm:mt-9 sm:pt-7"
                >
                  <motion.button
                    type="button"
                    onClick={handleQuote}
                    disabled={!whatsappUrl}
                    whileHover={
                      reducedMotion || !whatsappUrl ? undefined : { scale: 1.02 }
                    }
                    whileTap={
                      reducedMotion || !whatsappUrl ? undefined : { scale: 0.98 }
                    }
                    className="group/btn relative flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full bg-[#302E2A] px-3 py-3 text-xs font-bold uppercase tracking-[0.04em] sm:px-6 sm:py-3.5 sm:text-sm sm:tracking-[0.12em] text-white transition-colors hover:bg-[#454039] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center gap-2.5">
                      Cotizar por WhatsApp
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1 motion-reduce:transition-none"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[700ms] ease-out group-hover/btn:translate-x-full motion-reduce:hidden"
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.08em] text-[#302E2A]">
      {children}
      <span className="h-px flex-1 bg-[#302E2A]/12" />
    </h3>
  );
}

function DetailItem({
  label,
  value,
  reducedMotion,
}: {
  label: string;
  value: string;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      whileHover={reducedMotion ? undefined : { y: -3 }}
      className="rounded-2xl bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(48,46,42,0.05)]"
    >
      <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[#302E2A]/50">
        {label}
      </span>
      <span className="mt-1 block text-sm font-extrabold text-[#302E2A]">
        {value}
      </span>
    </motion.div>
  );
}
