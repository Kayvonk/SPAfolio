import React from 'react'
import { Nav, NavMenu, Link } from "./NavbarElements"

export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <Link smooth to="#about" exact activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        About
                    </Link>
                    <Link smooth to="#portfolio" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Portfolio
                    </Link>
                    <Link smooth to="#contact" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Contact
                    </Link>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;