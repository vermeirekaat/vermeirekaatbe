import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import styles from "../Header.module.scss";

export default function TagScroll({ input }) {
  const { scrollYProgress } = useViewportScroll();
  const ref = useRef(null);
  const size = useWindowSize();

  const [displayAmount, setDisplayAmount] = useState(1);

  const posX = useTransform(scrollYProgress, [0, 1], [100, -250]);

  useEffect(() => {
    calculateWidth();
  });

  const calculateWidth = () => {
    if (!ref.current || size.width === undefined) {
      return;
    }

    const width = ref.current.offsetWidth;

    const amount = Math.ceil(size.width / width) * 2;
    setDisplayAmount(amount);
  };

  return (
    <div className={styles.tagscroll}>
      <motion.div className={styles.tagscroll__container} style={{ x: posX }}>
        {Array.from(Array(displayAmount), (e, i) => (
          <span key={i} ref={ref}>
            {input}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
