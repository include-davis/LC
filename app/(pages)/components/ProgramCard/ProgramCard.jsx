"use client";

import styles from "./ProgramCard.module.scss";

/**
 * ProgramCard — This component is used on all three pages
 *
 * Props:
 *   title      string  — Card title
 *   subtitle   string  — Subtitle (type tag)
 *   image      string  — Image path (relative path under /public)
 *   abbr       string  — Abbreviation displayed when there is no image, such as "M.A."
 *   solidColor string  — Solid color background of the card when there is no image, such as "#E8A020"
 *   href       string  — Link to click
 */

export default function ProgramCard({
  title,
  subtitle,
  subtitleImage,
  image,
  abbr,
  solidColor,
  href,
}) {
  return (
    <article className={styles.card}>
      <a href={href} className={styles.link}>
        {/* Card Cover: If an image is available, display the image; otherwise, display a solid color with abbreviations. */}
        <div
          className={styles.imageWrap}
          style={solidColor ? { backgroundColor: solidColor } : {}}
        >
          {image && !abbr && (
            <img src={image} alt={title} className={styles.image} />
          )}
          {abbr && <span className={styles.abbr}>{abbr}</span>}
        </div>

        {/* Title */}
        <h3 className={styles.title}>{title}</h3>

        {/* Subtitle: Image tags should be displayed first, otherwise text should be displayed. */}
        {subtitleImage ? (
          <img
            src={subtitleImage}
            alt={subtitle}
            className={styles.subtitleImg}
          />
        ) : (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
      </a>
    </article>
  );
}
