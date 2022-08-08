import React from 'react';
import './styles.css';
import Carousel from 'react-elastic-carousel';
import Item from "./item";

function Team() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 1 },
    ];
  return (
    <div className='cust-team-section pt-5 pb-5'>
        <h1 className='text-white text-center pb-3'>Our <span>Strength</span></h1>
        <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay autoPlaySpeed={9999} >
            <item>
                <ul class="list-members mb-0 p-0 mb-5">
                    <li class="member">
                        <div class="member-image">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/1.png"/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Nagaraj</h3>
                        <p className='text-white'>Branding Director</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/2.png"/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Mehala</h3>
                        <p className='text-white'>Digital Marketing Manager</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/3.png"/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Vinothini</h3>
                        <p className='text-white'>Digital Marketing Specialist</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/4.png"/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Bala Murugan</h3>
                        <p className='text-white'>SEO Analyst</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                </ul>
            </item>
            <item>
                <ul class="list-members mb-0 p-0 mb-5">
                    <li class="member">
                        <div class="member-image">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/1.png"/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Raj Kumar</h3>
                        <p className='text-white'>Senior Web Developer</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/2.png"/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Farina</h3>
                        <p className='text-white'>Content Writer</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/3.png"/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Geetha</h3>
                        <p className='text-white'>Junior Web Developer</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/4.png"/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Mano</h3>
                        <p className='text-white'>Senior Graphic designer</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                </ul>
            </item>
            <item>
                <ul class="list-members mb-0 p-0 mb-5">
                    <li class="member">
                        <div class="member-image">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/1.png"/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Dani</h3>
                        <p className='text-white'>Graphic designer</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/2.png"/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Anand</h3>
                        <p className='text-white'>Executive Design & Production</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/3.png"/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Bala Krishnan</h3>
                        <p className='text-white'>Business Development Executive</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src="https://fadzrinmadu.github.io/hosted-assets/team-section-design-using-html-and-css/4.png"/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Swathi</h3>
                        <p className='text-white'>Team Associated</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                </ul>
            </item>
        </Carousel>
        
    </div>
  )
}

export default Team