import { aboutValues } from "@/data/about";
import { Container } from "@/components/ui/Container";

export function AboutValues() {
  return (
    <section className="bg-[#073B3A] py-24 text-white sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#FFB347]">
              Nuestra esencia
            </p>

            <h2 className="mt-4 max-w-2xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Lo natural se siente.
            </h2>
          </div>

          <p className="max-w-lg self-end text-base leading-7 text-white/60 lg:justify-self-end">
            Seis ideas que resumen la experiencia que queremos construir
            alrededor de Vivaya.
          </p>
        </div>

        <div className="mt-20 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {aboutValues.map((value) => (
            <article
              key={value.number}
              className="group min-h-64 border-b border-r border-white/15 p-7 transition-colors duration-500 hover:bg-[#FF8A00] sm:p-9"
            >
              <span className="text-xs font-black tracking-[0.2em] text-[#FFB347] transition-colors group-hover:text-white/70">
                {value.number}
              </span>

              <h3 className="mt-14 text-3xl font-black uppercase tracking-[-0.045em]">
                {value.title}
              </h3>

              <p className="mt-4 max-w-xs leading-7 text-white/55 transition-colors group-hover:text-white/80">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}