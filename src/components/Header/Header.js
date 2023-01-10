import React from "react";
import classes from './Header.module.css'
import headerImg from "./img/header.png";

function Header() {
    return (
            <header className={classes.App}>
                <img src={headerImg} alt="header" />
            </header>
    );
}

export default Header;
