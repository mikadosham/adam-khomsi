import React, { useState } from "react";
import "./HeaderMenu.css"; // Custom CSS

const HeaderMenu = ({ onPortfolioClick, onHomeClick, showHome }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close menu and trigger portfolio click
  const handlePortfolioClick = () => {
    setIsOpen(false); // Close the menu
    onPortfolioClick(); // Trigger portfolio view
  };

  // Function to close menu and trigger home click
  const handleHomeClick = () => {
    setIsOpen(false); // Close the menu
    onHomeClick(); // Trigger home view
  };

  return (
    <header>
      <nav className="header-nav">
        <div className="menu-left">
          <ul className={`nav-menu ${isOpen ? "slide-in" : "slide-out"}`}>
            <li>
              {showHome ? (
                <span onClick={handleHomeClick}>Home</span>
              ) : (
                <span onClick={handlePortfolioClick}>Portfolio</span>
              )}
            </li>
            <li>
              <a href="mailto:me@adamkhomsi.ca">Contact</a>
            </li>
          </ul>
          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
        <div className="logo">
          <a href="/" onClick={handleHomeClick}>
            <img src="ak-logo.png" alt="Logo" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMenu;
