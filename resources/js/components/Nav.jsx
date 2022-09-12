import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
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
                    <NavLink to="/">Create new Menu </NavLink>
                </li>
                <li>
                    <NavLink to="/">My menus </NavLink>
                </li>
                <li>
                    <NavLink to="/">My account </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
