// Single event card ("Card Hover" component in Figma node 4253:1103).
// Composition:
//   .card
//     .image          ← 240x240 image with inset purple border + hover overlay
//       <SeeMoreOverlay />
//     .meta           ← title + date stacked below the image
//
// Props let the parent (PastEventsRow) reuse the same component for all 4 cards
// with different images, titles, and dates.

import SeeMoreOverlay from "./SeeMoreOverlay";
import styles from "./EventCard.module.scss";

export default function EventCard({
  image = "https://placehold.co/240x240",
  title = "Movie Night",
  date = "11/06/25",
  alt = "",
}) {
  return (
    <article className={styles.card}>
      <div
        className={styles.image}
        // Image is set via inline style so the same .image class can host any URL
        // without needing a separate selector per card.
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={alt || title}
      >
        <SeeMoreOverlay />
      </div>
      <div className={styles.meta}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </article>
  );
}
