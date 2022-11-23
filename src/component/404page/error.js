import React from 'react';
import './styles.css';


function error() {
  return (
    <div className='err-sect-bg' style={{paddingTop:"7rem"}}>
      <div className='container custom-banner-content'>            
        <div className='row'>
          <div className='col-md-7'>
              <h1 className='text-black'>Page Not Found</h1>
              <p className='text-black'>
              We're sorry, it looks like  the page you're looking for isn't in our system. Head back Home!
              </p>
              <a className='pt-5 text-black' style={{textDecoration:"none"}} href='#/'> back to home</a>
          </div>
          <div className='col-md-5'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default error