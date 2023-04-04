import Link from "next/link";
import Image from "next/image";

import DetailVideo from "./DetailVideo";
import styles from "../Detail.module.scss";
import Tag from "../../Tag/Tag";

export default function DetailHeader({ project, videoWidth }) {
  return (
    <section className={styles.detail_header}>
      <div className={styles.detail_header__info}>
        <div className={styles.detail_header__info_container}>
          <h1 className={styles.detail_header__info_title}>{project.title}</h1>
          {project.link && (
            <Link href={project.link} passHref={true}>
              <a className={styles.detail__header_link} target="_blank">
                <Image
                  src="/assets/external-link.svg"
                  alt="external-link-icon"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          )}
        </div>

        <div className={styles.detail__tags}>
          {project.tags.map((tag) => (
            <Tag
              key={tag.fields.name}
              color={tag.fields.color}
              name={tag.fields.short}
            />
          ))}
        </div>
      </div>

      {project.video === true ? (
        <DetailVideo
          url={project.banner.fields.file.url}
          alt={project.title}
          videoWidth={videoWidth}
        />
      ) : (
        <Image
          src={"https:" + project.banner.fields.file.url}
          width={project.banner.fields.file.details.image.width}
          height={project.banner.fields.file.details.image.height}
          alt={project.title}
          priority={true}
          quality={50}
        />
      )}
    </section>
  );
}
