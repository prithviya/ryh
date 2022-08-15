import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import Images from '../../constants/asset';

function Footer() {
  return (
    <div>
         <div className='pt-5'>
            <div className='container'>
                <div className='row custom-mob-footer' style={{marginBottom: '-5%'}}>
                    <div className='col-md-4 custom-footer p-5'>
                        <img className='custm-align-center' src="https://img.icons8.com/pastel-glyph/64/d43b04/worldwide-location--v1.png"/>
                        <p className='text-white'>Rathinam Techzone Campus,</p>
                        <p className='text-white'>Eachanari.</p>
                    </div>
                    <div className='col-md-4 custom-footer p-5'>
                        <img src="https://img.icons8.com/ios-glyphs/64/d43b04/new-post.png"/>
                        <p className='text-white cust-decoration'>
                            <a class="text-white cust-decoration" href="mailto:ryh.digitalservices@gmail.com">
                                ryh.digitalservices@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className='col-md-4 custom-footer p-5'>
                        <img src="https://img.icons8.com/sf-regular-filled/64/d43b04/phone.png"/>
                        <p className='text-white'>
                            <a class="text-white cust-decoration" href="tel:+91 7558101666">
                                +91 75581 01666
                            </a>
                        </p>
                    </div>
                </div>            
            </div> 
            <div className='custom-footer'>
                <div className='container'>
                    <div className='row custom-mob-footer'>
                        <div className='col-md-4' id='custom-logo'>
                            <img src={ Images.BANNER_LOGO } className='custom-logo'/>
                            <h5 className='text-white mt-3'>Follow Us</h5>
                            <div class="rounded-social-buttons">
                                <a class="social-button facebook" href="https://www.facebook.com/rankuhigher2020/" target="_blank">
                                    <FaFacebookF className='text-white'/>
                                </a>
                                <a class="social-button twitter" href="https://twitter.com/Ranku_higher/" target="_blank">
                                    <FaTwitter className='text-white'/>
                                </a>
                                <a class="social-button linkedin" href="#" target="_blank">
                                    <FaLinkedinIn className='text-white'/>
                                </a>
                                <a class="social-button youtube" href="#" target="_blank">
                                    <FaYoutube className='text-white'/>
                                </a>
                                <a class="social-button instagram" href="https://www.instagram.com/ranku_higher/" target="_blank">
                                    <FaInstagram className='text-white'/>
                                </a>
                            </div> 
                        </div>
                        <div className='col-md-4' id='custom-logo'>
                            <h4 className='text-white mt-3'>Quick Link</h4>
                            <ul className='cust-footerlink'>
                                <li className='footer-list'>
                                    <a className='text-white'>Home</a>
                                </li>
                                <li className='footer-list'>
                                    <a className='text-white'>About Us</a>
                                </li>
                                <li className='footer-list'>
                                    <a className='text-white'>Services</a>
                                </li>
                                <li className='footer-list'>
                                    <a className='text-white'>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-3' id='custom-logo'>
                            <h4 className='text-white mt-3'>Services</h4>
                            <ul className='cust-footerlink'>
                                <li className='footer-list'>
                                    <a className='text-white'>SEM</a>
                                </li>
                                <li className='footer-list'>
                                    <a className='text-white'>SMM</a>
                                </li>
                                <li className='footer-list'>
                                    <a className='text-white'>SEO</a>
                                </li>   
                                <li className='footer-list'>
                                    <a className='text-white'>Web Development</a>
                                </li>  
                                <li className='footer-list'>
                                    <a className='text-white'>App Development</a>
                                </li>  
                                <li className='footer-list'>
                                    <a className='text-white'>Logo Designing</a>
                                </li> 
                                <li className='footer-list'>
                                    <a className='text-white'>Catalog Designing</a>
                                </li>                       
                            </ul>                            
                        </div>
                    </div>
                </div> 
                <hr/>          
                <p className='text-white text-center m-0'>
                    2022 © Copyright. All Rights Reserved.
                </p>           
            </div>   
                      
        </div>
    </div>
  )
}

export default Footer