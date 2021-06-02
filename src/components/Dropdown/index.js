import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./style.css";

const BurgerMenu = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="dropdownDiv">
            <Dropdown className="dropdown" isOpen={dropdownOpen} toggle={toggle} size="lg">
                <DropdownToggle className="dropdown-icon" >
                    <FontAwesomeIcon icon={faBars} className="bars" size="2x" />
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem href="/">Home</DropdownItem>
                    <DropdownItem href="/portfolio">Portfolio</DropdownItem>
                    <DropdownItem href="/contact">Contact</DropdownItem>
                </DropdownMenu>
            </Dropdown >
        </div>
    );
}
{/* <Dropdown className="dropdown" isOpen={dropdownOpen} toggle={toggle} size="lg">
    <DropdownToggle color="343A40" className="dropdown-icon" >
        <FontAwesomeIcon icon={faBars} className="bars" size="lg" />
    </DropdownToggle>
    <DropdownMenu right>
        <DropdownItem href="/dashboard">Dashboard</DropdownItem>
        <DropdownItem href="/">Settings</DropdownItem>
        <DropdownItem onClick={() => logout({ returnTo: window.location.origin })}>Logout</DropdownItem>
    </DropdownMenu>
</Dropdown > */}

export default BurgerMenu;