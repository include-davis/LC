// Community section ("Our Community!") — Figma "Frame 289" (node 4253:1183).
// STEP 1: the big purple gradient panel (Figma "SECTION 5") only. The title and the
// scattered polaroid grid go INSIDE this panel in the next steps.

import Polaroid from "./Polaroid";
import styles from "./Community.module.scss";

// Per-slot polaroid size + tilt, two rows of 4. CMS posts fill these slots in order.
const POLAROID_LAYOUT = [
  { w: 282.37,  h: 339.184, rotate: -1.54 },
  { w: 232.965, h: 279.837, rotate: -1 },
  { w: 282.815, h: 339.718, rotate: 1.2 },
  { w: 224.346, h: 269.485, rotate: -0.59 },
  { w: 218.865, h: 262.901, rotate: -0.6 },
  { w: 252.263, h: 303.019, rotate: 1.4 },
  { w: 269.114, h: 323.26,  rotate: -1.6 },
  { w: 250.207, h: 300.549, rotate: 2.03 },
];
const PER_ROW = 4;

export default function Community({ posts }) {
  const slots = posts.slice(0, POLAROID_LAYOUT.length);
  const rows = [slots.slice(0, PER_ROW), slots.slice(PER_ROW)].filter((r) => r.length);

  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <h2 className={styles.title}>Our Community!</h2>
        {/* Two rows of 4 polaroids, gap 52px between rows / 20px within a row. */}
        <div className={styles.grid}>
          {rows.map((row, r) => (
            <div className={styles.row} key={r}>
              {row.map((post, i) => (
                <Polaroid
                  key={post.id ?? i}
                  {...POLAROID_LAYOUT[r * PER_ROW + i]}
                  photo={post.photo}
                  date={post.date}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
