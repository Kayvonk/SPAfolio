import React from 'react'
import { Nav, NavLink, NavMenu } from "./NavbarElements"

export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" exact activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Home
                    </NavLink>
                    <NavLink to="/portfolio" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Portfolio
                    </NavLink>
                    <NavLink to="/contact" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;