import Metadata from "../../components/Metadata";
import Detail from "../../components/Detail";
import { useRouter } from "next/router";

export default function Project({ data }) {

    // console.log(data);

    const router = useRouter(); 
    if (router.isFallback) {
        return <p>Loading...</p>
    }

    return (
        <article>
            <Metadata title={data.title}></Metadata>

            <Detail project={data}></Detail>
        </article>
    )
}

export async function getStaticProps({ params }) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects/?slug=${params.slug}`
    );
    const data = await res.json();
  
    return {
      props: {
        data: data.pop(), 
      },
      revalidate: 1,
    };
  };
  
  export async function getStaticPaths() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?_limit=3&_sort=id:desc`
    );
    const data = await res.json();
  
    return {
      paths: data.map((project) => ({
        params: {
          slug: project.slug,
        },
      })),
      fallback: true,
    };
  };