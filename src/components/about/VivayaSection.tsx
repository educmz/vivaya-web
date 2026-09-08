import Image from "next/image";

const concepts = [
  "Sabor.",
  "Momentos.",
  "Compartir.",
  "Celebrar.",
];

export function VivayaSection() {
  return (
    <section className="bg-[#FFF9F3] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* TEXTO */}
          <div className="max-w-xl">
            <p
              className="flex items-center gap-2 leading-none text-[#FF8A00]"
              style={{
                fontFamily:
                  "var(--font-script), 'Pacifico', cursive",
              }}
            >
              <Image
                src="/images/brand/logo_naranja.png"
                alt="Vivaya"
                width={1774}
                height={887}
                className="inline-block h-9 w-auto translate-y-[3px] sm:h-11 sm:translate-y-[5px]"
                priority
              />
              <span className="text-2xl sm:text-3xl">es</span>
            </p>

            <div className="mt-5">
              {concepts.map((concept) => (
                <p
                  key={concept}
                  className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-[#302E2A] sm:text-5xl lg:text-6xl"
                >
                  {concept}
                </p>
              ))}
            </div>

            <p className="mt-8 max-w-md text-base leading-7 text-[#77736D] sm:text-lg sm:leading-8">
              Una propuesta que acompaña desde esos pequeños antojos del día
              hasta los momentos que merecen celebrarse.
            </p>
          </div>

          {/* COMPOSICIÓN DE IMÁGENES */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[#F3EADF] sm:rounded-[2rem]">
              <Image
                src="/images/about/about-lifestyle.webp"
                alt="Experiencia VIVAYA"
                fill
                sizes="(max-width: 1024px) 50vw, 28vw"
                className="object-cover"
              />
            </div>

            <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[#E2ECD4] sm:mt-16 sm:rounded-[2rem]">
              <Image
                src="/images/about/about-team.webp"
                alt="Momentos VIVAYA"
                fill
                sizes="(max-width: 1024px) 50vw, 28vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}