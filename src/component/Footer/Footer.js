import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
function Footer() {
  return (
    <div>
         <div className='custom-footer pt-5 pb-2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-7'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h4 className='text-white'>Address</h4>
                                <p className='text-white'>Rathinam Techzone Campus,</p>
                                <p className='text-white'>Eachanari.</p>
                                <h4 className='text-white'>Working hours</h4>
                                <p className='text-white'>
                                    Mon - Sat: 9.00 to 18.00
                                </p>
                            </div>
                            <div className='col-md-6'>
                                <h4 className='text-white'>Email</h4>
                                <p className='text-white'>
                                    <a class="text-white" href="mailto:ryh.digitalservices@gmail.com">
                                        <FaEnvelopeOpen/> ryh.digitalservices@gmail.com
                                    </a>
                                </p>
                                <h4 className='text-white'>Phone Number</h4>
                                <p className='text-white'>
                                    <a class="text-white" href="tel:+91 7558101666">
                                        <FaPhoneAlt/> +91 75581 01666
                                    </a>
                                </p>
                                
                            </div>                            
                        </div>
                    </div>
                    
                    <div className='col-md-3'>
                        <div>
                            <h4 className='text-white'>Location</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31339.15477692542!2d76.98307996622313!3d10.933554920268104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x40c812a7d5394fdf!2sAIC%20RAISE%20Startup%20Incubation%20Center!5e0!3m2!1sen!2sin!4v1657705442925!5m2!1sen!2sin"  style={{width:"100%", height:"200px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <hr/>                
                <p className='text-center text-white'>
                    2022 © Copyright. All Rights Reserved.
                </p>
                <div className='media-mob-view'>
                    <div class="rounded-social-buttons">
                        <a class="social-button facebook" href="https://www.facebook.com/rankuhigher2020/" target="_blank">
                            <FaFacebookF className='text-white'/>
                        </a>
                        <a class="social-button twitter" href="https://twitter.com/Ranku_higher/" target="_blank">
                            <FaTwitter/>
                        </a>
                        <a class="social-button linkedin" href="#" target="_blank">
                            <FaLinkedinIn/>
                        </a>
                        <a class="social-button youtube" href="#" target="_blank">
                            <FaYoutube/>
                        </a>
                        <a class="social-button instagram" href="https://www.instagram.com/ranku_higher/" target="_blank">
                            <FaInstagram/>
                        </a>
                    </div>
                </div>
            </div>
            <ul id="floating-share-buttons">
                <li>
                    <a href="https://twitter.com/Ranku_higher/" target={'_blank'} class="share-twitter">
                        <h5><FaTwitter/></h5>
                    </a>
                </li>  
                <li>
                    <a href="#" class="share-youtube">
                        <h5><FaYoutube/></h5>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/rankuhigher2020/" target={'_blank'} class="share-facebook">
                       <h5> <FaFacebookF/></h5>
                    </a>
                </li>            
                
                <li>
                    <a href="https://www.instagram.com/ranku_higher/" target={'_blank'} class="share-instagram">
                        <h5><FaInstagram/></h5>
                    </a>
                </li> 
                <li>
                    <a href="#" class="share-linkedin">
                        <h5><FaLinkedinIn/></h5>
                    </a>
                </li>
                
            </ul>               
        </div>
    </div>
  )
}

export default Footer