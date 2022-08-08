import React from 'react';
import Images from '../../constants/asset';

function Client() {
  return (
    <div className='container'>
        <div className='pt-5 pb-5 custom-sect-client cust-content-container'>
            <h1 className='text-center mb-4'> 
               Trusted
               <span> by leading brands </span>
               from <br/>around the world
            </h1>
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
                        <img src={ Images.SHELTERS }/>
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
        </div>
    </div>
  )
}

export default Client