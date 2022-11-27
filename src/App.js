// import logo from './logo.svg';
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbars } from "./components/Navbar";
import { Home } from "./components/Home";
import Login from "./components/Login";
import {Details} from "./components/Details";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
   
      <div className="App">
      {/* <h1>Helloo22222222233</h1> <br /> */}
      <Navbars/>
      <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/Details" element={<Details/>}/>
</Routes>

      </div>
  
  );
}

export default App;
