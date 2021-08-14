import { Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./components/Landing/Landing";
import Navbar from "./components/NavBar/Navbar";
import FlightCard from "./components/FlightCard/FlightCard";
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
import UserNav from "./components/UserNav/UserNav.jsx";
import LandingExperiences from "./components/LandingExperiences/LandingExperiences";
import NavBarSupplier from "./components/UserNav/NavBarSupplier";
import FavoritesActivities from "./components/FavoritesActivities/FavoritesActivities";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(true)
  function showSidebar(){
    setSidebar(!sidebar)
  }

  return (
    <div className="App">
      <Route exact path="/experiences" component={LandingExperiences} />
      <Route path="/" component={Banner} />
      {/* <Route path="/" component={Navbar}></Route> */}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route path="/flights" component={Search}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/yourActivities" render={()=><NavBarSupplier showSidebar={showSidebar} sidebar={sidebar}/>}></Route>
      <Route exact path="/yourActivities/favorites" render={()=> <FavoritesActivities sidebar={sidebar}/>}></Route>
      
    </div>
  );
}

export default App;
