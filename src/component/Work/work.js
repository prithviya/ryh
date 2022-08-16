import React from 'react';
import './style.css';
import Images from "../../constants/asset";


export default function work() {
  return (
    <div>
        <div className='cust-work-section pt-5 pb-5'>
            <h1 className='text-center'>
                Our <span>Digital Marketing</span> Services
            </h1>
            <p className='text-center p-2'>
                We aim at creating brand awareness, initiate and encourage consumer <br/>interactions and also look after the reputation management
            </p>
            <div class="services">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card card3">
                                <a href="#" class="">
                                    <div className='custom-align-center'>
                                        <span class="card-icon-top  vfi vfi-permis-animal-chien text-center" aria-hidden="true">
                                            <img src= { Images.SEO_ICON } alt="APP_ICON" className='mt-3' style={{width:'64px'}}/>
                                        </span>
                                    </div>
                                    
                                    <div class="card-body">
                                        <span class="card-title text-center">SEO</span>
                                        <p class="card-text text-justify mb-4">
                                        An average user sees more than 1000 ads every day. With the help of good SEO strategists we optimize Search engines and amplify them across various channels to attain higher visibility and receive a steady stream of traffic searching making your brand.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card card3">
                                <a href="#" class="">
                                    <div className='custom-align-center'>
                                        <span class="card-icon-top  vfi vfi-permis-animal-chien text-center" aria-hidden="true">
                                            <img src= { Images.BRAND_ICON } alt="APP_ICON" className='mt-3'/>
                                        </span>
                                    </div>
                                    
                                    <div class="card-body">
                                        <span class="card-title text-center">Branding</span>
                                        <p class="card-text text-justify mb-4">
                                            A great brand is one that understands who its target audience is, how they think, what they need, and how they spend their time on digital platforms. So we recognize your target audience and work towards it to make your business into a Brand. 
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card card3">
                                <a href="#" class="">
                                    <div className='custom-align-center'>
                                        <span class="card-icon-top  vfi vfi-permis-animal-chien text-center" aria-hidden="true">
                                            <img src= { Images.SMM_ICON } alt="APP_ICON" className='mt-3'/>
                                        </span>
                                    </div>
                                    <div class="card-body">
                                        <span class="card-title text-center">SMM</span>
                                        <p class="card-text text-justify mb-4">
                                            To build an appealing presence in social media, we provide a four-stage process by understanding the audience through various listening tools; building your brand story to create customized solutions, and continuously tracking the results.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card card3">
                                <a href="#" class="">
                                    <div className='custom-align-center'>
                                        <span class="card-icon-top  vfi vfi-permis-animal-chien text-center" aria-hidden="true">
                                            <img src= { Images.SEM_ICON } alt="APP_ICON" className='mt-3'/>
                                        </span>
                                    </div>
                                    
                                    <div class="card-body">
                                        <span class="card-title text-center">SEM</span>
                                        <p class="card-text text-justify mb-4">
                                        We identify and capture the attention of potential customers at the very beginning of their search journey by identifying best-suited channels and setting optimal budgets and providing maximum results.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card card3">
                                <a href="#" class="">
                                    <div className='custom-align-center'>
                                        <span class="card-icon-top  vfi vfi-permis-animal-chien text-center" aria-hidden="true">
                                            <img src= { Images.APP_ICON } alt="APP_ICON" className='mt-3'/>
                                        </span>
                                    </div>
                                    
                                    <div class="card-body">
                                        <span class="card-title text-center">Website Development</span>
                                        <p class="card-text text-justify mb-4">
                                        We design websites that are creative, mobile responsive, lag-free, eye-catching, and SEO friendly. We also provide custom mobile web design services in Coimbatore at an affordable cost. 
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card card3">
                                <a href="#" class="">
                                   <div className='custom-align-center'>
                                        <span class="card-icon-top  vfi vfi-permis-animal-chien text-center" aria-hidden="true">
                                            <img src= { Images.MOB_ICON } alt="MOB_ICON" className='mt-3'/>
                                        </span>
                                   </div>
                                    <div class="card-body">
                                        <span class="card-title text-center">App Development</span>
                                        <p class="card-text text-justify mb-4">
                                        To create a fast and smooth app for any platform, we also deliver products with an outsourcing app development model. This model gives a reasonable solution to control the budget and other resources.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-12 custom-align-center'>
                            <a href='http://showcase.rankuhigher.in/' target={'_blank'}>
                                <button>
                                    <span class="shadow"></span>
                                    <span class="edge"></span>
                                    <span class="front text"> Show Case
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
