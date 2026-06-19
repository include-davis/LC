import styles from "./MobileFAQSection.module.scss"

import FAQCardContainer from "../FAQCardContainer/FAQCardContainer";

import { FAQ_CARDS } from "../../../../data/FAQCardData";

export default function MobileFAQSection() {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>FAQ (Frequently Asked Questions)</h2>

            <FAQCardContainer cards={FAQ_CARDS} />
        </div>
    )
}