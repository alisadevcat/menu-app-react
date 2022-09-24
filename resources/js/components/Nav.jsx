import React from "react";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
    isActive ? "active-site-nav__link text-uppercase" : "text-uppercase";

const Nav = () => {
    return (
        <nav className="site-nav">
            <ul>
                <li>
                    <NavLink to="/">
                        <img
                            src="storage/images/HiltonLogo.png"
                            alt="Main Logo"
                        />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/api/choose" className={setActive}>
                        Create new Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={setActive}>
                        My menus
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={setActive}>
                        My account
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
