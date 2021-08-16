import { Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./components/Landing/Landing";
import Navbar from "./components/NavBar/Navbar";
import FlightCard from "./components/FlightCard/FlightCard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
import UserNav from "./components/UserNav/UserNav.jsx";
import LandingExperiences from "./components/LandingExperiences/LandingExperiences";
import FavoritesActivities from "./components/FavoritesActivities/FavoritesActivities";
import React, { useState } from "react";
import Nuevo from './components/nuevo/nuevo'
import FeedBack from "./components/Feedback/FeedBack";
import Politics from "./components/Politics/Politics";
import Actities from "./components/Activities/Activities";
import Suppliers from "./components/Suppliers/Suppliers";
import ActivityDetail from "./components/ActivityDetail/ActivityDetail";
import { ContainerUserAct } from "./components/Suppliers/containerUserAct/ContainerUserAct";
import FormActivities from "./components/FormActivities/FormActivities";
import NavBarSupplierUser from "./components/UserNav/NavBarSupplierUser.jsx"
import MyActivities from "./components/MyActivities/MyActivities";
import ActivitiesPrev from "./components/ActivitiesPrev/ActivitiesPrev";



function App() {
  const [sidebar, setSidebar] = useState(true)
  function showSidebar(){
    setSidebar(!sidebar)
  }

  return (
    <div className="App">
      <Route exact path="/experiences" component={LandingExperiences} />
      <Route path="/" component={Banner} />
      <Route exact path="/nuevo" component={Nuevo}></Route>
      <Route exact path="/FeedBack/:id" component={FeedBack}></Route>
      {/* <Route path="/" component={Navbar}></Route> */}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route path="/flights" component={Search}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/yourActivities" render={()=><NavBarSupplierUser showSidebar={showSidebar} sidebar={sidebar}/>}></Route> 
      <Route exact path="/yourActivities/favorites" render={()=> <FavoritesActivities sidebar={sidebar}/>}></Route>
      <Route exact path="/yourActivities/activities" render={()=> <MyActivities sidebar={sidebar}/>}></Route>
      <Route exact path="/yourActivities/activities/next" component={ActivitiesPrev} ></Route>
      <Route path="/politics" component={Politics} ></Route>
      <Route path="/activities" component={Actities}></Route>
      <Route path="/suppliers" component={Suppliers} />
      <Route path="/activity/:id" component={ActivityDetail}></Route>
      <Route path="/suppliers/posts" component={ContainerUserAct} />
      <Route path="/suppliers/load" component={FormActivities} />
      
    </div>

  );
}

export default App;
