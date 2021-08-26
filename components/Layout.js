import styles from "./Layout.module.css";
import Card from "./Card.js";
import { motion } from "framer-motion";

export default function Layout({ projects, opacityProjects, positionProjects, hover }) {

    return(
        <section className={styles.container}>
            <motion.div className={styles.overview}
            style={{ opacity: opacityProjects, y: positionProjects }}
            >
                {projects.map((project) => (
                    <Card key={project.sys.id} card={project} mobile={hover}></Card>
                ))}
            </motion.div>
        </section>
    )
}