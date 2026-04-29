import Image from 'next/image';
import styles from './ExpandedMemberCard.module.scss';


export default function ExpandedMemberCard(){
    return (
        <div className={styles.container}>
            <Image className={styles.memberIMG} src={'/images/about/memberIMGs/James.png'} alt={'james'} width={174} height={316} />
            <div className={styles.memberInfo}>
                <section>
                    <h2>James Reid (he/him)</h2>
                    <div className={styles.socials}>
                        <a href='#' rel='linkedin'><Image src={'/images/about/icons/linkedin.svg'} width={14} height={14}/></a>
                        <a href='#' rel='instagram'><Image src={'/images/about/icons/instagram.svg'} width={22} height={22}/></a>
                    </div>
                </section>
                <ul className={styles.standing}>
                    <li>President</li>
                    <li>Second Year</li>
                    <li>Linguistics Major</li>
                </ul>
                <ul className={styles.interests}>
                    <li>Main Linguistic Interests: Endangered language work, specifically Hawaiian, as well as morphology, syntax, French and Mandarin.</li>
                    <li>Outside of Linguistics: I am a fencer and a student pilot</li>
                </ul>
            </div>
            <div className={styles.otherMembers}>

            </div>
        </div>
    );
}