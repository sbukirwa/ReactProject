import './Navbar.css';
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="items">
                <li className="Nav__item">
                    <Link className="Nav__link" to="/">Register</Link>
                </li>
                <li className="Nav__item">
                    <Link className="Nav__link" to="/signin">Sign In</Link>
                </li>
                <li className="Nav__item">
                    <Link className="Nav__link" to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
