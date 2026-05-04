"use client";

import styles from "./page.module.scss";
import ProgramCard from "../components/ProgramCard/ProgramCard";

const undergradPrograms = [
  {
    id: "language-research",
    title: "Language Research",
    subtitle: "Research",
    image: "/images/language-research.jpg",
    href: "/undergrad-programs",
  },
  {
    id: "study-abroad",
    title: "Study Abroad",
    subtitle: "Study Abroad",
    image: "/images/study-abroad.jpg",
    href: "/undergrad-programs",
  },
  {
    id: "linguistics-major",
    title: "Linguistics Major",
    subtitle: "Major",
    image: "/images/linguistics-major.jpg",
    href: "/undergrad-programs",
  },
  {
    id: "ferreiralab-assistant",
    title: "Ferreiralab Assistant",
    subtitle: "Work",
    image: "/images/ferreiralab-assistant.jpg",
    href: "/undergrad-programs",
  },
];

const gradPrograms = [
  {
    id: "phd",
    title: "Ph.D. Program",
    subtitle: "Research",
    image: "/images/phd-program.jpg",
    href: "/grad-programs",
  },
  {
    id: "ma",
    title: "M.A. Program",
    subtitle: "Research",
    abbr: "M.A.",
    solidColor: "#E8A020",
    href: "/grad-programs",
  },
  {
    id: "gc",
    title: "Governing Committees",
    subtitle: "Major",
    abbr: "G.C.",
    solidColor: "#3AAEA8",
    href: "/grad-programs",
  },
  {
    id: "research-labs",
    title: "Research Labs",
    subtitle: "Research",
    image: "/images/research-labs.jpg",
    href: "/grad-programs",
  },
];

export default function OpportunitiesPage() {
  return (
    <main className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Opportunities</h1>
          <p className={styles.heroSubtitle}>
            Learn more about UC Davis programs for Linguistics!
          </p>
        </div>
        {/* Bird SVG — export from Figma and place in /public/images/ */}
        <div className={styles.heroBirds} aria-hidden="true">
          <img src="/images/birds.svg" alt="" />
        </div>
      </section>

      {/* ── PATH BANNER ── */}
      <section className={styles.pathBanner}>
        <div className={styles.pathBannerInner}>
          <h2 className={styles.pathBannerTitle}>
            Find Your Path in Linguistics!
          </h2>
          <p className={styles.pathBannerBody}>
            Step beyond the classroom and explore Linguistics at UC Davis! From
            research labs to study abroad and hands-on programs, there are so
            many ways to get involved.
          </p>
          <p className={styles.pathBannerBody}>
            Wherever you are in your journey, you'll find opportunities to grow,
            gain real-world experience, and connect with people who share your
            passion!
          </p>
          <a href="#" className={styles.pathBannerBtn}>
            Start Exploring
          </a>
        </div>
      </section>

      {/* ── UNDERGRAD PROGRAMS ── */}
      <section className={styles.programsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Undergraduate Programs</h2>
          <a href="/undergrad-programs" className={styles.seeAll}>
            See all
          </a>
        </div>
        <div className={styles.cardRow}>
          {undergradPrograms.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <span className={styles.sparkle} aria-hidden="true">
          ✦
        </span>
        <p className={styles.ctaText}>Get involved with us!</p>
        <span className={styles.sparkle} aria-hidden="true">
          ✦
        </span>
      </section>

      {/* ── GRAD PROGRAMS ── */}
      <section className={styles.programsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Graduate Programs</h2>
          <a href="/grad-programs" className={styles.seeAll}>
            See all
          </a>
        </div>
        <div className={styles.cardRow}>
          {gradPrograms.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      </section>
    </main>
  );
}
