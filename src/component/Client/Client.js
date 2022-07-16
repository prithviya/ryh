import React from 'react';
import Images from '../../constants/asset';

function Client() {
  return (
    <div>
        <div className='pt-5 pb-5 container'>
            <h1 className='text-center'> 
                Our Happy Clients
            </h1>
            <div className='row pt-5 text-center'>
                <div className='col-md-4 cust-card-border'>
                    <div className='custom-img'>
                        <img src={ Images.ANGLOFONE } style={{ width:'100%', height:'100%' }}/>
                    </div>                    
                </div>
                <div className='col-md-4 cust-card-border'>
                    <div className='custom-img'>
                        <img src={ Images.AIC } style={{ width:'100%', height:'100%' }}/>
                    </div>                    
                </div>
                <div className='col-md-4 cust-card-border'>
                    <div className='custom-img'>
                        <img src={ Images.FLUID } style={{ width:'100%', height:'100%' }}/>
                    </div>                    
                </div>
                <div className='col-md-4 cust-card-border'>
                    <div className='custom-img'>
                        <img src={ Images.AIC } style={{ width:'100%', height:'100%' }}/>
                    </div>                    
                </div>
                <div className='col-md-4 cust-card-border'>
                    <div className='custom-img'>
                        <img src={ Images.RGI } style={{ width:'100%', height:'100%' }}/>
                    </div>                    
                </div>
                <div className='col-md-4 cust-card-border'>
                    <div className='custom-img'>
                        <img src={ Images.ANGLOFONE } style={{ width:'100%', height:'100%' }}/>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client