// Single polaroid frame — Figma "FRAME" (nodes 4253:1188..1210).
// White → light-purple gradient card with a soft drop shadow and a small rotation.
// Holds a square photo (gray placeholder when no image) and a handwritten date underneath.
// Per-instance props let each polaroid be tuned individually from where it's rendered.

import styles from "./Community.module.scss";

const toRem = (px) => `${px / 16}rem`;

export default function Polaroid({ w, h, rotate = 0, photo, date }) {
  return (
    <div
      className={styles.polaroid}
      style={{
        width: toRem(w),
        height: toRem(h),
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {/* Photo — square (aspect 1:1, full inner width). Gray placeholder if no image. */}
      <div
        className={styles.photo}
        style={photo ? { backgroundImage: `url(${photo})` } : undefined}
      />
      {date && <p className={styles.date}>{date}</p>}
    </div>
  );
}
