"use client";

import { useState, useMemo } from "react";
import styles from "./ProgramsPage.module.scss";
import ProgramCard from "../ProgramCard/ProgramCard";

/**
 * ProgramsPage — A template shared by both Grad and Undergrad pages.
 *
 * Props:
 *   titleLine1   string   — First line of the title
 *   titleLine2   string   — Second line of the title
 *   pageSubtitle string   — hero subtitle
 *   programs     array    — list of program data
 */
export default function ProgramsPage({
  titleLine1,
  titleLine2,
  pageSubtitle,
  programs,
}) {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);

  // Extract the unique subtitle from the data and use it as a filter tab option.
  const filterOptions = useMemo(() => {
    const seen = new Set();
    return programs
      .map((p) => p.subtitle)
      .filter((s) => {
        if (seen.has(s)) return false;
        seen.add(s);
        return true;
      });
  }, [programs]);

  // Filtering logic: Text search + tab filtering are applied simultaneously.
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return programs.filter((p) => {
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q);
      const matchFilter =
        activeFilters.length === 0 || activeFilters.includes(p.subtitle);
      return matchSearch && matchFilter;
    });
  }, [programs, query, activeFilters]);

  // Clicking a tab: selected → unselected; unselected → selected
  const toggleFilter = (sub) => {
    setActiveFilters((prev) =>
      prev.includes(sub) ? prev.filter((f) => f !== sub) : [...prev, sub],
    );
  };

  // Clear All：Clear search term + Clear all selected tabs
  const clearAll = () => {
    setQuery("");
    setActiveFilters([]);
  };

  return (
    <main className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Title forced to display on two lines */}
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>{titleLine1}</span>
            <span className={styles.heroTitleLine}>{titleLine2}</span>
          </h1>
          {pageSubtitle && (
            <p className={styles.heroSubtitle}>{pageSubtitle}</p>
          )}
        </div>
        {/* Right-side birds (same as Opportunities page) */}
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

      {/* ── PROGRAM SEARCH ── */}
      <section className={styles.searchSection}>
        <div className={styles.searchBox}>
          {/* Search box: Enter program name or subtitle keywords */}
          <p className={styles.searchLabel}>Program Search</p>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search by program name or type..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search programs"
          />
          {/* Filter tabs + Clear All */}
          <div className={styles.filterRow}>
            {filterOptions.map((sub) => (
              <button
                key={sub}
                className={`${styles.filterTag} ${
                  activeFilters.includes(sub) ? styles.filterTagActive : ""
                }`}
                onClick={() => toggleFilter(sub)}
              >
                {sub}
              </button>
            ))}
            <button
              className={styles.clearBtn}
              onClick={clearAll}
              aria-label="Clear all filters"
            >
              Clear all
            </button>
          </div>
        </div>
      </section>

      {/* ── Upper striped decorative strip ── */}
      <div className={styles.waveTop} aria-hidden="true">
        <img src="/images/wave-top.svg" alt="" />
      </div>

      {/* ── PROGRAM CARD GRID ── */}
      <section className={styles.gridSection}>
        <div className={styles.cardGrid}>
          {filtered.length > 0 ? (
            filtered.map((p) => <ProgramCard key={p.id} {...p} />)
          ) : (
            <p className={styles.noResults}>
              No programs found — try a different keyword or clear the filters.
            </p>
          )}
        </div>
      </section>

      {/* ── Lower striped decorative strip ── */}
      <div className={styles.waveBottom} aria-hidden="true">
        <img src="/images/wave-bottom.svg" alt="" />
      </div>
    </main>
  );
}
