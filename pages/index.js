import Metadata from '../components/Metadata';
import Header from "../components/Header";
import Background from "../components/Background";
import Information from "../components/Information";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import styles from '../styles/Home.module.css';

const contentful = require("contentful");

export default function Home({ result }) {
  const data = result.items;

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