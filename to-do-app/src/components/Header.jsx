import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import DarkModeToggle from "./DarkModeToggle"; 

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className={`header ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>To-Do App</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
