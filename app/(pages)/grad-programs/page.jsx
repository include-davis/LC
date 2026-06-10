"use client";

import ProgramsPage from "../components/ProgramsPage/ProgramsPage";

// ── Graduate program data ────────────────────────────────
// The value of `subtitle` determines which options are automatically generated in the `filter` tab.
const programs = [
  {
    id: "phd",
    title: "Ph.D. Program",
    subtitle: "Major/Minor",
    subtitleImage: "/images/tags/tag-major.png",
    image: "/images/phd-program.png",
    href: "#phd",
  },
  {
    id: "ma",
    title: "M.A. Program",
    subtitle: "Major/Minor",
    subtitleImage: "/images/tags/tag-major.png",
    // abbr: "M.A.",
    // solidColor: "#E8A020",
    image: "/images/ma-program.png",
    href: "#ma",
  },
  {
    id: "gc",
    title: "Governing Committees",
    subtitle: "Leadership",
    subtitleImage: "/images/tags/tag-leadership.png",
    // abbr: "G.C.",
    // solidColor: "#3AAEA8",
    image: "/images/gc-program.png",
    href: "#gc",
  },
  {
    id: "phonetics-lab",
    title: "Phonetics Lab",
    subtitle: "Research",
    subtitleImage: "/images/tags/tag-research.png",
    image: "/images/research-labs.png",
    href: "#phonetics-lab",
  },
];
// ─────────────────────────────────────────────────

export default function GradProgramsPage() {
  return (
    <ProgramsPage
      titleLine1="Graduate"
      titleLine2="Programs"
      pageSubtitle="Ready to dive even deeper into linguistics? Seek opportunities below!"
      programs={programs}
    />
  );
}
