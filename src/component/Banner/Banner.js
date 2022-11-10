import React from 'react';
import {useEffect} from 'react';
import { FaArrowUp } from "react-icons/fa"; 
import CountUp from 'react-countup';
import { Link } from "react-scroll";

    const Banner= () => {
   
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
  return (
    <div className='custom-sec-banner pb-5'>
        <div className='container custom-banner-content'>            
            <div className='row'>
                <div className='col-md-7'>
                    <h1 className='text-white'>Leveling up your Digital Marketing</h1>
                    <p className='text-white'>
                    Turn your Business into a Brand. We provide fail-safe and progressive techniques which turn your visitors into your customers.
                    </p>
                    <Link to="contact">
                        <button>
                            <span className= "shadow"></span>
                            <span className= "edge"></span>
                            <span className= "front text"> Get Quotes
                            </span>
                        </button>
                    </Link>
                    <a href="http://showcase.rankuhigher.in/" target={'_blank'} rel="noreferrer" className='ml-4'>
                        <button>
                            <span className= "shadow"></span>
                            <span className= "edge"></span>
                            <span className= "front text"> Our Work
                            </span>
                        </button>
                    </a>
                </div>
                <div className='col-md-5'>
                </div>
                <div className='row custom-counter-content'>
                    <div className='col-md-3 col-4 text-center mt-5'>
                        <h1 className='text-orange'><CountUp start={0} end={80} delay={1} />+</h1>
                        <h3 className='text-white'>Clients</h3>
                    </div>
                    <div className='col-md-3 col-4 text-center mt-5'>
                    <h1 className='text-orange'><CountUp start={0} end={215} delay={1} />+</h1>
                        <h3 className='text-white'>Projects</h3>
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
    </div>
  )
}

export default Banner