import React from "react";

const MenuBtn = (props) => (
        <div className={`menu-btn ${props.showMenu ? "open" : null}`} onClick={props.clicked}>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
        </div>
    );

export default MenuBtn;