"use client"

import styles from "./HeaderSidebarItem.module.scss";

import { useState } from "react";
import Image from "next/image";

import DOWN_CHEVRON_SVG from "../../../../../public/shared/down_chevron.svg";

export default function HeaderSidebarItem({ title, link, subitems = [] }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <a href={link} className={styles.title}>{title}</a>
            
                <div className={styles.headerContainerToggleArea} onClick={() => setOpen(!isOpen)}>
                    <Image className={[styles.icon, isOpen && styles.rotate180].filter(Boolean).join(' ')} src={DOWN_CHEVRON_SVG} alt="Down Arrow Icon" />
                </div>
            </div>

            {/* Combines a bunch of different scss classes together below */}
            <div className={[styles.subItemsContainer, isOpen && styles.open].filter(Boolean).join(' ')}>
                {subitems.map((item, index) => (
                    <a key={index} href={item.link} className={styles.subItem}>
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    )
}