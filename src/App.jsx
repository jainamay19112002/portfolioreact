import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Portfolio</h1>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">About Me</NavLink></li>
            <li><NavLink to="/contact">Skills </NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={AboutMe}/>
            <Route path="/contact" component={Skills}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default App;