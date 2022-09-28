import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Images from "../../constants/asset";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

function Team() {
  return (
    <div className='cust-team-section pt-5 pb-5'>
        <h1 className='text-white text-center pb-3'>Our <span>Strength</span></h1>
        <Carousel variant="dark">
            <Carousel.Item>
                <ul className="list-members mb-0 p-0 mb-5">
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.NAGARAJ }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Nagaraj</h3>
                        <p className='text-white'>Managing  Director</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.MEHALA }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Mehala Govindaraj</h3>
                        <p className='text-white'>Senior Manager - Digital Marketing </p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.VINO }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Vinothini</h3>
                        <p className='text-white'>Digital Marketing Specialist</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.RAJ }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Raj Kumar</h3>
                        <p className='text-white'>Senior - Web Developer</p>
                        
                        </div>
                    </li>
                </ul>
            </Carousel.Item>
            <Carousel.Item>
                <ul className="list-members mb-0 p-0 mb-5">
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.GOWTHAM }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Bala Murugan</h3>
                        <p className='text-white'>SEO Analyst</p>
                        
                        </div>
                    </li>                    
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.FARINA }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Farina Khaligh</h3>
                        <p className='text-white'>Content Writer</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.GEETHA }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Geetha</h3>
                        <p className='text-white'>Junior - Web Developer</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.MANO }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Mano</h3>
                        <p className='text-white'>Senior Graphic designer</p>
                        
                        </div>
                    </li>
                </ul>
            </Carousel.Item>
            <Carousel.Item>
                <ul className="list-members mb-0 p-0 mb-5">
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.DANI }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Dani</h3>
                        <p className='text-white'>Graphic designer</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.BABU }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Anandh Palanisamy</h3>
                        <p className='text-white'>Executive Design & Production</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.BALA }   loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Bala Krishnan</h3>
                        <p className='text-white'>Business Development Executive</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.SWATHI }   loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Swathi</h3>
                        <p className='text-white'>Team Associate</p>
                        
                        </div>
                    </li>
                </ul>
            </Carousel.Item>
            {/* <Carousel.Item>
                <ul className="list-members mb-0 p-0 mb-5">
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.BANNER_LOGO }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Udhaya Kumari</h3>
                        <p className='text-white'>Digital Marketing Specialist</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.BANNER_LOGO }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Pavithra</h3>
                        <p className='text-white'>Social Media Associate</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.BANNER_LOGO }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>lorem ipsum </h3>
                        <p className='text-white'>lorem ipsum dolor sit</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <LazyLoadImage src={ Images.BANNER_LOGO }  loading="lazy" alt='team_section'/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>lorem ipsum </h3>
                        <p className='text-white'>lorem ipsum dolor sit</p>
                        
                        </div>
                    </li>
                </ul>
            </Carousel.Item> */}
        </Carousel>
        
    </div>
  )
}

export default Team