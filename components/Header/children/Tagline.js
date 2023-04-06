import {
  motion,
  useViewportScroll,
  useVelocity,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

import styles from "../Header.module.scss";

export default function Tagline({ input }) {
  const { scrollYProgress } = useViewportScroll();
  const ref = useRef(null);

  const [displayAmount, setDisplayAmount] = useState(1);

  const posX = useTransform(scrollYProgress, [0, 1], [0, 600]);

  useEffect(() => {
    calculateWidth();
  }, [displayAmount]);

  const calculateWidth = () => {
    if (!ref.current) {
      return;
    }

    const width = ref.current.offsetWidth;

    const amount = Math.ceil(window.innerHeight / width);
    setDisplayAmount(amount);
  };
  return (
    <div className={styles.tagline}>
      <motion.div style={{ x: posX }}>
        {Array.from(Array(displayAmount), (e, i) => (
          <span key={i} ref={ref}>
            {input}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
