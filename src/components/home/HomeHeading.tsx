import type { ReactNode } from "react";
import styles from "./Home.module.css";

export function HomeHeading({ id, eyebrow, children }: { id: string; eyebrow: string; children: ReactNode }) {
  return (
    <div className={styles.header}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.heading}>{children}</h2>
    </div>
  );
}
