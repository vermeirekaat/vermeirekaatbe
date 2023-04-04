import styles from "../Detail.module.scss";

export default function DetailContent({ description, tools }) {
  return (
    <section className={styles.detail__content}>
      <p className={styles.detail__content_info}>{description}</p>
      <div className={styles.detail__tools}>
        {tools.map((tool) => (
          <p className={styles.tool} key={tool.fields.name}>
            {tool.fields.name}
          </p>
        ))}
      </div>
    </section>
  );
}
