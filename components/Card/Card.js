import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import styles from "./Card.module.scss";
import Tag from "../Tag/Tag";

export default function Card({ card }) {
  return (
    <article className={styles.project} key={card.sys.id}>
      <div className={styles.project__container}>
        <motion.h4
          className={styles.project__subtitle}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          {card.fields.title}
        </motion.h4>
        <motion.div
          className={styles.project__tags}
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
      <div className={styles.project__description}>
        <p>{card.fields.intro}</p>
      </div>
      <div className={styles.project_image}>
        <Image
          className={styles.project_image__img}
          src={"https:" + card.fields.cover.fields.file.url}
          alt={card.fields.cover.fields.name}
          layout="fill"
        />
      </div>
      <Link href={`/projects/${card.sys.id}`}>
          <a className={styles.project__link}></a>
      </Link>
    </article>
  );
}
