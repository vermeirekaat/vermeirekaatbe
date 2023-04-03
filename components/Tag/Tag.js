import styles from "./Tag.module.scss";

export default function Tag({ key, color, name}) {
    return (
        <p 
            className={styles.tag} 
            key={key} 
            style={{ backgroundColor: color}}
        >
            {name}
        </p>
    )
}