// "Wug..." display text. Each character is independently positioned, rotated, and faded
// to create the bouncy, trailing-off effect from the Figma design (node 4253:1093).
// Letter font: Gochi Hand (already loaded globally via the Next/Font setup in layout.jsx).

import styles from "./WugBanner.module.scss";

// The 1440px Figma artboard fills the full viewport width, so sizes/positions use vw:
// 1440px = 100vw → 1px = (1/14.4)vw. fontSize is converted too, so the letters scale
// with the banner instead of staying a fixed pixel size.
const toVw = (px) => `${px / 14.4}vw`;

// Per-letter data from Figma. `left` is the HORIZONTAL CENTER of the letter wrapper
// (each wrapper uses translateX(-50%) so positioning anchors to its midpoint).
// Sizes here are the ORIGINAL Figma values — the previous shrink attempt collapsed
// the letters visually. Match the desktop reference photo, which uses these sizes.
const LETTERS = [
  { ch: "W", left: 82.31,  top: 21.42, w: 164.619, h: 165.307, fontSize: 128, rot: -15.9,  opacity: 1    },
  { ch: "u", left: 207.29, top: 0,     w: 97.301,  h: 148.493, fontSize: 128, rot: 2.46,   opacity: 0.85 },
  { ch: "g", left: 319.43, top: 4,     w: 163.59,  h: 214.385, fontSize: 128, rot: 15.53,  opacity: 0.77 },
  // Three trailing dots, each smaller and more faded than the last.
  { ch: ".", left: 407.05, top: 36,    w: 142.824, h: 204.704, fontSize: 150, rot: 8.17,   opacity: 0.72 },
  { ch: ".", left: 499.05, top: 59,    w: 142.824, h: 204.704, fontSize: 128, rot: 8.17,   opacity: 0.50 },
  { ch: ".", left: 571.05, top: 46,    w: 142.824, h: 204.704, fontSize: 109, rot: 8.17,   opacity: 0.30 },
];

export default function WugText() {
  return (
    <div className={styles.wugText}>
      {LETTERS.map((l, i) => (
        <div
          key={i}
          className={styles.letterWrapper}
          style={{
            left: toVw(l.left),
            top: toVw(l.top),
            width: toVw(l.w),
            height: toVw(l.h),
          }}
        >
          <div
            className={styles.letterRotated}
            style={{ transform: `rotate(${l.rot}deg)` }}
          >
            <p
              className={styles.letter}
              style={{ fontSize: toVw(l.fontSize), opacity: l.opacity }}
            >
              {l.ch}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
