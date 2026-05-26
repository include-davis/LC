import styles from "./ViewToggleSection.module.scss";

import ViewToggleButton from "../ViewToggleButton/ViewToggleButton";

export default function ViewToggleSection({ buttonsData, selectedIndex, setSelected }) {
    return (
        <div className={styles.container}>
            {buttonsData.map((buttonData, index) => (
                <ViewToggleButton
                    key={index}
                    icon={buttonData.icon}
                    iconSelected={buttonData.iconSelected}
                    iconAlt={buttonData.iconAlt}
                    text={buttonData.text}
                    selectedColor={buttonData.selectedColor}
                    isSelected={index == selectedIndex}
                    onClick={() => setSelected(index)}
                />
            ))}
        </div>
    )
}