import Image from 'next/image';
import styles from './ExpandedMemberCard.module.scss';


export default function ExpandedMemberCard(){
    return (
        <div className={styles.container}>
            <Image className={styles.memberIMG} src={'/images/about/James_Border.png'} alt={'james'} width={153} height={245} />
            <section>
                <h2>James Reid (he/him)</h2>
                <ul className={styles.memberInfo}>
                    <li>President</li>
                    <li>Second Year</li>
                    <li>Linguistics Major</li>
                </ul>
                <ul>
                    <li>Main Linguistic Interests: Endangered language work, specifically Hawaiian, as well as morphology, syntax, French and Mandarin.</li>
                    <li>Outside of Linguistics: I am a fencer and a student pilot</li>
                </ul>
            </section>
        </div>
    );
}