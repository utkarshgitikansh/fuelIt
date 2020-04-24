import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "../src/containers/Home.js";
import { About } from "./containers/About";
import { Features } from "./containers/Features";
import { Contact } from "./containers/Contact";
import Location from "./containers/Location";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/features" component={Features} />
        <Route path="/location" component={Location} />
        <Route path="/contact" component={Contact} />
      </Router>
    </React.Fragment>
  );
}

export default App;
