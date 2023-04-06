import { useViewportScroll } from "framer-motion";

import styles from "./Header.module.scss";
import Profile from "./children/Profile";
import Intro from "./children/Intro";
import Projects from "./children/Projects";
import Tagline from "./children/TagLine";

export default function Header({ tags, handleFilter }) {

  return (
    <div>
      <Profile/>
      <Tagline input="Frontend Developer"/>
      {/* <Intro /> */}
      {/* <Projects
        
        tags={tags}
        returnFilter={(e) => handleFilter(e)}
      /> */}
    </div>
  );
}
