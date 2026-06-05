import styles from "./HeaderSidebar.module.scss";

import Image from "next/image";

import HeaderSidebarItem from "../../HeaderSidebarItem/HeaderSidebarItem";
import SocialButton from "./SocialButton/SocialButton";

import CLOSE_BTN_SVG from "../../../../public/shared/x.svg";
import DISCORD_SVG from "../../../../public/shared/discord.svg";
import INSTAGRAM_SVG from "../../../../public/shared/INSTAGRAM.svg";

export default function HeaderSidebar({ itemsData = [], isOpen, onClose }) {
    return (
        <>
            <div className={`${styles.container} ${isOpen ? styles.open : ''} `}>
                <div className={styles.topBarContainer}>
                    <h4 className={styles.header}>Menu</h4>
                    <button className={styles.closeBtn} onClick={onClose}>
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

                <div className={styles.separator} />

                <div className={styles.socialBtnsContainer}>
                    <SocialButton image={DISCORD_SVG} alt={"Discord Icon"} link={"https://discord.com/invite/vbVt26kVfg"} />
                    <SocialButton image={INSTAGRAM_SVG} alt={"Instagram Icon"} link={"https://www.instagram.com/linguisticsclubatucd/"} />
                </div>
            </div>

            <div className={`${styles.backdrop} ${isOpen ? styles.open : ''}`}></div>
        </>
    )
}