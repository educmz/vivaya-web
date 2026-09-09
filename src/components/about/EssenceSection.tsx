const essenceItems = [
  {
    id: "purpose",
    label: "Propósito",
    title: "Crear momentos para disfrutar.",
    background: "#F8C7AC",
  },
  {
    id: "mission",
    label: "Misión",
    title: "Hacer especial lo cotidiano.",
    background: "#E2ECD4",
  },
  {
    id: "vision",
    label: "Visión",
    title: "Seguir creciendo contigo.",
    background: "#F4DFA2",
  },
];

export function EssenceSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-10">
        {/* CABECERA */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <p
            className="text-2xl text-[#FF8A00] sm:text-3xl"
            style={{
              fontFamily: "var(--font-script), 'Pacifico', cursive",
            }}
          >
            Nuestra esencia
          </p>

          <h2 className="mt-4 text-4xl  tracking-[-0.02em] text-[#302E2A] sm:text-5xl lg:text-6xl font-heading font-normal">
            Lo que nos mueve.
          </h2>
        </div>

        {/* BLOQUES */}
        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {essenceItems.map((item) => (
            <article
              key={item.id}
              className="
                group
                flex
                min-h-[280px]
                flex-col
                justify-between
                overflow-hidden
                rounded-[1.6rem]
                p-6
                sm:min-h-[310px]
                sm:p-8
                lg:min-h-[340px]
                lg:rounded-[2rem]
                lg:p-9
              "
              style={{
                backgroundColor: item.background,
              }}
            >
              {/* LABEL */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#302E2A]/60">
                  {item.label}
                </span>

                <span className="size-2 rounded-full bg-[#302E2A]/25" />
              </div>

              {/* FRASE */}
              <h3
                className="
                  max-w-[320px]
                  text-3xl
                  
                  leading-[1.05]
                  tracking-[-0.02em]
                  text-[#302E2A]
                  sm:text-4xl
                  lg:text-[2.5rem]
                 font-heading font-normal"
              >
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}