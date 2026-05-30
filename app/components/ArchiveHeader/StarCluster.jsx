// Decorative trio of scalloped rings positioned to the right of the Archive title.
// Two source SVGs only: star-1 is rendered twice (large + medium positions) at different
// CSS sizes; star-3 renders the smallest one. Sizes/positions live in ArchiveHeader.module.scss.

import star1 from "./_assets/star-1.svg";
import star3 from "./_assets/star-3.svg";
import styles from "./ArchiveHeader.module.scss";

export default function StarCluster() {
  return (
    <>
      <img className={styles.starLarge} src={star1.src} alt="" />
      <img className={styles.starMedium} src={star1.src} alt="" />
      <img className={styles.starSmall} src={star3.src} alt="" />
    </>
  );
}
