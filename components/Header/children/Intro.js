import styles from "../Header.module.scss";

export default function Intro() {

  return (
    <section className={styles.intro}>
      <div className={styles.intro__image}></div>
      <h2 className={styles.intro__title}>I have a heart of code</h2>
      <div className={styles.intro__info}>
        <p className={styles.paragraph}>
          I create digital products that fullfil the user&apos;s needs.
          <br></br> I am passionate about writing code and learning new
          approaches within webdevelopment.
        </p>
      </div>
    </section>
  );
}
