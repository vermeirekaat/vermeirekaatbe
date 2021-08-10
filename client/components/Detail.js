import styles from "./Detail.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Detail({ project }) {

    return(
        <article className={styles.container}>
            <Link href="/"><a className={styles.cross}>
                <Image
                    src="/assets/cross-icon.svg"
                    alt="cross-icon"
                    width={30}
                    height={30}
                />   
            </a></Link>
            <section className={styles.header}>
                <div className={styles.information}>
                    <h1 className={styles.title}>{project.title}</h1>
                    <Link href={project.link}><a className={styles.link} target="_blank">
                        <Image
                            src="/assets/external-link.svg"
                            alt="external-link-icon"
                            width={50}
                            height={50}
                        />   
                    </a></Link>
                </div>
                <div className={styles.tags}>
                    {project.tags.map((tag) => (
                        <p className={styles.tag} key={tag.name}>{tag.short}</p>
                    ))}
                </div>
                <Image
                    src={process.env.NEXT_PUBLIC_STRAPI_URL + project.banner.url}
                    width={project.banner.width}
                    height={project.banner.height}
                    alt={project.title}
                    priority={true}
                    quality={50}
                /> 
            </section>

            <section className={styles.content}>
                <p className={styles.content_info}>{project.info}</p>
                <div className={styles.tools}>
                {project.tools.map((tool) => (
                        <p className={styles.tool} key={tool.name}>{tool.name}</p>
                    ))}
                </div>
            </section>
            

        </article>
    )
}