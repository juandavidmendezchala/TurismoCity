import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import LandingExperiences from "./components/LandingExperiences/LandingExperiences";
import Home from "./components/Landing/Landing";
import Navbar from "./components/NavBar/Navbar";
import FlightCard from "./components/FlightCard/FlightCard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
import Politics from "./components/Politics/Politics";
import Actities from "./components/Activities/Activities";
import Suppliers from "./components/Suppliers/Suppliers";
import ActivityDetail from "./components/ActivityDetail/ActivityDetail";
import { ContainerUserAct } from "./components/Suppliers/containerUserAct/ContainerUserAct";
import FormActivities from "./components/FormActivities/FormActivities";
import { DetailPostSupplier } from "./components/Suppliers/detail post supplier/DetailPostSupplier";
import ImageActivity from "./components/FormActivities/ImageActivity";
import NavBarSupplierUser from "./components/UserNav/NavBarSupplierUser.jsx";
import FavoritesActivities from "./components/FavoritesActivities/FavoritesActivities";
import FeedBack from "./components/Feedback/FeedBack";
import Checkout from "./components/Checkout/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./App.css";
import MyActivities from "./components/MyActivities/MyActivities";
import ActivitiesPrev from "./components/ActivitiesPrev/ActivitiesPrev";
import NavBarUserAdmin from "./components/NavBarUserAdmin/NavBarUserAdmin";
import { ContainerUserAdmin } from "./components/ConteinerUserAdmin/ConteinerUserAdmin";
import { ContainerActivity } from "./components/ConteinerActivity/ConteinerActivity";
import ContactUs from "./components/ContactUs/ContactUs";
import DetailSched from "./components/Scheduler/DetailSched";
import Comment from "./components/Comment/Comment";
import Scheduler from "./components/Scheduler/Scheduler";
import ListSchedulers from "./components/Scheduler/ListShedulers";
import EmailSender from "./components/EmailSender/EmailSender";
import Whishes from "./components/Whishes/Whishes";
import ListActivWish from "./components/Whishes/ListActivWish";
import Footer from "./components/Footer/Footer"




import Sales from "./components/Suppliers/Sales/Sales";
import HomeAdminPanel from "./components/Suppliers/HomeAdminPanel/HomeAdminPanel";
import CarouselNews from "./components/Carousel/CarouselNews";
import CarouselAdminPost from "./components/CarouselAdminPost/CarouselAdminPost";
import newsletter from "./components/Newsletter/Newsletter";
import Nosotrxs from "./components/Nosotrxs/Nosotrxs";

function App() {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  const stripePromise = loadStripe(
    "pk_test_51JOlrrFTiOvO1nWfhoO6y7uUxBwyiNwSAiHzKnrM5rkCquiTpFYK9wamrKPMw8CfF5M0BBju63peRYQjBXNwiqJE00Aah2leya"
  );

  return (
    <div className="App">
      <Route exact path="/experiences" component={LandingExperiences} />
      <Route path="/" component={Banner} />

      {/* <Route exact path="/nuevo" component={Nuevo}></Route> */}
      <Route exact path="/FeedBack/:id" component={FeedBack}></Route>
      {/* <Route path="/" component={Navbar}></Route> */}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route path="/flights" component={Search}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/email" component={ContactUs}></Route>
      <Route path="/yourActivities" render={() => <NavBarSupplierUser showSidebar={showSidebar} sidebar={sidebar} />}></Route>
      <Route path="/admin" render={() => <NavBarUserAdmin showSidebar={showSidebar} sidebar={sidebar} />}></Route>
      <Route path="/admin/userList" render={() => <ContainerUserAdmin sidebar={sidebar} />} />
      <Route path="/admin/activityList" render={() => <ContainerActivity sidebar={sidebar} />} />
      <Route exact path="/yourActivities/favorites" render={() => <FavoritesActivities sidebar={sidebar} />}></Route>
      <Route exact path="/yourActivities/activities" render={() => <MyActivities sidebar={sidebar} />}></Route>
      <Route exact path="/yourActivities/activities/next" component={ActivitiesPrev} ></Route>
      <Route exact path="/comment" component={Comment} ></Route>
      <Route path="/politics" component={Politics} ></Route>
      <Route path="/activities" component={Actities}></Route>
      <Route path="/suppliers" render={() => <Suppliers sidebar={sidebar} showSidebar={showSidebar} />} />
      <Route path="/activity/:id" component={ActivityDetail}></Route>
      <Route path="/scheduler"><Scheduler /></Route>
      <Route path="/scheduler"><ListSchedulers /></Route>
      <Route path="/emailsend"><EmailSender /></Route>
      <Route path="/yourActivities/whishes"><Whishes /></Route>
      <Route path="/yourActivities/whishes"><ListActivWish /></Route>
<Route path="/newscarousel" component={CarouselNews} />
      <Elements stripe={stripePromise}>
        <Route path="/checkout" component={Checkout}></Route>
      </Elements>

      <Route path="/suppliers/posts" render={() => <ContainerUserAct sidebar={sidebar} />} />
      <Route path="/suppliers/info" render={() => <HomeAdminPanel sidebar={sidebar} />} />
      <Route path="/suppliers/load" component={FormActivities} />
      <Route path="/suppliers/sales" render={() => <Sales sidebar={sidebar} showSidebar={showSidebar} />} />
      <Route path="/suppliers/post/:id" render={({ match }) => <DetailPostSupplier match={match} sidebar={sidebar} showSidebar={showSidebar} />} />
      <Route path="/suppliers/image" component={ImageActivity} />
      <Route path="/admin/post" component={CarouselAdminPost} />
      <Route path="/nosotrxs" component={Nosotrxs} />
    </div>
  );
}

export default App;
