import { motion, useTransform } from "framer-motion";

import { checkScreenWidth } from "../../../helpers/animations";
import styles from "../Header.module.scss";

export default function Profile({ scroll }) {
  const opacity = {
    desktop: useTransform(scroll, [0, 0.15], [1, 0]),
    mobile: useTransform(scroll, [0, 0.1], [1, 0]),
  };

  return (
    <motion.div
      className={styles.profile}
      style={{ opacity: checkScreenWidth(opacity) }}
    >
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
          transition={{ ease: "easeInOut", duration: 1, delay: 1.25 }}
        >
          <p className={styles.profile__content_intro}>My name is</p>
          <h3 className={styles.profile__content_name}>Kaat Vermeire</h3>
        </motion.div>
        <motion.div
          className={styles.profile__image}
          initial={{ x: "-15rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.7, delay: 1.5 }}
        >
          <div className={styles.image}></div>
          <p className={styles.tagline}>est. 1998 - Eeklo (BE)</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
