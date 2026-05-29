"use client"

import styles from "./ViewToggleButton.module.scss"

import React, { useState } from "react";
import Image from "next/image";

export default function ViewToggleButton({ icon, iconSelected, iconAlt, text, selectedColor, isSelected, onClick }) {
    const [ isHovered, setHovered ] = useState(false);

    return (
        <button 
            style={{ '--bg-color': selectedColor }}
            className={`${styles.button} ${isSelected ? styles.selected : ''}`}
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image className={text.includes("FAQ") && (isHovered || isSelected) ? styles.iconInvert : ''} src={isHovered || isSelected ? iconSelected : icon} alt={iconAlt} /> 
            {text}
        </button>
    )
}