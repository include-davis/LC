import styles from "./FAQCardContainer.module.scss"

import FAQCard from "../FAQCard/FAQCard";

export default function FAQCardContainer({ cards }) {
    return (
        <div id="faq" className={styles.container}>
            {cards.map((card, index) => (
                <FAQCard
                    key={index}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    )   
}