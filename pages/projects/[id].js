import Metadata from "../../components/Metadata";
import Detail from "../../components/Detail";
import { useRouter } from "next/router";

const contentful = require("contentful");

export default function Project({ project }) {

    const defineVideoScreen = () => {
        if (typeof window !== "undefined") {
          const screenWidth = window.screen.width;
          let videoWidth;
    
          if (screenWidth <= 640) {
              videoWidth = 350;
          }
          if (screenWidth >= 640) {
              videoWidth = 600; 
          }
          return videoWidth;
        }
      }

  if (!project) {
    return (
        <div>
            <div>
                <h2>LOADING...</h2>
            </div>
        </div>
    )
}

    return (
        <article>
            <Metadata title={project.fields.title}></Metadata>

            <Detail project={project.fields} videoWidth={defineVideoScreen()}></Detail>
        </article>
    )
}

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN
})

export async function getStaticPaths() {

  const response = await client.getEntries({ content_type: "project" });

  const paths = response.items.map((item) => {
      return {
          params: {id: item.sys.id}
      }
  })

  return {
      paths,
      fallback: false,
  }
}

export async function getStaticProps({ params }) {

  const { items } = await client.getEntries({
      content_type: "project",
      "sys.id": params.id
  });

  if (!items.length) {
      return {
          redirect: {
              destination: "/",
              permanent: false,
          }
      }
  }

  return {
      props: {
          project: items[0],
      },
      revalidate: 7,
  }
}; 