"use client";

import styles from "./page.module.scss";
import ProgramCard from "../components/ProgramCard/ProgramCard";

const undergradPrograms = [
  {
    id: "language-research",
    title: "Language Research",
    subtitle: "Research",
    subtitleImage: "/images/tags/tag-research.png",
    image: "/images/language-research.png",
    href: "/undergrad-programs",
  },
  {
    id: "study-abroad",
    title: "Study Abroad",
    subtitle: "Study Abroad",
    subtitleImage: "/images/tags/tag-study-abroad.png",
    image: "/images/study-abroad.png",
    href: "/undergrad-programs",
  },
  {
    id: "linguistics-major",
    title: "Linguistics Major",
    subtitle: "Major",
    subtitleImage: "/images/tags/tag-major.png",
    image: "/images/linguistics-major.png",
    href: "/undergrad-programs",
  },
  {
    id: "ferreiralab-assistant",
    title: "Ferreiralab Assistant",
    subtitle: "Work",
    subtitleImage: "/images/tags/tag-internship.png",
    image: "/images/ferreiralab-assistant.png",
    href: "/undergrad-programs",
  },
];

const gradPrograms = [
  {
    id: "phd",
    title: "Ph.D. Program",
    subtitle: "Research",
    subtitleImage: "/images/tags/tag-major.png",
    image: "/images/phd-program.png",
    href: "/grad-programs",
  },
  {
    id: "ma",
    title: "M.A. Program",
    subtitle: "Research",
    subtitleImage: "/images/tags/tag-major.png",
    image: "/images/ma-program.png",
    href: "/grad-programs",
  },
  {
    id: "gc",
    title: "Governing Committees",
    subtitle: "Major",
    subtitleImage: "/images/tags/tag-leadership.png",
    image: "/images/gc-program.png",
    href: "/grad-programs",
  },
  {
    id: "research-labs",
    title: "Research Labs",
    subtitle: "Research",
    subtitleImage: "/images/tags/tag-research.png",
    image: "/images/research-labs.png",
    href: "/grad-programs",
  },
];

export default function OpportunitiesPage() {
  const handleScrollToUndergrad = (e) => {
    e.preventDefault();
    document
      .getElementById("undergrad")
      ?.scrollIntoView({ behavior: "smooth" });
  };

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
          <img src="/images/birds.svg" alt="" className={styles.birdMain} />
          <div className={styles.smallBirdsWrapper}>
            <img
              src="/images/birds-smallup.png"
              alt=""
              className={styles.birdsSmall}
            />
            <img
              src="/images/birds-smalldown.png"
              alt=""
              className={styles.birdsSmall}
            />
          </div>
        </div>
      </section>

      {/* ── PATH BANNER ── */}
      <section className={styles.pathBanner}>
          
          {/* leftstripe 1 */}
          <img
            src="/images/cta-stripes.png"
            alt=""
            className={styles.bannerStripesTopLeft}
          />
          {/* leftstripe 2 */}
          <img
            src="/images/cta-stripes.png"
            alt=""
            className={styles.bannerStripesTopLeft2}
          />
          {/* leftwugstripe */}
          <img
            src="/images/cta-stripes.png"
            alt=""
            className={styles.bannerStripesLeftUnderWug}
          />

          <img
            src="/images/cta-stripes.png"
            alt=""
            className={styles.bannerStripesTopRight}
          />
          <img
            src="/images/cta-stripes.png"
            alt=""
            className={styles.bannerStripesTopRight2}
          />
          <img
            src="/images/cta-stripes.png"
            alt=""
            className={styles.bannerStripesRightUnderWug}
          />
          
        <div className={styles.bannerDecoLeft} aria-hidden="true">
          {/* <div className={styles.stripesWrapper}>
            <img
              src="/images/banner-stripes-left1.png"
              alt=""
              className={styles.bannerStripes}
            />
            <img
              src="/images/banner-stripes-left2.png"
              alt=""
              className={styles.bannerStripes}
            />
          </div> */}

          <img
            src="/images/banner-birdleft.svg"
            alt=""
            className={styles.bannerBirdLeft}
          />
        </div>

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
          <a
            href="#undergrad"
            className={styles.pathBannerBtn}
            onClick={handleScrollToUndergrad}
          >
            Start Exploring
          </a>
        </div>

        <div className={styles.bannerDecoRight} aria-hidden="true">
          {/* <div className={styles.stripesWrapper}>
            <img
              src="/images/banner-stripes-right1.png"
              alt=""
              className={styles.bannerStripes}
            />
            <img
              src="/images/banner-stripes-right2.png"
              alt=""
              className={styles.bannerStripes}
            />
          </div> */}
          <img
            src="/images/banner-birdright.png"
            alt=""
            className={styles.bannerBirdRight}
          />
        </div>
      </section>

      {/* ── UNDERGRAD PROGRAMS ── */}
      <section className={styles.programsSection} id="undergrad">
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
      <section className={styles.ctaBannerOuter}>
        <div className={styles.ctaBanner}>
          {/* <div className={styles.ctaDecoLeft} aria-hidden="true">
            <img src="/images/cta-stripes.png" alt="" />
          </div> */}

          <img
            src="/images/sparkle.svg"
            alt=""
            className={styles.ctaSparkle}
            aria-hidden="true"
          />

          <a href="/get-involved" className={styles.ctaLink}>
            <img
              src="/images/cta-text.png"
              alt="Get involved with us!"
              className={styles.ctaTextImg}
            />
          </a>

          <img
            src="/images/sparkle.svg"
            alt=""
            className={styles.ctaSparkle}
            aria-hidden="true"
          />

          {/* <div className={styles.ctaDecoRight} aria-hidden="true">
            <img src="/images/cta-stripes.png" alt="" />
          </div> */}
        </div>
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
