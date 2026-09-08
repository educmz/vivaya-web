import Image from "next/image";
import Link from "next/link";

export function AboutPreviewSection() {
  return (
    <section className="bg-[#FFF9F3] py-16 sm:py-20 lg:py-24">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          items-center
          gap-10
          px-5
          sm:px-8
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-16
          lg:px-10
        "
      >
        {/* IMAGEN */}
        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden
            rounded-[1.75rem]
            bg-[#F3EADF]
            lg:aspect-[6/5]
          "
        >
          <Image
            src="/images/home/about/conocenos.webp"
            alt="Conoce Vivaya"
            fill
            sizes="
              (max-width: 1024px) 100vw,
              55vw
            "
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div className="max-w-lg">
          <p className="text-sm font-semibold text-[#FF8A00]">
            Conoce VIVAYA
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-semibold
              leading-[1.02]
              tracking-[-0.045em]
              text-[#302E2A]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Sabor para disfrutar a tu manera.
          </h2>

          <p
            className="
              mt-6
              max-w-md
              text-base
              leading-7
              text-[#77736D]
            "
          >
            Una propuesta fresca para disfrutar, compartir y
            celebrar cada momento.
          </p>

          <Link
            href="/about"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-[#302E2A]
              transition-colors
              hover:text-[#FF8A00]
            "
          >
            Conócenos
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
