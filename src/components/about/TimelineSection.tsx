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
    <section className="bg-[#FFF9F3] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        {/* CABECERA */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F07D42] sm:text-sm">
            Nuestro camino
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-semibold
              leading-[1]
              tracking-[-0.045em]
              text-[#302E2A]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Una historia que
            <br />
            sigue creciendo.
          </h2>
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
                    bg-[#F07D42]
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
                  <span className="text-sm font-semibold text-[#F07D42]">
                    {item.year}
                  </span>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.035em]
                      text-[#302E2A]
                      lg:text-3xl
                    "
                  >
                    {item.title}
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
                    bg-[#F07D42]
                  "
                />

                <span className="text-xs font-semibold text-[#F07D42]">
                  {item.year}
                </span>

                <h3
                  className="
                    mt-1
                    text-2xl
                    font-semibold
                    tracking-[-0.035em]
                    text-[#302E2A]
                  "
                >
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}