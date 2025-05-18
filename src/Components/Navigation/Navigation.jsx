import { NavLink } from "react-router-dom";
import { StyledNav, StyledNavLink } from "./Navigation.styled";

export default function Navigation() {
  return (
    <header>
      <StyledNav>
        <StyledNavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </StyledNavLink>
        <StyledNavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Movies
        </StyledNavLink>
      </StyledNav>
    </header>
  );
}
