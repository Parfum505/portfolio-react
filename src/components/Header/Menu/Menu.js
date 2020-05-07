import React from "react";
import MenuIcon from "./MenuIcon/MenuIcon";
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {
    const linksData = [
        {name: "Home", link: "/"},
        {name: "About me", link: "/about"},
        {name: "My Projects", link: "/projects"},
        {name: "Contact Me", link: "/contact"}
    ];
    return (
        <nav className="menu">
            <MenuIcon />
            <ul className="menu-nav">
                {
                    linksData.map((li, i) => (
                        <MenuItem name={li.name} link={li.link} key={i}/>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Menu;