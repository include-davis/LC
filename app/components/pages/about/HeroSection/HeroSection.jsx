import styles from "./HeroSection.module.scss";

import Image from "next/image";

import STAR_1_SVG from "../../../../public/images/about/star1.svg";
import STAR_2_SVG from "../../../../public/images/about/star2.svg";
import STAR_3_SVG from "../../../../public/images/about/star3.svg";

export default function HeroSection() {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.header}>About Us</h1>
                <p className={styles.description}>Get to know our club and our amazing board members!</p>
            </div>

            <div className={styles.starContainer}>
                <Image className={styles.starIcon1} src={STAR_1_SVG} alt="Star Icon" />
                <Image className={styles.starIcon2} src={STAR_2_SVG} alt="Star Icon" />
                <Image className={styles.starIcon3} src={STAR_3_SVG} alt="Star Icon" />
            </div>
        </div>
    )
}