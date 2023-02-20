import React from "react";
import { Layout } from "../components/struct/layout.js";

export const PageA = () => {
  return (
    <Layout>
      <h1>Projet A</h1>
      <img
        src="./../../media/images/cane.jpg"
        alt="cet image ne s'affiche pas"
      ></img>
    </Layout>
  );
};

export default PageA;
