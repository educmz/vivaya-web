"use client";

import Image from "next/image";
import { motion } from "motion/react";

import type { CartaItem } from "@/data/carta";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

export function CartaMenuCard({
  item,
  index,
}: {
  item: CartaItem;
  index: number;
}) {
  const reducedMotion = useReducedMotion();

  const leftCard = index % 2 === 0;

  const restingRotation = leftCard ? -1.4 : 1.4;

  return (
    <motion.article
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 70,
              x: leftCard ? -45 : 45,
              rotate: leftCard ? -5 : 5,
              scale: 0.96,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        rotate: restingRotation,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease,
      }}
      className="group relative"
    >
      {/* papel detrás */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.8rem] border-2 border-[#073B3A]"
        style={{
          backgroundColor: item.accent,
        }}
      />

      {/* CARD */}
      <motion.div
        whileHover={
          reducedMotion
            ? undefined
            : {
                y: -8,
                rotate: 0,
                scale: 1.01,
              }
        }
        transition={{
          duration: 0.45,
          ease,
        }}
        className="relative rounded-[1.8rem] border-2 border-[#073B3A] bg-[#FFF7E8] p-3 sm:p-4"
      >
        {/* ZONA VISUAL */}
        <div
          className="relative min-h-[23rem] overflow-visible rounded-[1.3rem] sm:min-h-[28rem] lg:min-h-[32rem]"
          style={{
            backgroundColor: item.surface,
            color: item.foreground,
          }}
        >
          {/* número */}
          <div
            className="absolute left-5 top-5 z-30 flex h-11 min-w-11 items-center justify-center rounded-full border border-current px-3 text-xs font-black"
            style={{
              color: item.foreground,
            }}
          >
            {item.number}
          </div>

          {/* círculo decorativo */}
          <motion.div
            aria-hidden="true"
            className="absolute right-[7%] top-[10%] h-32 w-32 rounded-full border border-current opacity-15 sm:h-44 sm:w-44"
            whileHover={
              reducedMotion
                ? undefined
                : {
                    rotate: 12,
                    scale: 1.08,
                  }
            }
          />

          {item.imageMode === "photo" ? (
            <motion.div
              className="absolute inset-[8%] overflow-hidden rounded-[1rem]"
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                      scale: 1.025,
                    }
              }
              transition={{
                duration: 0.55,
                ease,
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </motion.div>
          ) : (
            <>
              {/* producto sobresaliendo */}
              <motion.div
                className="absolute inset-x-[12%] bottom-[-7%] top-[9%] z-20"
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: -18,
                        rotate: leftCard ? -2 : 2,
                        scale: 1.055,
                      }
                }
                transition={{
                  duration: 0.5,
                  ease,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-contain drop-shadow-[0_28px_32px_rgba(7,59,58,0.2)]"
                />
              </motion.div>

              {/* naranja flotante */}
              <motion.div
                aria-hidden="true"
                className="absolute bottom-[7%] left-[6%] z-10 h-20 w-20 rounded-full bg-[#FF8A00] sm:h-24 sm:w-24"
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        x: -9,
                        y: -7,
                        rotate: -8,
                      }
                }
                transition={{
                  duration: 0.45,
                  ease,
                }}
              />

              {/* hojita */}
              <motion.div
                aria-hidden="true"
                className="absolute right-[10%] top-[10%] z-20 h-10 w-16 rotate-[25deg] rounded-[100%_0_100%_0] bg-[#0F6B6D]"
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        x: 10,
                        y: -8,
                        rotate: 35,
                      }
                }
                transition={{
                  duration: 0.45,
                  ease,
                }}
              />
            </>
          )}

          {/* texto vertical decorativo */}
          <span
            className="absolute bottom-4 right-4 text-[9px] font-black uppercase tracking-[0.25em] opacity-40"
            style={{
              color: item.foreground,
            }}
          >
            Vivaya
          </span>
        </div>

        {/* INFO */}
        <div className="px-2 pb-3 pt-7">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.23em] text-[#FF8A00]">
                {item.categoryLabel}
              </p>

              <h3 className="mt-2 text-[clamp(2.3rem,4vw,4rem)] font-black uppercase leading-[0.86] tracking-[-0.065em] text-[#073B3A]">
                {item.name}
              </h3>
            </div>

            <motion.span
              aria-hidden="true"
              whileHover={{
                x: 5,
                y: -5,
              }}
              className="mt-2 text-3xl font-light text-[#073B3A]"
            >
              ↗
            </motion.span>
          </div>

          <div className="mt-6 border-t border-[#073B3A]/15 pt-5">
            <p className="max-w-lg text-sm leading-6 text-[#073B3A]/60 sm:text-base">
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}