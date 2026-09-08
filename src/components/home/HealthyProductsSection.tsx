import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeImage } from "./HomeImage";
import { HomeHeading } from "./HomeHeading";
import styles from "./Home.module.css";

const lifestyleImages = [
  {
    id: "lifestyle-1",
    image: "/images/home/lifestyle/lifestyle-1.webp",
    alt: "Persona disfrutando una bebida VIVAYA",
  },
  {
    id: "lifestyle-2",
    image: "/images/home/lifestyle/lifestyle-2.webp",
    alt: "Momento cotidiano disfrutando VIVAYA",
  },
  {
    id: "lifestyle-3",
    image: "/images/home/lifestyle/lifestyle-3.webp",
    alt: "Personas compartiendo productos VIVAYA",
  },
] as const;


export function HealthyProductsSection() {
  return (
    <section aria-labelledby="lifestyle-title" className={styles.section}>
      <div className={styles.container}>
        <HomeHeading id="lifestyle-title" eyebrow="para sentirte bien">Rico, fresco y a tu manera.</HomeHeading>
        <div className={styles.lifestyle}>
          {lifestyleImages.map((photo) => (
            <div key={photo.id} className={styles.photo}>
              <HomeImage src={photo.image} alt={photo.alt} fill sizes="(min-width: 1024px) 33vw, 55vw" />
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Link href="/menu" className={styles.link}>Descubre la carta <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
