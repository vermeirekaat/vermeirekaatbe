import { motion } from "framer-motion";
import styles from "./Filter.module.scss";

export default function Filter({ tags, handleFilter }) {
  const filterBlocks = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <div className={styles.filter}>
      <motion.div
        className={styles.filter_container}
      >
        <h3 className={styles.filter__title}>Projects</h3>
        <p className={styles.filter__intro}>
          For the past two years I have gained knowledge of three subjects. Each
          with a focus on real-life cases and projects. Not all projects are the
          best but I am proud of everything that I have accomplished. Moreover,
          I am glad that I have learned from my mistakes so that I can improve
          my skills.
        </p>

        <div className={styles.filter__tags}>
          {tags.map((tag) => (
            <motion.button
              className={styles.filter__tags_btn}
              key={tag.sys.id}
              style={{
                backgroundColor: tag.fields.color,
              }}
              value={tag.fields.name}
              onClick={(e) => filterBlocks(e)}
            >
              {tag.fields.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
