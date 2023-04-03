import { motion } from "framer-motion"

import styles from "./Card.module.scss"

export default function CardDesktop({ card }) {
    return (
        <article className={styles.project} key={card.sys.id}>
            <div className={styles.project_container}>
                <motion.h4 className={styles.subtitle}
                    initial={{ opacity: .2 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: .5 }}
                >
                    {card.fields.title}
                </motion.h4> 
                <motion.div className={styles.tags}
                    initial={{ opacity: .2 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: .5 }}
                >
                    { card.fields.tags.map((tag) => (
                        <p className={styles.tag} key={tag.fields.name} style={{ backgroundColor: tag.fields.color}}>{tag.fields.short}</p>
                    ))}
                </motion.div> 
            </div>
            <div className={styles.image_container}>
                <div className={styles.image_overlay}></div>
                <img className={styles.image_project}
                    src={"https:" + card.fields.cover.fields.file.url}>
                </img>
            </div>
        </article>
    )
}