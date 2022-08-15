import React from 'react';
import './styles.css';
import Carousel from 'react-elastic-carousel';
import Item from "./item";
import Images from "../../constants/asset";

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
                        <img src={ Images.NAGARAJ }/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Nagaraj</h3>
                        <p className='text-white'>Managing  Director</p>
                        
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src={ Images.MEHALA }/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Mehala Govindaraj</h3>
                        <p className='text-white'>Senior Manager - Digital Marketing </p>
                        
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src={ Images.VINO }/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Vinothini</h3>
                        <p className='text-white'>Digital Marketing Specialist</p>
                        
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src={ Images.RAJ }/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Raj Kumar</h3>
                        <p className='text-white'>Senior - Web Developer</p>
                        
                        </div>
                    </li>
                </ul>
            </item>
            <item>
                <ul class="list-members mb-0 p-0 mb-5">
                    <li class="member">
                        <div class="member-image">
                        <img src={ Images.GOWTHAM }/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Bala Murugan</h3>
                        <p className='text-white'>SEO Analyst</p>
                        
                        </div>
                    </li>                    
                    <li class="member">
                        <div class="member-image">
                        <img src={ Images.FARINA }/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Farina Khaligh</h3>
                        <p className='text-white'>Content Writer</p>
                        
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src={ Images.GEETHA }/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Geetha</h3>
                        <p className='text-white'>Junior - Web Developer</p>
                        
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src={ Images.MANO }/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Mano</h3>
                        <p className='text-white'>Senior Graphic designer</p>
                        
                        </div>
                    </li>
                </ul>
            </item>
            <item>
                <ul class="list-members mb-0 p-0 mb-5">
                    <li class="member">
                        <div class="member-image">
                        <img src={ Images.DANI }/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Dani</h3>
                        <p className='text-white'>Graphic designer</p>
                        
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src={ Images.BABU }/>
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Anand</h3>
                        <p className='text-white'>Executive Design & Production</p>
                        
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src={ Images.BALA } />
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Bala Krishnan</h3>
                        <p className='text-white'>Business Development Executive</p>
                        
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src={ Images.SWATHI } />
                        </div>
                        <div class="member-info">
                        <h3 className='text-white'>Swathi</h3>
                        <p className='text-white'>Team Associate</p>
                        
                        </div>
                    </li>
                </ul>
            </item>
        </Carousel>
        
    </div>
  )
}

export default Team