import { Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Landing}></Route>
    </div>
  );
}

export default App;
