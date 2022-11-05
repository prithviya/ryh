import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Banner from './component/Banner/Banner';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Page/home';
import SEO from './Page/seoservices';

function App() 
{
  return (
    <div> 
       <Router>
          <Header/>
          <Banner/>
          <Routes>
            <Route path ="/" element ={<Home/>} />
            <Route path="/seoservices" element={<SEO/>}/>
          </Routes>

      {/* <div id="home">
        <Header/>
      </div> */}
      {/* <div id="">
        <Banner/>
      </div> */}
      {/* <div>

      </div>
      <div id=""> */}
        <Footer/>
      {/* </div>  */}
          {/* <Service/> */}
          </Router>
             
    </div>
  );
}

export default App;
