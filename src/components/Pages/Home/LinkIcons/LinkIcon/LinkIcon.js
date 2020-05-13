import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LinkIcon = (props) =>  (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="linkIcon">
            <FontAwesomeIcon icon={props.iconName} size={props.size ? props.size : "2x"}/>{props.children}
        </a>
    );

export default LinkIcon;