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

  const left = index % 2 === 0;
  const restingRotation = left ? -0.6 : 0.6;

  return (
    <motion.article
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 38,
              x: left ? -18 : 18,
              rotate: left ? -2.5 : 2.5,
              scale: 0.97,
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.05,
        ease,
      }}
      className="group relative"
    >
      {/* Hoja de color detrás */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-[5px] translate-y-[6px] rounded-[1.35rem] border border-[#073B3A]"
        style={{
          backgroundColor: item.accent,
        }}
      />

      <motion.div
        whileHover={
          reducedMotion
            ? undefined
            : {
                y: -6,
                rotate: 0,
                scale: 1.012,
              }
        }
        transition={{
          duration: 0.4,
          ease,
        }}
        className="relative overflow-hidden rounded-[1.35rem] border border-[#073B3A] bg-[#FFF7E8] p-2.5"
      >
        {/* VISUAL */}
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-[1rem]"
          style={{
            backgroundColor: item.surface,
            color: item.foreground,
          }}
        >
          <span
            className="absolute left-3 top-3 z-30 flex h-8 min-w-8 items-center justify-center rounded-full border border-current px-2 text-[9px] font-black"
            style={{
              color: item.foreground,
            }}
          >
            {item.number}
          </span>

          {item.imageMode === "photo" ? (
            <motion.div
              className="absolute inset-[5%] overflow-hidden rounded-[0.8rem]"
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                      scale: 1.025,
                    }
              }
              transition={{
                duration: 0.45,
                ease,
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 24vw"
                className="object-cover"
              />
            </motion.div>
          ) : (
            <>
              <motion.div
                className="absolute inset-x-[14%] bottom-[2%] top-[8%] z-20"
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: -10,
                        scale: 1.05,
                        rotate: left ? -1.5 : 1.5,
                      }
                }
                transition={{
                  duration: 0.4,
                  ease,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
                  className="object-contain drop-shadow-[0_18px_22px_rgba(7,59,58,0.18)]"
                />
              </motion.div>

              <motion.div
                aria-hidden="true"
                className="absolute bottom-[8%] left-[7%] h-12 w-12 rounded-full bg-[#FF8A00]"
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        x: -5,
                        y: -5,
                      }
                }
              />

              <motion.div
                aria-hidden="true"
                className="absolute right-[9%] top-[10%] h-6 w-10 rotate-[24deg] rounded-[100%_0_100%_0] bg-[#0F6B6D]"
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        x: 6,
                        y: -5,
                        rotate: 32,
                      }
                }
              />
            </>
          )}

          <span
            className="absolute bottom-3 right-3 text-[7px] font-black uppercase tracking-[0.25em] opacity-40"
            style={{
              color: item.foreground,
            }}
          >
            Vivaya
          </span>
        </div>

        {/* INFORMACIÓN */}
        <div className="px-1.5 pb-2 pt-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#FF8A00]">
                {item.categoryLabel}
              </p>

              <h3 className="mt-1.5 text-[clamp(1.35rem,2vw,2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#073B3A]">
                {item.name}
              </h3>
            </div>

            <motion.span
              aria-hidden="true"
              whileHover={{
                x: 3,
                y: -3,
              }}
              className="mt-1 shrink-0 text-xl text-[#073B3A]"
            >
              ↗
            </motion.span>
          </div>

          <p className="mt-3 line-clamp-2 min-h-[2.6rem] border-t border-[#073B3A]/12 pt-3 text-xs leading-5 text-[#073B3A]/58">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}