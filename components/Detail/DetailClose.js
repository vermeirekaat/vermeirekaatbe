import Link from "next/link";
import Image from "next/image";

import styles from "./Detail.module.scss";

export default function DetailClose() {
    return (
        <Link href="/#projects">
            <a className={styles.cross}>
                <Image
                    src="/assets/cross-icon.svg"
                    alt="cross-icon"
                    width={30}
                    height={30}
                />   
            </a>
        </Link>
    )
}