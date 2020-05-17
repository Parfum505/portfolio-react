import React from "react";
import "./scss/Portfolio.scss";
import Layout from "./containers/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import AnimatedSwitch from "./components/AnimatedSwitch/AnimatedSwitch";

const Portfolio = () => {
  return (
    <BrowserRouter basename="/portfolio-react">
      <Layout>
        <AnimatedSwitch />
      </Layout>
    </BrowserRouter>
  );
};

export default Portfolio;
