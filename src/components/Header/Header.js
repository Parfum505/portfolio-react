import React, {useState} from "react";
import Menu from "./Menu/Menu";
import MenuBtn from "./Menu/MenuBtn/MenuBtn"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    function toggleMenuHandler() {
        setShowMenu(prevState => !prevState);
    }

    return (
        <header>
            <MenuBtn  clicked={toggleMenuHandler}
                      showMenu={showMenu}/>
            <Menu   clicked={toggleMenuHandler}
                    showMenu={showMenu} />
        </header>
    );
}

export default Header;