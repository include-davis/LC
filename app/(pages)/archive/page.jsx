// Archive page — composes section components in order.
// Remaining sections (PastEvents, Milestones, PastPresentations, Community) will be added below as built.

import ArchiveHeader from "../_components/ArchiveHeader/ArchiveHeader";
import WugBanner from "../_components/WugBanner/WugBanner";
import PastEvents from "../_components/PastEvents/PastEvents";
import Milestones from "../_components/Milestones/Milestones";
import PastPresentations from "../_components/PastPresentations/PastPresentations";
import Community from "../_components/Community/Community";
import styles from "./page.module.scss";

export default function ArchivePage() {
  return (
    <main className={styles.page}>
      <ArchiveHeader />
      <WugBanner />
      <PastEvents />
      <Milestones />
      <PastPresentations />
      <Community />
    </main>
  );
}
