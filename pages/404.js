import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./404.module.scss";

export default function NotFound () {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3500);
  }, []);

  return (
    <div className={styles.glitch_container}>
        <p className={styles.glitch}>Page not found</p>
        <div className={styles.background}></div>
    </div>
  )
}