import styles from "../Detail.module.scss";

export default function DetailContent({ description, tools }) {
  return (
    <section className={styles.content}>
      <p className={styles.content_info}>{description}</p>
      <div className={styles.tools}>
        {tools.map((tool) => (
          <p className={styles.tool} key={tool.fields.name}>
            {tool.fields.name}
          </p>
        ))}
      </div>
    </section>
  );
}
