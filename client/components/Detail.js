import styles from "./Detail.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Detail({ project }) {

    return(
        <section>
                <div>
                    <h1>{project.title}</h1>
                    <Link href={project.link}><a>
                    <Image
                        src="/assets/external-link.svg"
                        alt="external-link-icon"
                        width={20}
                        height={20}
                    />   
                    </a></Link>
                </div>
                {project.tags.map((tag) => (
                    <p className={styles}>{tag.short}</p>
                ))}

            </section>
    )
}