import Image from 'next/image';
import styles from './page.module.scss';
// Shared arrow asset: /public/shared/arrow_right.svg — used in intro + recent events buttons
import GallerySection from '../../components/home/GallerySection/GallerySection';

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

        {/* Decorative — star cluster (321.81×308.39px) */}
        <div className={styles.decoStar2} aria-hidden="true">
          <Image
            src="/home/hero/decoration_star_2.png"
            alt=""
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Decorative — star 3 (257.17×244.7px) */}
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

        {/* Frame 311 — hero text group (734.49×305px, left: 90px, top: 137px) */}
        <div className={styles.heroTextFrame}>

          {/* Frame 295 — "Welcome to UC Davis's" (294×36px, top: 0, left: 0) */}
          <p className={styles.heroWelcomeText}>Welcome to UC Davis&apos;s</p>

          {/* Frame 310 — speech bubble + discord button (left: 69px, top: 72px) */}
          <div className={styles.heroContentFrame}>

            {/* Frame 301 — speech bubble PNG with "Linguistics Club" baked in */}
            <div className={styles.heroSpeechBubble}>
              <Image
                src="/home/hero/hero_speech_bubble.png"
                alt="Linguistics Club"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Join our Discord — outer frame (275×92px, left: 342px, top: 139.61px) */}
            <div className={styles.heroDiscordOuter}>
              {/* Inner button (264.58×60.8px, top: 16px, left: 6px) — rotates on hover */}
              <a
                href="https://discord.com/invite/9HZTDnaZZr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroDiscordInner}
                aria-label="Join our Discord"
              >
                <div className={styles.heroDiscordImg}>
                  <Image
                    src="/home/hero/hero_discord_button.png"
                    alt="Join our Discord"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </a>
            </div>

          </div>
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
              {/* Frame 211 — 353.73×471.94px, border: 10.23px solid #A3A1EB, crop */}
              <div className={styles.introPhoto}>
                <Image
                  src="/home/intro/intro_photo.png"
                  alt="Linguistics Club members"
                  fill
                  style={{ objectFit: 'contain' }}
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
                  <Image
                    src="/shared/arrow_right.svg"
                    alt=""
                    width={32}
                    height={32}
                    className={styles.introButtonIcon}
                    aria-hidden="true"
                  />
                </div>
              </button>

            </div>

          </div>

        </div>

      </section>

      <section id="schedule" className={styles.schedule}>

        {/* Frame 316 — content column (1110×883px, gap: 42px) */}
        <div className={styles.scheduleCard}>

          {/* Schedule title */}
          <div className={styles.scheduleTitle}>
            <h2 className={styles.scheduleHeading}>Schedule</h2>
          </div>

          {/* Google Calendar embed (1110×768px) */}
          {/* TODO: replace src calendar ID with the club's real public calendar */}
          <div className={styles.scheduleCalendarWrap}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles&mode=MONTH"
              className={styles.scheduleCalendar}
              title="Linguistics Club Schedule"
              frameBorder="0"
              scrolling="no"
            />
          </div>

        </div>

      </section>

      <section className={styles.recentEvents}>

        {/* Recent Events Rectangle Section — gradient card (1374×749.54, border-radius: 40px) */}
        <div className={styles.recentEventsCard}>

          {/* Frame 320 — content column (1084×549.54, align: center, isolation: isolate) */}
          <div className={styles.recentEventsContent}>

            {/* Wug mascot — decorative, horizontally mirrored (87.55×104.94, absolute, z-index: 0) */}
            <div className={styles.recentEventsWug} aria-hidden="true">
              <Image
                src="/home/recent/recent_wug.png"
                alt=""
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Recent Events Title — wrapper (359×73, order: 1, z-index: 1) */}
            <div className={styles.recentEventsTitleWrap}>
              <h2 className={styles.recentEventsHeading}>Recent Events</h2>
            </div>

            {/* Frame 314 — cards + button column (1084×412.54, order: 2, z-index: 2) */}
            <div className={styles.recentEventsBottom}>

              {/* Frame 329 — event cards row (1084×312, gap: 80px, justify: center) */}
              <div className={styles.recentEventsItems}>

                {/* Frame 327 — Event Card 1 (308×312) */}
                <div className={styles.recentEventItem}>
                  {/* Vector 19 — highlight decoration (165.36×46.67, absolute, z-index: 2) */}
                  <div className={styles.recentEventDeco} aria-hidden="true">
                    <Image src="/home/recent/recent_tape.png" alt="" fill style={{ objectFit: 'contain' }} />
                  </div>
                  {/* Frame 326 — date wrapper (86×35, z-index: 0) */}
                  <div className={styles.recentEventDateWrap}>
                    <span className={styles.recentEventDate}>1/22/26</span>
                  </div>
                  {/* Frame 325 — title wrapper (236×56, z-index: 1) */}
                  <div className={styles.recentEventTitleWrap}>
                    <p className={styles.recentEventTitle}>Assyrian Language Presentation</p>
                  </div>
                </div>

                {/* Frame 328 — Event Card 2 (308×312) */}
                <div className={styles.recentEventItem}>
                  <div className={styles.recentEventDeco} aria-hidden="true">
                    <Image src="/home/recent/recent_tape.png" alt="" fill style={{ objectFit: 'contain' }} />
                  </div>
                  {/* Frame 326 — date wrapper (45×35, z-index: 0) */}
                  <div className={styles.recentEventDateWrap}>
                    <span className={styles.recentEventDate}>TBA</span>
                  </div>
                  {/* Frame 325 — title wrapper (236×28, z-index: 1) */}
                  <div className={styles.recentEventTitleWrap}>
                    <p className={styles.recentEventTitle}>...</p>
                  </div>
                </div>

                {/* Frame 329 — Event Card 3 (308×312) */}
                <div className={styles.recentEventItem}>
                  <div className={styles.recentEventDeco} aria-hidden="true">
                    <Image src="/home/recent/recent_tape.png" alt="" fill style={{ objectFit: 'contain' }} />
                  </div>
                  {/* Frame 326 — date wrapper (45×35, z-index: 0) */}
                  <div className={styles.recentEventDateWrap}>
                    <span className={styles.recentEventDate}>TBA</span>
                  </div>
                  {/* Frame 325 — title wrapper (236×28, z-index: 1) */}
                  <div className={styles.recentEventTitleWrap}>
                    <p className={styles.recentEventTitle}>...</p>
                  </div>
                </div>

              </div>

              {/* See More / Archive button (185.32×60.54) */}
              {/* NOTE: Figma layer is labelled "Archive" — update text to match final copy */}
              <button className={styles.recentEventsMoreBtn} type="button">
                {/* Frame 10 — button inner row (106×32, gap: 8.8px) */}
                <div className={styles.recentEventsMoreBtnInner}>
                  <span className={styles.recentEventsMoreBtnText}>See More</span>
                  <Image
                    src="/shared/arrow_right.svg"
                    alt=""
                    width={30}
                    height={30}
                    className={styles.recentEventsMoreBtnIcon}
                    aria-hidden="true"
                  />
                </div>
              </button>

            </div>
          </div>

        </div>

      </section>

      <GallerySection />

    </main>
  );
}
