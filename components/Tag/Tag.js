import styles from "./Tag.module.scss";

export default function Tag({ color, name}) {
    return (
        <p 
            className={styles.tag} 
            style={{ backgroundColor: color}}
        >
            {name}
        </p>
    )
}