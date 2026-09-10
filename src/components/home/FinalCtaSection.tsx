"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { HomeHeading } from "./HomeHeading";
import { HomeImage } from "./HomeImage";
import styles from "./Home.module.css";

const actions = [
  {
    id: "carta",
    href: "/carta",
    label: "Ver carta",
    description: "Encuentra tu próximo antojo.",
    image: "/images/home/cta/cta-carta-products.webp",
  },
  {
    id: "events",
    href: "/eventos",
    label: "Ver eventos",
    description: "Haz especial tu próxima celebración.",
    image: "/images/home/cta/cta-eventos-carts.webp",
  },
] as const;


export function FinalCtaSection() {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const columns = activePanel === "carta" ? "1.25fr .75fr" : activePanel === "events" ? ".75fr 1.25fr" : "1fr 1fr";
  return (
    <section aria-labelledby="final-cta-title" className={`${styles.section} ${styles.finalSection}`}>
      <div className={`${styles.container} text-center`}>
        <HomeHeading id="final-cta-title" eyebrow="¿Y ahora?">Elige cómo quieres disfrutar VIVAYA.</HomeHeading>
      </div>
      <div className={`${styles.container} ${styles.panels}`} style={{ "--cta-columns": columns } as CSSProperties} onMouseLeave={() => setActivePanel(null)}>
        {actions.map((action) => (
          <Link key={action.id} href={action.href} className={styles.panel}
            onPointerEnter={(event) => { if (event.pointerType === "mouse") setActivePanel(action.id); }}
            onFocus={() => setActivePanel(action.id)} onBlur={() => setActivePanel(null)}>
            <HomeImage src={action.image} alt="" fill sizes="(min-width: 640px) 65vw, 100vw" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/5" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div><h3 className={styles.panelTitle}>{action.label}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/85">{action.description}</p></div>
              <ArrowUpRight size={26} aria-hidden="true" className="shrink-0 text-[#FF8A00]" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
