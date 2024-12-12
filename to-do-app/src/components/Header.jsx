import React from "react";
import "./Header.css";
import DarkModeToggle from "./DarkModeToggle"; 
const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className={`header ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>To-Do App</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
