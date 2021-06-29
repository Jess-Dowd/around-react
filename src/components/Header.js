import logo from '../images/logo.svg'
import React from "react";

function Header(props) {

        return (
        <header className="header">
            <img src={logo} className="header__logo" alt="Around The World" />
        </header>)
    }


export default Header