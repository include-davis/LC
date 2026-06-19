// Community section ("Our Community!") — Figma "Frame 289" (node 4253:1183).
// STEP 1: the big purple gradient panel (Figma "SECTION 5") only. The title and the
// scattered polaroid grid go INSIDE this panel in the next steps.

import Polaroid from "./Polaroid";
import styles from "./Community.module.scss";

export default function Community() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <h2 className={styles.title}>Our Community!</h2>
        {/* Two rows of 4 polaroids, gap 52px between rows / 20px within a row.
            Each polaroid is rendered inline so its width/height/rotation can be
            tweaked individually right here. Inner content (photo + date) is step 3. */}
        <div className={styles.grid}>
          <div className={styles.row}>
            <Polaroid w={282.37}  h={339.184} rotate={-1.54} date="02/07/26" />
            <Polaroid w={232.965} h={279.837} rotate={-1}    date="11/12/25" />
            <Polaroid w={282.815} h={339.718} rotate={1.2}   date="02/07/26" />
            <Polaroid w={224.346} h={269.485} rotate={-0.59} date="02/07/26" />
          </div>
          <div className={styles.row}>
            <Polaroid w={218.865} h={262.901} rotate={-0.6}  date="02/07/26" />
            <Polaroid w={252.263} h={303.019} rotate={1.4}   date="11/12/25" />
            <Polaroid w={269.114} h={323.26}  rotate={-1.6}  date="02/07/26" />
            <Polaroid w={250.207} h={300.549} rotate={2.03}  date="02/07/26" />
          </div>
        </div>
      </div>
    </section>
  );
}
