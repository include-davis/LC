"use client"

import styles from "./FAQCard.module.scss"

import { useState } from "react"
import Image from "next/image";

import MINUS_ICON from "../../../../public/images/about/minus.svg"
import PLUS_ICON from "../../../../public/images/about/plus.svg"

export default function FAQCard({ title, description }) {
    const [isExpanded, setExpanded] = useState(true);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>

                <button className={styles.expandButton}>
                    <Image src={MINUS_ICON} alt="Minus Icon" />
                </button>
            </div>

            {isExpanded && (
                <div>
                    <div className={styles.separator} />
                    
                    <p className={styles.description}>{description}</p>
                </div>                
            )}
        </div>
    )
}