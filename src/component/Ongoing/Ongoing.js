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
                <h1 className='text-center p-3 text-white'>Our <span>Projects</span></h1>
                <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay autoPlaySpeed={8000} >
                    <Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <img src={ Images.FLUID }/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='mt-4'>                                                
                                                <p>
                                                Fluid Pumps and Systems is the Authorized Distributor of Grundfos Pumps in Coimbatore, Tirupur, Erode, Salem, Namakkal and Nilgiris. We specialize in Pumps for Domestic, RO Plants, ETP, STP, ZLD, Commercial and Industrial Applications.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.FLUID_WEB } alt="Fluid Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
                    <Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <img src={ Images.AIC }/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='mt-4'>                                                
                                                <p>
                                                AIC Raise India's first Startup Incubation centre for startups and enterprises  focusing on the United Nations Sustainable Development Goals creating AIC RAISE has hosted the event “Tamilnadu Startup Growth Conclave”.
                                                </p>
                                            </div>
                                        </div>                                                                        
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3  custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.AIC_WEB } alt="Aic Raise Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
                    <Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <img src={ Images.SHELTERS }/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='mt-4'>                                                
                                                <p>
                                                    
With over a decade of experience in the field of construction of IT Parks, Commercial Buildings,Apartment, Hotels, Colleges and School, Rathinam Shelters stepping into creating affordable luxury homes in Coimbatore city. 
                                                </p>
                                            </div>
                                        </div>
                                                                       
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
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