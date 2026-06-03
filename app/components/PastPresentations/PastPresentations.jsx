// Past Presentations section — Figma "SECTION 4" (node 4253:1133).
// Title + a centered row of presentation cards. These use the SAME "CARD HOVER" component
// as Past Events, so we reuse EventCard (with the overlay label "See photos" instead of
// "See more"). Figma shows 2 cards; per request we render 4 (1 real + 3 TBD), which fills
// the 1080px row exactly.

import EventCard from "../PastEvents/EventCard";
import assyrian from "./_assets/assyrian-language.png";
import styles from "./PastPresentations.module.scss";

const PRESENTATIONS = [
  { title: "Assyrian Language", date: "01/22/26", image: assyrian.src },
  { title: "TBD", date: "TBD", placeholder: true },
  { title: "TBD", date: "TBD", placeholder: true },
  { title: "TBD", date: "TBD", placeholder: true },
];

export default function PastPresentations() {
  return (
    <section className={styles.section} id="presentations">
      <h2 className={styles.title}>Past Presentations!</h2>
      <div className={styles.row}>
        {PRESENTATIONS.map((p, i) => (
          <EventCard
            key={i}
            title={p.title}
            date={p.date}
            image={p.image}
            placeholder={p.placeholder}
            overlayLabel="See photos"
          />
        ))}
      </div>
    </section>
  );
}
