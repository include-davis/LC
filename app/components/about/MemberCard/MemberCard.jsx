// importing the styles
import Image from 'next/image';
import styles from './MemberCard.module.scss';


// MemberCard function, takes in four inputs 
export default function MemberCard({name, image, pronouns, position}) {
    return (

        <div className={styles.cardContainer} key={name}>
            <Image className={styles.memberIMG} src={image} alt={name} width={153} height={245}/>
            <section className={styles.textContainer}>
                <h3>{name} {pronouns}</h3>
                <p>{position}</p>
            </section>
        </div>

    )
}