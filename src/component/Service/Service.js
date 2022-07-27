import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./item";
import { FaCheck } from "react-icons/fa"; 
import './style.css';


function Service() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 3 },
        { width: 1300, itemsToShow: 3 },
    ];
  return (
    <div className='pt-5 pb-5 container cust-sect-service'>
        <h1 className='text-center'>Our Services</h1>
        <Carousel breakPoints={breakPoints} showArrows={true} enableAutoPlay autoPlaySpeed={9000} >
          <Item className='mb-3 mt-4'>
            <div className='custom-border m-1'>
                <h6 className='demo1'>WebSite Promotion(SEO)</h6>
                <p>
                <ul className='custom-list'>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Website Audit
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Competitor Analysis
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Keyword Research
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Technical Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        On Page Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Off Page SEO
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Local SEO
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Website Traffic Analytics
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Content Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Report Generation
                    </li>
                </ul>
                </p>
            </div>
          </Item>
          <Item className='mb-3 mt-4'>
            <div className='custom-border m-1'>
                <h3 className='demo1'>WebSite Promotion(SEO)</h3>
                 <ul className='custom-list'>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Website Audit
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Competitor Analysis
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Keyword Research
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Technical Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        On Page Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Off Page SEO
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Local SEO
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Website Traffic Analytics
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Content Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Report Generation
                    </li>
                </ul>
            </div>
          </Item>
          <Item className='mb-3 mt-4'>
            <div className='custom-border m-1'>
                <h3 className='demo1'>WebSite Promotion(SEO)</h3>
                 <ul className='custom-list'>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Website Audit
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Competitor Analysis
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Keyword Research
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Technical Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        On Page Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Off Page SEO
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Local SEO
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Website Traffic Analytics
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Content Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Report Generation
                    </li>
                </ul>
            </div>
          </Item>
          <Item className='mb-3 mt-4'>
            <div className='custom-border m-1'>
                <h3 className='demo1'>WebSite Promotion(SEO)</h3>
                <ul className='custom-list'>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Website Audit
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Competitor Analysis
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Keyword Research
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Technical Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        On Page Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Off Page SEO
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Local SEO
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Website Traffic Analytics
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Content Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Report Generation
                    </li>
                </ul>
            </div>
          </Item>
          <Item className='mb-3 mt-4'>
            <div className='custom-border m-2'>
                <h3 className='demo1'>WebSite Promotion(SEO)</h3>
                <ul className='custom-list'>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Website Audit
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Competitor Analysis
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Keyword Research
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Technical Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        On Page Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Off Page SEO
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Local SEO
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Website Traffic Analytics
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
                        Content Optimization
                    </li>
                    <li className='custom-list'>
                        <FaCheck className='custom-font-icon text-orange'/> 
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