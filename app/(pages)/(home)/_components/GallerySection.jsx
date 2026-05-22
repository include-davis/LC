'use client';

import { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import styles from '../page.module.scss';

/*
  Column start positions in the track (rem / px):
    Big Video 1  (Slide 1):    0rem       (0px)
    Frame 284    (wide):      34.75rem    (556px)
    Frame 285    (mid):       76.375rem   (1222px)  ← position 1
    Frame 286    (narrow):   102.25rem    (1636px)
    Big Video 2  (Slide 2):  126.625rem   (2026px)
    Frame 287    (wide):     161.375rem   (2582px)  ← position 2
    ── max scroll ──          166.75rem   (2668px)  ← position 3
    Frame 288    (mid):       203rem      (3248px)  ✗ exceeds max, can't flush-left
    Frame 289    (narrow):   228.875rem   (3662px)  ✗ exceeds max, can't flush-left

  Each entry is the exact rem offset that puts that column's left edge
  flush with the carousel's left edge. To adjust a position, change its
  value to any column start above that is ≤ 166.75rem (2668px).
*/
const SLIDE_POSITIONS = [0, 76.375, 161.375, 166.75]; /* rem (0px, 1222px, 2582px, 2668px) */
const TOTAL_SLIDES = SLIDE_POSITIONS.length;

export default function GallerySection() {
  const [slide, setSlide] = useState(0);

  const goNext = () => setSlide(s => Math.min(s + 1, TOTAL_SLIDES - 1));
  const goPrev = () => setSlide(s => Math.max(s - 1, 0));

  return (
    <section className={styles.gallery}>

      {/* galleryCard — Frame 312 (1376×1111, padding: 100px 0, gap: 78px) */}
      <div className={styles.galleryCard}>

        {/* Gallery title */}
        <div className={styles.galleryTitle}>
          <h2 className={styles.galleryHeading}>Gallery</h2>
        </div>

        {/* galleryCarousel — viewport / clip window (1376×760), position: relative */}
        <div className={styles.galleryCarousel}>

          {/* galleryTrack — full horizontal strip, translates on arrow click */}
          <div
            className={styles.galleryTrack}
            style={{ transform: `translateX(-${SLIDE_POSITIONS[slide]}rem)` }}
          >

            {/* ── SLIDE 1 — columns 0–3 ── */}

            {/* Big Video 1 — 548×760 */}
            <div className={styles.galleryBigMedia}>
              {/* TODO: <Image> or <video> */}
            </div>

            {/* Frame 284 — wide column (658×760): blue quote card + two images */}
            <div className={`${styles.galleryColStack} ${styles.galleryColWide}`}>

              {/* Member Quote 1 — 658×306, #E0E0F8 */}
              <div className={styles.galleryQuoteBlue}>
                <div className={styles.galleryQuoteInner}>
                  <p className={styles.galleryQuoteText}>
                    &ldquo;Linguistics club is so friendly and has really interesting
                    presentations about niche stuff we don&apos;t talk about in class.
                    I didn&apos;t know anything about Assyrian before!&rdquo;
                  </p>
                </div>
              </div>

              {/* Frame 283 — 658×446: two image placeholders side by side */}
              <div className={styles.galleryMediaRow}>
                <div className={styles.galleryMediaHalf}>
                  {/* TODO: <Image> — Rectangle 79 (325×446) */}
                </div>
                <div className={styles.galleryMediaHalf}>
                  {/* TODO: <Image> — Rectangle 80 (325×446) */}
                </div>
              </div>

            </div>

            {/* Frame 285 — mid column (406×760): stacked media */}
            <div className={`${styles.galleryColStack} ${styles.galleryColMid}`}>
              <div className={styles.galleryMediaTall}>
                {/* TODO: <Image> or <video> — Big Video 2 (406×437) */}
              </div>
              <div className={styles.galleryMediaShort}>
                {/* TODO: <Image> — Frame 42 (406×315) */}
              </div>
            </div>

            {/* Frame 286 — narrow column (382×760): image + lavender quote */}
            <div className={`${styles.galleryColStack} ${styles.galleryColNarrow}`}>
              <div className={styles.galleryMediaTop}>
                {/* TODO: <Image> — Frame 46 (382×384) */}
              </div>
              <div className={styles.galleryQuoteLavender}>
                <div className={styles.galleryQuoteInner}>
                  <p className={styles.galleryQuoteText}>
                    &ldquo;I love the community it creates amongst students with a
                    shared interest in linguistics and language!!&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* ── SLIDE 2 — columns 4–7 (same structure, different content) ── */}

            {/* Big Video 2 — 548×760 */}
            <div className={styles.galleryBigMedia}>
              {/* TODO: <Image> or <video> */}
            </div>

            {/* Frame 287 — wide column (658×760) */}
            <div className={`${styles.galleryColStack} ${styles.galleryColWide}`}>
              <div className={styles.galleryQuoteBlue}>
                <div className={styles.galleryQuoteInner}>
                  <p className={styles.galleryQuoteText}>
                    &ldquo;This club is not just for linguistic majors!! The best part
                    is that everyone can find their place here and get the opportunity
                    to do research in language or a topic that they enjoy!&rdquo;
                  </p>
                </div>
              </div>
              <div className={styles.galleryMediaRow}>
                <div className={styles.galleryMediaHalf}>
                  {/* TODO: <Image> — Rectangle 79 (325×446) */}
                </div>
                <div className={styles.galleryMediaHalf}>
                  {/* TODO: <Image> — Rectangle 80 (325×446) */}
                </div>
              </div>
            </div>

            {/* Frame 288 — mid column (406×760) */}
            <div className={`${styles.galleryColStack} ${styles.galleryColMid}`}>
              <div className={styles.galleryMediaTall}>
                {/* TODO: <Image> or <video> */}
              </div>
              <div className={styles.galleryMediaShort}>
                {/* TODO: <Image> */}
              </div>
            </div>

            {/* Frame 289 — narrow column (382×760) */}
            <div className={`${styles.galleryColStack} ${styles.galleryColNarrow}`}>
              <div className={styles.galleryMediaTop}>
                {/* TODO: <Image> */}
              </div>
              <div className={styles.galleryQuoteLavender}>
                <div className={styles.galleryQuoteInner}>
                  <p className={styles.galleryQuoteText}>
                    &ldquo;Love the Lin Club movie nights! It&apos;s so fun to meet
                    others in the major, for chatting and having a good time :)&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>{/* end .galleryTrack */}

          {/* Left arrow — position: absolute, left: 4px, top: 340px */}
          <button
            className={`${styles.galleryArrow} ${styles.galleryArrowLeft}`}
            onClick={goPrev}
            aria-label="Previous slide"
            disabled={slide === 0}
          >
            {/* TODO: swap for iconamoon:arrow-right-2-light once icon set confirmed */}
            <RiArrowRightSLine
              className={styles.galleryArrowIcon}
              style={{ transform: 'rotate(180deg)' }}
            />
          </button>

          {/* Right arrow — position: absolute, left: 1292px, top: 340px */}
          <button
            className={`${styles.galleryArrow} ${styles.galleryArrowRight}`}
            onClick={goNext}
            aria-label="Next slide"
            disabled={slide === TOTAL_SLIDES - 1}
          >
            {/* TODO: swap for iconamoon:arrow-right-2-light once icon set confirmed */}
            <RiArrowRightSLine className={styles.galleryArrowIcon} />
          </button>

        </div>{/* end .galleryCarousel */}

      </div>{/* end .galleryCard */}

    </section>
  );
}
