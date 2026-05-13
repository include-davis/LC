// Archive page — composes section components in order.
// Remaining sections (WuggBanner, PastEvents, Milestones, PastPresentations, Community)
// will be added below as they're built.

import ArchiveHeader from "../_components/ArchiveHeader/ArchiveHeader";
import styles from "./page.module.scss";

export default function ArchivePage() {
  return (
    <main className={styles.page}>
      <ArchiveHeader />
    </main>
  );
}
