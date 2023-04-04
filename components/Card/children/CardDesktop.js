import { motion } from "framer-motion";

import styles from "../Card.module.scss";
import Tag from "../../Tag/Tag";

export default function CardDesktop({ card }) {
  return (
    <article className={styles.project} key={card.sys.id}>
      <div className={styles.project_container}>
        <motion.h4
          className={styles.subtitle}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          {card.fields.title}
        </motion.h4>
        <motion.div
          className={styles.tags}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          {card.fields.tags.map((tag) => (
            <Tag
              key={tag.fields.name}
              color={tag.fields.color}
              name={tag.fields.short}
            />
          ))}
        </motion.div>
      </div>
      <div className={styles.image_container}>
        <div className={styles.image_overlay}></div>
        <img
          className={styles.image_project}
          src={"https:" + card.fields.cover.fields.file.url}
        ></img>
      </div>
    </article>
  );
}
