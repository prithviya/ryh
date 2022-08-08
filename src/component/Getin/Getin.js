import React from 'react';
import Images from '../../constants/asset';

function Getin() {
  return (
    <div>
         <div className='cust-conts-section pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center'>Our <span>Contact</span> Us</h1>
                    </div>
                    <div className='col-md-7 p-4    '>
                        <h1 className=''>We can solve
your business problems</h1>
                        <img src={ Images.GETIN_SECTION } style={{ width:'100%' }}/>
                    </div>
                    <div className='col-md-5'>
                        <form id="form">     
                            <h4 className='pb-2 pt-2'>
                            Leave a request
and our specialist will contact
you within 15 minutes
                            </h4>               
                            <div class="input-box active">
                                <label class="input-label">Name</label>
                                <input type="text" class="input-1" onfocus="setFocus(true)" onblur="setFocus(false)" />
                            </div>
                            <div class="input-box active">
                                <label class="input-label">Email</label>
                                <input type="email" class="input-1" onfocus="setFocus(true)" onblur="setFocus(false)" />
                            </div>
                            <div class="input-box active">
                                <label class="input-label">Phone Number</label>
                                <input type="tel"  class="input-1" onfocus="setFocus(true)" onblur="setFocus(false)" />
                            </div>
                            <div class="textarea active">
                                <label class="input-label">Message</label>
                                <textarea rows = "5" cols = "50" class="input-1" onfocus="setFocus(true)" onblur="setFocus(false)" />
                            </div>
                            
                            <button style={{ width: '100%' }}>
                                <span class="shadow"></span>
                                <span class="edge"></span>
                                <span class="front text"> Get a Free Consultation
                                </span>
                            </button>
                            <div class="clear"></div>
                        </form>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Getin