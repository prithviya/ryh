import React from 'react';
import './style.css';
import { FaCheck, FaTimes } from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Images from '../../constants/asset';

function Service() {
  return (
    <div>
        <div className='pt-5 pb-5 container cust-sect-service'>
          <div className='container'>
            <h1 className='text-center pb-5'>Search Engine <span>Optimization</span></h1>
            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                <b><h3>Overview of SEO</h3></b>
                <p className='text-justify'>
                  SEO stands for Search Engine Optimization. The method used to rank a website or any content higher in the search engine result pages is termed as Search Engine Optimization. SEO is the process of magnifying both the quality and the quantity of traffic to a website or a webpage. Search Engine Optimization involves organic traffic. Organic traffic is traffic that is generated naturally, without any form of payment. 
                </p>
                <p className='text-justify'>
                The intention of performing SEO is for the website to gain more visibility and thereby, traffic. On ranking higher in the search engine result pages, the particular website will see an increased number of visitors, who are transformed into customers. Performing SEO for a website is the first and most significant step to bringing more eyeballs to it. There are various sub-categories in SEO, in which each one adds to bringing more traffic to the website.
                </p>
              </div>
              <div className='col-md-6 col-sm-12 custom-align-center'>
                <img className='' src={Images.SEO_OVERVIEW} alt='overviewofSEOimg'/>
              </div>
              {/* seo audit */}
              <div className='col-md-6 col-sm-12 custom-align-center'>
                <img className='text-center align-center' src={Images.SEO_AUDIT} alt='overviewofSEOauditimg'/>
              </div>
              <div className='col-md-6 col-sm-12'>
                <h4>Overview of Technical SEO Audit</h4>
                <p className='text-justify'>
                  SEO is performed for the sole purpose of ranking a website higher on the search engine result pages page. To ensure that this purpose is achieved it is important to ensure that the SEO strategies employed are flawless. Casting a keen eye over the technical SEO strategies is equally important, to have the website ranked at the top in the search engine result pages page. This is where a technical SEO audit plays a crucial role. 
                </p>
                <p className='text-justify'>
                  A technical SEO audit is a procedure that examines the many technical parts of the website. This technical SEO audit is carried out to ensure that the technical parts of the website that impact the search result rankings are doing good. This is done to identify any unseen technical issues that may be causing a poor user experience. Hence, a technical SEO audit is greatly useful for finding and resolving technical issues on a website.
                </p>
              </div>
              {/* keyword research */}
              <div className='col-md-6 col-sm-12'>
                <b><h3>Overview of Keyword Research</h3></b>
                <p className='text-justify'>
                  If there is something unwn to you, your instant move would be to search for it on Google. These searches aret simply words, they are what a large number of people do online daily. These words, which are more properly termed keywords play a major role in lifting a website’s position.       Keyword research refers to a process of identifying the words used by your target audience in search engines for finding websites like yours. 
                </p>
                <p className='text-justify'>
                Keyword research is done using keyword research tools. Keyword research breaks down the searches made by your target audience by giving you information like the most and least searched keywords and the number of people doing it. With the data obtained from the keyword research tools, it becomes possible to utilize it to make the pages of your website appear in the search engine result pages when your target audience searches for terms relating to your website.
                </p>
              </div>
              <div className='col-md-6 col-sm-12 custom-align-center'>
                <img className='text-center align-center' src={Images.SEO_KEYWORD} alt='SEO_Keywordimg'/>
              </div>
              {/* content development */}
              <div className='col-md-6 col-sm-12 custom-align-center'>
                <img className='text-center align-center' src={Images.SEO_CONTENT} alt='SEOcontentdevelopment'/>
              </div>
              <div className='col-md-6 col-sm-12'>
                <h4>Overview of Content Development</h4>
                <p className='text-justify'>
                  Content development is the process of researching, collecting information about a specific topic, and writing about it for publication. In order to rank higher in search engine result pages it is important to producet simply content, but content of fine quality. Quality content on a page is what captures the eye and is a significant factor inmaking web pages rank at the top of the search engine result pages. Content development plays a major part in bringing traffic to your website organically.  
                </p>
                <p className='text-justify'>
                    Doing proper research about a topic, developing content on it, using relevant images, and also using the data obtained from the keyword research and using the keywords in the content is the procedure of developing quality content.The quality content developed helps in ranking your website higher on the search engine result pages page, thereby, attracting a larger audience to your website.
                </p>
              </div>
              {/* On-Page SEO */}
              <div className='col-md-6 col-sm-12'>
                <b><h3>Overview of On-Page SEO</h3></b>
                <p className='text-justify'>
                  On-page SEO is the practice of creating quality content on your website to magnify your website’s ranking. On-page SEO involves making your website and its web pages keyword-optimized. This is done by including keywords in your web pages, blog content, and titles. Writing and posting relevant and good-quality content which is keyword-enriched also contributes to the website’s or web page’s ranking. In simpler terms, on-page SEO is the optimization that is done on your website or its pages. 
                </p>
                <p className='text-justify'>
                Any form of content on the website, which has a sufficient number of keywords, is highly relevant to the subject, and gives an in-depth idea is considered to be of the finest quality. Web pages with such types of content are the ones that are ranked at the top positions on search engine result pages page. Hence, on-page SEO is one way to boost your website’s position in the search engine result pages.
                </p>
              </div>
              <div className='col-md-6 col-sm-12 custom-align-center'>
                <img className='text-center align-center' src={Images.SEO_ONPAGE} alt='SEOonpage'/>
              </div>
              {/* Off-Page SEO */}
              <div className='col-md-6 col-sm-12 custom-align-center'>
                <img className='text-center align-center' src={Images.SEO_OFFPAGE} alt='SEOoffpage'/>
              </div>
              <div className='col-md-6 col-sm-12'>
                <h4>Overview of Off-Page SEO</h4>
                <p className='text-justify'>
                  Off-page SEO is the optimization of your website, which is done outside of it.Building backlinks is the most sought-after way to perform off-page SEO. A backlink is a link to your website (or a webpage in it) which is found on a different website. They are links on a page from one website to ther.   The purpose is to bring traffic to your website from users who visit a different website. 
                </p>
                <p className='text-justify'>
                This makes it possible for users to navigate to your website by clicking on the backlink given to it. Though backlinks require a good deal of work to be done, it is great for producing desired results. Hence, off-page SEO helps in driving traffic to your website.
                </p>
              </div>
              {/* Local SEO */}
              <div className='col-md-6 col-sm-12'>
                <b><h3>Overview of Local SEO</h3></b>
                <p className='text-justify'>
                  Local SEO is a search engine optimization technique that increases the visibility of your business in the local search results. Local SEO can be beneficial to businesses with a physical location. Individuals searching on search engines about some particular types of businesses require results from their location or in the vicinity. 
                </p>
                <p>
                Such search results come in handy to people, when they are seeking businesses that are nearby. Local SEO is a way of making your business appear on organic search engine result pages
                </p>
              </div>
              <div className='col-md-6 col-sm-12 custom-align-center'>
                <img className='text-center align-center' src={Images.SEO_LOCAL} alt='SEOLocal'/>
              </div>
              {/* SEO Reporting */}
              <div className='col-md-6 col-sm-12 custom-align-center'>
                <img className='text-center align-center' src={Images.SEO_REPORT} alt='SEOLocal'/>
              </div>
              <div className='col-md-6 col-sm-12'>
                <h4>Overview of SEO Reporting and Analysis</h4>
                <p className='text-justify'>
                  An SEO report is a brief presentation of the SEO metrics that show how a website is performing. An SEO report is customized according to what your goals are, it may include website traffic, backlinks, conversions, etc. The main purpose of an SEO report is to show how a certain strategy is working and the results it has brought. 
                </p>
                <p className='text-justify'>
                  An SEO report is to give a brief explanation of how the strategies and the methods applied have contributed to progress, what didt turn out as expected, the results obtained, and what is to be done for further progression. An SEO report is quite helpful, as it places the facts in an organized manner, which helps strategists, as well as businesses, understand the improvement that has been done and the areas to be rectified for more growth.  
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* prices */}
        <div className='pt-5 pb-5 container cust-sect-service'>
          <div className='container'>
            <h1 className='text-center pb-5'>Lorem Ipsum <span>dolor sit amet</span></h1>
            <Table class="table table-bordered"  responsive='md' style={{textAlign:"center",paddingLeft:"200px", paddingRight:"200px"}}>
              <thead>
                <tr class="active">
                  <th width="300" style={{background:"#fff"}}><center></center></th>
                  <th width="200"><center><h3>Basic</h3><p class="text-muted text-sm">Ideal for small operations.</p></center></th>
                  <th width="200"><center><h3>Plus</h3><p class="text-muted text-sm">Perfect for larger operations.</p></center></th>
                  <th width="200"><center><h3>Super</h3><p class="text-muted text-sm">Perfect for those who want software.</p></center></th>
                </tr>
              </thead>
              <tbody> 
                <tr>
                  <td>Deliverables Lorem Ipsum dolor sit amet</td>
                  <td><h3 class="panel-title price">$399</h3></td>
                  <td><h3 class="panel-title price">$699</h3></td>
                  <td><h3 class="panel-title price">$799</h3></td>
                </tr>               
              </tbody>
            </Table>
            <Accordion defaultActiveKey={['1']} alwaysOpen>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Initial Review & Analysis</Accordion.Header>
                <Accordion.Body>
                  <Table className='table table-bordered' responsive='md' style={{textAlign:"center",paddingLeft:"200px", paddingRight:"200px"}}>
                    <tbody>
                      <tr>
                        <td width="300">-</td>
                        <td width="200">5 Keywords - 6 Months</td>
                        <td width="200">15 Keywords - 6 Months</td>
                        <td width="200" rowSpan={11} style={{verticalAlign : "middle",textAlign:"center"}}>Customized performance marketing pack</td>
                      </tr>
                      <tr className=''>
                        <td className='text-left'>In-Depth Site Analysis</td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                        
                      </tr>
                      <tr className=''>
                        <td className='text-left'>Content Duplicacy Check - Mirror Site</td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td className='text-left'>Initial Ranking Report</td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td className='text-left'>Keyword Research & Selection</td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td className='text-left'>Keyword Research & Selection - All Individual Pages</td>
                        <td><FaTimes className='custom-font-icon text-orange'/></td>
                        <td>Max 10 Pages</td>
                      </tr>
                      <tr className=''>
                        <td className='text-left'>Competition Analysis</td>
                        <td>Max 3 Websites</td>
                        <td>Max 10 Websites</td>
                      </tr>
                      <tr className=''>
                        <td className='text-left'>Backlink Analysis</td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td className='text-left'>Google Penalty Check</td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td className='text-left'>Technical Advice on Website</td>
                        <td><FaTimes className='custom-font-icon text-orange'/></td>
                        <td><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                    </tbody>
                  </Table>               
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>On Page Optimization</Accordion.Header>
                <Accordion.Body>
                  <Table responsive='md'>
                    <tbody>
                      <tr className=''>
                        <td width="300" className=''>On page SEO - Pages</td>
                        <td width="200" className='text-center'>Top 5 Pages</td>
                        <td width="200" className='text-center'>Top 15 Pages</td>
                        <td width="200" rowSpan={19} className='text-center' style={{verticalAlign : "middle",textAlign:"center"}}>Customized performance marketing pack</td>
                      </tr>
                      <tr className=''>
                        <td className=''>Cnicalization</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Header (H1) Tags Optimization</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/>5 Pages</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/>15 Pages</td>
                      </tr>
                      <tr className=''>
                        <td>Internal Link Structuring & Optimization</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Existing Content Optimization</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Robots.Txt Creation/Analysis</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Xml Sitemap/Analysis</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Google Webmaster Tools Set Up (ift set up)</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Google Analytics Set Up (ift setup)</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Google Tag Manager</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/> - Basic Tracking (Email & Contact clicks)</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/> - Advanced Tracking</td>
                      </tr>
                      <tr className=''>
                        <td>Page Speed Optimization Analysis</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Google Analytics setup with conversion tracking</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Title & Meta Tags Optimization</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/> 5 Pages</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/> 15 Pages</td>
                      </tr>
                      <tr className=''>
                        <td>Image & Hyperlink Optimization</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Bing Webmaster Tools Set Up (ift set up)</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                      <tr className=''>
                        <td>HTML Site Map Creation</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Check Mobility Issues</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Custom 404 Page Analysis</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>URL Structure Analysis</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Local Search Optimization</Accordion.Header>
                <Accordion.Body>
                  <Table responsive='md'>
                    <tbody>
                      <tr className=''>
                        <td width="300" className=''>Google Business Profile Setup & Verification</td>
                        <td width="200" className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td width="200" className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td width="200" rowSpan={3} className='text-center' style={{verticalAlign : "middle",textAlign:"center"}}>Customized performance marketing pack</td>
                      </tr>
                      <tr className=''>
                        <td className=''>Product / Services listing</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Bing Local Listing Setup</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Off Page + Content Marketing</Accordion.Header>
                <Accordion.Body>
                  <Table responsive='md'>
                    <tbody>
                      <tr className=''>
                        <td width="300" className=''>Official Blog SetUp (Wordpress)</td>
                        <td width="200" className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td width="200" className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td width="200" rowSpan={10} className='text-center' style={{verticalAlign : "middle",textAlign:"center"}}>Customized performance marketing pack</td>
                      </tr>
                      <tr className=''>
                        <td className=''>Informational Article Writing</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/>No Informational Article</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                      <tr className=''>
                        <td>Informational Article Submission</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Guest Blog Post Writing</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                      <tr className=''>
                        <td>Guest Blog Posting </td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Social Bookmarking </td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                      <tr className=''>
                        <td>Web 2.0 Submission (Blog)</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Infographic Design & Submission (6 months)</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                      <tr className=''>
                        <td>Blog Commenting</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/>Yes Blog Commenting</td>
                      </tr>
                      <tr className=''>
                        <td>Video Creation</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Social Media Optimization</Accordion.Header>
                <Accordion.Body>
                  <Table responsive='md'>
                    <tbody>
                      <tr className=''>
                        <td width="300" className=''>Facebook & Twitter Account Setup </td>
                        <td width="200" className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td width="200" className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td width="200" rowSpan={18} className='text-center' style={{verticalAlign : "middle",textAlign:"center"}}>Customized performance marketing pack</td>
                      </tr>
                      <tr className=''>
                        <td className=''>Facebook cover Page Design </td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                      <tr className=''>
                        <td>Profile Content Writing</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Facebook Wall Updates</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                      <tr className=''>
                        <td>Google + Update</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/>No Google and Update</td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Facebook Timeline Design (6 Months)</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                      <tr className=''>
                        <td>Video Creation (6 Months)</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                      <tr className=''>
                        <td>Video Submission</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/>Yes Video Submission</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Monthly Reporting</Accordion.Header>
                <Accordion.Body>
                  <Table responsive='md'>
                    <tbody>
                      <tr className=''>
                        <td width="300" className=''>Search Engine Rank Report </td>
                        <td width="200" className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td width="200" className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td width="200" rowSpan={7} className='text-center' style={{verticalAlign : "middle",textAlign:"center"}}>Customized performance marketing pack</td>
                      </tr>
                      <tr className=''>
                        <td className=''>SEO Reports</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                      <tr className=''>
                        <td>Google Analytics Report</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                      </tr>
                      <tr className=''>
                        <td>Activity Report</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/> No Activity Report</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                      <tr className=''>
                        <td>Monthly Action Plan</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/>Yes Monthly Activity Plan</td>
                      </tr>                      
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Customer Support </Accordion.Header>
                <Accordion.Body>
                  <Table responsive='md'>
                    <tbody>
                      <tr className=''>
                        <td width="300" className=''>Email/Chat/Online</td>
                        <td width="200" className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td width="200" className='text-center'><FaCheck className='custom-font-icon text-green'/></td>
                        <td width="200" rowSpan={3} className='text-center' style={{verticalAlign : "middle",textAlign:"center"}}>Customized performance marketing pack</td>
                      </tr>
                      <tr className=''>
                        <td className=''>24/7 Live Project Tracking</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/> No Project Tracking</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                      </tr>
                      <tr className=''>
                        <td>Skype Meeting /<br/> Review Meeting on Call (6 Months)</td>
                        <td className='text-center'><FaTimes className='custom-font-icon text-orange'/></td>
                        <td className='text-center'><FaCheck className='custom-font-icon text-green'/>Yes, Skype /
Review Meeting on Call</td>
                      </tr>                     
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className='pt-5 pb-5 container cust-sect-service'>
          <div className='container'>
            <h1 className='text-center pb-5'>Lorem Ipsum <span>dolor sit amet</span></h1>
            <div className='row'>
              <div className='col-md-8 col-sm-12'>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quisstrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatatn proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quisstrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatatn proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className='col-md-4 col-sm-12'>
                <img className='' src={Images.FAQ} alt='overviewofSEOimg'/>
              </div>
            </div>
          </div>
        </div>
    </div>
   
  )
}

export default Service