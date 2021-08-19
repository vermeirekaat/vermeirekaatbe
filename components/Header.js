import styles from "./Header.module.css";
import { motion } from "framer-motion";

export default function Header ({ background, opacityAni, positionBack, opacityCode, scaleCode }) {
    return(
        <section className={styles.container} style={{ backgroundColor: background }}>
            <motion.div className={styles.header} 
            style={{ opacity: opacityAni }}>
                <motion.h2 className={styles.greeting}
                    initial={{ y: "-10rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1}}
                    transition={{ ease: "easeInOut", duration: 1, delay: .1 }}
                >Nice to meet you</motion.h2>
                <div className={styles.profile}>
                    <motion.div className={styles.profile_info} 
                        initial={{ x: "-15rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1}}
                        transition={{ ease: "easeInOut", duration: 1, delay: 1.25 }}
                    >
                        <p className={styles.profile_intro}>My name is</p>
                        <h3 className={styles.profile_name}>Kaat Vermeire</h3>
                    </motion.div>
                

                    <motion.div className={styles.profile_image}
                        initial={{ x: "-15rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1}}
                        transition={{ ease: "easeInOut", duration: .7, delay: 1.5 }}
                    >
                        <div className={styles.image}></div>
                        <p className={styles.tagline}>est. 1998 - Eeklo (BE)</p>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div className={styles.background}
            style={{ y: positionBack }}>
                <div className={styles.background_image}></div>
                <motion.h2 className={styles.background_title}
                style={{ opacity: opacityCode, scale: scaleCode}}>I have a heart of code</motion.h2> 
            </motion.div>
        </section>
    )
}