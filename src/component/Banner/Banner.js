import React from 'react';
import {useEffect} from 'react';
import { FaArrowUp, FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa"; 
import Image from "../../constants/asset";
import { ReactNavbar } from "react-responsive-animate-navbar";
import Logo from '../../images/logo.webp';

    const Banner= () => {
    const Home = () => <h1>home</h1>;
    const Articles = () => <h1>Articles</h1>;
    const Contact = () => <h1>Contact</h1>;
    const About = () => <h1>About</h1>;

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
  return (
    <div className='custom-sec-banner pb-5'>
         
         <ReactNavbar
                color="#464849"
                logo="logo.webp"
                menu={[
                { name: "HOME", to: "/", component: Home },
                { name: "ABOUT US", to: "/articles", component: About },
                { name: "OUR SERVICES", to: "/about", component: About },
                { name: "CONTACT US", to: "/contact" },
                ]}
                social={[
                //   {
                //     name: "Email",
                //     url: "https://www.linkedin.com/in/nazeh-taha/",
                //     icon: ["fab", "linkedin-in"],
                //   },
                //   {
                //     name: "Facebook",
                //     url: "https://www.facebook.com/nazeh200/",
                //     icon: ["fab", "facebook-f"],
                //   },
                //   {
                //     name: "Instagram",
                //     url: "https://www.instagram.com/nazeh_taha/",
                //     icon: ["fab", "instagram"],
                //   },
                //   {
                //     name: "Twitter",
                //     url: "http://nazehtaha.herokuapp.com/",
                //     icon: ["fab", "twitter"],
                //   },
                ]}
                sticky
            />
                
        {/* <nav class="navbar navbar-expand-lg navbar-light">
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
                            <a class="nav-link text-white pl-3" href="#">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">About Us</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link text-white" href="#">Our Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>    
                </form>
            </div>
        </nav> */}
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
  )
}

export default Banner