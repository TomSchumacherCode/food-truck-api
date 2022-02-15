import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "link")}
        to="login"
      >
        Login
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active" : "link")}
        to="search"
      >
        Search
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "link")}
        to="favorites"
      >
        Favorites
      </NavLink>
    </nav>
  );
}

export default Menu;
