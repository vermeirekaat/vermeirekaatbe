import styles from "./Header.module.scss";

import Profile from "./children/Profile";
import Intro from "./children/Intro";
import Projects from "../Filter/Filter";
import TagScroll from "./children/TagScroll";

export default function Header({ tags, handleFilter }) {
  return (
    <div>
      <Profile />
      <TagScroll input="Frontend Developer" />
      {/* <Intro /> */}
      {/* <Projects
        
        tags={tags}
        returnFilter={(e) => handleFilter(e)}
      /> */}
    </div>
  );
}
