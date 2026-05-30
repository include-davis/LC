// Past Events section — composes its own subcomponents in order.
// Currently only the title is implemented. Cards, arrows, and other pieces will be
// added as their own subcomponents below as we build them step-by-step.

import PastEventsTitle from "./PastEventsTitle";
import PastEventsCarousel from "./PastEventsCarousel";
import styles from "./PastEvents.module.scss";

export default function PastEvents() {
  return (
    <section className={styles.section}>
      <PastEventsTitle />
      <PastEventsCarousel />
    </section>
  );
}
