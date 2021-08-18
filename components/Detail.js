import styles from "./Detail.module.css";
import Link from "next/link";
import Image from "next/image";
import ReactPlayer from "react-player";

export default function Detail({ project }) {

    return(
        <article className={styles.container}>
            <Link href="/#projects"><a className={styles.cross}>
                <Image
                    src="/assets/cross-icon.svg"
                    alt="cross-icon"
                    width={30}
                    height={30}
                />   
            </a></Link>
            <section className={styles.header}>
                <div className={styles.information}>
                    <div className={styles.information_title}>
                        <h1 className={styles.title}>{project.title}</h1>
                        {!project.link ? <p></p> : <Link href={project.link}><a className={styles.link} target="_blank">
                            <Image
                                src="/assets/external-link.svg"
                                alt="external-link-icon"
                                width={50}
                                height={50}
                            />   
                        </a></Link>}
                        
                    </div>

                    <div className={styles.tags}>
                    {project.tags.map((tag) => (
                        <p className={styles.tag} key={tag.fields.name}>{tag.fields.short}</p>
                    ))}
                    </div>
                </div>
                { project.video === true ? 
                     <ReactPlayer 
                     url={"https:" + project.banner.fields.file.url}
                     layout="fill"
                     alt={project.title}
                     playing={ true }
                     loop={ true }
                     muted={ false }/>
                : <Image
                    src={"https:" + project.banner.fields.file.url}
                    width={project.banner.fields.file.details.image.width}
                    height={project.banner.fields.file.details.image.height}
                    alt={project.title}
                    priority={true}
                    quality={50}
                /> }
                
            </section>

            <section className={styles.content}>
                <p className={styles.content_info}>{project.description.content[0].content[0].value}</p>
                <div className={styles.tools}>
                {project.tools.map((tool) => (
                        <p className={styles.tool} key={tool.fields.name}>{tool.fields.name}</p>
                    ))}
                </div>
            </section>
        </article>
    )
}