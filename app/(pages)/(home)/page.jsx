import Image from 'next/image';
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
