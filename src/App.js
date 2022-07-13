import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbartop from './components/Navbartop';
import Landing from "./components/Landing";

function App() 
{
  return (
    <div>
      <Router>
          <Navbartop/>
          <Routes>
            <Route path ="/" element ={<Landing/>} /> 
          </Routes>
      </Router>
    </div>
  );
}

export default App;
