import React from 'react';
import './scss/Portfolio.scss';
import Layout from "./containers/Layout/Layout";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Projects from "./components/Pages/Projects/Projects";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const Portfolio = () => {
  return (
    <BrowserRouter basename="/portfolio-react">
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Portfolio;
