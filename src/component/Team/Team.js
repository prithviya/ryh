import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Images from "../../constants/asset";
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
                        <img src={ Images.NAGARAJ }/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Nagaraj</h3>
                        <p className='text-white'>Managing  Director</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.MEHALA }/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Mehala Govindaraj</h3>
                        <p className='text-white'>Senior Manager - Digital Marketing </p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.VINO }/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Vinothini</h3>
                        <p className='text-white'>Digital Marketing Specialist</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.RAJ }/>
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
                        <img src={ Images.GOWTHAM }/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Bala Murugan</h3>
                        <p className='text-white'>SEO Analyst</p>
                        
                        </div>
                    </li>                    
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.FARINA }/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Farina Khaligh</h3>
                        <p className='text-white'>Content Writer</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.GEETHA }/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Geetha</h3>
                        <p className='text-white'>Junior - Web Developer</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.MANO }/>
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
                        <img src={ Images.DANI }/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Dani</h3>
                        <p className='text-white'>Graphic designer</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.BABU }/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Anandh Palanisamy</h3>
                        <p className='text-white'>Executive Design & Production</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.BALA } />
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Bala Krishnan</h3>
                        <p className='text-white'>Business Development Executive</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.SWATHI } />
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Swathi</h3>
                        <p className='text-white'>Team Associate</p>
                        
                        </div>
                    </li>
                </ul>
            </Carousel.Item>
            <Carousel.Item>
                <ul className="list-members mb-0 p-0 mb-5">
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.BANNER_LOGO }/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Udhaya Kumari</h3>
                        <p className='text-white'>Digital Marketing Specialist</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.BANNER_LOGO }/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>Pavithra</h3>
                        <p className='text-white'>Social Media Associate</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.BANNER_LOGO }/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>lorem ipsum </h3>
                        <p className='text-white'>lorem ipsum dolor sit</p>
                        
                        </div>
                    </li>
                    <li className="member">
                        <div className="member-image">
                        <img src={ Images.BANNER_LOGO }/>
                        </div>
                        <div className="member-info">
                        <h3 className='text-white'>lorem ipsum </h3>
                        <p className='text-white'>lorem ipsum dolor sit</p>
                        
                        </div>
                    </li>
                </ul>
            </Carousel.Item>
        </Carousel>
        
    </div>
  )
}

export default Team