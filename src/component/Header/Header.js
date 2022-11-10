import React from 'react';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Image from '../../constants/asset';
import { Link } from "react-scroll";
function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={ Image.BANNER_LOGO } alt="logo" style={{maxWidth: "150px", marginLeft: '20px'}}/>
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
              <Link
                to="about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="service"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="team"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >Team
              </Link>
            </li>
            <li className="nav-item">
              <a href="http://showcase.rankuhigher.in/"
                activeClassName="active"
                className="nav-links" target={'_blank'} rel="noreferrer noopener"
                onClick={handleClick}
              >Projects
              </a>
            </li>
            <li className="nav-item">
              <Link
               to="contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header