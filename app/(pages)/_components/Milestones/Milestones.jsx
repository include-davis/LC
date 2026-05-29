// Milestones section ("Our Milestones!") — Figma "Frame 288" (node 4253:1104).
// STEP 1: the big purple gradient panel (Figma "SECTION2") only. The title, the three
// medal badges, and the decorative motion streaks get placed INSIDE this panel next,
// once the box itself is confirmed correct.

import styles from "./Milestones.module.scss";

export default function Milestones() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        {/* Title, MEDALS row, and motion-streak decorations added in the next step. */}
      </div>
    </section>
  );
}
