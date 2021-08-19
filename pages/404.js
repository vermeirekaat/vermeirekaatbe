import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/404.module.css";

export default function NotFound () {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3500);
  }, []);

  return (
    <div className={styles.glitch_container}>
        <p className={styles.glitch}>REDIRECT</p>
        <div className={styles.background}></div>
    </div>
  )
}