import React from "react";
import { Layout } from "../components/struct/layout.js";

import image from "./../../media/images/alea.jpg"

export const PageA = () => {
  return (
    <Layout>
      <h1>Projet A</h1>
      <img
        src={image}
        alt="cet image ne s'affiche pas"
      ></img>
    </Layout>
  );
};

export default PageA;
