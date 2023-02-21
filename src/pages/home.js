import React from "react";

import { Layout } from "../components/struct/layout.js";
import { graphql } from "gatsby";

export const Home = ({ data }) => {
  console.log("data", data);
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export default Home;
export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { menu: { eq: "accueil" } } }) {
      edges {
        node {
          frontmatter {
            categorie
            menu
            lang
            title
          }
          html
        }
      }
    }
  }
`;
