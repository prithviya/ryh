import React from 'react';
import './style.css';
import Carousel from 'react-bootstrap/Carousel';
import Images from "../../constants/asset";

function Testimonial() {
  return (
    <div className='cust-work-section pb-5'>
        <h1 className='text-center pt-5'>What <span>Our Customer </span>Say</h1>
        <div className='container p-0'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <div className='row'>
                        <div className="col-md-6">
                            <div id="testimonial-slider" className="owl-carousel">
                                <div className="testimonial">
                                    <div className="pic">
                                        <img src={ Images.VS }/>
                                    </div>
                                    <p className="description">
                                    I am absolutely satisfied with the project we have done with Rank You Higher team. The Professional developers, Creative Designer decent project manager and passioned marketing team
                                    </p>
                                    <h3 className="title">V2s Finance Services Pvt Ltd</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="testimonial-slider" className="owl-carousel">
                                <div className="testimonial">
                                    <div className="pic">
                                        <img src={ Images.DHANVA }/>
                                    </div>
                                    <p className="description">
                                    Working with Rank you Higher team has been a pleasure to work with, very polite, very understanding. All their team members are friendly, professional and detail-oriented. A real treat!
                                    </p>
                                    <h3 className="title">dhanvantri BioMedical Pvt Ltd</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='row'>
                        <div className="col-md-6">
                            <div id="testimonial-slider" className="owl-carousel">
                                <div className="testimonial">
                                    <div className="pic">
                                        <img src={ Images.ONE }/>
                                    </div>
                                    <p className="description">
                                    Since working with RYH our lead quality and profitability have skyrocketed! I have also been impressed by the quality of services and constant communication and tracking RHY offers. 
                                    </p>
                                    <h3 className="title">One Market Place Pvt Ltd</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="testimonial-slider" className="owl-carousel">
                                <div className="testimonial">
                                    <div className="pic">
                                        <img src={ Images.MCEET } />
                                    </div>
                                    <p className="description">
                                    RYH have provided great services and strategies for accelerating our business growth. Most importantly, they are willing and able to adapt our marketing strategy to help us succeed in our industry. 
                                    </p>
                                    <h3 className="title">Mahalingam College</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item> 
                <Carousel.Item>
                    <div className='row'>
                    <div className="col-md-6">
                            <div id="testimonial-slider" className="owl-carousel">
                                <div className="testimonial">
                                    <div className="pic">
                                        <img src={ Images.PUMP }/>
                                    </div>
                                    <p className="description">
                                    We chose RYH to become our official partner and developer of our mobile strategy due to their professional and expert approach to work. It takes a lot of dedication and effort to work.
                                    </p>
                                    <h3 className="title">Fluid Pumps Pvt Ltd</h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div id="testimonial-slider" className="owl-carousel">
                                <div className="testimonial">
                                    <div className="pic">
                                        <img src={ Images.RATHINAM }/>
                                    </div>
                                    <p className="description">
                                    RYH has proven to be an integral marketing partner for our team. They handled our website revamp, as well as have continued to work with us to optimize our SEO, create campaigns. 
                                    </p>
                                    <h3 className="title">rathinam groups</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item> 
            </Carousel>      
        </div>     
    </div>
  )
}

export default Testimonial