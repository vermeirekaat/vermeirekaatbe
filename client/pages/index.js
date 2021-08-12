import Metadata from '../components/Metadata';
import Header from "../components/Header";
import Background from "../components/Background";
import Information from "../components/Information";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import styles from '../styles/Home.module.css';


export default function Home({ data }) {

  return (
    <div className={styles.container}>
      <Metadata title="© vermeirekaat"></Metadata>

      <Header background="black"></Header>

      <Background background="black"></Background>

      <Information background="black"></Information>

      <div id="projects">
        <Layout background="white" projects={data}></Layout>
      </div>
     

      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?_sort=id:desc`);
  const data = await res.json();

  return {
    props: {
      data,
    }
  }
};