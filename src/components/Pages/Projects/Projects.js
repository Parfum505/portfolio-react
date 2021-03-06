import React, { useEffect, useState } from "react";
import { splitToSpan } from "../../../helpers/helpers";
import Filter from "./Filter/Filter";
import Project from "./Project/Project";
import { categories, projects } from "../../../data/data";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Projects = () => {
  const [filter, setFilter] = useState(null);
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    setFilter("React");
  }, []);

  useEffect(() => {
    filterProjects(filter);
  }, [filter]);

  function filterHandle(category) {
    setFilter(category);
  }
  function filterProjects(category) {
    const newProjectsList = projects.filter(
      (project) => project.category.indexOf(category) > -1
    );
    setProjectsList([...newProjectsList]);
  }
  return (
    <main id="projects">
      <h1 className="lg-heading">
        <div>{splitToSpan("My Projects", 3)}</div>
      </h1>
      <h2 className="sm-heading">Some of my recent works...</h2>
      <Filter
        clicked={filterHandle}
        categories={categories}
        activFilter={filter}
      />
      <TransitionGroup className="projects-container">
        {projectsList.map((project, i) => (
          <CSSTransition key={project.img} timeout={500} classNames="item">
            <Project
              srcGithub={project.srcGithub}
              srcDemo={project.srcDemo}
              tags={project.tags}
              img={project.img}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </main>
  );
};

export default Projects;
