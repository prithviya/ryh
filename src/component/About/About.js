import React from 'react';
import MyPDF from '../../images/Brochure.pdf';
import './styles.css';
import Mission from '../../images/mission.png'
function About() {
  return (
    <div id='About-section'>
        <div className='container'>
            <div className='mt-5 mb-5'>
                <div className='row custom-about mb-5'>
                    <div className='col-md-3'>
                        <h1 className='text-center cust-title-abt'>We are Rank You Higher</h1>
                    </div>
                    <div className='col-md-8'>
                        <h1 className='text-center custom-font-abt'>The Best Digital Marketing Company in Coimbatore</h1>
                        <p className='pt-3'>
                        We offer a proven workflow and tested packages that suits best for all kinds of business. To deliver the best, we have to be better in the service we provide. In the current Digital World, the approximate number of websites now surpasses 1 billion. If you have an idea and want to bring the best out of it to rank you up in the digital space, we (rank you higher) will make it happen. A customized offering can be availed by the client at any time. RYH offers a proven workflow; techniques and test packages that best utilize digital marketing capabilities.
                        </p>
                    </div>
                </div>
                <div className='cust-content-container'>
                    <h1 className=''>Our<span> Mission</span></h1>
                    <div className='row'>
                        <div className='col-md-8'>
                            <p className='text-left pt-2'>
                                We're on a mission to become your digital media partner and create a long-term connection with you. A strong connection is essential for a long-lasting relationship. Knowing each other, developing a consistent strategy, comprehending your offerings, and becoming an important part of your marketing team, will assist us to coordinate our efforts in order to execute a successful digital marketing campaign.
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <figure className='custom-align-center'>
                                <img src={Mission} class="img-fluid" alt="" style={{ width:'100%' }}/>
                            </figure>
                        </div>
                    </div>      
                    <h4 className='text-center'>Download Our Brochure</h4>              
                    <a href={ MyPDF } download="Brochure.pdf" className='custom-align-center' style={{textDecoration:'none'}}>
                        <button className='text-center'>
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front text"> Download
                            </span>
                        </button>
                    </a>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default About