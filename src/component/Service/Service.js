import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./item";
import './style.css';


function Service() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 2 },
    ];
  return (
    <div className='pt-5 pb-5 container cust-sect-service'>
        <h1>Our Services</h1>
        <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay autoPlaySpeed={9000} >
          <Item className='mb-3'>
            <div className=''>
                <h3 className='demo1'>WebSite Promotion(SEO)</h3>
                <ul className='custom-list'>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Website Audit
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Competitor Analysis
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Keyword Research
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Technical Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        On Page Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Off Page SEO
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Local SEO
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Website Traffic Analytics
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Content Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Report Generation
                    </li>
                </ul>
            </div>
          </Item>
          <Item className='mb-3'>
            <div>
                <h3 className='demo1'>WebSite Promotion(SEO)</h3>
                 <ul className='custom-list'>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Website Audit
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Competitor Analysis
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Keyword Research
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Technical Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        On Page Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Off Page SEO
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Local SEO
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Website Traffic Analytics
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Content Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Report Generation
                    </li>
                </ul>
            </div>
          </Item>
          <Item className='mb-3'>
            <div className=''>
                <h3 className='demo1'>WebSite Promotion(SEO)</h3>
                 <ul className='custom-list'>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Website Audit
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Competitor Analysis
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Keyword Research
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Technical Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        On Page Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Off Page SEO
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Local SEO
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Website Traffic Analytics
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Content Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Report Generation
                    </li>
                </ul>
            </div>
          </Item>
          <Item className='mb-3'>
            <div>
                <h3 className='demo1'>WebSite Promotion(SEO)</h3>
                <ul className='custom-list'>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Website Audit
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Competitor Analysis
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Keyword Research
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Technical Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        On Page Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Off Page SEO
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Local SEO
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Website Traffic Analytics
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Content Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Report Generation
                    </li>
                </ul>
            </div>
          </Item>
          <Item className='mb-3'>
            <div>
                <h3 className='demo1'>WebSite Promotion(SEO)</h3>
                <ul className='custom-list'>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Website Audit
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Competitor Analysis
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Keyword Research
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Technical Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        On Page Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Off Page SEO
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Local SEO
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Website Traffic Analytics
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Content Optimization
                    </li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Report Generation
                    </li>
                </ul>
            </div>
          </Item>
        </Carousel>
    </div>
  )
}

export default Service