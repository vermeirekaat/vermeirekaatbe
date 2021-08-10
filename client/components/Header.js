import styles from "./Header.module.css";

export default function Header ({ background }) {
    return(
        <section className={styles.header} style={{ backgroundColor: background }}>
            <h2 className={styles.greeting}>Nice to meet you</h2>
            <div className={styles.profile}>
                <div className={styles.profile_info}>
                    <p className={styles.profile_intro}>My name is</p>
                    <h3 className={styles.profile_name}>Kaat Vermeire</h3>
                </div>
               

                <div className={styles.profile_image}>
                    <div className={styles.image}></div>
                    <p className={styles.tagline}>est. 1998 - Eeklo (BE)</p>
                </div>
            </div>
           
        </section>
    )
}