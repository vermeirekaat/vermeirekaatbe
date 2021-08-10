import styles from "./Layout.module.css";
import Image from "next/image";
import {useState} from "react";

export default function Layout({ background, projects}) {

    const [showProjects, setShowProjects] = useState(false);

    let overview;

    if (showProjects === false) {
        overview = projects.slice(0, 4);
        console.log("false");
    } else if (showProjects === true) {
        overview = projects;
    }

    const handleClickButton = e => {
        console.log("button is clicked");
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
                    <article className={styles.project} key={project.id}>
                        <h4 className={styles.subtitle}>{project.title}</h4>
                        <div className={styles.tags}>
                            {project.tags.map((tag) => (
                                <p className={styles.tag} key={tag.name}>{tag.short}</p>
                            ))}
                        </div>
                       
                        <Image
                            src={process.env.NEXT_PUBLIC_STRAPI_URL + project.cover.url}
                            width={project.cover.width}
                            height={project.cover.height}
                            alt={project.title}
                        />
                    </article>
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