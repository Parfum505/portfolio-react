import React from "react";
import LinkIcon from "../../Home/LinkIcons/LinkIcon/LinkIcon";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const Project = (props) => {
    const divStyle = {
        backgroundImage: 'url(' + props.img +')'
    };
    return (
        <div className="project" style={divStyle}>
            <ul className="tags-container">
                {
                    props.tags.map((tag, i) => (
                        <li className={`tag animation-delay${i + 1}`} key={i}>{tag}</li>
                    ))
                }
            </ul>
            <div className="btn-container">
                {props.srcDemo ? <LinkIcon iconName={faEye} link={props.srcDemo} size="1x">
                    <span>Live Demo</span>
                </LinkIcon> : null}
                {props.srcGithub ? <LinkIcon iconName={faGithub} link={props.srcGithub} size="1x">
                    <span>GitHub</span>
                </LinkIcon> : null}
            </div>
        </div>
    )
};

export default Project;