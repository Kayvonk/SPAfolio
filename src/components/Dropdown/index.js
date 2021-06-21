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
                    <DropdownItem tag="a" href="/">Home</DropdownItem>
                    <DropdownItem tag="a" href="/portfolio">Portfolio</DropdownItem>
                    <DropdownItem tag="a" href="/contact">Contact</DropdownItem>
                </DropdownMenu>
            </Dropdown >
        </div>
    );
}

export default BurgerMenu;