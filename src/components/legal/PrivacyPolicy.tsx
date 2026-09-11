import Link from "next/link";

import { LegalPageHeader } from "@/components/legal/LegalPageHeader";
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
    <div className="relative overflow-hidden bg-background pt-24 text-[#302E2A] sm:pt-[100px] lg:pt-[108px]"
      style={{ fontFamily: "var(--font-carta), 'Montserrat', system-ui, sans-serif" }}
    >
      {/* Decoración pastel */}
      <div
        className="pointer-events-none absolute -left-32 top-36 size-[26rem] rounded-full bg-[#F7CFAE]/35 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-[28rem] size-[30rem] rounded-full bg-[#DCEBD7]/55 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative sm:px-6">
        <LegalPageHeader eyebrow="Política de privacidad" title="Tu información, siempre clara." description="Te contamos de forma sencilla cómo tratamos la información relacionada con tu visita a Vivaya.">
          <p className="mt-5 text-center text-xs text-[#8C867F]">
            Última actualización · Septiembre de 2026
          </p>
        </LegalPageHeader>
      </Container>

      {/* Contenido */}
      <section className="relative pb-16 sm:pb-20 lg:pb-24">
        <Container className="sm:px-6">
          <div className="mx-auto max-w-4xl space-y-6">
            <PrivacySection number="01" title="Sobre Vivaya">
              <p>
                Vivaya es una marca de bebidas naturales que utiliza este sitio
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
                Vivaya procura que la información tratada se conserve únicamente
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
                Vivaya mantenga habilitados.
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
            <div className="overflow-hidden rounded-2xl bg-[#073B3A] p-5 text-[#FFF7E8] sm:p-6 lg:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#DCEBD7]">
                Privacidad
              </p>

              <p className="mt-3 text-xl font-extrabold uppercase leading-tight text-[#FF8A00] sm:text-2xl">
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
    <section className="rounded-2xl border border-[#E9DED4] bg-white p-5 sm:grid sm:grid-cols-[2.5rem_1fr] sm:gap-4 sm:p-6 lg:p-8">
      <div className="mb-4 sm:mb-0">
        <span className="text-xl font-extrabold text-[#FF8A00] sm:text-2xl">
          {number}
        </span>
      </div>

      <div>
        <h2 className="text-xl font-extrabold uppercase leading-tight text-[#302E2A] sm:text-2xl">
          {title}
        </h2>

        <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-[#77736D] sm:text-base sm:leading-7">
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
