// Row of 4 EventCards for the Past Events section.
// Kept as its own component so the row layout (and any future scroll/animation
// behavior tied to the arrow buttons) lives in one place separate from EventCard.

import EventCard from "./EventCard";
import styles from "./PastEvents.module.scss";

// Card data — swap `image` values once real event photos are available.
const EVENTS = [
  { title: "Movie Night",        date: "11/06/25"   },
  { title: "Involvement Fair",   date: "10/15/2025" },
  { title: "Winter Wugterland",  date: "12/04/2025" },
  { title: "Linguistics Jeopardy", date: "02/19/2026" },
];

export default function PastEventsRow() {
  return (
    <div className={styles.row}>
      {EVENTS.map((e) => (
        <EventCard key={e.title} title={e.title} date={e.date} />
      ))}
    </div>
  );
}
