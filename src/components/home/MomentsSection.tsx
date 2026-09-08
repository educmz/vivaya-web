import Image from "next/image";

const moments = [
  {
    id: "pause",
    title: "Para una pausa.",
    image: "/images/home/moments/pause.webp",
    background: "#DCEEF2",
  },
  {
    id: "share",
    title: "Para compartir.",
    image: "/images/home/moments/share.webp",
    background: "#F9E9B8",
  },
  {
    id: "celebrate",
    title: "Para celebrar.",
    image: "/images/home/moments/celebrate.webp",
    background: "#E2ECD4",
  },
] as const;

export function MomentsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="mb-8 sm:mb-10">
          <p className="text-sm font-semibold text-[#F07D42]">
            Momentos VIVAYA
          </p>

          <h2
            className="
              mt-2
              max-w-xl
              text-3xl
              font-semibold
              tracking-[-0.035em]
              text-[#302E2A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Hay un VIVAYA para cada momento.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {moments.map((moment) => (
            <article
              key={moment.id}
              className="
                group
                overflow-hidden
                rounded-[1.75rem]
              "
              style={{
                backgroundColor: moment.background,
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  sizes="
                    (max-width: 768px) 100vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.025]
                  "
                />
              </div>

              <div className="p-5 sm:p-6">
                <h3
                  className="
                    text-2xl
                    font-semibold
                    tracking-[-0.025em]
                    text-[#302E2A]
                  "
                >
                  {moment.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}