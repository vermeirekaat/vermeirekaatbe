import styles from "./Layout.module.css";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card.js";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Layout({ projects, opacityIntro, opacityProjects, positionProjects }) {

    const router = useRouter();

    const [showProjects, setShowProjects] = useState(false);

    const gridView = {
        mobile: 4,
        desktop: 6,
    }

    let overview;

    const checkScreenWidth = () => {
        if (typeof window !== "undefined") {
            const screenWidth = window.screen.width;
            let gridItems;

            if (screenWidth <= 1024) {
                gridItems = gridView.mobile;
            }
            if (screenWidth >= 1024) {
                gridItems = gridView.desktop; 
            }
            return gridItems;
        }
    }

    if (showProjects === false) {
        const grid = checkScreenWidth();
        overview = projects.slice(0, grid);
    } else if (showProjects === true) {
        overview = projects;
    }

    const handleClickButton = () => {
        setShowProjects(!showProjects);
        router.push("/#projects");
    }

    return(
        <section className={styles.container}>
            
            {showProjects === false ? 
            <>
            <motion.div className={styles.intro}
            style={{ opacity: opacityIntro }}
            >
                <h3 className={styles.title}>Projects</h3>
                <p className={styles.paragraph}>For the past two years I have gained knowledge of three subjects. Each with a focus on real-life cases and projects.</p>

                <div className={styles.devine}>
                    <p className={styles.gold}>Development</p>
                    <p className={styles.orange}>Research</p>
                    <p className={styles.blue}>Design</p>
                </div>    
            </motion.div>
            <motion.div className={styles.overview}
            style={{ opacity: opacityProjects, y: positionProjects }}
            >
                {overview.map((project) => (
                    <Card card={project}></Card>
                ))}
            </motion.div> </> : 
            <>
            <div className={styles.intro}

            >
                <h3 className={styles.title}>Projects</h3>
                <p className={styles.paragraph}>For the past two years I have gained knowledge of three subjects. Each with a focus on real-life cases and projects.</p>

                <div className={styles.devine}>
                    <p className={styles.gold}>Development</p>
                    <p className={styles.orange}>Research</p>
                    <p className={styles.blue}>Design</p>
                </div>    
            </div>
            <div className={styles.overview}>
                {overview.map((project) => (
                    <Card card={project}></Card>
                ))}
            </div> </>
            }

            { showProjects === false ? 
                <div className={styles.bottom}>
                    <p onClick={(e) => handleClickButton(e)} className={styles.button}>Show More</p>
                </div> : 
                <div className={styles.bottom}>
                    <p className={styles.end}>You've seen all projects.</p>
                </div> 
            }
        </section>
    )
}