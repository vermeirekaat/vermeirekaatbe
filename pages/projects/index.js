import { useState } from "react";

import Metadata from "../../components/Metadata/Metadata";
import Layout from "../../components/Layout/Layout";

const contentful = require("contentful");

export default function Projects({ result }) {
  const projectsAr = result.items.filter(
    (item) => item.fields.name === "Projects"
  );
  const projects = projectsAr[0].fields.items;

  const [results, setResults] = useState(projects);

  return (
    <>
      <Metadata title="@vermeirekaat | Projects" />
      <Layout projects={results} />;
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
