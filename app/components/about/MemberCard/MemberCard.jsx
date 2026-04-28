import styles from './MemberCard.module.scss';

export default function MemberCard() {
    return (
        <div className={styles.cardContainer}>
            <img className={styles.memberIMG} src='/images/about/james.png' alt='James'/>
            <section className={styles.textContainer}>
                <h3>James (he/him)</h3>
                <p>President</p>
            </section>
        </div>
    )
}