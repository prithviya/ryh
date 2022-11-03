import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './component/Banner/Banner';
import About from './component/About/About';
import Contact from './component/Contact/contact';
// import Service from './component/Service/Service';
import Arrive from './component/Arrive/Arrive';
import Work from './component/Work/work';
import Ongoing from './component/Ongoing/Ongoing';
import Getin from './component/Getin/Getin';
import Testimonial from './component/Testimonial/Testimonial';
import Footer from './component/Footer/Footer';
import Client from './component/Client/Client';
import Header from './component/Header/Header';
import Team from './component/Team/Team';

function App() 
{
  return (
    <div>  
      <div id="home">
        <Header/>
      </div>
      <div id="">
        <Banner/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="">
        <Arrive/> 
      </div>
      <div id="service">
        <Work/>  
      </div>
      <div id="team">
        <Team/> 
      </div>
      <div id="testimonial">
        <Testimonial/>
      </div>
      <div id="about">
        <Contact/>
      </div>
      <div id="client">
        <Client/>
      </div>
      <div id="project">
        <Ongoing/>
      </div>
      <div id="contact">
        <Getin/> 
      </div>
      <div id="">
        <Footer/>
      </div> 
          {/* <Service/> */}
             
    </div>
  );
}

export default App;
