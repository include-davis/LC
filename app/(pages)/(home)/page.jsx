import Image from 'next/image';
import { RiArrowRightSLine } from 'react-icons/ri';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.page}>

      <section className={styles.hero}>

        {/* Decorative — top right cloud strip (563×114px) */}
        <div className={styles.decoTopRight} aria-hidden="true">
          <Image
            src="/home/hero/decoration_top_right.png"
            alt=""
            fill
            style={{ objectFit: 'contain', objectPosition: 'top right' }}
          />
        </div>

        {/* Decorative — star cluster (209×242px) */}
        <div className={styles.decoStar2} aria-hidden="true">
          <Image
            src="/home/hero/decoration_star_2.png"
            alt=""
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Decorative — star strip (253×129px) */}
        <div className={styles.decoStar3} aria-hidden="true">
          <Image
            src="/home/hero/decoration_star_3.png"
            alt=""
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Decorative — star strip (253×129px) */}
        <div className={styles.wugMascot} aria-hidden="true">
            <Image
              src="/home/hero/mascot_wug.png"
              alt="Wug, the Linguistics Club mascot"
              fill
              style={{ objectFit: 'contain'}}
            />
        </div>

        <div className={styles.linguisticsText}>
          {/*
            linguistics_text.png (735×306px) is a combined asset containing:
            welcome text + speech bubble + discord button.
            NOTE: the Discord button inside this image is not clickable.
            When ready, split into separate assets so the button can be a real <a> link.
          */}
          <Image
            src="/home/hero/linguistics_text.png"
            alt="Welcome to UC Davis's Linguistics Club — Join our Discord"
            fill
            style={{ objectFit: 'contain'}}
          />
        </div>

        {/* Decorative overlay — bottom left cloud strip (563×114px) */}
        <div className={styles.decoBottomLeft} aria-hidden="true">
          <Image
            src="/home/hero/decoration_bottom_left.png"
            alt=""
            fill
            style={{ objectFit: 'contain'}}
          />
        </div>

        {/* Bottom purple banner (1440×279px) */}
        <div className={styles.heroBanner}>
          <Image
            src="/home/hero/wug_banner.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            aria-hidden="true"
          />
        </div>

      </section>

      <section className={styles.intro}>

        {/* introCard — Frame 297: rounded gradient card */}
        <div className={styles.introCard}>

          {/* introContent — Frame 319: two-column row */}
          <div className={styles.introContent}>

            {/* Left column — photo + squiggle decorations (420×548) */}
            <div className={styles.introImageWrap}>

              {/* introPhoto — Frame 211: photo with purple border */}
              <div className={styles.introPhoto}>
                <Image
                  src="/home/intro/intro_photo.jpg"
                  alt="Linguistics Club members"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* introSquigglesBottomLeft — Frame 272 (Vectors 23–28, Polygons 5–6) */}
              <div className={styles.introSquigglesBottomLeft} aria-hidden="true">
                <Image
                  src="/home/intro/intro_squiggles_bottomright.svg"
                  alt=""
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* introSquigglesTopRight — Frame 273 (Vectors 29–33, Polygons 7–8) */}
              <div className={styles.introSquigglesTopRight} aria-hidden="true">
                <Image
                  src="/home/intro/intro_squiggles_topright.svg"
                  alt=""
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>

            </div>

            {/* introText — Frame 296: right column */}
            <div className={styles.introText}>

              {/* introTextBlock — Frame 212: heading + body */}
              <div className={styles.introTextBlock}>

                {/* introHeadingWrap — Frame 209 */}
                <div className={styles.introHeadingWrap}>
                  <h2 className={styles.introHeading}>
                    Hello! We are UC Davis&apos;s Linguistics Club!
                  </h2>
                </div>

                {/* introBodyWrap — Frame 12 */}
                <div className={styles.introBodyWrap}>
                  <p className={styles.introBody}>
                    We are an academic campus club that is committed to teaching and
                    sharing the study of linguistics with veteran language enthusiasts
                    and newcomers alike. If you want to learn more about it, join us!
                  </p>
                </div>

              </div>

              {/* Learn more button */}
              <button className={styles.introButton} type="button">
                {/* Frame 10 — button inner row */}
                <div className={styles.introButtonInner}>
                  <span className={styles.introButtonText}>Learn More</span>
                  <RiArrowRightSLine className={styles.introButtonIcon} aria-hidden="true" />
                </div>
              </button>

            </div>

          </div>

        </div>

      </section>

      <section className={styles.schedule}>
        <p>Schedule Section</p>
      </section>

      <section className={styles.recentEvents}>
        <p>Recent Events Section</p>
      </section>

      <section className={styles.gallery}>
        <p>Gallery Section</p>
      </section>

    </main>
  );
}
