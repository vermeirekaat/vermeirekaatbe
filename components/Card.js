import Link from "next/link";
import styles from "./Card.module.css"
import { useState } from "react";
import { motion } from "framer-motion";

export default function Card({ card, mobile }) {
    const [hover, setHover] = useState(false);

    return (
        <Link key={card.sys.id} href={`/projects/${card.sys.id}`}>
            <a className={styles.link} >
                { mobile === true ? 
                <article className={styles.project} key={card.sys.id}>
                    <div className={styles.project_container}>
                        <h4 className={styles.subtitle}>{card.fields.title}</h4> 
                            <div className={styles.tags}>
                            {card.fields.tags.map((tag) => (
                                <p className={styles.tag} key={tag.fields.name} style={{ backgroundColor: tag.fields.color}}>{tag.fields.short}</p>
                            ))}
                            </div> 
                    </div>
                    <div className={styles.image_container}>
                        <div className={styles.image_overlay}></div>
                        <img className={styles.image_project}
                            src={"https:" + card.fields.cover.fields.file.url}>
                        </img>
                    </div>
                    <div className={styles.project_description}>
                        <p>{card.fields.intro}</p>
                    </div>
                </article>
                    :
                <article className={styles.project} key={card.sys.id}>
                    <div className={styles.project_container}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {hover === false ? 
                    <> 
                    <motion.h4 className={styles.subtitle}
                        initial={{ opacity: .2 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeIn", duration: .5 }}
                    >{card.fields.title}</motion.h4> 
                    <motion.div className={styles.tags}
                        initial={{ opacity: .2 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeIn", duration: .5 }}
                    >
                    {card.fields.tags.map((tag) => (
                        <p className={styles.tag} key={tag.fields.name} style={{ backgroundColor: tag.fields.color}}>{tag.fields.short}</p>
                    ))}
                </motion.div> </> : 
                    <> 
                    <motion.h4 className={styles.subtitle}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: .2 }}
                        transition={{ ease: "easeOut", duration: .5 }}
                    >{card.fields.title}</motion.h4> 
                    <motion.div className={styles.tags}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: .2 }}
                        transition={{ ease: "easeOut", duration: .5}}
                    >
                    {card.fields.tags.map((tag) => (
                        <p className={styles.tag} key={tag.fields.name} style={{ backgroundColor: tag.fields.color}}>{tag.fields.short}</p>
                    ))}
                </motion.div> </>}
            </div>
            <div className={styles.image_container}>
                    <div className={styles.image_overlay}></div>
                    <img className={styles.image_project}
                        src={"https:" + card.fields.cover.fields.file.url}>
                    </img>
                </div>
            { hover === true ? 
                <motion.div className={styles.project_description}
                    initial={{ y: "2vh", opacity: 0 }}
                    animate={{ y: "-5vh", opacity: 1 }}
                    transition={{ ease: "easeIn", duration: .5 }}
                ><p>{card.fields.intro}</p>
                </motion.div> : 
                <motion.div className={styles.project_description}
                    initial={{ y: "-5vh", opacity: 1 }}
                    animate={{ y: "2vh", opacity: 0 }}
                    transition={{ ease: "easeOut", duration: .5 }}
                ><p>{card.fields.intro}</p>
                </motion.div>
            }
            </article>}
            </a>
        </Link>
                   
    )
}