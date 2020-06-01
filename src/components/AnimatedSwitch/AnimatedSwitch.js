import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";

const AnimatedSwitch = ({ location }) => (
  <TransitionGroup component={null}>
    <CSSTransition key={location.key} timeout={300} classNames={"fade"}>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
);

export default withRouter(AnimatedSwitch);
