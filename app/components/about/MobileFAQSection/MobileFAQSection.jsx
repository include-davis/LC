import styles from "./MobileFAQSection.module.scss"

import FAQCardContainer from "../FAQCardContainer/FAQCardContainer";

export default function MobileFAQSection({ faqs }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>FAQ (Frequently Asked Questions)</h2>

            <FAQCardContainer cards={faqs} />
        </div>
    )
}