import Profile from "./children/Profile";
import Intro from "./children/Intro";
import TagScroll from "./children/TagScroll";

export default function Header() {
  return (
    <div>
      <Profile />
      <TagScroll input="Frontend Developer" />
      <Intro />
    </div>
  );
}
