import React, { useState, useEffect } from 'react';
import Image from '../../constants/asset';
import "./Navbar.js";

export default function Navbar() {
    const [stickyClass, setStickyClass] = useState('');
  
    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
      return () => window.removeEventListener('scroll', stickNavbar);
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        // window height changed for the demo
        windowHeight > 600 ? setStickyClass('sticky-nav') : setStickyClass('');
      }
    };
  
    return <div className={`navbar-header ${stickyClass}`}>
        <nav class="navbar navbar-expand-lg navbar-light nav p-0">
            <div className='container'>
                <a class="navbar-brand text-white">
                    <img src={ Image.BANNER_LOGO }/>
                </a>   
                                
                <form class="form-inline">
                    <a className='navbar-toggler' data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <img src= { Image.MENU_ICON}  style={{ height: 50, width: 50 }}/>
                    </a>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link text-black pl-3" href="#">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black" href="#">About Us</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link text-black" href="#">Our Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>    
                </form>
            </div>
        </nav>
    </div>;
  }