import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./item";
// import './style.css';


function Ongoing() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 1 },
    ];
  return (
    <div>
        <div className='cust-ongoing-section pt-5 pb-5'>
            <div className='container'>
                <h1 className='text-center p-3 text-white'>On Going Projects</h1>
                <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay autoPlaySpeed={8000} >
                    <Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-7'>
                                <div className='content'>
                                    <div className='content-title'>
                                        <h3 className=' '>Company Name</h3>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-7'>
                                            <div className='mt-4'>                                                
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 my-2">
                                            <div class="ins-1">
                                                <div class="d-flex align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <h5>Company Logo</h5>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>
                                            <div class="ins-1">
                                                <div class="d-flex align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="d-flex align-items-center">
                                                            <i class="fa fa-arrow-up"></i><span>200</span>
                                                                Lorem ipsum dolor
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>
                                            <div class="ins-1">
                                                <div class="d-flex align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="d-flex align-items-center">
                                                            <i class="fa fa-arrow-up"></i><span>200</span>
                                                                Lorem ipsum dolor
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>                                    
                                        </div>                                 
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='custom-bg'>
                                    <h2 className='text-bold p-3'> Lorem Ipsum :</h2>
                                    <ul>
                                        <li>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do .
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do .
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do .
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do .
                                            </p>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Item>
                    <Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-7'>
                                <div className='content'>
                                    <div className='content-title'>
                                        <h3>Company Name</h3>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-7'>
                                            <div className='mt-4'>
                                                
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 my-2">
                                            <div class="ins-1">
                                                <div class="d-flex align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <h5>Company Logo</h5>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>
                                            <div class="ins-1">
                                                <div class="d-flex align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="d-flex align-items-center">
                                                            <i class="fa fa-arrow-up"></i><span>200</span>
                                                                Lorem ipsum dolor
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>
                                            <div class="ins-1">
                                                <div class="d-flex align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="d-flex align-items-center">
                                                            <i class="fa fa-arrow-up"></i><span>200</span>
                                                                Lorem ipsum dolor
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>                                    
                                        </div>                                 
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='custom-bg1'>
                                    <h2 className='text-bold p-3'> Lorem Ipsum :</h2>
                                    <ul>
                                        <li>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do .
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do .
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do .
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do .
                                            </p>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Item>
                    <Item className='mb-3 pt-3'>
                        <div className='row m-2'>
                            <div className='col-md-7'>
                                <div className='content'>
                                    <div className='content-title'>
                                        <h3>Company Name</h3>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-7'>
                                            <div className='mt-4'>
                                                
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 my-2">
                                            <div class="ins-1">
                                                <div class="d-flex align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <h5>Company Logo</h5>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>
                                            <div class="ins-1">
                                                <div class="d-flex align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="d-flex align-items-center">
                                                            <i class="fa fa-arrow-up"></i><span>200</span>
                                                                Lorem ipsum dolor
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>
                                            <div class="ins-1">
                                                <div class="d-flex align-items-center">
                                                    <div class="title-box">
                                                        <p class="mb-0">
                                                            <p class="d-flex align-items-center">
                                                            <i class="fa fa-arrow-up"></i><span>200</span>
                                                                Lorem ipsum dolor
                                                            </p>
                                                        </p>
                                                    </div>            
                                                </div>
                                            </div>                                    
                                        </div>                                 
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='custom-bg'>
                                    <h2 className='text-bold p-3'> Lorem Ipsum :</h2>
                                    <ul>
                                        <li>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do .
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do .
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do .
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do .
                                            </p>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Item>          
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Ongoing