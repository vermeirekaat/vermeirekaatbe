import Metadata from '../components/Metadata';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import styles from '../styles/Home.module.css';
import { useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from 'react';

const contentful = require("contentful");

export default function Home({ result }) {
  const data = result.items;

  const [results, setResults] = useState(data);

  const [filter, setFilter] = useState([]);

  const filterResults = () => {
    const copy = [...data];
    console.log(copy);
    const tagsArray = [];
    copy.map((copy) => tagsArray.push(copy.fields.tags));
    const index = mapArray(tagsArray);

    const items = findIndex(index);

    const result = [];
    items.map((index) => result.push(copy[index]));
    console.log(result);

    setResults(result);
  }

  const mapArray = (array) => {
    console.log(filter);
    const index = [];
    array.map((item) => {
      index.push(item.filter((check) => check.fields.name === filter));
    });
    return index;
  }

  const findIndex = (index) => {
    const items = [];
    
    index.map((item) => {
      if (item.length > 0) {
        items.push(index.indexOf(item));
      }});
    return items;
  }

    useEffect(() => {
      if (filter.length > 0) {
          filterResults();
      }
  });

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
    scaleCode: {
      desktop: useTransform(scrollYProgress, [.08, .15], [.5, 1]),
      mobile: useTransform(scrollYProgress, [0, .05], [.5, 1])   
    },
    opacityCode: {
      desktop: useTransform(scrollYProgress, [.25, .35], [1, 0]),
      mobile: useTransform(scrollYProgress, [.08, .12], [1, 0])
    },
    moveCode: {
      desktop: useTransform(scrollYProgress, [.20, .35], [0, -300]),
      mobile: useTransform(scrollYProgress, [.08, .12], [0, -150])
    },
    scaleImage: {
      desktop: useTransform(scrollYProgress, [.20, .30], [1, .5]), 
      mobile: useTransform(scrollYProgress, [.08, .1], [1.5, 1]),
    },
    moveImageX: {
      desktop: useTransform(scrollYProgress, [.20, .30], [0, -300]),
      mobile: useTransform(scrollYProgress,[.08, .1], [0, -100])
    },
    moveImageY: {
      desktop: useTransform(scrollYProgress, [.20, .30], [0, 650]),
      mobile: useTransform(scrollYProgress,[.08, .1], [0, 400])
    },
    moveText: {
      desktop: useTransform(scrollYProgress, [.25, .30], [100, 0]),
      mobile: useTransform(scrollYProgress, [.08, .1], [0, -300])
    }, 
    opacityText: {
      desktop: useTransform(scrollYProgress, [.25, .30], [0, 1]),
      mobile: useTransform(scrollYProgress, [.08, .1], [0, 1])
    },
    dissolveText: {
      desktop: useTransform(scrollYProgress, [.4, .45], [1, 0]),
      mobile: useTransform(scrollYProgress, [.15, .2], [1, 0])
    },
    opacityIntro: {
      desktop: useTransform(scrollYProgress, [.45, .5], [0, 1]),
      mobile: useTransform(scrollYProgress, [.15, .2], [0, 1])
    },
    moveIntro: {
      desktop: useTransform(scrollYProgress, [.45, .5], [100, 0]),
      mobile: useTransform(scrollYProgress, [.15, .2], [50, 0])
    },
    scaleBlocks: {
      desktop: useTransform(scrollYProgress, [.5, .53], [0, 1]),
      mobile: useTransform(scrollYProgress, [.2, .25], [0, 1])
    },
    opacityProjects: {
      desktop: useTransform(scrollYProgress, [.55, .6], [0, 1]),
      mobile: useTransform(scrollYProgress, [.25, .3], [0, 1])
    },
    positionProjects: {
      desktop: useTransform(scrollYProgress, [.55, .6], [100, 0]),
      mobile: useTransform(scrollYProgress, [.25, .3], [50, 0])
    },
    hoverEffect: {
      desktop: false,
      mobile: true
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

  const checkHoverEffect = ( object ) => {
    if (typeof window !== "undefined") {
      let newWindow;
      const screenWidth = window.screen.width;
      if (screenWidth <= 1024) {
          newWindow = object.mobile;
      } 
      if (screenWidth >= 1024) {
          newWindow = object.desktop
      }
      return newWindow;
    }
  }

  return (
    <div className={styles.container}>
      <Metadata title="@vermeirekaat"></Metadata>

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
              dissolveText={checkScreenWidth(animations.dissolveText)}
              opacityIntro={checkScreenWidth(animations.opacityIntro)}
              moveIntro={checkScreenWidth(animations.moveIntro)}
              scaleBlocks={checkScreenWidth(animations.scaleBlocks)}
              returnFilter={(filter) => setFilter(filter)}
      ></Header>

      <div id="projects">
        <Layout projects={results} 
                opacityProjects={checkScreenWidth(animations.opacityProjects)}
                positionProjects={checkScreenWidth(animations.positionProjects)}
                // hover={checkHoverEffect(animations.hoverEffect)}
        ></Layout>
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