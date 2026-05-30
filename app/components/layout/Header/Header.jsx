import styles from "./Header.module.scss";

import Image from "next/image";

import ICON_SVG from "../../../../public/logo.svg";
import HeaderItem from "../HeadeItem/HeaderItem";

export default function Header({ itemsData }) {
    return (
        <div className={styles.container}>
            <a 
                href="/"
                className={styles.iconButton}>
                <Image
                    src={ICON_SVG}
                    alt="Linguistics Club Logo"
                />
            </a>

            {itemsData.map((item, index) => (
                <HeaderItem
                    key={index}
                    title={item.title}
                    link={item.link}
                    subitems={item.subitems}
                />
            ))}
        </div>
    )
}