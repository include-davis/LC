// Decorative cluster: 9 absolute-positioned shapes layered over the banner gradient.
// Composition: 3 wavy stars (Star 1/2/3), 3 five-point polygons (Polygon 1/4/5),
// 3 blurred motion-streak bars (Rectangle 69/70/71).
// Sizes and positions taken from Figma node 4253:1080 ("Banner Graphics").

import star1 from "./_assets/star-1.svg";
import star2 from "./_assets/star-2.svg";
import star3 from "./_assets/star-3.svg";
import polygon1 from "./_assets/polygon-1.svg";
import polygon4 from "./_assets/polygon-4.svg";
import polygon5 from "./_assets/polygon-5.svg";
import rect69 from "./_assets/rectangle-69.svg";
import rect70 from "./_assets/rectangle-70.svg";
import rect71 from "./_assets/rectangle-71.svg";
import styles from "./WugBanner.module.scss";

// The 1440px Figma artboard fills the full viewport width, so every coordinate is
// expressed in vw: 1440px = 100vw → 1px = (1/14.4)vw. This scales the whole cluster
// proportionally with the page (streaks reach the right edge on any monitor).
const toVw = (px) => `${px / 14.4}vw`;

// Each entry maps a decoration to its position and size WITHIN the banner frame.
// All values are verified directly against Figma MCP metadata (node 4253:1080 children),
// converted from absolute canvas coords to banner-relative px: rel = abs − bannerOrigin(-0.5, 538).
const DECOS = [
  // Polygon 4 (4253:1089) — top-left filled gradient star; extends above the gradient (top:0)
  { src: polygon4, left: 26,   top: 0,     w: 110,    h: 131    },
  // Polygon 1 (4253:1087) — bottom-left 5-point outlined star
  { src: polygon1, left: 11,   top: 103,   w: 91,     h: 108    },
  // Star 2 (4253:1086) — big wavy outlined star (dominant decoration on the left)
  { src: star2,    left: 141,  top: 83.35, w: 224.79, h: 224.79 },
  // Star 3 (4253:1085) — medium wavy outlined star (sits below the bird area)
  { src: star3,    left: 463,  top: 39.25, w: 87.425, h: 87.425 },
  // Star 1 (4253:1084) — small chubby filled star (just above the wug text)
  { src: star1,    left: 607,  top: 43.18, w: 49.555, h: 49.555 },
  // Polygon 5 (4253:1088) — small filled 5-point star (near center-bottom)
  { src: polygon5, left: 538,  top: 132,   w: 54,     h: 64     },
  // Rectangle 71 (4253:1083) — top-right short motion-blur streak
  { src: rect71,   left: 1206, top: 63,    w: 235,    h: 24     },
  // Rectangle 70 (4253:1082) — middle long motion-blur streak (goes behind the wug words)
  { src: rect70,   left: 735,  top: 97,    w: 705,    h: 32     },
  // Rectangle 69 (4253:1081) — bottom-right medium motion-blur streak
  { src: rect69,   left: 966,  top: 142,   w: 475,    h: 24     },
];

export default function DecorCluster() {
  return (
    <>
      {DECOS.map((d, i) => (
        <img
          key={i}
          src={d.src.src}
          alt=""
          className={styles.decoration}
          style={{
            left: toVw(d.left),
            top: toVw(d.top),
            width: toVw(d.w),
            height: toVw(d.h),
          }}
        />
      ))}
    </>
  );
}
