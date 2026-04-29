// importing the styles
import styles from './MemberCard.module.scss';


// MemberCard function, takes in four inputs 
export default function MemberCard({name, image, pronouns, position}) {
    return (

        <div className={styles.cardContainer} key={name}>
            <img className={styles.memberIMG} src={image} alt={name}/>
            <section className={styles.textContainer}>
                <h3>{name} {pronouns}</h3>
                <p>{position}</p>
            </section>
        </div>
        
    )
}