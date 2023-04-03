import { motion } from "framer-motion"

import styles from "./Detail.module.scss"
import DetailClose from "./children/DetailClose"
import DetailContent from "./children/DetailContent"
import DetailHeader from "./children/DetailHeader"

export default function Detail({ project, videoWidth }) {
    return(
        <motion.article className={styles.container}
            initial={{ y: "10rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1}}
            transition={{ ease: "easeInOut", duration: 1, delay: .5 }}
        >
            <div className={styles.middle}>   
                <DetailClose />
                <DetailHeader project={project} videoWidth={videoWidth}/>
                <DetailContent description={project.description.content[0].content[0].value} tools={project.tools}/>   
            </div>
        </motion.article>
    )
}