import { HashLink as NavLink } from "react-router-hash-link";
import styled from "styled-components";

export const Nav = styled.nav`
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.5) 60%, rgba(0,0,0,.01) 100%);
  height: 90px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const Link = styled(NavLink)`
  font-size: larger;
  color: lightgray;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none !important;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 360px) {
    font-size: small;
  }

  &:hover {
    color: #00d4d0 !important;
  }

  &.active {
    color: #00d4d0 !important;
  }
`;

export const LinkBtn = styled(Link)`
  padding: 0;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
