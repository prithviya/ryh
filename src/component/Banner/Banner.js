import React from 'react';
import {useEffect} from 'react';
import { FaArrowUp } from "react-icons/fa"; 
import Image from "../../constants/asset";
import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';

function Banner() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
  return (
    <>
    <Navbar />
    <div className='custom-sec-banner pb-5'>
        <div className='custom-sec-navbar '>
            <nav className='container navbar navbar-expand-lg pt-0'>
                <div className='collapse navbar-collapse mb-0'>
                    <ul class="navbar-nav">
                        <li class="nav-item p-2">
                            <a className='text-white'>
                                <FaEnvelopeOpen/> ryh.digitalservices@gmail.com
                            </a>
                        </li>
                        <li class="nav-item p-2">
                            <a className='text-white'>
                                <FaPhoneAlt/> +91 12345 67890
                            </a>
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
                    <div className='col-md-2 col-4 text-center'>
                        <h1 className='text-orange'>20+</h1>
                        <h3 className='text-white'>Client</h3>
                    </div>
                    <div className='col-md-2 col-4 text-center'>
                        <h1 className='text-orange'>10+</h1>
                        <h3 className='text-white'>Project</h3>
                    </div>
                    <div className='col-md-2 col-4 text-center'>
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
    </>
    
  )
}

export default Banner