import { Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./components/Landing/Landing";
import Navbar from "./components/NavBar/Navbar";
import FlightCard from "./components/FlightCard/FlightCard";
import Login from "./components/Login/Login"

function App() {
  return (
    <div className="App">
      <Route path="/" component={Banner} />
      {/* /<Route path="/" component={Navbar}></Route> */}
      <Route exact path="/" component={Home}></Route>
      <Route path="/flights" component={FlightCard}></Route>
      <Route path='/usuarios' component={Login}></Route> 
    </div>
  );
}

export default App;
