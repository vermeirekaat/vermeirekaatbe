import styles from "./Layout.module.css";
import Card from "./Card.js";
import { motion } from "framer-motion";

export default function Layout({ projects, opacityIntro, opacityProjects, positionProjects }) {

    return(
        <section className={styles.container}>
            <motion.div className={styles.intro}
            style={{ opacity: opacityIntro }}
            >
                <h3 className={styles.title}>Projects</h3>
                <p className={styles.paragraph}>For the past two years I have gained knowledge of three subjects. Each with a focus on real-life cases and projects. Not all projects are the best but I am proud of everything that I have accomplished Moreover, I am glad that I have learned from my mistakes so that I can improve my skills.</p>

                <div className={styles.devine}>
                    <p className={styles.blue}>Development</p>
                    <p className={styles.orange}>Research</p>
                    <p className={styles.gold}>Design</p>
                </div>    
            </motion.div>
            <motion.div className={styles.overview}
            style={{ opacity: opacityProjects, y: positionProjects }}
            >
                {projects.map((project) => (
                    <Card key={project.sys.id} card={project}></Card>
                ))}
            </motion.div>
        </section>
    )
}