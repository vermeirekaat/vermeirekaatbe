import { useState, useEffect } from "react";

import Metadata from "../../components/Metadata/Metadata";
import Layout from "../../components/Layout/Layout";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";

const contentful = require("contentful");

export default function Projects({ result }) {
  const projectsAr = result.items.filter(
    (item) => item.fields.name === "Projects"
  );
  const tagsAr = result.items.filter((item) => item.fields.name === "Tags");

  const projects = projectsAr[0].fields.items;
  const tags = tagsAr[0].fields.items;

  const [results, setResults] = useState(projects);

  const [filter, setFilter] = useState([]);

  const filterResults = () => {
    const copy = [...projects];
    const tagsArray = [];
    copy.map((copy) => tagsArray.push(copy.fields.tags));
    const index = mapArray(tagsArray);

    const items = findIndex(index);

    const result = [];
    items.map((index) => result.push(copy[index]));

    setResults(result);
  };

  const mapArray = (array) => {
    const index = [];
    array.map((item) => {
      index.push(item.filter((check) => check.fields.name === filter));
    });
    return index;
  };

  const findIndex = (index) => {
    const items = [];

    index.map((item) => {
      if (item.length > 0) {
        items.push(index.indexOf(item));
      }
    });
    return items;
  };

  useEffect(() => {
    if (filter.length > 0) {
      filterResults();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <Metadata title="@vermeirekaat | Projects" />
      <Filter tags={tags} handleFilter={(filter) => setFilter(filter)} />
      <Layout projects={results} />
      <Footer/>
    </>
  );
}

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });

  const result = await client.getEntries({ content_type: "web" });

  return {
    props: {
      result,
    },
  };
}
