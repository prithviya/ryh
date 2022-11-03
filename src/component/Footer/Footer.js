import React from 'react';
import { Link } from "react-scroll";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Images from '../../constants/asset';

function Footer() {
  return (
    <div>
        <div className='pt-5'>
        <div className='container'>
            <div className='row custom-mob-footer' style={{marginBottom: '-5%'}}>
                <div className='col-md-4 custom-footer p-5'>
                    <LazyLoadImage className='custm-align-center' src="https://img.icons8.com/pastel-glyph/64/d43b04/worldwide-location--v1.png" alt='location' loading="lazy"/>
                    <p className='text-white'>Rathinam Techzone Campus,</p>
                    <p className='text-white'>Eachanari.</p>
                </div>
                <div className='col-md-4 custom-footer p-5'>
                    <LazyLoadImage src="https://img.icons8.com/ios-glyphs/64/d43b04/new-post.png" alt='mailid'  loading="lazy"/>
                    <p className='text-white cust-decoration'>
                        <a className="text-white cust-decoration" href="mailto:ryh.digitalservices@gmail.com">
                            ryh.digitalservices@gmail.com
                        </a>
                    </p>
                </div>
                <div className='col-md-4 custom-footer p-5'>
                    <LazyLoadImage src="https://img.icons8.com/sf-regular-filled/64/d43b04/phone.png" alt='ping me'  loading="lazy"/>
                    <p className='text-white'>
                        <a className="text-white cust-decoration" href="tel:+91 7558101666">
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
                        <LazyLoadImage src={ Images.BANNER_LOGO } alt='logo' className='custom-logo'/>
                        <h5 className='text-white mt-3'>Follow Us</h5>
                        <div className="rounded-social-buttons">
                            <a className="social-button facebook" href="https://www.facebook.com/rankuhigher2020/" target="_blank" rel="noreferrer">
                                <FaFacebookF className='text-white'/>
                            </a>
                            <a className="social-button twitter" href="https://twitter.com/Ranku_higher/" target="_blank"rel="noreferrer">
                                <FaTwitter className='text-white'/>
                            </a>
                            <a className="social-button linkedin" href="https://www.linkedin.com/company/ranku-higher/" target="_blank" rel="noreferrer">
                                <FaLinkedinIn className='text-white'/>
                            </a>
                            <a className="social-button youtube" href="!#" target="_blank" rel="noreferrer">
                                <FaYoutube className='text-white'/>
                            </a>
                            <a className="social-button instagram" href="https://www.instagram.com/ranku_higher/" target="_blank" rel="noreferrer">
                                <FaInstagram className='text-white'/>
                            </a>
                        </div> 
                    </div>
                    <div className='col-md-4' id='custom-logo'>
                        <h4 className='text-white mt-3'>Quick Link</h4>
                        <ul className='cust-footerlink'>
                            <li className="footer-list">
                                <Link to="about" className='text-white'>About</Link>
                            </li> 
                            <li className='footer-list'>
                                <Link to="service" className='text-white'>
                                    Services
                                </Link>
                            </li>
                            <li className='footer-list'>
                                <Link to="team"  className='text-white'>
                                    Team
                                </Link>
                            </li>
                            <li className='footer-list'>
                                <Link to="testimonial" className='text-white'>
                                    Testimonial
                                </Link>
                            </li>
                            <li className='footer-list'>
                                <Link to="client" className='text-white'>
                                    Client
                                </Link>
                            </li>
                            <li className='footer-list'>
                                <Link to="project" className='text-white'>
                                    Project
                                </Link>
                            </li>
                            <li className='footer-list'>
                                <Link to="contact" className='text-white'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-3' id='custom-logo'>
                        <h4 className='text-white mt-3'>Services</h4>
                        <ul className='cust-footerlink'>
                            <li className='footer-list'>
                                <a className='text-white' rel="noreferrer" href='!#'>SEM</a>
                            </li>
                            <li className='footer-list'>
                                <a className='text-white' rel="noreferrer" href='!#'>SMM</a>
                            </li>
                            <li className='footer-list'>
                                <a className='text-white' rel="noreferrer" href='!#'>SEO</a>
                            </li>   
                            <li className='footer-list'>
                                <a className='text-white' rel="noreferrer" href='!#'>Web Development</a>
                            </li>  
                            <li className='footer-list'>
                                <a className='text-white' rel="noreferrer" href='!#'>App Development</a>
                            </li>  
                            <li className='footer-list'>
                                <a className='text-white' rel="noreferrer" href='!#'>Logo Designing</a>
                            </li> 
                            <li className='footer-list'>
                                <a className='text-white' rel="noreferrer" href='!#'>Catalog Designing</a>
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