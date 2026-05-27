// "Wug Graphic Banner" section. Sits between the ArchiveHeader and PastEvents.
// Layers: gradient bar background → decorative cluster → masked bird → "Wug..." text.
// Pixel-locked to the 1440 Figma layout (Figma node 4253:1077).

import DecorCluster from "./DecorCluster";
import WugText from "./WugText";
import styles from "./WugBanner.module.scss";

export default function WugBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.background} />
      <DecorCluster />
      <div className={styles.bird} />
      <WugText />
    </section>
  );
}
