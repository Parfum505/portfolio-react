import React, { useEffect } from "react";
import { splitToSpan } from "../../../helpers/helpers";
import { Link } from "react-router-dom";
import cv from "./../../../assets/cv_kryvytskyi_frontend_dev.pdf";
import Cube from "./Cube/Cube";

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#about .cube").classList.add("active", "rotate");
    }, 3000);
  }, []);
  return (
    <main id="about">
      <h1 className="lg-heading">
        <div>{splitToSpan("About Me", 6)}</div>
      </h1>
      <div className="about-info">
        <div className="about-info-text">
          <p>
            I am a Front-end Developer, well-organised person, problem solver
            with high attention to details.
          </p>
          <p>
            Experienced in creating responsive websites of a high quality,
            implementing of new features and improving the user experience of
            existing functionalities in cooperation with backend developers and
            UX/UX Designer.
          </p>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser. I now specialise in front-end development but I have
            some knowledge and experience in PHP and MSQL. In my projects I use
            Javascript/jQuery, React/Redux, Bootstrap/Sass/Less, Webpack/Gulp,
            PHP/Wordpress, MySQL. Feel free to look at my{" "}
            <Link to="/projects" className="text-secondary">
              Recent Projects
            </Link>{" "}
            or to download{" "}
            <a href={cv} className="text-secondary" download>
              my CV
            </a>
            .
          </p>
          <p>
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people.
          </p>
        </div>
        <div className="cube-container">
          <Cube />
        </div>
      </div>
    </main>
  );
};

export default About;
