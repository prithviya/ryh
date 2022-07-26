import React from 'react';
import './style.css';
import { FaCheck } from "react-icons/fa";

export default function 
() {
  return (
    <div className='cust-sect-arrive pt-5 pb-5'>
        <div className='container'>
            <h1 className='text-white'>How do we arrive at a result?</h1>
            <main>
                <section id="cards">
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 mb-4 pt-5">
                                <div class="card border-0">
                                    <div class="card-body pt-5">
                                        <div class="user-content">
                                            <h4 class="text-capitalize user-name text-justify">6 Reasons Why You Need Digital Marketing Services</h4>                                            

                                            <p class="mb-0 mt-3 custom-text">
                                                Digital marketing became an irreplaceable element in modern business development. Marketing is the key to creating relationships with the end users, digitally doing that redefines the way of creating that relationship.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4 pt-5">
                                <div class="card border-0">
                                    <div class="card-body pt-5">
                                        <div class="user-content">
                                            <h4 class="text-capitalize user-name text-center">Rank You Higher Digital Marketing Strategy</h4>
                                            <p class="mb-0 mt-3">
                                                The following table attempts to outline the Digital Marketing program offered by Raise. A customized offering can be availed by the Client at any time. Raise offers a proven workflow and tested packages that best utilize digital marketing capabilities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4 pt-5">
                                <div class="card shadow-sm border-0">
                                    <div class="card-body pt-5">
                                        <div class="user-content">
                                            <h4 class="text-capitalize user-name text-right">What Comes In Our Digital Marketing Services</h4>                                            
                                            <p class="mb-0 mt-3">
                                            RYH come up services under Digital Marketing Services.
                                                <ul className='arrive_ul'>
                                                    <li>
                                                        <FaCheck className='custom-font-icon text-orange'/>
                                                        SEO Services
                                                    </li>
                                                    <li> 
                                                        <FaCheck className='custom-font-icon text-orange'/>                                                       
                                                        SEM Services
                                                    </li>
                                                    <li>
                                                        <FaCheck className='custom-font-icon text-orange'/>   
                                                        SMM Services
                                                    </li>
                                                    <li>    
                                                        <FaCheck className='custom-font-icon text-orange'/>                                                       
                                                        Branding Services
                                                    </li>
                                                    <li>
                                                        <FaCheck className='custom-font-icon text-orange'/>   
                                                        Website Development
                                                    </li>
                                                    <li>  
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
