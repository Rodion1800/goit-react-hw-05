import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 10px;
  background-color: #f0f0f0;
  justify-content: center;
`;
export const StyledNavLink = styled(NavLink)`
  color: red;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;

  &.active {
    color: blue;
    border-bottom: 2px solid #61dafb;
  }

  &:hover {
    color: #61dafb;
  }
`;
