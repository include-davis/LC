import styles from "./HeaderSidebar.module.scss";

import Image from "next/image";

import HeaderSidebarItem from "../HeaderSidebarItem/HeaderSidebarItem";

import CLOSE_BTN_SVG from "../../../public/shared/x.svg";

export default function HeaderSidebar({ itemsData = [] }) {
    return (
        <div className={styles.container}>
            <div className={styles.topBarContainer}>
                <h4 className={styles.header}>Menu</h4>
                <button className={styles.closeBtn}>
                    <Image src={CLOSE_BTN_SVG} alt="Close Btn Icon" />
                </button>
            </div>

            <div className={styles.itemsContainer}>
                {itemsData.map((item, index) => (
                    <HeaderSidebarItem 
                        key={index}
                        title={item.title} 
                        subitems={item.subitems} 
                    />
                ))}
            </div>

        </div>
    )
}