import { NavLink as Link } from "react-router-dom";
import styled from "styled-components"


export const Nav = styled.nav`
background: #333333;
height: 80px;
display: flex;
justify-content: space-between;
z-index: 10;
`;

export const NavLink = styled(Link)`
font-size: larger ;
color: lightgray;
display: flex;
align-items: center;
text-decoration: none !important;
padding: 0 1rem;
height: 100%;
cursor: pointer;

@media screen and (max-width:360px) {
  font-size: small ;
}

&:hover {
  color: #17A2B8 !important;
}

&.active {
    color: #17A2B8 !important;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-left: auto;
margin-right: auto;
/* 
@media screen and (max-width: 768px) {
    display:none;
} */
`;
