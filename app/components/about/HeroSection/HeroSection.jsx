import styles from "./HeroSection.module.scss";

import Image from "next/image";

import STAR_1_SVG from "../../../../public/images/about/star1.svg";
import STAR_2_SVG from "../../../../public/images/about/star2.svg";
import STAR_3_SVG from "../../../../public/images/about/star3.svg";

import MOBILE_STAR_SVG from "../../../../public/images/about/mobile_star.svg";

export default function HeroSection({ title, description }) {
    return (
        <div className={styles.container}>
            <div className={styles.textContainerMobile}>
                <div className={styles.starAndHeaderContainer}> 
                    <Image className={styles.starIconMobile} src={MOBILE_STAR_SVG} alt="Star Icon" />
                    <h1 className={styles.header}>{title}</h1>
                    <Image className={styles.starIconMobile} src={MOBILE_STAR_SVG} alt="Star Icon" />
                </div>
                
                <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.textContainerDesktop}>
                <h1 className={styles.header}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.starContainerDesktop}>
                <Image className={styles.starIcon1} src={STAR_1_SVG} alt="Star Icon" />
                <Image className={styles.starIcon2} src={STAR_2_SVG} alt="Star Icon" />
                <Image className={styles.starIcon3} src={STAR_3_SVG} alt="Star Icon" />
            </div>
        </div>
    )
}