import Metadata from '../components/Metadata';
import Header from "../components/Header";
import Background from "../components/Background";
import Information from "../components/Information";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import styles from '../styles/Home.module.css';
import { useTransform, useViewportScroll } from "framer-motion";

const contentful = require("contentful");

export default function Home({ result }) {
  const data = result.items;

  const { scrollYProgress } = useViewportScroll();

  const animations = {
    opacityHeader: {
      desktop: useTransform(scrollYProgress, [0, .15], [1, 0]),
      mobile: useTransform(scrollYProgress, [0, .1], [1, 0])
    },
    positionBackground: {
      desktop: useTransform(scrollYProgress, [0, .2], [50, -200]),
      mobile: useTransform(scrollYProgress, [0, .1], [50, -300])
    },
    opacityCode: {
      desktop: useTransform(scrollYProgress, [.25, .35], [1, 0]),
      mobile: useTransform(scrollYProgress, [.15, .2], [1, 0])
    },
    scaleCode: {
      desktop: useTransform(scrollYProgress, [.1, .2], [.5, 1]),
      mobile: useTransform(scrollYProgress, [0, .1], [.5, 1])   
    },
    moveCode: {
      desktop: useTransform(scrollYProgress, [.25, .35], [0, -300]),
      mobile: useTransform(scrollYProgress, [.15, .2], [0, -150])
    },
    scaleImage: {
      desktop: useTransform(scrollYProgress, [.25, .35], [1, .5]), 
      mobile: useTransform(scrollYProgress, [.15, .25], [1, .7]),
    },
    moveImageX: {
      desktop: useTransform(scrollYProgress, [.25, .35], [0, -200]),
      mobile: useTransform(scrollYProgress,[.15, .25], [0, -100])
    },
    moveImageY: {
      desktop: useTransform(scrollYProgress, [.25, .35], [0, 500]),
      mobile: useTransform(scrollYProgress,[.15, .25], [0, 300])
    },
    moveText: {
      desktop: useTransform(scrollYProgress, [.25, .35], [50, -100]),
      mobile: useTransform(scrollYProgress, [.15, .25], [0, -300])
    }, 
    opacityText: {
      desktop: useTransform(scrollYProgress, [.25, .35], [0, 1]),
      mobile: useTransform(scrollYProgress, [.15, .25], [0, 1])
    }
  }

  const checkScreenWidth = ( object ) => {
    if (typeof window !== "undefined") {
        const screenWidth = window.screen.width;
        let newAnimations;

        if (screenWidth <= 640) {
            newAnimations = object.mobile;
        }
        if (screenWidth >= 640) {
            newAnimations = object.desktop; 
        }
        return newAnimations;
    }
  }

  return (
    <div className={styles.container}>
      <Metadata title="© vermeirekaat"></Metadata>

      <Header opacityHeader={checkScreenWidth(animations.opacityHeader)}
              positionBackground={checkScreenWidth(animations.positionBackground)}
              opacityCode={checkScreenWidth(animations.opacityCode)}
              scaleCode={checkScreenWidth(animations.scaleCode)}
              moveCode={checkScreenWidth(animations.moveCode)}
              scaleImage={checkScreenWidth(animations.scaleImage)}
              imageX={checkScreenWidth(animations.moveImageX)}
              imageY={checkScreenWidth(animations.moveImageY)}
              moveText={checkScreenWidth(animations.moveText)}
              opacityText={checkScreenWidth(animations.opacityText)}
      ></Header>

      <div id="projects">
        <Layout background="white" projects={data}></Layout>
      </div>

      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps() {

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN
  }); 

  const result = await client.getEntries({ content_type: "project"});

  return {
    props: {
      result
    }
  }
};