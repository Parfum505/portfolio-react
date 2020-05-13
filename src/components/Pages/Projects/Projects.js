import React, {useState} from "react";
import {splitToSpan} from "../../../helpers/helpers";
import LinkIcon from "../Home/LinkIcons/LinkIcon/LinkIcon";
import Filter from "./Filter/Filter";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEye} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = [
        'All', 'Javascript', 'React','PHP', 'Angular', 'Other'
    ];
    const projects = [];
    function filterHandle(category) {
        setFilter(category);
        console.log(category);
    }
    return (
        <main id="projects">
            <h1 className="lg-heading">
                <div>{splitToSpan("My Projects", 3)}</div>
            </h1>
            <h2 className="sm-heading">Some of my recent works...</h2>
            <Filter clicked={filterHandle} categories={categories} activFilter={filter}/>
            <div className="projects-container">
                <div className="project">
                    <div className="btn-container">
                        <LinkIcon iconName={faEye} link="#" size="1x"><span>Live Demo</span></LinkIcon>
                        <LinkIcon iconName={faGithub} link="#" size="1x"><span>GitHub</span></LinkIcon>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Projects;