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
                                                EduDharma is a donation-based crowdfunding platform for academic scholarship funding. Students create a campaign for the amount required by them to pursue their education and donors back them on the platform.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.EDUDHRAMA } alt="Edudharma Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
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
                                                The property, which is located on the outskirts, is designed to provide guests with complete privacy, whether they are there to work or simply to escape reality. At the property take a stroll through the cardamom plantation.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.PEPPER } alt="Pepper Valley Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
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
                                                KYK role of past lives in present day problems and rebirth of souls is a debatable subject in many religions. This system of astrology talks about past lives and accumulated karmas of past lives which get manifested in situations of the present life.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.KYK } alt="Know Your Karma Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
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
                                                Milestone Exhibition is a stand building contractor based work together with Exhibitors and Design Agencies from across the globe to deliver bespoke projects for Exhibitions, Events and Interiors. We believe that quality and customer satisfaction.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.MILE } alt="Milestone Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
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
                                                Regenf provides a nurturing bond between both verified buyers and sellers. Regenf working to produce a regeneration framework which involves reusing, sharing, and recycling existing materials and products as long as possible. 
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.REGENF } alt="Milestone Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
                    {/* hadid */}
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
                                                HADID is a leading provider of aviation support services. HADID offers domestic and international aviation services which include, but are not limited to, Flight Permits, Flight Planning, Ground Support, Governmental Flight Support and Charter services.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.HADID } alt="Milestone Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
                    {/* rps */}
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
                                                “The purpose of education is to create the purpose of life”. We are shaping the future of students with international education.  Learning communities of Rathinam tap internal and external expertise and resources to strengthen practice and student learning.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.RPS } alt="Milestone Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
                    {/* mcet */}
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
                                                MCET is a self – financing educational institution situated in Pollachi, Coimbatore District. MCET is the vision of Arutchelvar Dr. N. Mahalingam, whose determination and dynamism made possible the realization of this institution of excellence.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <img src={ Images.MCET } alt="Milestone Website"/>
                                </div>
                            </div>
                        </div>
                    </Item>
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