import movieNight from "../app/components/PastEvents/_assets/movie-night.png";
import involvementFair from "../app/components/PastEvents/_assets/involvement-fair.png";
import winterWugterland from "../app/components/PastEvents/_assets/winter-wugterland.png";
import linguisticsJeopardy from "../app/components/PastEvents/_assets/linguistics-jeopardy.png";

// Fallback for the archive Past Events carousel when the CMS `events` fetch fails or is empty.
// `placeholder: true` renders a gray fill instead of a photo.
export const PAST_EVENTS = [
  { title: "Movie Night",          date: "11/06/25",   image: movieNight.src },
  { title: "Involvement Fair",     date: "10/15/2025", image: involvementFair.src },
  { title: "Winter Wugterland",    date: "12/04/2025", image: winterWugterland.src },
  { title: "Linguistics Jeopardy", date: "02/19/2026", image: linguisticsJeopardy.src },
  { title: "TBD", date: "TBD", placeholder: true },
  { title: "TBD", date: "TBD", placeholder: true },
  { title: "TBD", date: "TBD", placeholder: true },
  { title: "TBD", date: "TBD", placeholder: true },
];
