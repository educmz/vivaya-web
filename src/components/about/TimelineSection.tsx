"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import {
  AboutItem,
  AboutLine,
  AboutReveal,
  aboutDotVariants,
  aboutItemVariants,
} from "@/components/about/AboutMotion";

const timelineItems = [
  {
    year: "2022",
    title: "Los primeros pasos",
  },
  {
    year: "2023",
    title: "Nuevas experiencias",
  },
  {
    year: "2024",
    title: "Seguimos creciendo",
  },
  {
    year: "2026",
    title: "VIVAYA",
  },
];

export function TimelineSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-10">
        {/* CABECERA */}
        <AboutReveal className="max-w-2xl" amount={0.5}>
          <AboutItem>
            <p
              className="text-2xl text-[#FF8A00] sm:text-3xl"
              style={{
                fontFamily: "var(--font-script), 'Pacifico', cursive",
              }}
            >
              Nuestro camino
            </p>
          </AboutItem>

          <AnimatedTitle
            text={"Una historia que\nsigue creciendo."}
            className="
              mt-4
              text-4xl

              leading-[1.08]
              tracking-[-0.02em]
              text-[#302E2A]
              sm:text-5xl
              lg:text-6xl
             font-heading font-normal"
          />
        </AboutReveal>

        {/* DESKTOP */}
        <div className="relative mt-14 hidden md:block lg:mt-20">
          {/* LÍNEA */}
          <AboutLine
            axis="x"
            className="absolute left-0 right-0 top-[9px] h-px bg-[#302E2A]/15"
          />

          <AboutReveal
            className="relative grid grid-cols-4"
            amount={0.3}
            stagger={0.16}
            delay={0.2}
          >
            {timelineItems.map((item, index) => (
              <motion.article
                key={item.year}
                variants={aboutItemVariants}
                className={`
                  relative
                  pt-10
                  ${index === timelineItems.length - 1 ? "text-right" : ""}
                `}
              >
                {/* PUNTO */}
                <motion.div
                  variants={aboutDotVariants}
                  className={`
                    absolute
                    top-0
                    size-[18px]
                    rounded-full
                    border-[5px]
                    border-[#FFF9F3]
                    bg-[#FF8A00]
                    ${
                      index === timelineItems.length - 1
                        ? "right-0"
                        : "left-0"
                    }
                  `}
                />

                <div
                  className={
                    index === timelineItems.length - 1
                      ? "ml-auto max-w-[220px]"
                      : "max-w-[220px]"
                  }
                >
                  <span
                    className="text-xl text-[#FF8A00]"
                    style={{
                      fontFamily:
                        "var(--font-script), 'Pacifico', cursive",
                    }}
                  >
                    {item.year}
                  </span>

                  <h3
                    className="
                      mt-2
                      text-2xl

                      leading-[1.1]
                      tracking-[-0.02em]
                      text-[#302E2A]
                      lg:text-3xl
                     font-heading font-normal"
                  >
                    {item.title === "VIVAYA" ? (
                      <Image
                        src="/images/brand/logo_negro.png"
                        alt="VIVAYA"
                        width={1774}
                        height={887}
                        className={`h-10 w-auto lg:h-12 ${index === timelineItems.length - 1 ? "ml-auto" : ""}`}
                      />
                    ) : (
                      item.title
                    )}
                  </h3>
                </div>
              </motion.article>
            ))}
          </AboutReveal>
        </div>

        {/* MOBILE */}
        <div className="relative mt-12 md:hidden">
          <AboutLine
            axis="y"
            className="absolute bottom-0 left-[7px] top-0 w-px bg-[#302E2A]/15"
          />

          <AboutReveal
            className="space-y-10"
            amount={0.15}
            stagger={0.14}
          >
            {timelineItems.map((item) => (
              <motion.article
                key={item.year}
                variants={aboutItemVariants}
                className="relative pl-10"
              >
                <motion.div
                  variants={aboutDotVariants}
                  className="
                    absolute
                    left-0
                    top-1
                    size-[15px]
                    rounded-full
                    border-4
                    border-[#FFF9F3]
                    bg-[#FF8A00]
                  "
                />

                <span
                  className="text-lg text-[#FF8A00]"
                  style={{
                    fontFamily:
                      "var(--font-script), 'Pacifico', cursive",
                  }}
                >
                  {item.year}
                </span>

                <h3
                  className="
                    mt-1
                    text-2xl

                    tracking-[-0.02em]
                    text-[#302E2A]
                   font-heading font-normal"
                >
                  {item.title === "VIVAYA" ? (
                    <Image
                      src="/images/brand/logo_negro.png"
                      alt="VIVAYA"
                      width={1774}
                      height={887}
                      className="h-9 w-auto"
                    />
                  ) : (
                    item.title
                  )}
                </h3>
              </motion.article>
            ))}
          </AboutReveal>
        </div>
      </div>
    </section>
  );
}
