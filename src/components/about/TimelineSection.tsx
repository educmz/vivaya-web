import Image from "next/image";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

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
        <div className="max-w-2xl">
          <p
            className="text-2xl text-[#FF8A00] sm:text-3xl"
            style={{
              fontFamily: "var(--font-script), 'Pacifico', cursive",
            }}
          >
            Nuestro camino
          </p>

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
        </div>

        {/* DESKTOP */}
        <div className="relative mt-14 hidden md:block lg:mt-20">
          {/* LÍNEA */}
          <div className="absolute left-0 right-0 top-[9px] h-px bg-[#302E2A]/15" />

          <div className="relative grid grid-cols-4">
            {timelineItems.map((item, index) => (
              <article
                key={item.year}
                className={`
                  relative
                  pt-10
                  ${index === timelineItems.length - 1 ? "text-right" : ""}
                `}
              >
                {/* PUNTO */}
                <div
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
              </article>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="relative mt-12 md:hidden">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[#302E2A]/15" />

          <div className="space-y-10">
            {timelineItems.map((item) => (
              <article
                key={item.year}
                className="relative pl-10"
              >
                <div
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}