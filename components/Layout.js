import styles from "./Layout.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Layout({ background, projects }) {

    const [showProjects, setShowProjects] = useState(false);

    const gridView = {
        mobile: 4,
        desktop: 6,
    }

    let overview;

    const checkScreenWidth = () => {
        if (typeof window !== "undefined") {
            const screenWidth = window.screen.width;
            let gridItems;

            if (screenWidth <= 1024) {
                gridItems = gridView.mobile;
            }
            if (screenWidth >= 1024) {
                gridItems = gridView.desktop; 
            }
            return gridItems;
        }
    }

    if (showProjects === false) {
        const grid = checkScreenWidth();
        overview = projects.slice(0, grid);
    } else if (showProjects === true) {
        overview = projects;
    }

    const handleClickButton = () => {
        setShowProjects(!showProjects);
    }

    return(
        <section className={styles.container} style={{ backgroundColor: background }}>
            <div className={styles.intro}>
                <h3 className={styles.title}>Projects</h3>
                <p className={styles.paragraph}>For the past two years I have gained knowledge of three subjects. Each with a focus on real-life cases and projects.</p>

                <div className={styles.devine}>
                    <p className={styles.gold}>Development</p>
                    <p className={styles.orange}>Research</p>
                    <p className={styles.blue}>Design</p>
                </div>
                
            </div>

            <div className={styles.overview}>
                {overview.map((project) => (
                    <Link key={project.id} href={`/projects/${project.slug}`}>
                    <a className={styles.link}>
                    <article className={styles.project} key={project.id}>
                        <div className={styles.project_container}>
                             <h4 className={styles.subtitle}>{project.title}</h4>
                        <div className={styles.tags}>
                            {project.tags.map((tag) => (
                                <p className={styles.tag} key={tag.name}>{tag.short}</p>
                            ))}
                        </div>
                        <Image
                            src={process.env.NEXT_PUBLIC_STRAPI_URL + project.cover.url}
                            width={250}
                            height={200}
                            alt={project.title}
                            priority={true}
                            quality={50}
                        />
                        </div>
                    </article>
                    </a>
                    </Link>
                ))}
            </div>

            { showProjects === false ? 
                <div className={styles.bottom}>
                    <p onClick={(e) => handleClickButton(e)} className={styles.button}>Show More</p>
                </div> : 
                <div className={styles.bottom}>
                    <p className={styles.end}>You've seen all projects.</p>
                </div> 
            }
        </section>
    )
}