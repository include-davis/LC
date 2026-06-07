// A single milestone badge — Figma frames 197/196/198 (nodes 4253:1109–1126).
// A white scalloped star ("Star 4") with a purple number centered on top, and a bold
// label below. `star` is the star's px size (220 side / 240 center); `col` is the badge
// column width (220 / 280) so the row sums to Figma's 944px with 112px gaps.
// Its own component so each badge can be animated independently later.

import styles from "./Milestones.module.scss";
import star220 from "./_assets/star-220.svg";
import star240 from "./_assets/star-240.svg";

const toRem = (px) => `${px / 16}rem`;

export default function MilestoneBadge({ number, label, star = 220, col = 220 }) {
  const starSrc = (star === 240 ? star240 : star220).src;
  return (
    <div className={styles.badge} style={{ width: toRem(col) }}>
      <div className={styles.star} style={{ width: toRem(star), height: toRem(star) }}>
        <img src={starSrc} alt="" className={styles.starImg} />
        <span className={styles.number}>{number}</span>
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
