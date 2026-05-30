// "Past Events!" section title.
// Pixel-locked to Figma node 4253:1102 (Hug 307x73, Hanken Grotesk 700, 56px, #6563DE).
// Kept as its own subcomponent so animations (e.g., entrance fade/slide) can be added later
// without touching the surrounding section layout.

import styles from "./PastEvents.module.scss";

export default function PastEventsTitle() {
  return <h2 className={styles.title}>Past Events!</h2>;
}
