import React from 'react';
import './style.css';
import Carousel from 'react-elastic-carousel';
import Item from "./item";

function Testimonial() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 1 },
    ];
  return (
    <div className='cust-work-section pb-5'>
        <h1 className='text-center pt-5'>What <span>Our Customer </span>Say</h1>
        <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay autoPlaySpeed={9999} >        
            <Item className=''>
                <div className='row'>
                    <div class="col-md-6">
                        <div id="testimonial-slider" class="owl-carousel">
                            <div class="testimonial">
                                <div class="pic">
                                    <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                                </div>
                                <p class="description">
                                I am absolutely satisfied with the project we have done with Rank You Higher team. The Professional developers, Creative Designer decent project manager and passioned marketing team
                                </p>
                                <h3 class="title">Naveen</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div id="testimonial-slider" class="owl-carousel">
                            <div class="testimonial">
                                <div class="pic">
                                    <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                                </div>
                                <p class="description">
                                Working with Rank you Higher team has been a real most pleasant experience! .All their team members are friendly, professional and detail-oriented.A real treat!
                                </p>
                                <h3 class="title">Jenifer</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Item>
            <Item className=''>
                <div className='row'>
                    <div class="col-md-6">
                        <div id="testimonial-slider" class="owl-carousel">
                            <div class="testimonial">
                                <div class="pic">
                                    <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                                </div>
                                <p class="description">
                                Since working with RYH our lead quality and profitability have skyrocketed! I have also been impressed by the quality of services and constant communication and tracking RHY offers. 
                                </p>
                                <h3 class="title">Mohan</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div id="testimonial-slider" class="owl-carousel">
                            <div class="testimonial">
                                <div class="pic">
                                    <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                                </div>
                                <p class="description">
                                RYH have provided great services and strategies for accelerating our business growth. Most importantly, they are willing and able to adapt our marketing strategy to help us succeed in our industry. 
                                </p>
                                <h3 class="title">Prithviya</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Item> 
            <Item className=''>
                <div className='row'>
                <div class="col-md-6">
                        <div id="testimonial-slider" class="owl-carousel">
                            <div class="testimonial">
                                <div class="pic">
                                    <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                                </div>
                                <p class="description">
                                We chose The Rank you Higher to become our official partner and developer of our mobile strategy due to their professional and expert approach to work. It takes a lot of dedication and effort to work with company like ours.
                                </p>
                                <h3 class="title">Shree</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div id="testimonial-slider" class="owl-carousel">
                            <div class="testimonial">
                                <div class="pic">
                                    <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                                </div>
                                <p class="description">
                                RYH has proven to be an integral marketing partner for our team. They handled our website revamp, as well as have continued to work with us to optimize our SEO, create campaigns, and evaluate our lead volume. 
                                </p>
                                <h3 class="title">Banumathi</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Item> 
        </Carousel>       
    </div>
  )
}

export default Testimonial