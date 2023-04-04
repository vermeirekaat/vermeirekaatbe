import Image from "next/image";
import ReactPlayer from "react-player";
import { useState } from "react";

import styles from "../Detail.module.scss";

export default function DetailVideo({ url, alt, videoWidth }) {
  const [muteVideo, setMuteVideo] = useState(true);

  const sound = {
    off: {
      svg: "/assets/sound-on.svg",
      alt: "sound on icon",
    },
    on: {
      svg: "/assets/sound-off.svg",
      alt: "sound off icon",
    },
  };

  const checkSound = () => {
    let svg;
    let alt;
    if (muteVideo === true) {
      svg = sound.on.svg;
      alt = sound.on.alt;
    }
    if (muteVideo === false) {
      svg = sound.off.svg;
      alt = sound.off.alt;
    }
    return <Image src={svg} alt={alt} width={25} height={25} />;
  };

  return (
    <div className={styles.video}>
      <div className={styles.video_file}>
        <ReactPlayer
          url={"https:" + url}
          width={videoWidth}
          height="auto"
          alt={alt}
          playing={true}
          loop={true}
          muted={muteVideo}
        />
      </div>

      <div className={styles.sound} onClick={() => setMuteVideo(!muteVideo)}>
        {checkSound()}
      </div>
    </div>
  );
}
