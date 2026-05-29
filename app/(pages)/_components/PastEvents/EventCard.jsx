// Single event card ("Card Hover" component in Figma node 4253:1103).
// Composition:
//   .card
//     .image          ← 240x240 image with inset purple border + hover overlay
//       <SeeMoreOverlay />
//     .meta           ← title + date stacked below the image
//
// Props let the parent (PastEventsCarousel) reuse the same component for every card
// with different images, titles, and dates. `image` is optional — TBD cards omit it
// and render as an empty squiggle frame (no photo).

import SeeMoreOverlay from "./SeeMoreOverlay";
import styles from "./EventCard.module.scss";

export default function EventCard({
  image,
  title = "Movie Night",
  date = "11/06/25",
  alt = "",
  overlayLabel = "See more",
}) {
  return (
    <article className={styles.card}>
      <div className={styles.image} role="img" aria-label={alt || title}>
        {/* Photo sits on an inset, rounded inner layer so it stays INSIDE the wavy
            squiggle border. Omitted entirely for TBD cards (no image). */}
        {image && (
          <div className={styles.photo} style={{ backgroundImage: `url(${image})` }} />
        )}
        <SeeMoreOverlay label={overlayLabel} />
      </div>
      <div className={styles.meta}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </article>
  );
}
