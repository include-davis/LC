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

// Convert Figma px values to rem (1rem = 16px) so the layout scales with root font-size.
const toRem = (px) => `${px / 16}rem`;

// Each entry maps a decoration to its Figma-relative position and size within the banner frame.
const DECOS = [
  // top-left filled gradient star (renders behind the big outline star)
  { src: polygon4, left: 26,   top: 0,      w: 110,    h: 131    },
  // bottom-left 5-point outlined star
  { src: polygon1, left: 11,   top: 103,    w: 91,     h: 108    },
  // big wavy outlined star (the dominant decoration on the left)
  { src: star2,    left: 141,  top: 83.35,  w: 224.79, h: 224.79 },
  // medium wavy outlined star (sits below the bird area)
  { src: star3,    left: 463,  top: 39.25,  w: 87.43,  h: 87.43  },
  // small chubby filled star (just above the wug text)
  { src: star1,    left: 607,  top: 43.18,  w: 49.56,  h: 49.56  },
  // small filled 5-point star (near center-bottom)
  { src: polygon5, left: 538,  top: 132,    w: 54,     h: 64     },
  // top-right short motion-blur streak
  { src: rect71,   left: 1206, top: 63,     w: 235,    h: 34     },
  // middle long motion-blur streak
  { src: rect70,   left: 735,  top: 97,     w: 705,    h: 42     },
  // bottom-right medium motion-blur streak
  { src: rect69,   left: 966,  top: 142,    w: 475,    h: 34     },
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
            left: toRem(d.left),
            top: toRem(d.top),
            width: toRem(d.w),
            height: toRem(d.h),
          }}
        />
      ))}
    </>
  );
}
