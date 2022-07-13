import React from 'react'
import Image from '../constants/asset';

function Navbartop() {
  return (
    <div className='custom-sec-banner'>
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
                <div className='col-md-8'>
                    <h1 className='text-white'>Leveling up your Digital Marketing</h1>
                </div>
                <div className='col-md-4'>
                    {/* <h1 className='text-white'>Leveling up your Digital Marketing</h1> */}
                </div>
                <div className='row custom-counter-content'>
                    <div className='col-md-4'>
                        <h1 className='text-orange'>20+</h1>
                        <h3 className='text-white'>Client</h3>
                    </div>
                    <div className='col-md-4'>
                        <h1 className='text-orange'>10+</h1>
                        <h3 className='text-white'>Project</h3>
                    </div>
                    <div className='col-md-4'>
                        <h1 className='text-orange'>20+</h1>
                        <h3 className='text-white'>Client</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Navbartop