import styles from "./Layout.module.css";
import Card from "../Card/Card.js";
import { motion } from "framer-motion";

export default function Layout({ projects, hover }) {
  return (
    <section className={styles.container}>
      <div className={styles.overview}>
        {projects.map((project) => (
          <Card key={project.sys.id} card={project} mobile={hover}></Card>
        ))}
      </div>
    </section>
  );
}
