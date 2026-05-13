// Header section for the Archive page: page title + intro copy + decorative star cluster.
// Lives in the global _components folder so it can be composed into the bigger combined page.

import StarCluster from "./StarCluster";
import styles from "./ArchiveHeader.module.scss";

export default function ArchiveHeader() {
  return (
    <section className={styles.header}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Archive</h1>
        <p className={styles.subtitle}>
          Find our milestones, past events, and previous meetings &amp; speaker
          presentations!
        </p>
      </div>
      <StarCluster />
    </section>
  );
}
