import Link from "next/link";

import { Container } from "@/components/ui/Container";

const rights = [
  {
    name: "Acceso",
    description: "Conocer qué información personal se trata sobre ti.",
  },
  {
    name: "Rectificación",
    description: "Solicitar la corrección de información inexacta.",
  },
  {
    name: "Cancelación",
    description: "Solicitar su eliminación cuando corresponda.",
  },
  {
    name: "Oposición",
    description: "Oponerte a determinados tratamientos cuando corresponda.",
  },
];

export function PrivacyPolicy() {
  return (
    <div className="relative overflow-hidden bg-background pt-24 text-[#302E2A] sm:pt-[100px] lg:pt-[108px]">
      {/* Decoración pastel */}
      <div
        className="pointer-events-none absolute -left-32 top-36 size-[26rem] rounded-full bg-[#F7CFAE]/35 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-[28rem] size-[30rem] rounded-full bg-[#DCEBD7]/55 blur-[120px]"
        aria-hidden="true"
      />

      {/* Hero */}
      <section className="relative pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#3F7D4F]">
              Política de privacidad
            </p>

            <h1 className="font-accent mt-5 max-w-3xl text-[clamp(3.2rem,8vw,6.6rem)] leading-[0.82] text-[#FF8A00]">
              Tu información,
              <br />
              siempre clara.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#302E2A]/70 sm:text-lg">
              Te contamos de forma sencilla cómo tratamos la información
              relacionada con tu visita a Vivanya.
            </p>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[#302E2A]/45">
              Última actualización · Septiembre de 2026
            </p>
          </div>
        </Container>
      </section>

      {/* Contenido */}
      <section className="relative pb-24 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <PrivacySection number="01" title="Sobre Vivanya">
              <p>
                Vivanya es una marca de bebidas naturales que utiliza este sitio
                para presentar sus productos, locales y contenidos.
              </p>
            </PrivacySection>

            <PrivacySection number="02" title="Qué información tratamos">
              <p>
                Actualmente este sitio no cuenta con registro de usuarios,
                pedidos en línea ni formularios operativos que almacenen
                directamente información personal.
              </p>

              <p>
                Durante la navegación pueden procesarse datos técnicos necesarios
                para mostrar y operar correctamente el sitio, como información
                asociada a la conexión, navegador o dispositivo.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <StatusPill>Sin cuentas</StatusPill>
                <StatusPill>Sin pedidos web</StatusPill>
                <StatusPill>Sin perfiles publicitarios</StatusPill>
              </div>
            </PrivacySection>

            <PrivacySection number="03" title="Para qué se utiliza">
              <p>
                La información técnica necesaria se utiliza para permitir el
                funcionamiento, seguridad y correcta entrega del sitio y de sus
                servicios.
              </p>

              <p>
                Actualmente no utilizamos la información del sitio para
                publicidad personalizada, decisiones automatizadas ni elaboración
                de perfiles.
              </p>
            </PrivacySection>

            <PrivacySection number="04" title="Servicios externos">
              <p>
                Algunas partes del sitio pueden utilizar servicios tecnológicos
                de terceros necesarios para ofrecer determinadas funciones, como
                alojamiento, infraestructura o mapas.
              </p>

              <p>
                Estos proveedores pueden procesar información técnica necesaria
                para prestar sus servicios y se rigen también por sus propias
                políticas de privacidad.
              </p>
            </PrivacySection>

            <PrivacySection number="05" title="Conservación y seguridad">
              <p>
                Vivanya procura que la información tratada se conserve únicamente
                durante el tiempo necesario para las finalidades que correspondan
                y conforme a las obligaciones legales aplicables.
              </p>

              <p>
                Aplicamos las medidas técnicas, organizativas y legales que
                correspondan para proteger la información frente a accesos,
                pérdidas o usos no autorizados.
              </p>
            </PrivacySection>

            <PrivacySection number="06" title="Tus derechos">
              <p>
                La legislación peruana reconoce derechos sobre tus datos
                personales. Puedes solicitar su acceso, rectificación,
                cancelación u oponerte a determinados tratamientos cuando
                corresponda.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {rights.map((right) => (
                  <div
                    key={right.name}
                    className="rounded-[1.35rem] border border-[#073B3A]/10 bg-[#F7FBF3]/75 p-5"
                  >
                    <p className="font-bold text-[#073B3A]">{right.name}</p>
                    <p className="mt-1 text-sm leading-6 text-[#302E2A]/65">
                      {right.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-7">
                Las solicitudes relacionadas con datos personales podrán
                presentarse a través de los canales oficiales de atención que
                Vivanya mantenga habilitados.
              </p>

              <Link
                href="https://www.gob.pe/9270-que-son-los-derechos-arco"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex font-bold text-[#3F7D4F] underline decoration-[#3F7D4F]/30 underline-offset-4 transition hover:text-[#FF8A00]"
              >
                Conoce más sobre tus derechos en la ANPD
              </Link>
            </PrivacySection>

            <PrivacySection number="07" title="Cambios en esta política">
              <p>
                Si incorporamos nuevas funciones que impliquen tratamiento de
                datos personales, actualizaremos esta política para reflejar
                dichos cambios antes de iniciar el tratamiento cuando
                corresponda.
              </p>

              <p>
                Te recomendamos revisar esta página cuando quieras conocer la
                versión vigente.
              </p>
            </PrivacySection>

            {/* Cierre */}
            <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#073B3A] px-6 py-9 text-[#FFF7E8] sm:px-9 sm:py-10">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#DCEBD7]">
                Privacidad
              </p>

              <p className="font-accent mt-3 text-4xl leading-none text-[#FF8A00] sm:text-5xl">
                Simple y transparente.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#FFF7E8]/70">
                Nuestra forma de tratar información cambiará únicamente cuando
                incorporemos nuevas funciones o servicios. Cuando eso ocurra,
                esta política también será actualizada.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function PrivacySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[#073B3A]/12 py-10 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-6 sm:py-12">
      <div className="mb-4 sm:mb-0">
        <span className="font-accent text-3xl font-bold text-[#FF8A00]">
          {number}
        </span>
      </div>

      <div>
        <h2 className="text-2xl font-black tracking-[-0.03em] text-[#073B3A] sm:text-3xl">
          {title}
        </h2>

        <div className="mt-5 max-w-2xl space-y-4 text-[0.95rem] leading-7 text-[#302E2A]/72 sm:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}

function StatusPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-[#DCEBD7]/70 px-4 py-2 text-xs font-bold text-[#315F3A]">
      {children}
    </span>
  );
}