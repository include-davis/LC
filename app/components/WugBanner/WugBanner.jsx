// "Wug Graphic Banner" section. Sits between the ArchiveHeader and PastEvents.
// Layers: gradient bar background → decorative cluster → masked bird → "Wug..." text.
// Pixel-locked to the 1440 Figma layout (Figma node 4253:1077).

import DecorCluster from "./DecorCluster";
import WugText from "./WugText";
import styles from "./WugBanner.module.scss";

export default function WugBanner() {
  return (
    <section className={styles.banner}>
      {/* Gradient strip stretches the full viewport width. */}
      <div className={styles.background} />
      {/* All Figma-positioned art lives inside a 1440-wide centered canvas so the
          stars / bird / "wug..." text stay in their original layout relationship
          regardless of how wide the viewport is. */}
      <div className={styles.canvas}>
        <DecorCluster />
        <div className={styles.bird} />
        <WugText />
      </div>
    </section>
  );
}
