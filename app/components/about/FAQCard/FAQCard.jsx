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

                <div className={styles.headerIconContainer}>
                    <div className={styles.headerIconImgContainer}>
                        <Image className={`${styles.headerIcon} ${styles.minusIcon} ${isExpanded ? styles.rotateIn : styles.rotateOutRight}`} src={MINUS_ICON} alt="Minus Icon" />
                    </div>

                    <div className={styles.headerIconImgContainer}>
                        <Image className={`${styles.headerIcon} ${styles.plusIcon} ${isExpanded ? styles.rotateOutLeft : styles.rotateIn}`} src={PLUS_ICON} alt="Plus Icon" />
                    </div>
                </div>
            </div>

            <div className={`${styles.content} ${isExpanded ? styles.contentExpanded : ""}`}>
                <div> {/* ← this wrapper is required */}
                    <div className={styles.separator} />
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </div>
    )
}