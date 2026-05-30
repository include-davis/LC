// Carousel navigation arrow — Figma "Switch" component (node 4253:946 / 4253:949).
// A 40x40 #6563DE circle holding a 20px arrow icon. The base SVG points right, so the
// left arrow flips it 180deg. `disabled` dims the button to 40% opacity (Figma "Variant2").
// `onClick` is supplied by the carousel once the slide logic is added (next step).

import arrow from "./_assets/arrow.svg";
import styles from "./PastEvents.module.scss";

export default function CarouselArrow({ direction = "right", disabled = false, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.arrow} ${disabled ? styles.arrowDisabled : ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous events" : "Next events"}
    >
      <img
        src={arrow.src}
        alt=""
        className={styles.arrowIcon}
        style={direction === "left" ? { transform: "rotate(180deg)" } : undefined}
      />
    </button>
  );
}
