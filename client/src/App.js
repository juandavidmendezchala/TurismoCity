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
import Activities from "./components/Activities/Activities";
import Suppliers from "./components/Suppliers/Suppliers";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Banner} />
      {/* <Route path="/" component={Navbar}></Route> */}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route path="/flights" component={Search}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/Actividades" component={Activities}></Route>
      <Route path="/suppliers/load" component={Suppliers} />
    </div>
  );
}

export default App;
