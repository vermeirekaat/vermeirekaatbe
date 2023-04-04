import { useViewportScroll } from "framer-motion";

import styles from "./Header.module.scss";
import Profile from "./children/Profile";
import Intro from "./children/Intro";
import Projects from "./children/Projects";

export default function Header({ tags, handleFilter }) {
  const { scrollYProgress } = useViewportScroll();

  return (
    <section className={styles.container}>
      <Profile scroll={scrollYProgress} />
      <Intro scroll={scrollYProgress} />
      <Projects
        scroll={scrollYProgress}
        tags={tags}
        returnFilter={(e) => handleFilter(e)}
      />
    </section>
  );
}
