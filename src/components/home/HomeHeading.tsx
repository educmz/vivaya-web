import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import styles from "./Home.module.css";

export function HomeHeading({ id, eyebrow, children }: { id: string; eyebrow: string; children: string }) {
  return (
    <div className={styles.header}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <AnimatedTitle id={id} text={children} className={styles.heading} />
    </div>
  );
}
