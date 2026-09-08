import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";

export function CookiePolicy() {
  return (
    <div className="relative overflow-hidden bg-[#FFF7E8] pt-24 text-[#3E2A1B] sm:pt-[100px] lg:pt-[108px]">
      {/* Decoración pastel */}
      <div
        className="pointer-events-none absolute -left-36 top-40 size-[28rem] rounded-full bg-[#F7CFAE]/35 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 top-[30rem] size-[30rem] rounded-full bg-[#DCEBD7]/55 blur-[120px]"
        aria-hidden="true"
      />

      {/* Hero */}
      <section className="relative pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#3F7D4F]">
              Política de cookies
            </p>

            <h1 className="font-accent mt-5 max-w-3xl text-[clamp(3.2rem,8vw,6.6rem)] leading-[0.82] text-[#E8792E]">
              Navegar,
              <br />
              sin complicaciones.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#3E2A1B]/70 sm:text-lg">
              Te explicamos de forma sencilla cuándo pueden utilizarse cookies
              o tecnologías similares al visitar Vivanya.
            </p>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[#3E2A1B]/45">
              Última actualización · Septiembre de 2026
            </p>
          </div>
        </Container>
      </section>

      {/* Contenido */}
      <section className="relative pb-24 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <CookieSection number="01" title="Qué son las cookies">
              <p>
                Las cookies son pequeños archivos o identificadores que algunos
                sitios y servicios pueden utilizar para recordar información o
                permitir determinadas funciones.
              </p>
            </CookieSection>

            <CookieSection number="02" title="Qué utiliza Vivanya">
              <p>
                Actualmente Vivanya no utiliza cookies propias para publicidad,
                analítica de comportamiento ni creación de perfiles.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <StatusPill>Sin publicidad personalizada</StatusPill>
                <StatusPill>Sin analítica propia</StatusPill>
                <StatusPill>Sin perfiles</StatusPill>
              </div>
            </CookieSection>

            <CookieSection number="03" title="Servicios de terceros">
              <p>
                Algunas funciones externas pueden utilizar sus propias cookies
                o identificadores cuando decides activarlas.
              </p>

              <div className="mt-7 rounded-[1.5rem] border border-[#073B3A]/10 bg-[#F7FBF3]/75 p-6 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-black text-[#073B3A]">
                      Google Maps
                    </p>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#3E2A1B]/65">
                      Utilizamos Google Maps para mostrar la ubicación de
                      nuestros locales. El mapa solo se carga cuando decides
                      activarlo.
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-[#DCEBD7] px-3 py-1.5 text-xs font-bold text-[#315F3A]">
                    Tercero
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#3E2A1B]/65">
                  Al cargarlo, Google puede procesar información técnica de tu
                  conexión o dispositivo y utilizar cookies o identificadores
                  conforme a sus propias políticas.
                </p>

                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex font-bold text-[#3F7D4F] underline decoration-[#3F7D4F]/30 underline-offset-4 transition hover:text-[#E8792E]"
                >
                  Política de Privacidad de Google
                </a>
              </div>
            </CookieSection>

            <CookieSection number="04" title="Tu elección">
              <p>
                Los servicios externos opcionales que puedan utilizar cookies
                no se cargan hasta que decides activarlos.
              </p>

              <p>
                En el caso del mapa de nuestros locales, podrás elegir
                expresamente si deseas cargar Google Maps.
              </p>
            </CookieSection>

            <CookieSection number="05" title="Cómo controlar las cookies">
              <p>
                También puedes bloquear o eliminar cookies desde la
                configuración de tu navegador.
              </p>

              <p>
                Las cookies que puedan ser instaladas por servicios externos
                son gestionadas por sus respectivos proveedores y no
                directamente por Vivanya.
              </p>
            </CookieSection>

            <CookieSection number="06" title="Cambios en esta política">
              <p>
                Si incorporamos nuevas herramientas de analítica, publicidad u
                otros servicios que utilicen cookies, actualizaremos esta
                política y los mecanismos de consentimiento cuando corresponda.
              </p>

              <p>
                Puedes revisar esta página cuando quieras conocer la versión
                vigente.
              </p>
            </CookieSection>

            {/* Cierre */}
            <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#073B3A] px-6 py-9 text-[#FFF7E8] sm:px-9 sm:py-10">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#DCEBD7]">
                Cookies
              </p>

              <p className="font-accent mt-3 text-4xl leading-none text-[#F7B87A] sm:text-5xl">
                Tú decides.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#FFF7E8]/70">
                Mantendremos esta información actualizada cuando incorporemos
                nuevas tecnologías o servicios.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function CookieSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[#073B3A]/12 py-10 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-6 sm:py-12">
      <div className="mb-4 sm:mb-0">
        <span className="font-accent text-3xl font-bold text-[#E8792E]">
          {number}
        </span>
      </div>

      <div>
        <h2 className="text-2xl font-black tracking-[-0.03em] text-[#073B3A] sm:text-3xl">
          {title}
        </h2>

        <div className="mt-5 max-w-2xl space-y-4 text-[0.95rem] leading-7 text-[#3E2A1B]/72 sm:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}

function StatusPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-[#DCEBD7]/70 px-4 py-2 text-xs font-bold text-[#315F3A]">
      {children}
    </span>
  );
}