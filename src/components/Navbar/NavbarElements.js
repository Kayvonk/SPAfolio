import { HashLink as NavLink } from 'react-router-hash-link';
import styled from "styled-components"


export const Nav = styled.nav`
background: rgba(0, 0, 0, 0.4);;
height: 80px;
display: flex;
justify-content: space-between;
z-index: 10;
`;

export const Link = styled(NavLink)`
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
  color: #00D4D0 !important;
}

&.active {
    color: #00D4D0 !important;
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
