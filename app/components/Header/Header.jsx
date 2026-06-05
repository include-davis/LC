"use client"

import styles from "./Header.module.scss";

import { useEffect, useState } from "react";
import Image from "next/image";

import HeaderItem from "./HeaderItem/HeaderItem";
import HeaderSidebar from "./HeaderSidebar/HeaderSidebar";

import ICON_SVG from "../../../public/logo.svg";
import HEADER_MENU_SVG from "../../../public/shared/hamburger_menu.svg";

export default function Header({ itemsData }) {
    const [isSidebarOpen, setSidebarVisibility] = useState(false);

    useEffect(() => {
        if (isSidebarOpen)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = '';

        // Cleanup
        return () => {
            document.body.style.overflow = '';
        }
    }, [isSidebarOpen]);

    return (
        <div className={styles.container}>
            <a 
                href="/"
                className={styles.iconButton}>
                <Image
                    src={ICON_SVG}
                    alt="Linguistics Club Logo"
                    width={44} height={44}
                />
            </a>

            <div className={styles.headerItemsContainerDesktop}>
                {itemsData.map((item, index) => (
                    <HeaderItem
                        key={index}
                        title={item.title}
                        link={item.link}
                        subitems={item.subitems}
                    />
                ))}
            </div>

            <button 
                className={styles.headerMenuButtonMobile} 
                onClick={() => setSidebarVisibility(true)}
            >
                <Image
                    src={HEADER_MENU_SVG}
                    alt="Header Menu"
                />
            </button>

            <HeaderSidebar 
                itemsData={itemsData} 
                isOpen={isSidebarOpen}
                onClose={() => setSidebarVisibility(false)}
            />
        </div>
    )
}