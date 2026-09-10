import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HomeImage } from "./HomeImage";
import { HomeHeading } from "./HomeHeading";
import styles from "./Home.module.css";

const lifestyleImages = [
  {
    id: "home-lifestyle-brunch",
    image: "/images/home/lifestyle/home-lifestyle-brunch.webp",
    alt: "Personas disfrutando productos y bebidas en un momento cotidiano",
  },
  {
    id: "home-lifestyle-walking-drink",
    image: "/images/home/lifestyle/home-lifestyle-walking-drink.webp",
    alt: "Persona caminando mientras disfruta una bebida",
  },
  {
    id: "home-lifestyle-kids-events",
    image: "/images/home/lifestyle/home-lifestyle-kids-events.webp",
    alt: "Niños disfrutando productos durante un evento",
  },
] as const;

export function HealthyProductsSection() {
  return (
    <section
      aria-labelledby="lifestyle-title"
      className={styles.section}
    >
      <div className={styles.container}>
        <HomeHeading
          id="lifestyle-title"
          eyebrow="para sentirte bien"
        >
          Rico, fresco y a tu manera.
        </HomeHeading>

        <div className={styles.lifestyle}>
          {lifestyleImages.map((photo) => (
            <div
              key={photo.id}
              className={styles.photo}
            >
              <HomeImage
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 55vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-end">
          <Link
            href="/carta"
            className="group inline-flex items-center gap-3 rounded-full bg-[#302E2A] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#FF8A00]"
          >
            Explora nuestra carta

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#FF8A00]">
              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}