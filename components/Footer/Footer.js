import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.content}>
                    <p className={styles.paragraph}>© vermeirekaat - 2021</p>
                </div>
                <div className={styles.socials}>
                    <div className={styles.link}>
                        <Link href="https://www.linkedin.com/in/vermeirekaat"><a className={styles.icon} target="_blank">
                            <Image
                                src="/assets/linkedin.svg"
                                alt="linkedin-logo"
                                width={30}
                                height={30}
                            />   
                        </a></Link>
                    </div>
                    <div className={styles.link}>
                        <Link href="https://github.com/vermeirekaat"><a className={styles.icon} target="_blank">
                            <Image
                                src="/assets/github.svg"
                                alt="github-logo"
                                width={30}
                                height={30}
                            />   
                        </a></Link>
                    </div>
                    <div className={styles.link}>
                        <Link href="https://www.behance.net/vermeirekaat"><a className={styles.icon} target="_blank">
                            <Image
                                src="/assets/behance.svg"
                                alt="behance-logo"
                                width={30}
                                height={30}
                            />   
                        </a></Link>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}