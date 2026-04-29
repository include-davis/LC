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
            <div className={styles.header} onClick={() => setExpanded(!isExpanded)}>
                <h3 className={styles.title}>{title}</h3>

                <div className={styles.headerIcon}>
                    {isExpanded ? (
                        <Image src={MINUS_ICON} alt="Minus Icon" />
                    ) : (
                        <Image src={PLUS_ICON} alt="Plus Icon" />
                    )}
                </div>
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