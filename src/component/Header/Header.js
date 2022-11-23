import React from 'react';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import {useEffect} from 'react';
import { FaArrowUp } from "react-icons/fa"; 
import Image from '../../constants/asset';
import { Link } from "react-scroll";
function Header() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
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
                className="nav-links" style={{textDecoration:"none"}}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links" style={{textDecoration:"none"}}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>  
            
            <li className="nav-item">
              <NavLink
                exact
                to="/seoservices" style={{textDecoration:"none"}}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
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
      <div>

    {/* 👇️ scroll to top on button click */}
            <button
                onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}
                style={{
                position: 'fixed',
                padding: '5px 10px',
                fontSize: '20px',
                bottom: '115px',
                right: '40px',
                background: 'linear-gradient(19deg, #4a4c4d 10%, #d43b04 100%)',
                // backgroundColor: 'rgb(212, 59, 4)',
                color: '#fff',
                textAlign: 'center',
                zIndex: '9999',
                borderRadius: '28% 100% 84% 47% / 43% 73% 47% 78%',
                }}
            >
                <FaArrowUp/>
            </button>
        </div>
    </>
  );
}

export default Header