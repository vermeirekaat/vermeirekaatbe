import styles from "./Header.module.css";
import { motion } from "framer-motion";

export default function Header ({ opacityHeader, positionBackground, opacityCode, scaleCode, moveCode, scaleImage, imageX, imageY, moveText, opacityText, dissolveText, opacityIntro, moveIntro, scaleBlocks, }) {

    return(
        <section className={styles.container}>
            <motion.div className={styles.header} 
            style={{ opacity: opacityHeader }}>
                <motion.h2 className={styles.greeting}
                    initial={{ y: "-10rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1}}
                    transition={{ ease: "easeInOut", duration: 1, delay: .1 }}
                >Nice to meet you</motion.h2>
                <div className={styles.profile}>
                    <motion.div className={styles.profile_info} 
                        initial={{ x: "-15rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1}}
                        transition={{ ease: "easeInOut", duration: 1, delay: 1.25 }}
                    >
                        <p className={styles.profile_intro}>My name is</p>
                        <h3 className={styles.profile_name}>Kaat Vermeire</h3>
                    </motion.div>
                

                    <motion.div className={styles.profile_image}
                        initial={{ x: "-15rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1}}
                        transition={{ ease: "easeInOut", duration: .7, delay: 1.5 }}
                    >
                        <div className={styles.image}></div>
                        <p className={styles.tagline}>est. 1998 - Eeklo (BE)</p>
                    </motion.div>
                </div>
            </motion.div>

        <motion.div
            style={{ opacity: dissolveText }}
        >
            <motion.div className={styles.background}
            style={{ y: positionBackground }}>
                <motion.div className={styles.background_image}
                style={{ scale: scaleImage, x: imageX, y: imageY }}
                ></motion.div>
                <motion.h2 className={styles.background_title}
                style={{ opacity: opacityCode, scale: scaleCode, y: moveCode }}>I have a heart of code</motion.h2> 
            </motion.div>

            <motion.div className={styles.info}
            style={{ y: moveText, opacity: opacityText }}
            >
                <p className={styles.paragraph}>I create digital products that fullfil the user&apos;s needs. <br></br> I am passionate about writing code and learning new approaches within webdevelopment. <br></br> I am interested in the research process behind projects and looking forward to improve my skills.</p>
            </motion.div>
        </motion.div>

        <motion.div className={styles.intro}
            style={{ opacity: opacityIntro, y: moveIntro }}
            >
                <h3 className={styles.title}>Projects</h3>
                <p className={styles.introduction}>For the past two years I have gained knowledge of three subjects. Each with a focus on real-life cases and projects. Not all projects are the best but I am proud of everything that I have accomplished Moreover, I am glad that I have learned from my mistakes so that I can improve my skills.</p>

                <div className={styles.devine}>
                    <motion.p className={styles.blue}
                    style={{ scale: scaleBlocks }}>Development</motion.p>
                    <motion.p className={styles.orange}
                    style={{ scale: scaleBlocks }}>Research</motion.p>
                    <motion.p className={styles.gold}
                    style={{ scale: scaleBlocks }}>Design</motion.p>
                </div>    
            </motion.div>
        </section>
    )
}