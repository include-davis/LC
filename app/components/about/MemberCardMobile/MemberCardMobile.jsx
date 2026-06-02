import Image from 'next/image';
import styles from './MemberCardMobile.module.scss';

export default function MemberCardMobile({ id, name, image, pronouns, position, year, major, onClick }) {
    return (
        <div className={styles.cardContainer} key={id} onClick={onClick} style={{ cursor: 'pointer' }}>
            <Image className={styles.memberIMG} src={image} alt={name} width={153} height={245} />
            <section className={styles.memberInfo}>
                <h3>{name} {pronouns}</h3>
                <ul className={styles.standing}>
                    <li className={styles.position}>{position}</li>
                    {year && <li className={styles.standingLi}>{year}</li>}
                    <li className={styles.standingLi}>{major}</li>
                </ul>
            </section>
            <Image className={styles.arrowSVG} src={'public/images/about/icons/downArrow.svg'} alt={'arrow'} width={20} height={9} />
        </div>
    );
}