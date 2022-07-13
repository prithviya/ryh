import React from 'react';
import Image from '../constants/asset';

function Landing() {
  return (
    <div>
        
        <div className='container'>
            <div className='mt-5 mb-5'>
                <div className='row custom-about'>
                    <div className='col-md-4'>
                        <h1 className=''>About Us</h1>
                    </div>
                    <div className='col-md-8'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
                <div className='cust-content-container'>
                    <h1 className=''>Brochure</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                    <button>
                        <span>download</span>
                    </button>
                </div>
                
            </div>
            
        </div>
        <div className='cust-ser-section'>
            <div className='container'>
                <h1 className='text-center'>Our Services</h1>
                <p className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                </p>
                <div className='row mt-5'>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="single_feature">
                            <div class="feature_icon"><i class="far fa-heart"></i></div>
                            <h3>Services</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.</p>  
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="single_feature">
                            <div class="feature_icon"><i class="far fa-heart"></i></div>
                            <h3>services 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.</p>  
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="single_feature">
                            <div class="feature_icon"><i class="far fa-heart"></i></div>
                            <h3>Services</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.</p>  
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="single_feature">
                            <div class="feature_icon"><i class="far fa-heart"></i></div>
                            <h3>services 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.</p>  
                        </div>
                    </div>
                </div>  
            </div>            
        </div>
        <div className='cust-cont-section pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-white text-center'>Get In Touch</h1>
                    </div>
                    <div className='col-md-5'>
                        <form id="form">                    
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
                                <input type="text" class="input-1" onfocus="setFocus(true)" onblur="setFocus(false)" />
                            </div>
                            <div class="textarea active">
                                <label class="input-label">Message</label>
                                <textarea rows = "5" cols = "50" class="input-1" onfocus="setFocus(true)" onblur="setFocus(false)" />
                            </div>
                            
                            <button>
                                <span>Submit</span>
                            </button>
                            <div class="clear"></div>
                        </form>
                    </div>
                    <div className='col-md-7'></div>
                </div>
                
            </div>
        </div>
        <div className='cust-price-section pt-5 pb-5'>
            <h1 className='text-center'>Our Price </h1>
            <div className='container'>
                <div class="row flex-items-xs-middle flex-items-xs-center">

                {/* <!-- Table #1  --> */}
                <div class="col-xs-12 col-lg-4 mb-3">
                    <div class="card text-xs-center">
                        <div class="card-header">
                        <h4 class="card-title p-2 mb-0"> 
                            Basic Plan
                        </h4>
                        </div>
                        <div class="card-block">  
                            <ul>
                                <li><i class="fa fa-check" aria-hidden="true"></i>Ultimate Features</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i>Responsive Ready</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i>Visual Composer Included</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i>24/7 Support System</li>
                            </ul>                 
                            
                            <div className='pb-3 custom-align-center'>
                                <button>
                                    <span>View More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Table #1  --> */}
                <div class="col-xs-12 col-lg-4 mb-3">
                    <div class="card text-xs-center">
                        <div class="card-header">
                        <h4 class="card-title p-2 mb-0"> 
                            Regular Plan
                        </h4>
                        </div>
                        <div class="card-block">  
                            <ul>
                                <li><i class="fa fa-check" aria-hidden="true"></i>Ultimate Features</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i>Responsive Ready</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i>Visual Composer Included</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i>24/7 Support System</li>
                            </ul>                 
                            
                            <div className='pb-3 custom-align-center'>
                                <button>
                                    <span>View More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Table #1  --> */}
                <div class="col-xs-12 col-lg-4 mb-3">
                    <div class="card text-xs-center">
                        <div class="card-header">
                        <h4 class="card-title p-2 mb-0"> 
                            Premium Plan
                        </h4>
                        </div>
                        <div class="card-block">  
                            <ul>
                                <li><i class="fa fa-check" aria-hidden="true"></i>Ultimate Features</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i>Responsive Ready</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i>Visual Composer Included</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i>24/7 Support System</li>
                            </ul>                 
                            
                            <div className='pb-3 custom-align-center'>
                                <button>
                                    <span>View More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
        <div className='cust-vision-section'>
            <h1 className='text-center'>Our Objectives</h1>
            <div className='container'>
                <main>
                    <section id="cards">
                        <div class="container py-2">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 mb-4 pt-5">
                                    <div class="card border-0">
                                        <div class="card-body pt-5">
                                            <div class="user-picture">
                                                <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                                            </div>
                                            <div class="user-content">
                                                <h5 class="text-capitalize user-name">Vision</h5>
                                                
                                                <p class="small mb-0 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                                                    quia commodi.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-4 pt-5">
                                    <div class="card border-0">
                                        <div class="card-body pt-5">
                                            <div class="user-picture">
                                                <img src="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                                            </div>
                                            <div class="user-content">
                                                <h5 class="text-capitalize user-name">Mission</h5>
                                                
                                                <p class="small mb-0 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                                                    quia commodi.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-4 pt-5">
                                    <div class="card shadow-sm border-0">
                                        <div class="card-body pt-5">
                                            <div class="user-picture">
                                                <img src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                                            </div>
                                            <div class="user-content">
                                                <h5 class="text-capitalize user-name">Goal</h5>
                                                
                                                <p class="small mb-0 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                                                    quia commodi.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
        <div className='cust-work-section pt-5 bg-light'>
            <h1 className='text-center'>WorkFlow</h1>
            <div class="services">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="services-box">
                            <span class="icon"><i class="fa fa-anchor"></i></span>
                            <div class="service-content">
                                <h4>Clean Design</h4>
                                <p>
                                    Quisque sagittis lacus eu lorem sodales, id vulputate velit adipiscing. Aenean adipiscing, sem sit amet.
                                </p>
                            </div>
                        </div>
                        
                        <div class="services-box">
                            <span class="icon"><i class="fa fa-rocket"></i></span>
                            <div class="service-content">
                                <h4>Easy Parallax</h4>
                                <p>
                                    Quisque sagittis lacus eu lorem sodales, id vulputate velit adipiscing. Aenean adipiscing, sem sit amet.
                                </p>
                            </div>
                        </div>
                        {/* <div class="services-box">
                            <span class="icon"><i class="fa fa-bell"></i></span>
                            <div class="service-content">
                                <h4>Advanced Features</h4>
                                <p>
                                    Quisque sagittis lacus eu lorem sodales, id vulputate velit adipiscing. Aenean adipiscing, sem sit amet.
                                </p>
                            </div>
                            </div> */}
                        </div>
                    
                    <div class="col-md-4 custom-align-center">
                        <img src={ Image.WORKFLOW_SECTION } width="100%"/>

                        {/* <img class="img-responsive" src="http://pdadb.net/img/gallery/big/apple_iphone_6_touchid_single_touch.png" alt="" /> */}
                    </div>
                    
                    <div class="col-md-4">
                            <div class="services-box">
                            <span class="icon"><i class="fa fa-laptop"></i></span>
                            <div class="service-content">
                                <h4>Responsive Layout</h4>
                                <p>
                                    Quisque sagittis lacus eu lorem sodales, id vulputate velit adipiscing. Aenean adipiscing, sem sit amet.
                                </p>
                            </div>
                            </div>
                        
                        {/* <div class="services-box">
                            <span class="icon"><i class="fa fa-book"></i></span>
                            <div class="service-content">
                                <h4>Advanced Features</h4>
                                <p>
                                    Quisque sagittis lacus eu lorem sodales, id vulputate velit adipiscing. Aenean adipiscing, sem sit amet.
                                </p>
                            </div>
                        </div> */}
                            <div class="services-box">
                            <span class="icon"><i class="fa fa-clock"></i></span>
                            <div class="service-content">
                                <h4>Advanced Features</h4>
                                <p>
                                    Quisque sagittis lacus eu lorem sodales, id vulputate velit adipiscing. Aenean adipiscing, sem sit amet.
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='cust-ongoing-section pt-5 pb-5'>
            <div className='container'>
                <h1 className='text-center p-3'>On Going Projects</h1>
                <div className='row'>
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
            </div>
        </div>
        <div className='cust-contact-section pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-white text-center'>Get In Touch</h1>
                    </div>                    
                    <div className='col-md-7'>
                        <h1 className='text-white'>Get In Touch</h1>
                        <h5 className='text-white'>
                            sLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </h5>
                    </div>
                    <div className='col-md-5'>
                        <form id="form">                    
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
                                <input type="text" class="input-1" onfocus="setFocus(true)" onblur="setFocus(false)" />
                            </div>
                            <div class="textarea active">
                                <label class="input-label">Message</label>
                                <textarea rows = "5" cols = "50" class="input-1" onfocus="setFocus(true)" onblur="setFocus(false)" />
                            </div>                            
                            <button>
                                <span>Submit</span>
                            </button>
                            <div class="clear"></div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='cust-testi-section bg-light pt-5 pb-6'>
            <h1 className='text-center'>Happy Clients</h1>
            <div className='container pt-4'>
                <div className='row'>
                    <div className='col-md-6'>
                    <div class="custom-blog">
                            <div class="options">
                                <span>
                                <h3 class="blog-title">Learn Microinteraction</h3>
                                </span>
                                <span class="blog-time">Monday Jan 20, 2020</span>
                            </div>                            
                            <p class="description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                            </p>                           
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="custom-blog">
                            <div class="options">
                                <span>
                                <h3 class="blog-title">Learn Microinteraction</h3>
                                </span>
                                <span class="blog-time">Monday Jan 20, 2020</span>
                            </div>                            
                            <p class="description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                            </p>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='custom-footer pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h4 className='text-white'>Address</h4>
                                <p className='text-white'>Rathinam Techzone Campus,</p>
                                <p className='text-white'>Eachanari.</p>
                            </div>
                            <div className='col-md-6'>
                                <h4 className='text-white'>Email</h4>
                                <p className='text-white'>
                                    <a class="text-white" href="#">
                                        ryh.digitalservices@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div className='col-md-6'>
                                <h4 className='text-white'>Phone Number</h4>
                                <p className='text-white'>
                                    <a class="text-white" href="#">
                                        +91 12345 67890
                                    </a>
                                </p>
                            </div>
                            <div className='col-md-6'>
                                <h4 className='text-white'>Working hours</h4>
                                <p className='text-white'>
                                    Mon - Sat: 9.00 to 18.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div>
                            <h4 className='text-white'>Location</h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31339.15477692542!2d76.98307996622313!3d10.933554920268104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x40c812a7d5394fdf!2sAIC%20RAISE%20Startup%20Incubation%20Center!5e0!3m2!1sen!2sin!4v1657705442925!5m2!1sen!2sin"  style={{width:"100%", height:"200px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    </div>
  )
}

export default Landing