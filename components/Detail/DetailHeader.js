import Link from "next/link";
import Image from "next/image";

import styles from "./Detail.module.scss";
import DetailVideo from "./DetailVideo";
import Tag from "../Tag/Tag";

export default function DetailHeader({ project, videoWidth }) {
    return (
        <section className={styles.header}>
            <div className={styles.information}>
                <div className={styles.information_title}>
                    <h1 className={styles.title}>
                        {project.title}
                    </h1>
                    {project.link && 
                        <Link href={project.link} passHref={true}>
                            <a 
                                className={styles.link} target="_blank">
                                <Image
                                    src="/assets/external-link.svg"
                                    alt="external-link-icon"
                                    width={50}
                                    height={50}
                                />   
                            </a>
                        </Link>
                    }    
                </div>

                <div className={styles.tags}>
                        {project.tags.map((tag) => (
                            <Tag 
                                key={tag.fields.name}
                                color={tag.fields.color} 
                                name={tag.fields.short}
                            />
                        ))}
                </div>
            </div>

            { project.video === true ? 
                <DetailVideo 
                    url={project.banner.fields.file.url} 
                    alt={project.title} 
                    videoWidth={videoWidth}
                />               
                : 
                <Image
                    src={"https:" + project.banner.fields.file.url}
                    width={project.banner.fields.file.details.image.width}
                    height={project.banner.fields.file.details.image.height}
                    alt={project.title}
                    priority={true}
                    quality={50}
                /> 
            }
        </section>
    )
}