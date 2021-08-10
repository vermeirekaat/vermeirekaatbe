import styles from "./Background.module.css";

export default function Background({ background }) {
    return(
        <section className={styles.container} style={{ backgroundColor: background }}>
                <div className={styles.background_image}></div>
                <h2 className={styles.background_title}>I have a heart of code</h2>
        </section>
    )
}