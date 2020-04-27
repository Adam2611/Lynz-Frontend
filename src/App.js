import React from "react";
/*import "bootstrap/dist/css/bootstrap.min.css"; */
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavbarComp from "./components/NavbarComp.component";
import Homepage from "./components/Homepage.component";
import Viewpage from "./components/Viewpage.component";
import Submitpage from "./components/Submitpage.component";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <NavbarComp />
        <Route path="/Lynz-Frontend" exact component={Homepage} />
        <Route path="/Lynz-Frontend/busyness" exact component={Viewpage} />
        <Route path="/Lynz-Frontend/submit" exact component={Submitpage} />
      </div>
    </Router>
  );
}
export default App;
