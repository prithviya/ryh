import React from 'react';
import Images from '../../constants/asset';
import Carousel from 'react-bootstrap/Carousel';
    
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
                                <img src={ Images.AIC } width='100%'/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.ANGLOFONE }/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.FLUID }/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.RGI }/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.VINAYAKA }/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.SR }/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.DHANVANTRI }/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.MCET }/>
                            </figures>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='brand-boxes'>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.HAD } width='100%'/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.RPSC }/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.KARMA }/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.PEPER }/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.REGEN }/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.CNG }/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.DHANA }/>
                            </figures>
                        </div>
                        <div className='brand-box'>
                            <figures>
                                <img src={ Images.V2S }/>
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