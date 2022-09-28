import React from 'react';
import Images from '../../constants/asset';
import Carousel from 'react-bootstrap/Carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Client() {
  return (
    <div className='container mt-5'>
        <div className='pt-5 pb-5 custom-sect-client cust-content-container'>
            <h1 className='text-center mb-4'> 
              Few Trusted
               <span> by leading brands </span>
               from <br/>around the world
            </h1>
            <Carousel variant="dark" className='pb-4'>
                <Carousel.Item>
                    <div className='brand-boxes'>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.AIC } width='100%' alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.ANGLOFONE } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.FLUID } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.RGI } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='brand-boxes'>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.VINAYAKA } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.SR } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.DHANVANTRI } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.MCET } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='brand-boxes'>
                    <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.HAD } width='100%' alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.RPSC } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.KARMA } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.PEPER } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='brand-boxes'>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.REGEN } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.CNG } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.DHANA } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <LazyLoadImage src={ Images.V2S } alt='client_logo' loading="lazy"/>
                            </figures>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>            
        </div>
    </div>
  )
}

export default Client