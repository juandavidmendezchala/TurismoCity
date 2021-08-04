import { Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./components/Landing/Landing";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Banner} />
      {/* /<Route path="/" component={Navbar}></Route> */}
      <Route exact path="/" component={Home}></Route>
    </div>
  );
}

export default App;
