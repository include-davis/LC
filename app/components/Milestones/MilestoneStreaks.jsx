// Decorative motion-blur streaks for the Milestones panel — Figma rectangles 72–76
// (nodes 4253:1127–1132). Each is a blurred, rounded-left gradient bar positioned
// absolutely within the panel; the panel's overflow:hidden clips the ones that spill
// past the edges. Separate component so the streaks can be animated independently later.

import styles from "./Milestones.module.scss";

// Positions/sizes are relative to the 1360x628 panel (Figma SECTION2). px → rem.
const toRem = (px) => `${px / 16}rem`;

// `transform` mirrors the Figma flips: right-side streaks flip vertically; left-side
// streaks mirror horizontally (so their rounded ends point inward toward the panel).
const STREAKS = [
  // right side
  { left: 1310, top: 128.3, w: 249, from: "#FFFFFF", to: "#C2C2F2", transform: "scaleY(-1)" },
  { left: 993,  top: 128.3, w: 307, from: "#FFFFFF", to: "#C2C2F2", transform: "scaleY(-1)" },
  { left: 1182, top: 202.3, w: 235, from: "#C2C2F2", to: "#FFFFFF", transform: "none" },
  // left side (mirrored)
  { left: -71,  top: 108.3, w: 307, from: "#9795E9", to: "#C2C2F2", transform: "scaleX(-1)" },
  { left: -176, top: 178.3, w: 307, from: "#9795E9", to: "#C2C2F2", transform: "scaleX(-1)" },
  { left: -226, top: 504.3, w: 428, from: "#9795E9", to: "#C2C2F2", transform: "scaleX(-1)" },
];

export default function MilestoneStreaks() {
  return (
    <>
      {STREAKS.map((s, i) => (
        <div
          key={i}
          className={styles.streak}
          style={{
            left: toRem(s.left),
            top: toRem(s.top),
            width: toRem(s.w),
            background: `linear-gradient(90deg, ${s.from} 0%, ${s.to} 100%)`,
            transform: s.transform,
          }}
        />
      ))}
    </>
  );
}
