import Image from 'next/image';
import styles from './MemberCard.module.scss';

export default function MemberCard({ id, name, image, pronouns, position, onClick }) {
    return (
        <div className={styles.cardContainer} key={id} onClick={onClick} style={{ cursor: 'pointer' }}>
            <Image className={styles.memberIMG} src={image} alt={name} width={153} height={245} />
            <section className={styles.textContainer}>
                <h3>{name} {pronouns}</h3>
                <p>{position}</p>
            </section>
        </div>
    );
}