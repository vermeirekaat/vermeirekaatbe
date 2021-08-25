import Link from "next/link";
import Image from "next/image";
import styles from "./Card.module.css"
export default function Card({ card }) {

    return (
        <Link key={card.sys.id} href={`/projects/${card.sys.id}`}>
            <a className={styles.link}>
                <article className={styles.project} key={card.sys.id}
                >
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
                </article>
            </a>
        </Link>
                   
    )
}