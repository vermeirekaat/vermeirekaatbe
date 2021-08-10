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
    const r = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects/?slug=${params.slug}`
    );
    const data = await r.json();
  
    return {
      props: {
        data: data.pop(), // The pop() method in JavaScript removes the last element of an array and returns that element. It will remove an item from the end of an array and return that item.
      },
      revalidate: 1,
    };
  };
  
  export async function getStaticPaths() {
    const r = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?_limit=3&_sort=id:desc`
    );
    const data = await r.json();
  
    return {
      paths: data.map((project) => ({
        params: {
          slug: project.slug,
        },
      })),
      fallback: true,
    };
  };