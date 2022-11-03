import { useRef as UseRef, useState as UseSate } from "react";
import emailjs from 'emailjs-com';
import Images from '../../constants/asset';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Getin() {
  
    const formRef = UseRef();
    const [done, setDone] = UseSate(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tlos0wq', 'template_t2yuo7b', formRef.current, 'LroZ86Cu5qNvOjs1l')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div>
         <div className='cust-conts-section pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center'>Contact <span>Us</span></h1>
                    </div>
                    <div className='col-md-7 p-4    '>
                        <h1 className=''>We can solve
your business problems</h1>
                        <LazyLoadImage src={ Images.GETIN_SECTION } alt='getintouch'  loading="lazy" style={{ width:'100%' }}/>
                    </div>
                    <div className='col-md-5'>
                        <form id="form" ref={formRef} onSubmit={handleSubmit}>     
                            <h4 className='pb-2'>
                            Leave a request
and our specialist will contact
you within 15 minutes
                            </h4>               
                            <div className="input-box active">
                                <label className="input-label">Name</label>
                                <input type="text" className="input-1" onfocus="setFocus(true)" onblur="setFocus(false)" name="user_name" required/>
                            </div>
                            <div className="input-box active">
                                <label className="input-label">Email</label>
                                <input type="email" className="input-1" onfocus="setFocus(true)" onblur="setFocus(false)" name="user_email" required/>
                            </div>
                            <div className="input-box active">
                                <label className="input-label">Phone Number</label>
                                <input type="tel"  className="input-1" onfocus="setFocus(true)" onblur="setFocus(false)" name="user_mobile" pattern="[6789][0-9]{9}" required/>
                            </div>
                            <div className="textarea active">
                                <label className="input-label">Message</label>
                                <textarea rows = "5" cols = "50" className="input-1" onfocus="setFocus(true)" onblur="setFocus(false)" name="user_message"/>
                            </div>
                            
                            <button style={{ width: '100%' }} type="submit">
                                <span className="shadow"></span>
                                <span className="edge"></span>
                                <span className="front text"> Get a Free Consultation
                                </span>
                            </button>
                            <div className="clear">{done && <div style={{color: "#fd7e14", marginTop: "15px", fontSize: "18px", textAlign: "center"}}>Thank you</div>}</div>
                        </form>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Getin