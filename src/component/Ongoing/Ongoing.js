import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./item";
import Images from "../../constants/asset";
import './styles.css';


function Ongoing() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 1 },
    ];
  return (
    <div>
        <div className='cust-ongoing-section pt-5 pb-5'>
            <div className='container'>
                <h1 className='text-center p-3 text-white'>On Going Projects</h1>
                <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay autoPlaySpeed={8000} >
                    <Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-7 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <img src={ Images.FLUID }/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-7'>
                                            <div className='mt-4'>                                                
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit magna aliqua.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing aliqua.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 my-2">
                                            <div class="ins-1">
                                                <div class="align-items-center">
                                                    <div class="title-box">
                                                        <h5 class="mb-0">
                                                            Workable Status
                                                        </h5>
                                                    </div>            
                                                </div>
                                            </div>
                                            <div class="ins-1">
                                                <div class="align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="align-items-center mb-0">
                                                            <i class="fa fa-arrow-up"></i><span>80%</span>
                                                                SEO
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>
                                            <div class="ins-1">
                                                <div class="align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="align-items-center mb-0">
                                                            <i class="fa fa-arrow-up"></i><span>50%</span>
                                                                SMM
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div> 
                                            <div class="ins-1">
                                                <div class="align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="align-items-center mb-0">
                                                            <i class="fa fa-arrow-up"></i><span>30%</span>
                                                                SMO
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>                                    
                                        </div>                                 
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-5 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.FLUID_WEB } alt="Fluid Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
                    <Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-7 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <img src={ Images.AIC }/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-7'>
                                            <div className='mt-4'>                                                
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit magna aliqua.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing aliqua.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 my-2">
                                            <div class="ins-1">
                                                <div class="align-items-center">
                                                    <div class="title-box">
                                                        <h5 class="mb-0">
                                                            Workable Status
                                                        </h5>
                                                    </div>            
                                                </div>
                                            </div>
                                            <div class="ins-1">
                                                <div class="align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="align-items-center mb-0">
                                                            <i class="fa fa-arrow-up"></i><span>80%</span>
                                                                SEO
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>
                                            <div class="ins-1">
                                                <div class="align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="align-items-center mb-0">
                                                            <i class="fa fa-arrow-up"></i><span>50%</span>
                                                                SMM
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div> 
                                            <div class="ins-1">
                                                <div class="align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="align-items-center mb-0">
                                                            <i class="fa fa-arrow-up"></i><span>30%</span>
                                                                SMO
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>                                    
                                        </div>                                 
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-5 p-3  custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.AIC_WEB } alt="Aic Raise Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
                    <Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-7 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <img src={ Images.SHELTERS }/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-7'>
                                            <div className='mt-4'>                                                
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit magna aliqua.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing aliqua.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 my-2">
                                            <div class="ins-1">
                                                <div class="align-items-center">
                                                    <div class="title-box">
                                                        <h5 class="mb-0">
                                                            Workable Status
                                                        </h5>
                                                    </div>            
                                                </div>
                                            </div>
                                            <div class="ins-1">
                                                <div class="align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="align-items-center mb-0">
                                                            <i class="fa fa-arrow-up"></i><span>80%</span>
                                                                SEO
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>
                                            <div class="ins-1">
                                                <div class="align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="align-items-center mb-0">
                                                            <i class="fa fa-arrow-up"></i><span>50%</span>
                                                                SMM
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div> 
                                            <div class="ins-1">
                                                <div class="align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="align-items-center mb-0">
                                                            <i class="fa fa-arrow-up"></i><span>30%</span>
                                                                SMO
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>                                    
                                        </div>                                 
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-5 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.RTM_WEB } alt="Rathinam Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Ongoing