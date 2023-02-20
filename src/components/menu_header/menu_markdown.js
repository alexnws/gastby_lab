import * as React from "react";
import { NavCell } from "../gui";
import { useStaticQuery, graphql } from "gatsby";
export function MenuMD() {
  // GRAPHQL
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "markdown pages" } }) {
          edges {
            node {
              childrenMarkdownRemark {
                frontmatter {
                  slug
                  menu
                  title
                }
              }
            }
          }
        }
      }
    `
  );
  const { allFile } = data;
  console.log("allFile.length", allFile.edges.length);
  const menu = [];
  for (let i = 0; i < allFile.edges.length; i++) {
    let buffer = allFile.edges[i].node.childrenMarkdownRemark[0].frontmatter;
    console.log(buffer);
    menu.push(buffer);
  }
  console.log("menu.length", menu.length);

  return (
    <>
      {menu.map((elem) => (
        <NavCell to={elem.slug}>{elem.menu}</NavCell>
      ))}
    </>
  );
}
