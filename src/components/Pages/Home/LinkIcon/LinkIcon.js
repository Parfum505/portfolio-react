import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LinkIcon = (props) =>  (
        <a href={props.link}>
            <FontAwesomeIcon icon={props.iconName} size="2x"/>
        </a>
    );

export default LinkIcon;