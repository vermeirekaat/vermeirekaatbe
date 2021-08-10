import styles from "./Information.module.css";

export default function Information({ background }) {
    return(
        <section className={styles.container} style={{ backgroundColor: background }}>
            <div className={styles.background_content}>
                <div className={styles.image}></div>
                <p className={styles.info}>I create digital products that fullfil the user&apos;s needs. Always asking for feedback to learn and improve my skills.</p>
            </div>
           

        </section>
    )
}