import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="bg-[#FFF9F3] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div
        className="
          relative
          mx-auto
          max-w-[1360px]
          overflow-hidden
          rounded-[2rem]
          bg-[#F8D6C3]
          px-6
          py-14
          text-center
          sm:px-10
          sm:py-16
          lg:px-16
          lg:py-20
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -left-24
            -top-24
            size-64
            rounded-full
            bg-[#F7E8B6]/60
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -bottom-28
            -right-20
            size-72
            rounded-full
            bg-[#BFD9B7]/45
          "
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2
            className="
              text-4xl
              font-semibold
              leading-[1]
              tracking-[-0.045em]
              text-[#302E2A]
              sm:text-5xl
              lg:text-6xl
            "
          >
            ¿Ya sabes qué se te antoja?
          </h2>

          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >
            <Link
              href="/menu"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                rounded-full
                bg-[#FF8A00]
                px-7
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-[#E67C00]
              "
            >
              Ver carta
            </Link>

            <Link
              href="/events"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                rounded-full
                border
                border-[#302E2A]/15
                bg-white/60
                px-7
                text-sm
                font-semibold
                text-[#302E2A]
                transition-colors
                hover:bg-white
              "
            >
              Ver eventos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}