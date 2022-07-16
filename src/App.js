import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './component/Banner/Banner';
import About from './component/About/About';
import Contact from './component/Contact/contact';
import Service from './component/Service/Service';
import Arrive from './component/Arrive/Arrive';
import Work from './component/Work/work';
import Ongoing from './component/Ongoing/Ongoing';
import Getin from './component/Getin/Getin';
import Testimonial from './component/Testimonial/Testimonial';
import Footer from './component/Footer/Footer';
import Client from './component/Client/Client';
function App() {
  return (
    <div>
      <Router>
          <Banner/>
          <About/>
          <Arrive/>          
          <Service/>
          <Contact/>
          <Work/>         
          <Getin/>
          <Testimonial/>
          <Ongoing/>
          <Client/>
          <Footer/>
          <Routes>
            {/* <Route path ="/" element ={<Landing/>} />
            <Route exact path="/carousal"  element={<Carousel/>}/> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
