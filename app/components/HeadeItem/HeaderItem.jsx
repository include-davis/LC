"use client"

import styles from "./HeaderItem.module.scss";

import { useState, useRef } from "react";

import HeaderItemDropdown from "../HeaderItemDropdown/HeaderItemDropdown";

export default function HeaderItem({ title, link, subitems }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const timeoutRef = useRef(null);

    function handleMouseEnter() {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);

        setDropdownOpen(true);
    }

    function handleMouseLeave() {
        timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
    }

    return (
        <div
            className={styles.container}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a 
                href={link} 
                className={styles.itemButton}
            >
                {title}
            </a>

            {isDropdownOpen && <HeaderItemDropdown subitems={subitems} />}
        </div>
    )
}