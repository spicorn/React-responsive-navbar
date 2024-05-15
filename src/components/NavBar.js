import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>MSU</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              <CodeIcon />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/addclub"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Club
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/post"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Post
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/registers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Registers
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/clubleads"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Club leads
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
