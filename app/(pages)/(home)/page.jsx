import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.page}>

      <section className={styles.hero}>
        <p>Hero Section</p>
      </section>

      <section className={styles.intro}>
        <p>Intro Section</p>
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
