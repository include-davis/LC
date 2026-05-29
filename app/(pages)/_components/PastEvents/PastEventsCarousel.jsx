"use client";

// Past Events carousel — Figma "ALL" instance (node 4253:1103).
// Structure:
//   .carousel (ALL)            → [left arrow] [viewport] [right arrow], gap 40, centered
//     .viewport (CARD STACK SWITCH) → 1080px window, overflow:hidden — clips the track
//       .track (CARD STACK)         → flex row of all cards; translates to slide pages
//
// Behavior: clicking an arrow jumps a FULL PAGE of 4 cards. Clamped at both ends —
// the left arrow is disabled on the first page, the right arrow on the last.

import { useState } from "react";
import EventCard from "./EventCard";
import CarouselArrow from "./CarouselArrow";
import styles from "./PastEvents.module.scss";

// 4 real events + 4 TBD placeholders. The real events' `image` is wired up once the
// Figma photo asset is downloaded (pending a Figma refocus). TBD cards have no image.
const EVENTS = [
  { title: "Movie Night",          date: "11/06/25"   },
  { title: "Involvement Fair",     date: "10/15/2025" },
  { title: "Winter Wugterland",    date: "12/04/2025" },
  { title: "Linguistics Jeopardy", date: "02/19/2026" },
  { title: "TBD", date: "TBD" },
  { title: "TBD", date: "TBD" },
  { title: "TBD", date: "TBD" },
  { title: "TBD", date: "TBD" },
];

const CARDS_PER_PAGE = 4;
// One page = 4 cards (240px) + 4 gaps (40px) = 1120px = 70rem. Translating the track by
// this amount brings the next group of 4 to the start of the viewport.
const PAGE_STRIDE_REM = 70;

export default function PastEventsCarousel() {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(EVENTS.length / CARDS_PER_PAGE) - 1;

  return (
    <div className={styles.carousel}>
      <CarouselArrow
        direction="left"
        disabled={page === 0}
        onClick={() => setPage((p) => Math.max(0, p - 1))}
      />
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${page * PAGE_STRIDE_REM}rem)` }}
        >
          {EVENTS.map((e, i) => (
            <EventCard key={i} title={e.title} date={e.date} image={e.image} />
          ))}
        </div>
      </div>
      <CarouselArrow
        direction="right"
        disabled={page === maxPage}
        onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
      />
    </div>
  );
}
