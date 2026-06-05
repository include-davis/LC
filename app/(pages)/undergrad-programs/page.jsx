"use client";

import ProgramsPage from "../components/ProgramsPage/ProgramsPage";

// ── Undergraduate program data ──────────────────────────────────
// The value of `subtitle` determines which options are automatically generated in the `filter` tab.
const programs = [
  {
    id: "language-research",
    title: "CLR UC Davis",
    subtitle: "Research",
    subtitleImage: "/images/tags/tag-research.png",
    image: "/images/language-research.png",
    href: "https://www.languagecluster.com/about-us",
  },
  {
    id: "study-abroad",
    title: "Global Affairs",
    subtitle: "Study Abroad",
    subtitleImage: "/images/tags/tag-study-abroad.png",
    image: "/images/study-abroad.png",
    href: "https://linguistics.ucdavis.edu/study-abroad",
  },
  {
    id: "linguistics-major",
    title: "Linguistics Major",
    subtitle: "Major/Minor",
    subtitleImage: "/images/tags/tag-major.png",
    image: "/images/linguistics-major.png",
    href: "https://linguistics.ucdavis.edu/major-linguistics",
  },
  {
    id: "ferreiralab",
    title: "Ferreiralab Assistant",
    subtitle: "Internship",
    subtitleImage: "/images/tags/tag-internship.png",
    image: "/images/ferreiralab-assistant.png",
    href: "https://ferreiralab.faculty.ucdavis.edu",
  },
];
// ─────────────────────────────────────────────────

export default function UndergradProgramsPage() {
  return (
    <ProgramsPage
      titleLine1="Undergraduate"
      titleLine2="Programs"
      pageSubtitle="New to linguistics? 
      Come see what undergraduate programs have to offer!"
      programs={programs}
    />
  );
}
