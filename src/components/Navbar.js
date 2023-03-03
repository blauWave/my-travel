import React from "react";
import logoNav from "../images/123.png";
import './Navbar.css';


function Navbar() {
    return (
        <div className="navbar">
            <img className="logo-nav" src={logoNav} alt="logo-nav" />
            <a className="info-nav" href="">my travel journal.</a>
        </div>
    )
}

export default Navbar;