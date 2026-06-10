// Milestones section ("Our Milestones!") — Figma "Frame 288" (node 4253:1104).
// STEP 1: the big purple gradient panel (Figma "SECTION2") only. The title, the three
// medal badges, and the decorative motion streaks get placed INSIDE this panel next,
// once the box itself is confirmed correct.

import MilestoneStreaks from "./MilestoneStreaks";
import MilestoneBadge from "./MilestoneBadge";
import styles from "./Milestones.module.scss";

// The three stat badges (Figma MEDALS). Center badge uses the larger 240 star in a
// wider 280 column; sides use 220/220 → 220 + 280 + 220 + 2×112 gap = 944px row.
const MEDALS = [
  { number: "6",  label: "6 Events Hosted!",  star: 220, col: 220 },
  { number: "18", label: "18 Total Members!", star: 240, col: 280 },
  { number: "1",  label: "1 Year Running!",   star: 220, col: 220 },
];

export default function Milestones() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <MilestoneStreaks />
        {/* Content (title + medals) sits above the streaks via z-index. */}
        <div className={styles.content}>
          <h2 className={styles.title}>Our Milestones!</h2>
          <div className={styles.medals}>
            {MEDALS.map((m) => (
              <MilestoneBadge
                key={m.label}
                number={m.number}
                label={m.label}
                star={m.star}
                col={m.col}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
