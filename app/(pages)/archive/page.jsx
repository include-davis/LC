// Archive page — composes section components in order.
// Remaining sections (PastEvents, Milestones, PastPresentations, Community) will be added below as built.

import ArchiveHeader from "../_components/ArchiveHeader/ArchiveHeader";
import WugBanner from "../_components/WugBanner/WugBanner";
import PastEvents from "../_components/PastEvents/PastEvents";
import Milestones from "../_components/Milestones/Milestones";
import styles from "./page.module.scss";

export default function ArchivePage() {
  return (
    <main className={styles.page}>
      <ArchiveHeader />
      <WugBanner />
      <PastEvents />
      <Milestones />
    </main>
  );
}
