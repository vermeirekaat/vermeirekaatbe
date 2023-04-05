import Link from "next/link";

import styles from "./Card.module.scss";
import CardMobile from "./children/CardMobile";
import CardDesktop from "./children/CardDesktop";

export default function Card({ card, mobile }) {
  return (
    <>
    {mobile === true ? (
      <CardMobile card={card} />
    ) : (
      <CardDesktop card={card} />
    )}
    </>
    // <Link key={card.sys.id} href={`/projects/${card.sys.id}`}>
    //   <a className={styles.link}>
    //     {mobile === true ? (
    //       <CardMobile card={card} />
    //     ) : (
    //       <CardDesktop card={card} />
    //     )}
    //   </a>
    // </Link>
  );
}
