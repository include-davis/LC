// "See more →" hover overlay for an EventCard.
// Hidden by default (opacity: 0) and revealed when the parent card is hovered.
// Kept as its own subcomponent so the hover animation (fade, slide, etc.) can be
// upgraded to framer-motion later without touching EventCard's layout.

import styles from "./EventCard.module.scss";

export default function SeeMoreOverlay() {
  return (
    <div className={styles.overlay}>
      <span className={styles.overlayText}>See more</span>
      {/* Tiny diagonal arrow built from a rotated 1px-outlined sliver,
          matching the Figma "small arrow" primitive (8x4, rotate 45deg). */}
      <span className={styles.overlayArrow}>
        <span className={styles.overlayArrowStroke} />
      </span>
    </div>
  );
}
