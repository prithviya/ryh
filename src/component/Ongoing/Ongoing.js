import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Images from "../../constants/asset";
import './styles.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Ongoing() {
  return (
    <div>
        <div className='cust-ongoing-section pt-5 pb-5'>
            <div className='container'>
                <h1 className='text-center p-3 text-white'>Our <span>Projects</span></h1>
                <Carousel variant="dark" interval={1500}>
                    {/* EDUDHARAMA */}
                    <Carousel.Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6'>
                                <div className='content'>
                                    <div className=''>
                                        <LazyLoadImage src={ Images.EDU } alt='ongoing-img'loading="lazy"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className=''>                                                
                                                <p className='text-justify'>
                                                EduDharma is a donation-based crowdfunding platform for academic scholarship funding. Students create a campaign for the amount required by them to pursue their education and donors back them on the platform.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-2 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <LazyLoadImage src={ Images.EDUDHRAMA } alt="Know Your Karma Website" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* the pepper */}
                    <Carousel.Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <LazyLoadImage src={ Images.PEPER } alt='ongoing-img'loading="lazy"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className=''>                                                
                                                <p className='text-justify'>
                                                The Pepper Valley is located in a small village named Chellarkovil in the district of Idukki in the State of Kerala. Experience the luxury and comfort wrapped in our cardamom plantation setting.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <LazyLoadImage src={ Images.PEPPER } alt="Pepper Valley Website"loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* KYK */}
                    <Carousel.Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6'>
                                <div className='content'>
                                    <div className=''>
                                        <LazyLoadImage src={ Images.KARMA } alt='ongoing-img'loading="lazy"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className=''>                                                
                                                <p className='text-justify'>
                                                KYK role of past lives in present day problems and rebirth of souls is a debatable subject in many religions. Once the previous life has gone, become past, one wonders how to know pending karmas at the time of birth. 
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-2 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <LazyLoadImage src={ Images.KYK } alt="Know Your Karma Website" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* milestone */}
                    <Carousel.Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <LazyLoadImage src={ Images.MILESTONE } alt='ongoing-img'loading="lazy"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className=''>                                                
                                                <p className='text-justify'>
                                                Milestone Exhibition is a stand building contractor based work together with Exhibitors and Design Agencies from across the globe to deliver bespoke projects for Exhibitions, Events and Interiors. 
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-2 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <LazyLoadImage src={ Images.MILE } alt="Milestone Website" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* regenf */}
                    {/* <Carousel.Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <LazyLoadImage src={ Images.REGEN } alt='ongoing-img'loading="lazy"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className=''>                                                
                                                <p className='text-justify'>
                                                Regenf provides a nurturing bond between both verified buyers and sellers. Their working to produce a regeneration framework which involves reusing, recycling existing materials and products.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-2 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <LazyLoadImage src={ Images.REGENF } alt="Milestone Website" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                   */}
                    {/* hadid */}
                    <Carousel.Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <LazyLoadImage src={ Images.HAD } alt='ongoing-img'loading="lazy"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className=''>                                                
                                                <p className='text-justify'>
                                                HADID is a leading provider of aviation support services. It's offers domestic and international aviation services which include, but are not limited to, Flight Permits, Flight Planning, Ground Support etc.,
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <LazyLoadImage src={ Images.HADID } alt="Milestone Website" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* rps */}
                    <Carousel.Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <LazyLoadImage src={ Images.RPSC } alt='ongoing-img'loading="lazy"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className=''>                                                
                                                <p className='text-justify'>
                                                Rathinam plays a major role in helping build team spirit among students and bring out talents and capabilities. We believe and work on the tagline “The purpose of education is to create the purpose of life”.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <LazyLoadImage src={ Images.RPS } alt="Milestone Website"loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* mcet */}
                    <Carousel.Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <LazyLoadImage src={ Images.MCET } alt='ongoing-img'loading="lazy"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className=''>                                                
                                                <p className='text-justify'>
                                                MCET is the vision whose determination and dynamism made possible the realization of this institution of excellence. It's established in commemorate the 75th Birthday of this great visionary Dr. N. Mahalingam.
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <LazyLoadImage src={ Images.MET } alt="Milestone Website" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* fluid */}
                    <Carousel.Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <LazyLoadImage src={ Images.FLUID } alt='ongoing-img'loading="lazy"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className=''>                                                
                                                <p className='text-justify'>
                                                Fluid Pumps and Systems is the Authorized Distributor of Grundfos Pumps in Coimbatore, Tirupur, Erode, Salem, Namakkal and Nilgiris. We specialize in Pumps for Domestic, RO Plants, ETP, STP, ZLD, Commercial etc.,
                                                </p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <LazyLoadImage src={ Images.FLUID_WEB } alt="Fluid Website" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* aic */}
                    <Carousel.Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <LazyLoadImage src={ Images.AIC } alt='ongoing-img'loading="lazy"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className=''>                                                
                                                <p className='text-justify'>
                                                AIC Raise India's first Startup Incubation centre for startups and enterprises  focusing on the United Nations Sustainable Development Goals creating AIC RAISE has hosted the event “Tamilnadu Startup Growth Conclave”.
                                                </p>
                                            </div>
                                        </div>                                                                        
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <LazyLoadImage src={ Images.AIC_WEB } alt="Aic Raise Website" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* shelters */}
                    {/* <Carousel.Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-6 p-3'>
                                <div className='content'>
                                    <div className=''>
                                        <LazyLoadImage src={ Images.SHELTERS } alt='ongoing-img'loading="lazy"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className=''>                                                
                                                <p className='text-justify'>                                                    
With over a decade of experience in the field of construction of IT Parks, Commercial Buildings,Apartment, Hotels, Colleges and School, Rathinam Shelters stepping into creating affordable luxury homes in Coimbatore city. 
                                                </p>
                                            </div>
                                        </div>
                                                                       
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-3 custom-pro-pic'>
                                <div className='custom-bg pic'>
                                    <LazyLoadImage src={ Images.RTM_WEB } alt="Rathinam Website" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item> */}
                </Carousel>
                <div className='custom-align-center mt-3'>
                    <a href='http://showcase.rankuhigher.in/' target={'_blank'} rel="noreferrer">
                        <button>
                            <span className="shadow"></span>
                            <span className="edge"></span>
                            <span className="front text"> Our Work
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ongoing