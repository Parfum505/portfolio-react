import React from "react";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <nav>
               <ul>
                   <li><NavLink to="/" exact>Home</NavLink></li>
                   <li><NavLink to="/about">About me</NavLink></li>
                   <li><NavLink to="/projects">My Projects</NavLink></li>
                   <li><NavLink to="/contact">Contact me</NavLink></li>
               </ul>
            </nav>
        </header>
    );
}

export default Header;