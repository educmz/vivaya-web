import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function AboutClosing() {
  return (
    <section className="relative overflow-hidden bg-[#FF8A00] py-28 sm:py-36 lg:py-44">
      <div
        className="absolute -bottom-48 -right-32 h-[34rem] w-[34rem] rounded-full border-[5rem] border-white/10"
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[#073B3A]/65">
          Vivaya
        </p>

        <h2 className="mx-auto mt-5 max-w-5xl text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.075em] text-white">
          Activa lo natural.
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-white/80">
          Descubre una forma más fresca de acompañar tu día.
        </p>

        <div className="mt-10">
          <Button
            href="/productos"
            className="min-h-14 bg-[#073B3A] px-8 text-white hover:bg-[#0F6B6D]"
          >
            Conoce nuestros productos
          </Button>
        </div>
      </Container>
    </section>
  );
}