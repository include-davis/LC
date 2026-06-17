import styles from "./ClubMissionSection.module.scss";

import Image from "next/image";

export default function ClubMissionSection({ title, description, image, image_alt }) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={image} alt={image_alt} />
            </div>

            <div className={styles.textContainer}>
                <h2 className={styles.title}>{title}</h2>
                
                <span className={styles.descriptionContainer}>{description}</span>
            </div>
        </div>
    )
}