import Image from "next/image";

import { Parallax } from "@/components/animations/Parallax";
import { Container } from "@/components/ui/Container";
import { aboutGallery } from "@/data/about";

export function AboutGallery() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#FF8A00]">
              Somos Vivaya
            </p>

            <h2 className="mt-4 max-w-xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#073B3A] sm:text-6xl lg:text-7xl">
              Más que una bebida.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-[#073B3A]/65 lg:justify-self-end">
            Somos una propuesta que busca acercar frescura, energía y bienestar
            a los momentos que forman parte de tu día.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-12 lg:gap-8">
          {aboutGallery.map((item, index) => {
            const classes = [
              "col-span-2 lg:col-span-5 lg:row-span-2",
              "col-span-1 lg:col-span-3 lg:mt-24",
              "col-span-1 lg:col-span-4",
              "col-span-2 lg:col-span-7 lg:-mt-12",
            ];

            const heights = [
              "aspect-[4/5]",
              "aspect-[3/4]",
              "aspect-square",
              "aspect-[16/9]",
            ];

            return (
              <figure
                key={item.src}
                className={classes[index]}
              >
                <Parallax
                  distance={index % 2 === 0 ? 24 : 38}
                  className={`relative overflow-hidden rounded-[2rem] bg-[#E9F5EE] ${heights[index]}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 40vw"
                    className="object-cover transition duration-700 hover:scale-[1.025]"
                  />
                </Parallax>

                <figcaption className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-[#073B3A]/50">
                  {item.label}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}