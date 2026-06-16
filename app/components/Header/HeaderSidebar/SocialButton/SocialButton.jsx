import styles from "./SocialButton.module.scss";

import Image from "next/image";

export default function SocialButton({ image, alt, link }) {
    return (
        <a href={link} target="_blank" className={styles.button}>
            <Image src={image} alt={alt} />
        </a>
    )
}