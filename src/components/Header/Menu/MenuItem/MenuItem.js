import React from "react";
import {NavLink} from "react-router-dom";

const MenuItem = (props) => (
    <li className="nav-item"  onClick={props.clicked}>
        <NavLink className="nav-link"
                 to={props.link}
                 exact>{props.name}</NavLink>
    </li>
);

export default MenuItem;