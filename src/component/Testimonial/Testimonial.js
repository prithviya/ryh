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
    <div className='pb-5'>
        <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay autoPlaySpeed={9999} >
            <Item className=''>
                <section class="testimonial">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block">
                                <ol class="carousel-indicators tabs">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                                        <figure>
                                            <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png" class="img-fluid" alt=""/>
                                        </figure>
                                    </li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1">
                                        <figure>
                                            <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png" class="img-fluid" alt=""/>
                                        </figure>
                                    </li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2">
                                        <figure>
                                            <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png" class="img-fluid" alt=""/>
                                        </figure>
                                    </li>
                                </ol>
                            </div>
                            <div class="col-lg-6 d-flex justify-content-center align-items-center">
                                <div id="carouselExampleIndicators" data-interval="false" class="carousel slide" data-ride="carousel">
                                    <h3>WHAT OUR CLIENTS SAY</h3>
                                    <h1>TESTIMONIALS</h1>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="quote-wrapper">
                                                <p>
                                                I am absolutely satisfied with the project we have done with The RYH team. Professional developers, decent project manager and passioned marketing team
                                                </p>
                                                <h3>Prem Charan</h3>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Item> 
            <Item className=''>
                <section class="testimonial">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block">
                                <ol class="carousel-indicators tabs">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                                        <figure>
                                            <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png" class="img-fluid" alt=""/>
                                        </figure>
                                    </li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1">
                                        <figure>
                                            <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png" class="img-fluid" alt=""/>
                                        </figure>
                                    </li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2">
                                        <figure>
                                            <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png" class="img-fluid" alt=""/>
                                        </figure>
                                    </li>
                                </ol>
                            </div>
                            <div class="col-lg-6 d-flex justify-content-center align-items-center">
                                <div id="carouselExampleIndicators" data-interval="false" class="carousel slide" data-ride="carousel">
                                    <h3>WHAT OUR CLIENTS SAY</h3>
                                    <h1>TESTIMONIALS</h1>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="quote-wrapper">
                                                <p>
                                                Working with The Rank you Higher is a real pleasure.All their team members are friendly, professional and detail-oriented.A real treat!
                                                </p>
                                                <h3>SenthilKumar</h3>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Item> 
            <Item className=''>
                <section class="testimonial">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block">
                                <ol class="carousel-indicators tabs">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                                        <figure>
                                            <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png" class="img-fluid" alt=""/>
                                        </figure>
                                    </li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1">
                                        <figure>
                                            <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png" class="img-fluid" alt=""/>
                                        </figure>
                                    </li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2">
                                        <figure>
                                            <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png" class="img-fluid" alt=""/>
                                        </figure>
                                    </li>
                                </ol>
                            </div>
                            <div class="col-lg-6 d-flex justify-content-center align-items-center">
                                <div id="carouselExampleIndicators" data-interval="false" class="carousel slide" data-ride="carousel">
                                    <h3>WHAT OUR CLIENTS SAY</h3>
                                    <h1>TESTIMONIALS</h1>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="quote-wrapper">
                                                <p>
                                                We chose The Rank you Higher to become our official partner and developer of our mobile strategy due to their professional and expert approach to work. It takes a lot of dedication and effort to work with company like ours. Guys suggested the best solutions for our project and successfully implemented all our ideas.
                                                </p>
                                                <h3>Pradeep</h3>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Item> 
        </Carousel>       
    </div>
  )
}

export default Testimonial