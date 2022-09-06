import React from 'react';
import './style.css';
import { FaCheck } from "react-icons/fa";

export default function 
() {
  return (
    <div className='cust-sect-arrive pt-5 pb-5'>
        <div className='container'>
            <h1 className='text-white'>Where do <span>we arrive at</span> a result?</h1>
            <main>
                <section id="cards">
                    <div className= "container py-2">
                        <div className= "row">
                            <div className= "col-lg-4 col-md-6 mb-4 pt-5">
                                <div className= "card border-0">
                                    <div className= "card-body pt-5">
                                        <div className= "user-content">
                                            <h4 className= "text-capitalize user-name">Reasons Why You Need Digital Marketing Services</h4>                                            

                                            <p className= "mb-0 mt-3 custom-text">
                                                Digital Marketing become an irreplaceable element in modern business development. Marketing is the key to creating relationships with the end users, digitally redefining the nuances of Digital Marketing Services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className= "col-lg-4 col-md-6 mb-4 pt-5">
                                <div className= "card border-0">
                                    <div className= "card-body pt-5">
                                        <div className= "user-content">
                                            <h4 className= "text-capitalize user-name">Rank You Higher Digital Marketing Strategy</h4>
                                            <p className= "mb-0 mt-3">
                                                The attempts to outline the Digital Marketing program offered by Raise. A customized offering can be availed by the Client at any time. Raise offers a proven workflow and tested packages that best utilize digital marketing capabilities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className= "col-lg-4 col-md-6 mb-4 pt-5">
                                <div className= "card shadow-sm border-0">
                                    <div className= "card-body pt-5">
                                        <div className= "user-content">
                                            <h4 className= "text-capitalize user-name">What Comes In Our Digital Marketing Services</h4>                                            
                                            <p className= "mb-0 mt-3">
                                            RYH Services comes under Digital Marketing Services.
                                                <ul className='arrive_ul'>
                                                    <li className='custom-list'>
                                                        <FaCheck className='custom-font-icon text-orange'/>
                                                        SEO Services
                                                    </li>
                                                    <li className='custom-list'>
                                                        <FaCheck className='custom-font-icon text-orange'/>                                                       
                                                        SEM Services
                                                    </li>
                                                    <li className='custom-list'>
                                                        <FaCheck className='custom-font-icon text-orange'/>   
                                                        SMM Services
                                                    </li>
                                                    <li className='custom-list'>
                                                        <FaCheck className='custom-font-icon text-orange'/>                                                       
                                                        Branding Services
                                                    </li>
                                                    <li className='custom-list'>
                                                        <FaCheck className='custom-font-icon text-orange'/>   
                                                        Website Development
                                                    </li>
                                                    <li className='custom-list'>
                                                        <FaCheck className='custom-font-icon text-orange'/>                                                         
                                                        Mobile App Development
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
  )
}
