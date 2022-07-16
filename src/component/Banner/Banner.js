import React from 'react';
import {useEffect} from 'react';
import { FaArrowUp} from "react-icons/fa"; 

function Banner() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
  return (
    <div className='custom-sec-banner pb-5'>
        <nav class="navbar navbar-expand-lg navbar-light custom-sec-navbar">
            <div className='container'>
                <a class="navbar-brand text-white">Navbar</a>   
                                
                <form class="form-inline">
                    <a className='navbar-toggler' data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <img src= { Image.MENU_ICON}  style={{ height: 50, width: 50 }}/>
                    </a>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link text-white" href="#"><i class="fas fa-at"></i> ryh.digitalservices@gmail.com</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#"><i class="fas fa-phone-alt"></i> +91 12345 67890</a>
                        </li>                    
                    </ul>
                </div>    
                </form>
            </div>
        </nav>
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light">                
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">About Us</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link text-white" href="#">Our Services<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className='container custom-banner-content'>
            <div className='row'>
                <div className='col-md-7'>
                    <h1 className='text-white'>Leveling up your Digital Marketing</h1>
                    <p className='text-white'>
                    Turn your Business into a Brand. We provide fail-safe and progressive techniques which turn your visitors into your customers.
                    </p>
                    <button>
                        <span class="shadow"></span>
                        <span class="edge"></span>
                        <span class="front text"> Get Quotes
                        </span>
                    </button>
                </div>
                <div className='col-md-5'>
                </div>
                <div className='row custom-counter-content'>
                    <div className='col-md-3'>
                        <h1 className='text-orange'>20+</h1>
                        <h3 className='text-white'>Client</h3>
                    </div>
                    <div className='col-md-3'>
                        <h1 className='text-orange'>10+</h1>
                        <h3 className='text-white'>Project</h3>
                    </div>
                    <div className='col-md-3'>
                        <h1 className='text-orange'>20+</h1>
                        <h3 className='text-white'>Client</h3>
                    </div>
                </div>
            </div>
        </div>
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
                bottom: '40px',
                right: '40px',
                backgroundColor: 'rgb(212, 59, 4)',
                color: '#fff',
                textAlign: 'center',
                zIndex: '9999',
                }}
            >
                <FaArrowUp/>
            </button>
        </div>
    </div>
  )
}

export default Banner