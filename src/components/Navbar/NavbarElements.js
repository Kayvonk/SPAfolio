import { NavLink as Link } from "react-router-dom";
import styled from "styled-components"


export const Nav = styled.nav`
background: #333333;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw-1000px) / 2);
z-index: 10;
`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    color: #3e81c9;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-left: auto;
margin-right: auto;

@media screen and (max-width: 768px) {
    display:none;
}
`;
