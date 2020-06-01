import React from "react";
import MenuIcon from "./MenuIcon/MenuIcon";
import MenuItem from "./MenuItem/MenuItem";
import { linksData } from "../../../data/data";

const Menu = (props) => {
  return (
    <nav className={`menu ${props.showMenu ? "open" : ""}`}>
      <MenuIcon />
      <ul className="menu-nav">
        {linksData.map((li, i) => (
          <MenuItem
            name={li.name}
            clicked={props.clicked}
            link={li.link}
            key={i}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
