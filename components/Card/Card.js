import Link from "next/link"

import styles from "./Card.module.scss"
import CardMobile from "./CardMobile"
import CardDesktop from "./CardDesktop"

export default function Card({ card, mobile }) {
    return (
        <Link key={card.sys.id} href={`/projects/${card.sys.id}`}>
            <a className={styles.link} >
                { mobile === true ? 
                    <CardMobile card={ card } />
                    :
                    <CardDesktop card={ card } />
                }
            </a>
        </Link> 
    )
}