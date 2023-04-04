import { motion, useTransform } from "framer-motion";

import { checkScreenWidth } from "../../../helpers/animations";
import styles from "../Header.module.scss";

export default function Intro({ scroll }) {
  const animations = {
    dissolveText: {
      desktop: useTransform(scroll, [0.4, 0.45], [1, 0]),
      mobile: useTransform(scroll, [0.15, 0.2], [1, 0]),
    },
    positionBackground: {
      desktop: useTransform(scroll, [0, 0.2], [50, -200]),
      mobile: useTransform(scroll, [0, 0.1], [50, -300]),
    },
    scaleCode: {
      desktop: useTransform(scroll, [0.08, 0.15], [0.5, 1]),
      mobile: useTransform(scroll, [0, 0.05], [0.5, 1]),
    },
    opacityCode: {
      desktop: useTransform(scroll, [0.25, 0.35], [1, 0]),
      mobile: useTransform(scroll, [0.08, 0.12], [1, 0]),
    },
    moveCode: {
      desktop: useTransform(scroll, [0.2, 0.35], [0, -300]),
      mobile: useTransform(scroll, [0.08, 0.12], [0, -150]),
    },
    scaleImage: {
      desktop: useTransform(scroll, [0.2, 0.3], [1, 0.5]),
      mobile: useTransform(scroll, [0.08, 0.1], [1.5, 1]),
    },
    imageX: {
      desktop: useTransform(scroll, [0.2, 0.3], [0, -300]),
      mobile: useTransform(scroll, [0.08, 0.1], [0, -100]),
    },
    imageY: {
      desktop: useTransform(scroll, [0.2, 0.3], [0, 650]),
      mobile: useTransform(scroll, [0.08, 0.1], [0, 400]),
    },
    moveText: {
      desktop: useTransform(scroll, [0.25, 0.3], [100, 0]),
      mobile: useTransform(scroll, [0.08, 0.1], [0, -300]),
    },
    opacityText: {
      desktop: useTransform(scroll, [0.25, 0.3], [0, 1]),
      mobile: useTransform(scroll, [0.08, 0.1], [0, 1]),
    },
  };

  return (
    <motion.div
      style={{
        opacity: checkScreenWidth(animations.dissolveText),
      }}
    >
      <motion.div
        className={styles.intro}
        style={{
          y: checkScreenWidth(animations.positionBackground),
        }}
      >
        <motion.div
          className={styles.intro__image}
          style={{
            scale: checkScreenWidth(animations.scaleImage),
            x: checkScreenWidth(animations.imageX),
            y: checkScreenWidth(animations.imageY),
          }}
        ></motion.div>
        <motion.h2
          className={styles.intro__title}
          style={{
            opacity: checkScreenWidth(animations.opacityCode),
            scale: checkScreenWidth(animations.scaleCode),
            y: checkScreenWidth(animations.moveCode),
          }}
        >
          I have a heart of code
        </motion.h2>
      </motion.div>

      <motion.div
        className={styles.intro__info}
        style={{
          y: checkScreenWidth(animations.moveText),
          opacity: checkScreenWidth(animations.opacityText),
        }}
      >
        <p className={styles.paragraph}>
          I create digital products that fullfil the user&apos;s needs.{" "}
          <br></br> I am passionate about writing code and learning new
          approaches within webdevelopment. <br></br> I am interested in the
          research process behind projects and looking forward to improve my
          skills.
        </p>
      </motion.div>
    </motion.div>
  );
}
