import styles from "./HeaderItemDropdown.module.scss";

import HeaderItemDropdownItem from "../HeaderItemDropdown/HeaderItemDropdownItem";

export default function HeaderItemDropdown({ subitems }) {
    return (
        <div className={styles.container}>
            {subitems.map((subitem, index) => (
                <HeaderItemDropdownItem
                    key={index}
                    title={subitem.title}
                    description={subitem.description}
                    link={subitem.link}
                />
            ))}
        </div>
    )
}