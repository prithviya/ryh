import React from 'react';
import {useEffect} from 'react';
import { FaArrowUp, FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa"; 
import Image from "../../constants/asset";
import { ReactNavbar } from "react-responsive-animate-navbar";
import Logo from '../../images/logo.webp';
import CountUp from 'react-countup';
        
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
                { name: "ABOUT US", to: "/about", component: About },
                { name: "OUR TEAM", to: "/about", component: About },
                { name: "OUR SERVICES", to: "/services", component: About },
                { name: "CONTACT US", to: "/contact" },
                ]}
                social={[
                ]}
                sticky
            />
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
                    <div className='col-md-3 col-4 text-center'>
                        <h1 className='text-orange'><CountUp start={0} end={10} delay={1} />+</h1>
                        <h3 className='text-white'>Client</h3>
                    </div>
                    <div className='col-md-3 col-4 text-center'>
                    <h1 className='text-orange'><CountUp start={0} end={15} delay={1} />+</h1>
                        <h3 className='text-white'>Project</h3>
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
    </div>
  )
}

export default Banner