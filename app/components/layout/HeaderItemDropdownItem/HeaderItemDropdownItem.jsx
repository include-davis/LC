import styles from "./HeaderItemDropdownItem.module.scss";

export default function HeaderItemDropdownItem({ title, description, link }) {
    return (
        <a href={link} className={styles.item}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </a>
    )
}