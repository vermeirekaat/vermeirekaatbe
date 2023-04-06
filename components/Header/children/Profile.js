import { motion, useTransform, useViewportScroll } from "framer-motion";

import styles from "../Header.module.scss";

export default function Profile() {
  const { scrollY } = useViewportScroll();

  const opacity = useTransform(scrollY, [0, 500], [1, 0.2], { clamp: false });

  return (
    <div className={styles.container}>
      <motion.div className={styles.profile} style={{ opacity }}>
        <motion.h2
          className={styles.profile__greeting}
          initial={{ y: "-10rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
        >
          Nice to meet you
        </motion.h2>
        <div className={styles.profile__content}>
          <motion.div
            className={styles.profile__content_info}
            initial={{ x: "-15rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.2, delay: 1.3 }}
          >
            <p className={styles.profile__content_intro}>My name is</p>
            <h3 className={styles.profile__content_name}>Kaat Vermeire</h3>
          </motion.div>
          <motion.div
            className={styles.profile__image}
            initial={{ x: "-12.5rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
          >
            <div className={styles.image}></div>
            <p className={styles.tagline}>est. 1998 - Eeklo (BE)</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
