import React from "react";
import Menu from "./Menu/Menu";
import MenuBtn from "./Menu/MenuBtn/MenuBtn"

const Header = (props) => {
    return (
        <header>
            <MenuBtn />
            <Menu />
        </header>
    );
}

export default Header;