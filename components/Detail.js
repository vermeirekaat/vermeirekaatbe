import styles from "./Detail.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

export default function Detail({ project, videoWidth }) {

    const [muteVideo, setMuteVideo] = useState(true);

    const sound = {
        off: {
            type: true,
            svg: "/assets/sound-on.svg",
        },
        on: { 
            type: false,
            svg: "/assets/sound-off.svg",
        }
    }

    const checkSound = () => {
        let svg;
        if (muteVideo === true) {
            svg = sound.on.svg; 
        }
        if (muteVideo === false) {
            svg = sound.off.svg
        }
        return svg;
    }

    return(
        <motion.article className={styles.container}
        initial={{ y: "10rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1}}
        transition={{ ease: "easeInOut", duration: 1, delay: .5 }}
        >
            <Link href="/#projects"><a className={styles.cross}>
                <Image
                    src="/assets/cross-icon.svg"
                    alt="cross-icon"
                    width={30}
                    height={30}
                />   
            </a></Link>
            <section className={styles.header}>
                <div className={styles.information}>
                    <div className={styles.information_title}>
                        <h1 className={styles.title}>{project.title}</h1>
                        {!project.link ? <p></p> : <Link href={project.link} passHref={true}><a className={styles.link} target="_blank">
                            <Image
                                src="/assets/external-link.svg"
                                alt="external-link-icon"
                                width={50}
                                height={50}
                            />   
                        </a></Link>}    
                    </div>

                    <div className={styles.tags}>
                    {project.tags.map((tag) => (
                        <p className={styles.tag} key={tag.fields.name}>{tag.fields.short}</p>
                    ))}
                    </div>
                </div>
                { project.video === true ? 
                    <div className={styles.video}>
                        <div className={styles.video_file}>
                            <ReactPlayer 
                            url={"https:" + project.banner.fields.file.url}
                            width={videoWidth}
                            height="auto"
                            alt={project.title}
                            playing={ true }
                            loop={ true }
                            muted={ muteVideo }/>
                        </div>
                        
                     <div className={styles.sound} onClick={() => setMuteVideo(!muteVideo)}>
                         <Image
                                src={checkSound()}
                                alt="external-link-icon"
                                width={25}
                                height={25}
                            />
                     </div>
                    </div>
                              
                : <Image
                    src={"https:" + project.banner.fields.file.url}
                    width={project.banner.fields.file.details.image.width}
                    height={project.banner.fields.file.details.image.height}
                    alt={project.title}
                    priority={true}
                    quality={50}
                /> }
                
            </section>

            <section className={styles.content}>
                <p className={styles.content_info}>{project.description.content[0].content[0].value}</p>
                <div className={styles.tools}>
                {project.tools.map((tool) => (
                        <p className={styles.tool} key={tool.fields.name}>{tool.fields.name}</p>
                    ))}
                </div>
            </section>
        </motion.article>
    )
}