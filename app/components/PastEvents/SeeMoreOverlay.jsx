// Hover overlay for an EventCard ("See more →" / "See photos →").
// Hidden by default (opacity: 0) and revealed when the parent card is hovered.
// `label` lets sections customize the text (Past Events → "See more", Past
// Presentations → "See photos"). Kept as its own subcomponent so the hover animation
// can be upgraded to framer-motion later without touching EventCard's layout.

import styles from "./EventCard.module.scss";

export default function SeeMoreOverlay({ label = "See more" }) {
  return (
    <div className={styles.overlay}>
      <span className={styles.overlayText}>{label}</span>
      {/* Tiny diagonal arrow built from a rotated 1px-outlined sliver,
          matching the Figma "small arrow" primitive (8x4, rotate 45deg). */}
      <span className={styles.overlayArrow}>
        <span className={styles.overlayArrowStroke} />
      </span>
    </div>
  );
}
