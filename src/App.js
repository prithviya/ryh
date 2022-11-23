import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Page/home';
import SEO from './Page/seoservices';
import ErrorPage from './Page/error';
import Aboutus from './Page/aboutus';

function App() 
{
  return (
    <div> 
       <Router>
          <Header/>
          <Routes>
            <Route path ="/" element ={<Home/>} />
            <Route path="/seoservices" element={<SEO/>}/>
            <Route path="/error" element={<ErrorPage/>}/>
            <Route path="/about" element={<Aboutus/>}/>
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
