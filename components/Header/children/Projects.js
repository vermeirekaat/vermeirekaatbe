import { motion, useTransform } from "framer-motion";

import { checkScreenWidth } from "../../../helpers/animations";
import styles from "../Header.module.scss";

export default function Projects({ scroll, tags, returnFilter }) {
  const animations = {
    opacityIntro: {
      desktop: useTransform(scroll, [0.45, 0.5], [0, 1]),
      mobile: useTransform(scroll, [0.15, 0.2], [0, 1]),
    },
    moveIntro: {
      desktop: useTransform(scroll, [0.45, 0.5], [100, 0]),
      mobile: useTransform(scroll, [0.15, 0.2], [50, 0]),
    },
    scaleBlocks: {
      desktop: useTransform(scroll, [0.5, 0.53], [0, 1]),
      mobile: useTransform(scroll, [0.2, 0.25], [0, 1]),
    },
  };

  const filterBlocks = (e) => {
    returnFilter(e.target.value);
  };

  return (
    <motion.div
      className={styles.projects}
      style={{
        opacity: checkScreenWidth(animations.opacityIntro),
        y: checkScreenWidth(animations.moveIntro),
      }}
    >
      <h3 className={styles.projects__title}>Projects</h3>
      <p className={styles.projects__intro}>
        For the past two years I have gained knowledge of three subjects. Each
        with a focus on real-life cases and projects. Not all projects are the
        best but I am proud of everything that I have accomplished. Moreover, I
        am glad that I have learned from my mistakes so that I can improve my
        skills.
      </p>

      <div className={styles.projects__tags}>
        {tags.map((tag) => (
          <motion.button
            className={styles.project__tags_filter}
            key={tag.sys.id}
            style={{
              scale: checkScreenWidth(animations.scaleBlocks),
              backgroundColor: tag.fields.color,
            }}
            value={tag.fields.name}
            onClick={(e) => filterBlocks(e)}
          >
            {tag.fields.name}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
